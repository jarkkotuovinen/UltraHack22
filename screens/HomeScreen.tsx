import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Pressable,
} from "react-native";
import AnimateNumber from "react-native-animate-number";
import { useState, useEffect } from "react";
import Modal from "react-native-modal";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { BarChart, Grid, LineChart } from "react-native-svg-charts";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Plastics",
    bgColor: "#2F97E4",
    amount: "0.0kg",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Cardboard",
    bgColor: "#82AFA6",
    amount: "5.6",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Paper",
    bgColor: "#725F87",
    amount: "1.9",
  },
  {
    id: "5kakakoaa",
    title: "Bio",
    bgColor: "#324857",
    amount: "3.6",
  },
];

const data2 = [0.4, 0.6, 0.8];

const Item = ({ item, onPress, textColor, plasticAmount }: any) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, { backgroundColor: item.bgColor }]}
  >
    <Text style={[styles.title, textColor]}>{item.title}</Text>
    <Text style={[styles.title2, textColor]}>
      {item.title !== "Plastics" ? (
        item.amount
      ) : (
        <AnimateNumber
          value={plasticAmount}
          formatter={(val) => {
            return parseFloat(val).toFixed(1);
          }}
        />
      )}{" "}
      kg
    </Text>
  </TouchableOpacity>
);

const fill = "#2F97E4";
const data = [50, 10, 40, 95, 3, 85, 35, 53, 53, 24, 50, 20, 80];

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [visible, setVisible] = useState(false);
  const [plasticAmount, setPlasticAmount] = useState(0);
  const renderItem = ({ item }: any) => {
    return <Item item={item} plasticAmount={plasticAmount} textColor="white" />;
  };
  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 15000);
  }, []);

  const pressing = () => {
    setVisible(false);
    setPlasticAmount(5);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Modal isVisible={visible}>
        <View
          style={{
            flex: 1,
            borderRadius: 25,
            backgroundColor: "#2F97E4",
            padding: 20,
          }}
        >
          <View
            style={{
              backgroundColor: "#2F97E4",
              alignItems: "center",
              paddingTop: 100,
            }}
          >
            <Text style={{ color: "white", fontSize: 26, textAlign: "center" }}>
              Congratulations you recycled
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 26,
                textAlign: "center",
                marginTop: 20,
                marginBottom: 20,
              }}
            >
              5kg
            </Text>
            <Text style={{ color: "white", fontSize: 26, textAlign: "center" }}>
              of plastic!
            </Text>
            <Pressable
              onPress={pressing}
              style={{
                backgroundColor: "#725F87",
                borderRadius: 25,
                marginTop: 50,
                width: 100,
                padding: 20,
              }}
            >
              <Text
                style={{ color: "white", fontSize: 16, textAlign: "center" }}
              >
                OK
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <ScrollView>
        <View style={styles.cardView}>
          <Text style={styles.paragraph}>Weekly mission</Text>
          <Text style={styles.paragraphSmall}>
            How about throwing less mixed waste this week?
          </Text>
          <Text style={styles.paragraphSmall}>
            Last week you disposed 7.5kg of mixed waste, try making it under
            5.0kg this week.
          </Text>
        </View>
        <FlatList
          data={DATA}
          horizontal
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <View style={styles.cardView2}>
          <Text style={styles.paragraph2}>Trends</Text>
          <BarChart
            style={{ height: 200 }}
            data={data}
            svg={{ fill }}
            contentInset={{ top: 30, bottom: 30 }}
          >
            <Grid />
          </BarChart>
        </View>
        <View style={styles.cardView3}>
          <Text style={styles.paragraph2}>You vs national trends</Text>
          <LineChart
            style={{ height: 200 }}
            data={data}
            svg={{ stroke: "#82AFA6" }}
            contentInset={{ top: 20, bottom: 20 }}
          >
            <Grid />
          </LineChart>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "300",
  },
  title2: {
    color: "#fff",
    textAlign: "center",
    fontSize: 32,
    fontWeight: "300",
    marginTop: 15,
  },
  cardView: {
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
  cardView2: {
    flex: 1,
    width: "100%",
    backgroundColor: "#34495e",
    borderRadius: 25,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 20,
    height: 250,
    marginTop: 10,
  },
  cardView3: {
    flex: 1,
    width: "100%",
    backgroundColor: "#9b59b6",
    borderRadius: 25,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 20,
    height: 250,
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
  item: {
    padding: 20,
    width: 150,
    height: 150,
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 25,
  },
});
