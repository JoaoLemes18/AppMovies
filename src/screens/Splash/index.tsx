import React, { useEffect } from "react";
import { Video } from "expo-av"; // Certifique-se de ter o pacote Expo AV instalado
import { StyleSheet, View } from "react-native";

const SplashScreen = () => {
  useEffect(() => {
    // Simula o tempo da splash screen (5 segundos)
    const splashTimeout = setTimeout(() => {
      // Você pode adicionar lógica aqui para navegar para a próxima tela
      // após o término do vídeo, se desejar.
    }, 5000);

    return () => clearTimeout(splashTimeout);
  }, []);

  return (
    <View style={styles.container}>
      <Video
        source={require("../path/to/your/video.mp4")} // Substitua pelo caminho correto do seu vídeo
        style={styles.video}
        shouldPlay
        isLooping
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: "100%",
    height: "100%",
  },
});

export default SplashScreen;
