import { View, Text, StyleSheet, ScrollView } from "react-native";
import globalStyles from "../styles/globalStyles";

export default function Discount() {
  return (
    <ScrollView contentContainerStyle={globalStyles.container}>
      <Text style={globalStyles.title}>Discounts</Text>
      <View style={styles.discountBlock}>
        <Text style={styles.discountText}>something!</Text>
      </View>
      <View style={styles.discountBlock}>
        <Text style={styles.discountText}>Buy 1 Get 1 Free at Restaurant XYZ</Text>
      </View>
      <View style={styles.discountBlock}>
        <Text style={styles.discountText}>Also something!</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  discountBlock: {
    backgroundColor: "#FF5733",
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
  },
  discountText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});
