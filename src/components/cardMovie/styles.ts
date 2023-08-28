import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardMovies: {
    width: "30%",
    aspectRatio: 0.7, // Proporção da imagem
    marginHorizontal: "1.5%", // Espaçamento horizontal entre os cartões
    marginBottom: 30, // Espaçamento vertical entre os cartões
    borderRadius: 15,
    overflow: "hidden",
    elevation: 4,
    backgroundColor: "#ffffff",
  },

  cardImage: {
    width: "100%",
    height: "100%",
  },
});
