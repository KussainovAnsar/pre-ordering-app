import { View, Text, StyleSheet, ScrollView } from "react-native";
import globalStyles from "../styles/globalStyles";

export default function Popular() {
  return (
    <ScrollView contentContainerStyle={globalStyles.container}>
      <Text style={globalStyles.title}>Popular Restaurants</Text>
      <View style={styles.popularBlock}>
        <Text style={styles.popularText}>Restaurant ABC - Best Pizza in Town!</Text>
      </View>
      <View style={styles.popularBlock}>
        <Text style={styles.popularText}>Restaurant XYZ - Sushi Lovers Paradise</Text>
      </View>
      <View style={styles.popularBlock}>
        <Text style={styles.popularText}>Restaurant PQR - Try our Tacos!</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  popularBlock: {
    backgroundColor: "#CECECE",
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
  },
  popularText: {
    color: "#212121",
    fontSize: 18,
    textAlign: "center",
  },
});
