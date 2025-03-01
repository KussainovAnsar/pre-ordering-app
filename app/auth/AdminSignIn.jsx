import { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import globalStyles from "../styles/globalStyles";

export default function AdminSignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email.includes("@")) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      Alert.alert("Weak Password", "Password must be at least 6 characters.");
      return;
    }

    console.log("Admin Login:", { email, password });
    router.replace("/admin-screens/AdminPage"); 
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Admin Login</Text>

      <TextInput 
        style={globalStyles.input} 
        placeholder="Email" 
        keyboardType="email-address" 
        value={email} 
        onChangeText={setEmail} 
      />
      <TextInput 
        style={globalStyles.input} 
        placeholder="Password" 
        secureTextEntry 
        value={password} 
        onChangeText={setPassword} 
      />

      <Button title="Sign In" onPress={handleLogin} />

      <TouchableOpacity onPress={() => router.push("/auth/AdminSignUp")}>
        <Text style={globalStyles.switchText}>
          Don't have an account? Register
        </Text>
      </TouchableOpacity>
    </View>
  );
}
