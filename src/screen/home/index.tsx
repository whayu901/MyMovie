import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { Reducers } from "../../redux/types";
import { getListMovieHome, getDetailMovie } from "../../redux/actions";
import { ImageCarousel } from "../../component/atom";
import { ModalDetail } from "../../component/molecul";
import { TYPHOGRAPHY, COLORS, API } from "../../config";

const Home = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const movieState = useSelector((state: Reducers) => state.movie);
  const [isModalDetail, setModalDetail] = React.useState<boolean>(false);

  React.useEffect(() => {
    _getListMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _getDetailMovie = React.useCallback(
    (value: number) => {
      setModalDetail(true);
      dispatch<any>(getDetailMovie({ id: value }));
    },
    [dispatch],
  );

  const _getListMovie = React.useCallback(() => {
    if (movieState.listMovieHome.data.length === 0) {
      dispatch<any>(getListMovieHome());
    }
  }, [dispatch, movieState.listMovieHome.data]);

  const _renderItem = React.useCallback(
    ({ item }: { item: any }) => (
      <View style={{ marginHorizontal: 10 }}>
        <ImageCarousel
          width={250}
          height={270}
          onPress={() => {
            _getDetailMovie(item?.id);
          }}
          text={item?.original_title}
          shadowColor="#051934"
          source={`${API.IMAGE_URL}${item?.poster_path}`}
        />
      </View>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const _renderFooter = (value: any, title: string) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Detail", { type: value, title })}
      style={{ width: 200, height: 250, justifyContent: "center" }}>
      <Text
        style={{
          textAlign: "center",
          ...TYPHOGRAPHY.regularBoldSofia,
          color: COLORS.white,
          textDecorationLine: "underline",
        }}>
        Lihat Semua
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.blackLight }}>
      {movieState?.listMovieHome?.isLoading ? (
        <View style={{ marginTop: 20 }}>
          <ActivityIndicator size={"large"} color={COLORS.yellow} />
        </View>
      ) : (
        <ScrollView>
          {movieState.listMovieHome.data.map((item: any, key: number) => (
            <View key={key} style={{ marginHorizontal: 10 }}>
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                  marginVertical: 20,
                }}>
                <Text
                  style={{
                    ...TYPHOGRAPHY.semiLargeBoldSofia,
                    color: COLORS.white,
                  }}>
                  {`${item?.name} Film`}
                </Text>
              </View>
              <FlatList
                testID="flatlist-home"
                nestedScrollEnabled
                data={item?.results?.slice(0, 4)}
                horizontal
                maxToRenderPerBatch={4}
                keyExtractor={(_, index) => String(index)}
                renderItem={_renderItem}
                ListFooterComponent={_renderFooter(item?.id, item?.name)}
              />
            </View>
          ))}
        </ScrollView>
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

export default Home;
