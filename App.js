/* Autor: "Santiago Rozas tobar" */
import {Avatar} from "react-native-elements";
import React from "react";
import {
  StyleSheet,
  View,
} from "react-native";

export default function App() {


  return (
    <View style={styles.container}>
<Avatar
size="small"
rounded
tittle="MT"
onPress={() => console.log("Works!")}
activeOpacity={0.7}
/>
<Avatar
size="medium"
title="BP"
onPress={() => console.log("Works!")}
activeOpacity={0.7}
/>
<Avatar
size="large"
title="LW"
onPress={() => console.log("Works!")}
activeOpacity={0.7}
/>
<Avatar
size="xlarge"
rounded
title="CR"
onPress={() => console.log("Works")}
activeOpacity={0.7}
/>

    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
