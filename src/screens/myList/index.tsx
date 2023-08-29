import React from "react";
import { styles } from "./styles";
import { ArrowUDownLeft } from "phosphor-react-native";
import { Text, View } from "react-native";

export function myList() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ArrowUDownLeft size={32} />
        <Text style={styles.text1}>Detail</Text>
      </View>
    </View>
  );
}
export default myList;
