import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

export const indexStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    color: "#212121",
    marginBottom: 20,
    textAlign: "center",
  },
  roleButton: {
    width: 181,
    height: 181,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  selectedRole: {
    backgroundColor: "#E37833",
  },
  unselectedRole: {
    backgroundColor: "#CECECE",
  },
  roleIcon: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  roleText: {
    fontSize: 22,
    fontWeight: "500",
    color: "#212121",
  },
  continueButton: {
    width: 282,
    height: 61,
    backgroundColor: "#E37833",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  continueText: {
    fontSize: 22,
    fontWeight: "500",
    color: "#FFFFFF",
  },
});
