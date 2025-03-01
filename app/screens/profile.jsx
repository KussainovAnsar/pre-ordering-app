import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { homeStyles } from "../styles/homeStyles";

export default function Profile() {
  const router = useRouter();

  return (
    <View style={homeStyles.container}>
      <Text style={homeStyles.title}>User Profile</Text>
      <Text style={homeStyles.blockText}>Name: John Doe</Text>
      <Text style={homeStyles.blockText}>Email: johndoe@example.com</Text>

      <Text style={homeStyles.title}>Order History</Text>
      <View style={homeStyles.block}>
        <Text style={homeStyles.blockText}>Order #1234 - Completed</Text>
      </View>

      <TouchableOpacity style={homeStyles.block} onPress={() => router.replace("/auth/SignIn")}>
        <Text style={homeStyles.blockText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
