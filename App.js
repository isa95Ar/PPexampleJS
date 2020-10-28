/* Autor: Jorge
fecha: 21/10/2020
Instituto superior patagonico */
import React from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import { Avatar, Text, Input, Button } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {

  return (
    <View style={styles.container}>

<Avatar
size="xlarge"
rounded
source= {{
  uri:'https://scontent.fnqn2-1.fna.fbcdn.net/v/t1.0-9/58641557_3051203668238115_6615079470766227456_n.png?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=1M_h0ydzDfcAX_MY4nP&_nc_ht=scontent.fnqn2-1.fna&oh=50e31e43e07f3486be640872c895283b&oe=5FBF0CA0'
}}
activeOpacity={5.0}
overlayContainerStyle= {{backgroundColor:"Black"}}
/>
<Text h1 > Bienvenido </Text>
<Input
placeholder = 'Usuario'
leftIcon={
  <Icon
  name='user'
  size={24}
  color='black'
  />

}


 /> 
 <Input
placeholder = 'Clave'secureTextEntry={true}
leftIcon={
  <Icon
  name='lock'
  size={24}
  color='black'
  />

}


 /> 
<Button
title='Entrar'
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
