import { MagnifyingGlass } from "phosphor-react-native";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TextInput,
  View,
} from "react-native";

import { CardMovies } from "../../components/cardMovie/index";

import { api } from "../../services/api";

import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

export function Home() {
  const [discoveryMovies, setDiscoveryMovies] = useState<Movie[]>([]);
  const [searchResultMovies, setSearchResultMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [noResult, setNoResult] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadMoreData();
  }, []);

  const loadMoreData = async () => {
    setLoading(true);
    const response = await api.get("/movie/popular", {
      params: {
        page,
      },
    });
    setDiscoveryMovies([...discoveryMovies, ...response.data.results]);
    setPage(page + 1);
    setLoading(false);
  };

  const searchMovies = async (query: string) => {
    setLoading(true);
    const response = await api.get("/search/movie", {
      params: {
        query,
      },
    });

    if (response.data.results.length === 0) {
      setNoResult(true);
      setLoading(false);
      setSearchResultMovies([]);
    } else {
      setNoResult(false);
      setSearchResultMovies(response.data.results);
      setLoading(false);
    }
  };

  const handleSearch = (text: string) => {
    setSearch(text);
    if (text.length > 2) {
      searchMovies(text);
    } else {
      setSearchResultMovies([]);
    }
  };

  const navigation = useNavigation();

  const renderMovieItem = ({ item }: { item: Movie }) => (
    <CardMovies
      data={item}
      onPress={() => {
        console.log("Pressionado item com movieId:", item.id);
        navigation.navigate("Details", { movieId: item.id });
      }}
    />
  );

  const movieData = search.length > 2 ? searchResultMovies : discoveryMovies;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>What do you want to watch?</Text>

        <View style={styles.containerInput}>
          <TextInput
            placeholderTextColor="gray"
            placeholder="Search"
            style={styles.input}
            value={search}
            onChangeText={handleSearch}
          />
          <MagnifyingGlass
            style={styles.iconSearch}
            color="gray"
            size={25}
            weight="light"
          />
        </View>

        {noResult && (
          <Text style={styles.noResult}>No movies found for "{search}"</Text>
        )}
      </View>
      <View style={styles.flatList}>
        <FlatList
          data={movieData}
          numColumns={3}
          renderItem={renderMovieItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{
            padding: 5,
            paddingBottom: 100,
          }}
          onEndReached={() => loadMoreData()}
          onEndReachedThreshold={0.5}
        />
        {loading && <ActivityIndicator size={50} color="#0296e5" />}
      </View>
    </View>
  );
}
