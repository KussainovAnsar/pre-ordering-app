import { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import globalStyles from "../styles/globalStyles";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateForm = () => {
    const errors = [];

    if (!email.trim()) errors.push("Email is required.");
    if (!/\S+@\S+\.\S+/.test(email)) errors.push("Invalid email format.");
    if (!password.trim()) errors.push("Password is required.");
    if (password.length < 8) errors.push("Password must be at least 8 characters long.");

    if (errors.length > 0) {
      Alert.alert("Validation Error", errors.join("\n"));
      return false;
    }

    return true;
  };

  const handleLogin = () => {
    if (!validateForm()) return;

    console.log("User Login:", { email, password });
    router.replace("/screens/home");
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>User Login</Text>

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

      <TouchableOpacity onPress={() => router.push("/auth/SignUp")}>
        <Text style={globalStyles.switchText}>
          Don't have an account? Register
        </Text>
      </TouchableOpacity>
    </View>
  );
}

  