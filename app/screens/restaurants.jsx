import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import globalStyles from "../styles/globalStyles"; 

export default function Restaurants() {
  const router = useRouter();

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Available Restaurants</Text>

      <TouchableOpacity 
        style={globalStyles.block} 
        onPress={() => router.push("/screens/home")}
      >
        <Text style={globalStyles.blockText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}
