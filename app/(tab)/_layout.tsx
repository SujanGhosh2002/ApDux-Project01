import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopWidth: 0,
          paddingBottom: 5,
          height: 80,
        },
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: {
          fontWeight: "bold",
          paddingBottom: 6,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }: any) => (
            <Image
              style={{ tintColor: focused ? "black" : "gray" }}
              source={require("../../assets/images/HomeIcon.png")}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Discover"
        options={{
          title: "Discover",
          tabBarIcon: ({ focused }: any) => (
            <Image
              style={{ tintColor: focused ? "black" : "gray" }}
              source={require("../../assets/images/DiscoverIcon.png")}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="My_Policy"
        options={{
          title: "My Policy",
          tabBarIcon: ({ focused }: any) => (
            <Image
              style={{ tintColor: focused ? "black" : "gray" }}
              source={require("../../assets/images/PolicyIcon.png")}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }: any) => (
            <Image
              style={{ tintColor: focused ? "black" : "gray" }}
              source={require("../../assets/images/ProfileIcon.png")}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
