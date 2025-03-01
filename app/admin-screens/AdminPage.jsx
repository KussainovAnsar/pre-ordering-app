import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { globalStyles } from "../styles/globalStyles";  

export default function AdminPage() {
  const router = useRouter();

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Admin Dashboard</Text>

      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => router.push("/admin-screens/RestaurantManagement")}
      >
        <Text style={globalStyles.buttonText}>Restaurant Management</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => router.push("/admin-screens/OrderManagement")}
      >
        <Text style={globalStyles.buttonText}>Order Management</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => router.push("/admin-screens/MenuManagement")}
      >
        <Text style={globalStyles.buttonText}>Menu Management</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => router.push("/admin-screens/AccountSettings")}
      >
        <Text style={globalStyles.buttonText}>Account Settings</Text>
      </TouchableOpacity>
    </View>
  );
}
