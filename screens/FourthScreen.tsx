import { StyleSheet, SafeAreaView } from "react-native";

import { Text, View } from "../components/Themed";

export default function FourthScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>FourthScreen</Text>
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
