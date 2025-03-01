import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import globalStyles from "../styles/globalStyles";

export default function Search() {
  const router = useRouter();

  return (
    <View style={globalStyles.container}>
      {/* Search Bar */}
      <TextInput 
        style={globalStyles.input} 
        placeholder="Enter address or restaurant name" 
      />

      <Text style={globalStyles.title}>Nearby Restaurants</Text>

      {/* Example Restaurant List */}
      <TouchableOpacity 
        style={globalStyles.block} 
        onPress={() => router.push("/screens/restaurants")}
      >
        <Text style={globalStyles.blockText}>View Restaurants</Text>
      </TouchableOpacity>
    </View>
  );
}

