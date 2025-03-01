import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Picker } from "@react-native-picker/picker"; // Import Picker
import { globalStyles } from "../styles/globalStyles";

export default function Cart() {
  const router = useRouter();
  
  // States for date and time
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [hour, setHour] = useState(12); // Default time hour
  const [minute, setMinute] = useState(0); // Default time minute
  
  // Handle date selection
  const handleDateChange = (event, selectedDate) => {
    setSelectedDate(selectedDate || new Date());
  };

  // Handle time selection (hour and minute)
  const handleTimeChange = (type, value) => {
    if (type === "hour") {
      setHour(value);
    } else if (type === "minute") {
      setMinute(value);
    }
  };

  const handleOrder = () => {
    console.log("Order placed with time:", selectedDate.toLocaleDateString(), `${hour}:${minute}`);
    // You can integrate payment logic here later
    // router.push("/payment");
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Your Cart</Text>

      {/* Date Selection */}
      <Text style={styles.text}>Select Delivery Date</Text>
      <Picker
        selectedValue={selectedDate.toLocaleDateString()}
        onValueChange={handleDateChange}
        style={globalStyles.input}
      >
        {/* Generate date options */}
        {[...Array(30).keys()].map((_, index) => {
          let date = new Date();
          date.setDate(date.getDate() + index);
          return (
            <Picker.Item key={index} label={date.toLocaleDateString()} value={date.toLocaleDateString()} />
          );
        })}
      </Picker>

      {/* Time Selection */}
      <Text style={styles.text}>Select Delivery Time</Text>

      {/* Hour Picker */}
      <Picker
        selectedValue={hour}
        onValueChange={(itemValue) => handleTimeChange("hour", itemValue)}
        style={globalStyles.input}
      >
        {[...Array(24).keys()].map((h) => (
          <Picker.Item key={h} label={`${h < 10 ? `0${h}` : h}`} value={h} />
        ))}
      </Picker>

      {/* Minute Picker */}
      <Picker
        selectedValue={minute}
        onValueChange={(itemValue) => handleTimeChange("minute", itemValue)}
        style={globalStyles.input}
      >
        {[...Array(60).keys()].map((m) => (
          <Picker.Item key={m} label={`${m < 10 ? `0${m}` : m}`} value={m} />
        ))}
      </Picker>

      {/* Order Button */}
      <Button title="Place Order" onPress={handleOrder} />
      
      {/* Payment Button */}
      <Button title="Proceed to Payment" onPress={() => router.push("/payment")} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});
