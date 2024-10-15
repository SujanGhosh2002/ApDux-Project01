import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Sujan Ghosh</Text>
      <Link href={"/About"}>Go to About</Link>
    </View>
  );
}
