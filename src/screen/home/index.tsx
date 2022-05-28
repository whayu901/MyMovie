import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";

import { ImageCarousel } from "../../component/atom";
import { TYPHOGRAPHY, COLORS } from "../../config";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.blackLight }}>
      <ScrollView>
        <View>
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}>
            <Text
              style={{
                ...TYPHOGRAPHY.semiLargeBoldSofia,
                color: COLORS.white,
              }}>
              Up coming Film
            </Text>
          </View>
          <ImageCarousel
            width={250}
            height={250}
            shadowColor="#051934"
            source={
              // eslint-disable-next-line max-len
              "https://images.unsplash.com/photo-1471306224500-6d0d218be372?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            }
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}>
            <Text
              style={{
                ...TYPHOGRAPHY.semiLargeBoldSofia,
                color: COLORS.white,
              }}>
              Top rated Film
            </Text>
          </View>
          <ImageCarousel
            width={250}
            height={150}
            shadowColor="#051934"
            source={
              // eslint-disable-next-line max-len
              "https://images.unsplash.com/photo-1471306224500-6d0d218be372?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            }
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}>
            <Text
              style={{
                ...TYPHOGRAPHY.semiLargeBoldSofia,
                color: COLORS.white,
              }}>
              Popular Film
            </Text>
          </View>
          <ImageCarousel
            width={250}
            height={150}
            shadowColor="#051934"
            source={
              // eslint-disable-next-line max-len
              "https://images.unsplash.com/photo-1471306224500-6d0d218be372?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            }
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}>
            <Text
              style={{
                ...TYPHOGRAPHY.semiLargeBoldSofia,
                color: COLORS.white,
              }}>
              Now playing Film
            </Text>
          </View>
          <ImageCarousel
            width={250}
            height={150}
            shadowColor="#051934"
            source={
              // eslint-disable-next-line max-len
              "https://images.unsplash.com/photo-1471306224500-6d0d218be372?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
