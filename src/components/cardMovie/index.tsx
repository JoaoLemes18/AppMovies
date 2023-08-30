import { Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

interface Movie {
  id: number;
  poster_path: string;
}

interface Props {
  data: Movie;
  onPress?: () => void;
}

export function CardMovies({ data, ...rest }: Props) {
  const navigation = useNavigation();

  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <TouchableOpacity style={styles.cardMovies}>
      <Image
        source={{
          uri: `${imageBaseUrl}${data.poster_path}`,
        }}
        style={styles.cardImage}
      />
    </TouchableOpacity>
  );
}
