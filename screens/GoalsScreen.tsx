import { StyleSheet, ScrollView, View, Text } from "react-native";

export default function GoalsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Take on individual or community goals to earn more Roinaa coins
        </Text>
        <View style={styles.cardView1}>
          <Text style={styles.paragraph}>Individual goal</Text>
          <Text style={styles.paragraphSmall}>
            How about throwing less mixed waste this week?
          </Text>
          <Text style={styles.paragraphSmall}>
            Last week you disposed 7.5kg of mixed waste, try making it under
            5.0kg this week.
          </Text>
        </View>
        <View style={styles.cardView}>
          <Text style={styles.paragraph}>Sponsored goal</Text>
          <Text style={styles.paragraphSmall}>
            Separate paper from mixed waste
          </Text>
          <Text style={styles.paragraphSmall}>
            Get a discount from your next barber shop visit by achieving this
            goal!
          </Text>
        </View>
        <View style={styles.cardView}>
          <Text style={styles.paragraph}>Community goal</Text>
          <Text style={styles.paragraphSmall}>
            Reduce your community's mixed waste by 10% this month
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    marginLeft: 10,
    paddingTop: 75,
    marginRight: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "200",
  },
  cardView1: {
    height: 150,
    flex: 1,
    width: "100%",
    backgroundColor: "#3a5060",
    borderRadius: 25,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 10,
    marginTop: 50,
  },
  cardView: {
    height: 150,
    flex: 1,
    width: "100%",
    backgroundColor: "#3a5060",
    borderRadius: 25,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  paragraph: {
    color: "#fff",
    fontWeight: "300",
    fontSize: 18,
  },
  paragraph2: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "center",
  },
  paragraphSmall: {
    fontWeight: "300",
    color: "#fff",
    fontSize: 14,
    marginTop: 10,
  },
});
