import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { globalStyles } from "../styles/globalStyles";  

export default function RestaurantManagement() {
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantAddress, setRestaurantAddress] = useState("");
  const [restaurantSeats, setRestaurantSeats] = useState("");

  const handleUpdateRestaurant = () => {
    // Handle restaurant update logic
    console.log("Restaurant Details Updated", { restaurantName, restaurantAddress, restaurantSeats });
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Restaurant Management</Text>

      <TextInput
        style={globalStyles.input}
        placeholder="Restaurant Name"
        value={restaurantName}
        onChangeText={setRestaurantName}
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Restaurant Address"
        value={restaurantAddress}
        onChangeText={setRestaurantAddress}
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Seats"
        value={restaurantSeats}
        onChangeText={setRestaurantSeats}
        keyboardType="numeric"
      />

      <Button title="Update Restaurant" onPress={handleUpdateRestaurant} />
    </View>
  );
}
