import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import ImageCarousel from "@/components/ImageCarousel";

const { width: screenWidth } = Dimensions.get("window");
const Discover = () => {
  return (
    <View>
      <ImageCarousel />
    </View>
  );
};

export default Discover;

const styles = StyleSheet.create({});
