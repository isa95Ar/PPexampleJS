import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Accesory } from "react-native-elements";

export default function App() {
  return (
    <View style={styles.container}>
      <Avatar
        rounded
        size="xlarge"
        title="ID"
        activeOpacity={0.7}
        containerStyle={styles.avatar}
        titleStyle={styles.icon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar:{
    backgroundColor:"white"
  },
  icon:{
    color:"black"
  }
});
