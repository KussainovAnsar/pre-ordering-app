import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  logo: {
    width: screenWidth * 0.5, 
    height: screenWidth * 0.5, 
    marginBottom: screenWidth * 0.05,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
    marginBottom: 20,
  },
  roleSelection: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
  input: {  
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 15,
  },
  switchText: { 
    marginTop: 10,
    color: "#4285F4",
    textDecorationLine: "underline",
  }
});



export default globalStyles;