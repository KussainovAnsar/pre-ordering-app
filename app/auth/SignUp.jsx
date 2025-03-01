import { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import globalStyles from "../styles/globalStyles";

export default function SignUp() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateForm = () => {
    const errors = [];
    if (!formData.name.trim()) errors.push("Full name is required.");
    if (!formData.email.trim()) errors.push("Email is required.");
    if (!formData.password.trim()) errors.push("Password is required.");
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.push("Invalid email format.");
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(formData.password)) {
      errors.push("Password must be at least 8 characters with 1 uppercase, 1 lowercase, and 1 digit.");
    }
    if (formData.password !== formData.confirmPassword) errors.push("Passwords do not match!");
    if (errors.length > 0) {
      Alert.alert("Validation Error", errors.join("\n"));
      return false;
    }
    return true;
  };

  const handleSignUp = () => {
    if (!validateForm()) return;

    console.log("User Sign Up:", formData);
    router.replace("/auth/SignIn");
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>User Registration</Text>

      <TextInput
        style={globalStyles.input}
        placeholder="Full Name"
        value={formData.name}
        onChangeText={(text) => setFormData({ ...formData, name: text })}
      />

      <TextInput
        style={globalStyles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={formData.email}
        onChangeText={(text) => setFormData({ ...formData, email: text })}
      />

      <TextInput
        style={globalStyles.input}
        placeholder="Password"
        secureTextEntry
        value={formData.password}
        onChangeText={(text) => setFormData({ ...formData, password: text })}
      />

      <TextInput
        style={globalStyles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={formData.confirmPassword}
        onChangeText={(text) => setFormData({ ...formData, confirmPassword: text })}
      />

      <Button title="Register" onPress={handleSignUp} />

      <TouchableOpacity onPress={() => router.push("/auth/SignIn")}>
        <Text style={globalStyles.switchText}>
          Already have an account? Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
}
