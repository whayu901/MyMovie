import React from "react";
import {
  View,
  UIManager,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  Platform,
} from "react-native";
import { Searchbar, Text } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

import { Reducers } from "../../redux/types";
import { searchMovie, getDetailMovie } from "../../redux/actions";
import { ImageCarousel } from "../../component/atom";
import { ModalDetail } from "../../component/molecul";
import { TYPHOGRAPHY, COLORS, API } from "../../config";
import { useDebouncer, useHandleScroll } from "../../hook";

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const Search = () => {
  const dispatch = useDispatch();
  const movieState = useSelector((state: Reducers) => state.movie);
  const { handleScroll, show } = useHandleScroll();

  const [query, setQuery] = React.useState<string>("");
  const [isModalDetail, setModalDetail] = React.useState<boolean>(false);

  const debouncedSearchTerm = useDebouncer(query, 500);

  React.useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch<any>(searchMovie({ query: debouncedSearchTerm }));
    }
  }, [debouncedSearchTerm, dispatch]);

  const _getDetailMovie = React.useCallback(
    (value: number) => {
      setModalDetail(true);
      dispatch<any>(getDetailMovie({ id: value }));
    },
    [dispatch],
  );

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

  const _emptyList = () => (
    <View>
      <Text
        style={{
          ...TYPHOGRAPHY.regularBoldSofia,
          color: COLORS.white,
          textAlign: "center",
        }}>
        {query === ""
          ? "Please Search Your Favorite Movie"
          : `Data Not Found For "${query}"`}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.blackLight }}>
      {show && (
        <View
          style={{
            marginTop: 10,
            marginHorizontal: 10,
            marginBottom: 20,
            zIndex: 1,
          }}>
          <Searchbar
            placeholder="Search Movie"
            value={query}
            onChangeText={(text) => setQuery(text)}
          />
        </View>
      )}

      {movieState?.listMovieDetail?.isLoading ? (
        <ActivityIndicator size={"large"} color={COLORS.yellow} />
      ) : (
        <FlatList
          testID="flatlist-search"
          bounces={false}
          data={movieState?.searchMovie?.data}
          contentContainerStyle={{ paddingTop: 10 }}
          keyExtractor={(_, index) => String(index)}
          numColumns={2}
          ListEmptyComponent={_emptyList}
          columnWrapperStyle={{ flex: 1, justifyContent: "space-around" }}
          renderItem={_renderItem}
          onScroll={handleScroll}
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

export default Search;
