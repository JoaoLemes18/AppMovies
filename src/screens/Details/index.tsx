import React from "react";
import { View, Text, Image } from "react-native";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

interface Details {
  route: { params: { movie: Movie } };
}

export function MovieDetail({ route }: Details) {
  const { movie } = route.params;

  return (
    <View>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
        style={{ width: 200, height: 300 }}
      />
      <Text>{movie.title}</Text>
    </View>
  );
}

export default Details;
