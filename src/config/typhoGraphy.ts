import React from "react";
import { StyleSheet } from "react-native";

import { RFPercentage } from "../utils";

import FONTS from "./fonts";
import COLORS from "./color";

const typhoGraphy = StyleSheet.create({
  lightSofia: {
    fontFamily: FONTS.SofiaProRegular,
    fontSize: RFPercentage(2.5),
    color: COLORS.blackSection,
  },
  lightSofiaSection: {
    fontFamily: FONTS.SofiaProRegular,
    fontSize: RFPercentage(2.5),
    color: COLORS.blackSection,
  },
  lightSofiaBoldSection: {
    fontFamily: FONTS.SofiaProBold,
    fontSize: RFPercentage(2.5),
    color: COLORS.blackSection,
  },
  regularSofia: {
    fontFamily: FONTS.SofiaProRegular,
    fontSize: RFPercentage(2.8),
    color: COLORS.blackSection,
  },
  regularSofiaBoldSection: {
    fontFamily: FONTS.SofiaProBold,
    fontSize: RFPercentage(2.8),
    color: COLORS.blackSection,
  },
  regularBoldSofia: {
    fontFamily: FONTS.SofiaProBold,
    fontSize: RFPercentage(2.8),
    color: COLORS.blackSection,
  },
  semiLargeSofia: {
    fontFamily: FONTS.SofiaProRegular,
    fontSize: RFPercentage(3.7),
    color: COLORS.blackSection,
  },
  largeSofia: {
    fontFamily: FONTS.SofiaProRegular,
    fontSize: RFPercentage(3.9),
    color: COLORS.blackSection,
  },
  semiLargeBoldSofia: {
    fontFamily: FONTS.SofiaProBold,
    fontSize: RFPercentage(3.7),
    color: COLORS.blackSection,
  },
  largeBoldSofia: {
    fontFamily: FONTS.SofiaProBold,
    fontSize: RFPercentage(3.9),
    color: COLORS.blackSection,
  },
  semiLargeBoldSection: {
    fontFamily: FONTS.SofiaProBold,
    fontSize: RFPercentage(3.2),
    color: COLORS.blackSection,
  },
});

export default typhoGraphy;
