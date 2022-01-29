import { Image, Text, View, StyleSheet } from "react-native";

export default function ThirdScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/testi3.png")}
        style={styles.backgroundImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "contain", // or 'stretch'
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});
