import { Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface Movie {
  id: number;
  poster_path: string;
}

interface Props {
  data: Movie;
  onpress?: () => void;
}

export function CardMovies({ data, ...rest }: Props) {
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500"; // URL base para as imagens

  return (
    <TouchableOpacity {...rest} style={styles.cardMovies}>
      <Image
        source={{
          uri: `${imageBaseUrl}${data.poster_path}`, // Construindo a URL completa
        }}
        style={styles.cardImage}
      />
    </TouchableOpacity>
  );
}
