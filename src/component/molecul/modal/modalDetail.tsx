import React from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import { Chip } from "react-native-paper";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/AntDesign";
import dayjs from "dayjs";

import { COLORS, TYPHOGRAPHY, API } from "../../../config";
import { RFPercentage } from "../../../utils";

interface Props {
  isVisible: boolean;
  onBackdropPress?: () => void;
  item?: any;
  isLoading?: boolean;
}

const ModalDetail = ({
  isVisible,
  onBackdropPress,
  item,
  isLoading,
}: Props) => {
  const Genres = ({ data }: { data: any[] }) => (
    <View style={styles.row}>
      {data.map((i: any, index: number) => (
        <Chip style={{ marginRight: 5, marginTop: 10 }} key={index}>
          {i?.name}
        </Chip>
      ))}
    </View>
  );

  return (
    <Modal
      isVisible={isVisible}
      animationIn="slideInUp"
      animationInTiming={500}
      animationOutTiming={500}
      useNativeDriver={true}
      onBackdropPress={onBackdropPress}
      onBackButtonPress={onBackdropPress}
      animationOut="slideOutDown"
      style={{
        justifyContent: "flex-end",
        margin: 0,
      }}>
      <View style={styles.containerModal}>
        {isLoading ? (
          <View>
            <ActivityIndicator size={"large"} color={COLORS.yellow} />
          </View>
        ) : (
          <>
            <View style={{ flexDirection: "row" }}>
              <View>
                <Image
                  style={styles.imageProfile}
                  source={{
                    uri: `${API.IMAGE_URL}${item?.poster_path}`,
                  }}
                  resizeMode="stretch"
                />
              </View>
              <View style={{ marginLeft: 15 }}>
                <Text
                  style={{
                    ...TYPHOGRAPHY.semiLargeSofia,
                    color: COLORS.white,
                    flexWrap: "wrap",
                    width: 250,
                  }}>
                  {item?.title}
                </Text>

                <Text
                  style={{
                    ...TYPHOGRAPHY.lightSofia,
                    color: COLORS.white,
                  }}>
                  {`Release Date: ${dayjs(item?.release_date).format(
                    "d MMMM YYYY",
                  )}`}
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10,
                  }}>
                  <Icon
                    name="star"
                    size={RFPercentage(4)}
                    color={COLORS.yellow}
                  />
                  <Text
                    style={{
                      ...TYPHOGRAPHY.lightSofia,
                      color: COLORS.white,
                      marginLeft: 10,
                    }}>
                    {item?.vote_average}
                  </Text>
                </View>

                <View>
                  <Genres data={item?.genres} />
                </View>
              </View>
            </View>

            <View style={{ marginVertical: 10 }}>
              <Text
                style={{
                  ...TYPHOGRAPHY.semiLargeBoldSofia,
                  color: COLORS.white,
                }}>
                Overview
              </Text>
              <Text
                style={{
                  ...TYPHOGRAPHY.regularSofia,
                  color: COLORS.white,
                }}>
                {item?.overview}
              </Text>
            </View>
          </>
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  containerModal: {
    backgroundColor: COLORS.blackLight,
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
    padding: 10,
    paddingVertical: 20,
  },
  imageProfile: {
    width: 120,
    height: 150,
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    width: 250,
  },
});

export default ModalDetail;
