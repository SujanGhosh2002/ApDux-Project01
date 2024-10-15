import { View, Text, Dimensions } from "react-native";
import React from "react";
import CustomCard from "../../components/CustomCard";
import GestureHandlerSlider from "../../components/GestureHandlerSlider";
import PolicyCard from "../../components/PolicyCard";
import Card from "@/components/Card";

const { width: screenWidth } = Dimensions.get("window");
const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <GestureHandlerSlider />
      <View
        style={{
          width: "100%",
          paddingHorizontal: 20,
          backgroundColor: "#FFFFFF",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      >
        <View
          style={{
            width: 60,
            height: 4,
            backgroundColor: "#646567",
            borderRadius: 2,
            alignSelf: "center",
            marginTop: 15,
            marginBottom: 40,
          }}
        ></View>
        <Text
          style={{
            fontSize: 14,
            color: "#000000",
            fontWeight: "500",
            marginBottom: 10,
          }}
        >
          Needs Your Attention
        </Text>
        <Card
          image={require("../../assets/images/FullProfileImage.png")}
          name={"Volunteer Profile Unlocked"}
          about={"Start Sharing your Experience"}
        />
        <PolicyCard />
      </View>
    </View>
  );
};

export default Home;
