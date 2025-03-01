import { useState } from "react";
import { 
  View, Text, TextInput, Button, TouchableOpacity, Alert, 
  ScrollView, KeyboardAvoidingView, Platform 
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";
import globalStyles from "../styles/globalStyles";

export default function AdminSignUp() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    adminName: "",
    position: "",
    city: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    restaurantName: "",
    address: "",
    seats: "",
  });

  const validateForm = () => {
    const errors = {};
    if (!formData.adminName.trim()) errors.adminName = "Full name is required";
    if (!formData.position) errors.position = "Please select a position";
    if (!formData.city) errors.city = "Please select a city";
    if (!/^\+?\d{10,}$/.test(formData.phone)) errors.phone = "Phone number must start with + and be at least 10 digits.";
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Invalid email format";
    if (formData.password.length < 8) errors.password = "Password must be at least 8 characters";
    if (formData.password !== formData.confirmPassword) errors.confirmPassword = "Passwords do not match!";
    if (!formData.restaurantName.trim()) errors.restaurantName = "Restaurant name is required";
    if (!formData.address.trim()) errors.address = "Address is required";
    if (isNaN(formData.seats) || parseInt(formData.seats) < 1) errors.seats = "Seats must be a number greater than 0";

    return errors;
  };

  const handleSignUp = () => {
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      Alert.alert("Validation Error", Object.values(errors).join("\n"));
      return;
    }

    console.log("Admin Sign Up:", formData);
    router.replace("/auth/AdminSignIn");
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      style={{ flex: 1 }}
    >
      <ScrollView 
        contentContainerStyle={{ flexGrow: 5 }}  
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={globalStyles.container}>
          <Text style={globalStyles.title}>Admin Registration</Text>

          <TextInput
            style={globalStyles.input}
            placeholder="Full Name"
            value={formData.adminName}
            onChangeText={(text) => setFormData({ ...formData, adminName: text })}
          />

          {/* Position Selection */}
          <Picker
            selectedValue={formData.position}
            style={globalStyles.input}
            onValueChange={(value) => setFormData({ ...formData, position: value })}
          >
            <Picker.Item label="Select Position" value="" />
            <Picker.Item label="Owner" value="Owner" />
            <Picker.Item label="Admin" value="Admin" />
            <Picker.Item label="Cashier" value="Cashier" />
            <Picker.Item label="Waiter" value="Waiter" />
          </Picker>

          {/* City Selection */}
          <Picker
            selectedValue={formData.city}
            style={globalStyles.input}
            onValueChange={(value) => setFormData({ ...formData, city: value })}
          >
            <Picker.Item label="Select City" value="" />
            <Picker.Item label="Almaty" value="Almaty" />
            <Picker.Item label="Astana" value="Astana" />
            <Picker.Item label="Shymkent" value="Shymkent" />
            <Picker.Item label="Karaganda" value="Karaganda" />
            <Picker.Item label="Aktobe" value="Aktobe" />
            <Picker.Item label="Taraz" value="Taraz" />
            <Picker.Item label="Pavlodar" value="Pavlodar" />
            <Picker.Item label="Ust-Kamenogorsk" value="Ust-Kamenogorsk" />
            <Picker.Item label="Semey" value="Semey" />
            <Picker.Item label="Uralsk" value="Uralsk" />
            <Picker.Item label="Kostanay" value="Kostanay" />
            <Picker.Item label="Kyzylorda" value="Kyzylorda" />
            <Picker.Item label="Atyrau" value="Atyrau" />
            <Picker.Item label="Petropavlovsk" value="Petropavlovsk" />
            <Picker.Item label="Aktau" value="Aktau" />
            <Picker.Item label="Temirtau" value="Temirtau" />
            <Picker.Item label="Turkestan" value="Turkestan" />
            <Picker.Item label="Kokshetau" value="Kokshetau" />
            <Picker.Item label="Taldykorgan" value="Taldykorgan" />
            <Picker.Item label="Ekibastuz" value="Ekibastuz" />
            <Picker.Item label="Rudny" value="Rudny" />
            <Picker.Item label="Zhezkazgan" value="Zhezkazgan" />
          </Picker>

          <TextInput
            style={globalStyles.input}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            value={formData.phone}
            onChangeText={(text) => setFormData({ ...formData, phone: text })}
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

          <TextInput
            style={globalStyles.input}
            placeholder="Restaurant Name"
            value={formData.restaurantName}
            onChangeText={(text) => setFormData({ ...formData, restaurantName: text })}
          />
          <TextInput
            style={globalStyles.input}
            placeholder="Restaurant Address"
            value={formData.address}
            onChangeText={(text) => setFormData({ ...formData, address: text })}
          />
          <TextInput
            style={globalStyles.input}
            placeholder="Number of Seats"
            keyboardType="numeric"
            value={formData.seats}
            onChangeText={(text) => setFormData({ ...formData, seats: text })}
          />

          <Button title="Register as Admin" onPress={handleSignUp} />

          <TouchableOpacity onPress={() => router.push("/auth/AdminSignIn")}>
            <Text style={globalStyles.switchText}>
              Already have an account? Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

