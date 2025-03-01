import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { globalStyles } from "../styles/globalStyles";  

export default function MenuManagement() {
  const [menuItem, setMenuItem] = useState("");
  const [menuPrice, setMenuPrice] = useState("");

  const handleAddMenuItem = () => {
    console.log("Adding Menu Item:", { menuItem, menuPrice });
    // Handle API call to add menu item
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Menu Management</Text>

      <TextInput
        style={globalStyles.input}
        placeholder="Menu Item Name"
        value={menuItem}
        onChangeText={setMenuItem}
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Menu Item Price"
        value={menuPrice}
        onChangeText={setMenuPrice}
        keyboardType="numeric"
      />

      <Button title="Add Menu Item" onPress={handleAddMenuItem} />
    </View>
  );
}
