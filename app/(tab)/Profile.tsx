import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import CustomCard from "../../components/CustomCard";
const Profile = () => {
  return (
    <ScrollView>
      <View style={{ alignItems: "center" }}>
        <View style={{ width: "100%", height: 100 }}></View>
        <View
          style={{
            width: "94%",
            backgroundColor: "#FFFFFF",
            borderWidth: 1,
            borderColor: "#838385",
            borderRadius: 10,
            paddingHorizontal: 10,
            paddingBottom: 15,
            marginBottom: 15,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                marginTop: -60,
                width: 100,
                height: 100,
                borderRadius: 50,
                backgroundColor: "#E9F9FF",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={require("../../assets/images/ProfilePic.png")} />
            </View>
            <Text
              style={{
                fontSize: 14,
                paddingHorizontal: 15,
                backgroundColor: "#94C1FB",
                borderRadius: 20,
                marginVertical: 5,
              }}
            >
              Add Your Name
            </Text>
            <Text
              style={{
                fontSize: 14,
                paddingHorizontal: 10,
                marginVertical: 5,
              }}
            >
              +91 1234567890
            </Text>
          </View>
          <View
            style={{
              marginTop: 5,
              marginBottom: 10,
              borderWidth: 0.5,
              borderColor: "#BDBEBF",
              borderRadius: 10,
              justifyContent: "space-between",
              padding: 10,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: "70%",
                padding: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "600",
                }}
              >
                Create your ABHA Number
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "300",
                }}
              >
                Keep all your health records in one place ➜
                {/* <Text style={{}}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "red",
                    }}
                  >
                    <Image
                      style={{}}
                      source={require("../../assets/images/ArrowText.png")}
                    />
                  </TouchableOpacity>
                </Text> */}
              </Text>
            </View>
            <View style={{ width: "30%" }}>
              <Image
                source={require("../../assets/images/CreditCardImage.png")}
              />
            </View>
          </View>
          <CustomCard
            image={require("../../assets/images/MyProfileIcon.png")}
            name={"My Profile"}
            about={"Name, Date of Birth, City"}
          />
          <CustomCard
            image={require("../../assets/images/ActivityIcon.png")}
            name={"Sync my health data"}
            about={"Track all of your activity"}
          />
          <CustomCard
            image={require("../../assets/images/ShareIcon.png")}
            name={"Share App"}
            about={"Share here app with your friend & fimaly"}
          />
          <CustomCard
            image={require("../../assets/images/ReadIcon.png")}
            name={"Terms & Conditions"}
            about={"read Terms & Conditions of Here"}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
