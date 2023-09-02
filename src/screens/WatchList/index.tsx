import React from "react";
import { styles } from "./styles";
import { CaretLeft, BookmarkSimple } from "phosphor-react-native";
import { Text, View, TouchableOpacity } from "react-native";

export function WatchList() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <CaretLeft
            style={styles.backHome}
            color="#fff"
            size={22}
            weight="bold"
          />
        </TouchableOpacity>
        <Text style={styles.text1}>Watch List</Text>
      </View>
    </View>
  );
}
export default WatchList;
