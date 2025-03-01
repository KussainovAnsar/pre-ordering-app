import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  addressText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    flex: 1,
  },
  addressEdit: {
    fontSize: 14,
    color: "#E37833",
  },
  searchBox: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  blocksContainer: {
    flex: 1,
  },
  block: {
    backgroundColor: "#D9D9D9",
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  blockText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  navButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  navText: {
    fontSize: 14,
    color: "#333",
    marginTop: 5,
  },
});
