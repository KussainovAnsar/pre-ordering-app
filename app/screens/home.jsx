import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { homeStyles } from "../styles/homeStyles"; 

export default function Home() {
  const router = useRouter();

  return (
    <View style={homeStyles.container}>
      {/* Address Section */}
      <View style={homeStyles.addressContainer}>
        <Text style={homeStyles.addressText}>Address st., 64 house</Text>
        <TouchableOpacity>
          <Text style={homeStyles.addressEdit}>Edit</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <TextInput style={homeStyles.searchBox} placeholder="Search..." />

      {/* Main Blocks */}
      <View style={homeStyles.blocksContainer}>
        <TouchableOpacity style={homeStyles.block} onPress={() => router.push("/screens/restaurants")}>
          <Text style={homeStyles.blockText}>Pre-Order</Text>
        </TouchableOpacity>

        <TouchableOpacity style={homeStyles.block} onPress={() => router.push("/screens/discounts")}>
          <Text style={homeStyles.blockText}>Discounts</Text>
        </TouchableOpacity>

        <TouchableOpacity style={homeStyles.block} onPress={() => router.push("/screens/popular")}>
          <Text style={homeStyles.blockText}>Popular</Text>
        </TouchableOpacity>

        <TouchableOpacity style={homeStyles.block} onPress={() => router.push("/screens/search")}>
          <Text style={homeStyles.blockText}>Nearby Restaurants</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={homeStyles.bottomNav}>
        <TouchableOpacity style={homeStyles.navButton} onPress={() => router.push("/screens/home")}>
          <Text style={homeStyles.navText}>🏠 Main</Text>
        </TouchableOpacity>

        <TouchableOpacity style={homeStyles.navButton} onPress={() => router.push("/screens/search")}>
          <Text style={homeStyles.navText}>🔍 Search</Text>
        </TouchableOpacity>

        <TouchableOpacity style={homeStyles.navButton} onPress={() => router.push("/screens/cart")}>
          <Text style={homeStyles.navText}>🛒 Cart</Text>
        </TouchableOpacity>

        <TouchableOpacity style={homeStyles.navButton} onPress={() => router.push("/screens/profile")}>
          <Text style={homeStyles.navText}>👤 Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


