import React from "react";
import { View, SafeAreaView, FlatList, ActivityIndicator } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import { Reducers } from "../../redux/types";
import { getMovieByType, getDetailMovie } from "../../redux/actions";
import { ImageCarousel, Loading } from "../../component/atom";
import { ModalDetail, Header } from "../../component/molecul";
import { COLORS, API } from "../../config";

const Detail = () => {
  const dispatch = useDispatch();
  const route: any = useRoute();
  const navigation = useNavigation();
  const movieState = useSelector((state: Reducers) => state.movie);

  const [isModalDetail, setModalDetail] = React.useState<boolean>(false);
  const [page, setPage] = React.useState<number>(1);

  React.useEffect(() => {
    dispatch<any>(getMovieByType({ type: route?.params?.type, page }));
  }, [dispatch, page, route?.params?.type]);

  const fetchMoreData = () => {
    if (!movieState.listMovieDetail.moreLoading) {
      setPage(page + 1);
    }
  };

  const _renderItem = React.useCallback(
    ({ item }: { item: any }) => (
      <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
        <ImageCarousel
          width={185}
          height={200}
          text={item?.original_title}
          onPress={() => {
            _getDetailMovie(item?.id);
          }}
          shadowColor="#051934"
          source={`${API.IMAGE_URL}${item?.poster_path}`}
        />
      </View>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const _getDetailMovie = React.useCallback(
    (value: number) => {
      setModalDetail(true);
      dispatch<any>(getDetailMovie({ id: value }));
    },
    [dispatch],
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.blackLight }}>
      <Header
        onPress={() => navigation.goBack()}
        title={`${route?.params?.title} Film`}
      />

      {movieState?.listMovieDetail?.isLoading ? (
        <ActivityIndicator size={"large"} color={COLORS.yellow} />
      ) : (
        <FlatList
          data={movieState?.listMovieDetail?.data}
          keyExtractor={(_, index) => String(index)}
          numColumns={2}
          columnWrapperStyle={{ flex: 1, justifyContent: "space-around" }}
          renderItem={_renderItem}
          onEndReachedThreshold={0.2}
          onEndReached={fetchMoreData}
        />
      )}

      {/* Modal Detail */}
      <ModalDetail
        isVisible={isModalDetail}
        item={movieState?.detailMovie?.data}
        isLoading={movieState?.detailMovie?.isLoading}
        onBackdropPress={() => setModalDetail(false)}
      />
    </SafeAreaView>
  );
};

export default Detail;
