import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Text,
  View,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { styles } from "./styles";
import { api } from "../../services/api";
import { useState, useEffect } from "react";
import { CardMovies } from "../../components/cardMovie/index";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

export default function Home() {
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

  const movieData = search.length > 2 ? searchResultMovies : discoveryMovies;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <Text style={styles.text1}>What do you want to watch?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor="gray"
            value={search}
            onChangeText={handleSearch}
          />
        </View>
        {noResult && (
          <Text style={styles.noResult}> No movies found for "{search}"</Text>
        )}
      </View>
      <View>
        <FlatList
          data={movieData}
          numColumns={3}
          renderItem={({ item }) => <CardMovies data={item} />}
          showsVerticalScrollIndicator={false}
          onEndReached={loadMoreData}
          onEndReachedThreshold={0.5}
        />
        {loading && <ActivityIndicator size={50} color="#8296e5" />}
      </View>
    </View>
  );
}
