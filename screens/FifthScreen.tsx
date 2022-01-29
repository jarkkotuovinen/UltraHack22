import { StyleSheet, SafeAreaView } from "react-native";

import { Text, View } from "../components/Themed";

export default function FiftScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>FiftScreen</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
      </View>
    </SafeAreaView>
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
