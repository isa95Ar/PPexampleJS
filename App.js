import { Avatar } from "react-native-elements";
import React from "react";
import {
  StyleSheet,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Avatar
        activeOpacity={0.7}
        containerStyle={{backgroundColor: "white"}}
        onPress={() => console.log("Works!")}
        rounded
        size="large"
        title="GV"
        titleStyle={{color: "black"}}
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
});
