/* Autor Franco 21/10/20 Instituto Superior Patagonico */
import React from "react";
import {
  StyleSheet,
  View,
  Avatar,
} from "react-native";
import {Avatar} from "react-native-elements";

export default function App() {


  return (
    <View style={styles.container}>

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

// Standard Avatar
<Avatar
  rounded
  source={{
    uri:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  }}
/>

// Avatar with Title
<Avatar rounded title="MD" />

// Avatar with Icon
<Avatar rounded icon={{ name: 'home' }} />

// Standard Avatar with accessory
<Avatar
  source={{
    uri:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  }}
  >
  <Accessory />
</Avatar>

