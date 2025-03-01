import { View, Text, Image } from "react-native";
import { useRouter } from "expo-router";
import RoleButton from "../components/RoleButton";
import { globalStyles } from "./styles/globalStyles"; 

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={globalStyles.container}>
      <Image source={require("../assets/icon.png")} style={globalStyles.logo} />
      <Text style={globalStyles.title}>Welcome to YumTime</Text>
      <Text style={globalStyles.subtitle}>Your go-to pre-ordering app for restaurants!</Text>

      <View style={globalStyles.roleSelection}>
        <RoleButton title="I am a Customer" color="#FF5733" onPress={() => router.push("/auth/SignIn")} />
        <RoleButton title="I am a Restaurant Admin" color="#4285F4" onPress={() => router.push("/auth/AdminSignIn")} />
      </View>
    </View>  
  );
}



