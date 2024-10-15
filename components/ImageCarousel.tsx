import React, { useState, useEffect } from "react";
import { View, Dimensions, Image, StyleSheet } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import Animated, { Extrapolate, interpolate } from "react-native-reanimated";

const { width: screenWidth } = Dimensions.get("window");

const images = [
  { image: require("../assets/images/CarouselImage1.png") },
  { image: require("../assets/images/CarouselImage1.png") },
  { image: require("../assets/images/CarouselImage1.png") },
  { image: require("../assets/images/CarouselImage1.png") },
  { image: require("../assets/images/CarouselImage1.png") },
];

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const nextIndex = (activeIndex + 1) % images.length;
  //     setActiveIndex(nextIndex);
  //   }, 3000); // 3 seconds interval

  //   return () => clearInterval(interval);
  // }, [activeIndex]);
  const Pagination = ({ currentIndex }) => {
    return (
      <View style={styles.paginationContainer}>
        {images.map((_, index) => {
          return (
            <View
              key={index}
              style={[
                styles.dot,
                currentIndex === index ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          );
        })}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Carousel
        width={screenWidth}
        height={screenWidth * 0.8}
        data={images}
        autoPlay
        autoPlayInterval={3000}
        pagingEnabled={true}
        scrollEnabled={true}
        onSnapToItem={(index) => setActiveIndex(index)}
        renderItem={({ item, index }) => (
          <View style={styles.slide}>
            <Image source={item.image} style={styles.image} />
          </View>
        )}
      />
      <View
        style={{
          flexDirection: "row",
          position: "relative",
          left: 10,
          top: 10,
        }}
      >
        {/* Render pagination dots */}
        <Pagination currentIndex={activeIndex} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  slide: {
    width: screenWidth,
    height: screenWidth * 0.8,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  paginationContainer: {
    flexDirection: "row",
    marginVertical: 10,
    top: screenWidth * 0.6,
    left: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
  },
  activeDot: {
    backgroundColor: "#ffffff",
  },
  inactiveDot: {
    backgroundColor: "gray",
  },
});

export default ImageCarousel;
