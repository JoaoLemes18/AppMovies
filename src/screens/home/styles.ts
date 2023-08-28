import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#242A32",
  },
  header: {
    marginTop: 59,
  },
  text1: {
    color: "white",
    marginLeft: 75,
    fontSize: 22,
    fontWeight: "bold",
  },
  noResult: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    marginVertical: 18,
  },

  inputContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#3A3F47",
    left: 28,
    width: 327,
    height: 42,
    marginTop: 30,
    marginBottom: 22,
    borderRadius: 18,
  },
  input: {
    flex: 1,
    paddingHorizontal: 16,
    color: "white",
  },
  inputImage: {
    width: 15,
    height: 15,
    marginHorizontal: 12,
    tintColor: "gray",
  },
});
