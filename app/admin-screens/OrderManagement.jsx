import { View, Text, Button } from "react-native";
import { globalStyles } from "../styles/globalStyles";  

export default function OrderManagement() {
  const handleAcceptOrder = (orderId) => {
    console.log("Accepting Order ID:", orderId);
    // Handle order acceptance logic here
  };

  const handleRejectOrder = (orderId) => {
    console.log("Rejecting Order ID:", orderId);
    // Handle order rejection logic here
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Order Management</Text>

      {/* This would typically be a list of orders */}
      <View style={globalStyles.orderItem}>
        <Text>Order #1</Text>
        <Button title="Accept" onPress={() => handleAcceptOrder(1)} />
        <Button title="Reject" onPress={() => handleRejectOrder(1)} />
      </View>

      <View style={globalStyles.orderItem}>
        <Text>Order #2</Text>
        <Button title="Accept" onPress={() => handleAcceptOrder(2)} />
        <Button title="Reject" onPress={() => handleRejectOrder(2)} />
      </View>
    </View>
  );
}
