import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { globalStyles } from "../styles/globalStyles";  


export default function AccountSettings() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSaveSettings = () => {
    console.log("Saving Settings", { email, password });
    // Handle saving new settings, such as updating email/password
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Account Settings</Text>

      <TextInput
        style={globalStyles.input}
        placeholder="New Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={globalStyles.input}
        placeholder="New Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Save Settings" onPress={handleSaveSettings} />
    </View>
  );
}
