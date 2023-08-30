import React from "react";
import { styles } from "./styles";
import { ArrowUDownLeft } from "phosphor-react-native";
import { Text, View, TouchableOpacity } from "react-native";

export function WatchList() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowUDownLeft style={styles.backHome} size={32} color="white" />
        </TouchableOpacity>
        <Text style={styles.text1}>Watch List</Text>
      </View>
    </View>
  );
}
export default WatchList;
