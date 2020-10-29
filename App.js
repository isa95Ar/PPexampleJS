/*Author: Lucas S - Instituto Superior Patagonico - 21-10-2020*/;
import { Avatar, Image, Text, Input, Button, Accessory, withTheme } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View,
} from "react-native";



export default function App() {
  const [countClick, setCount] = useState(0);
  const [loading, setLoader] = useState(false);
  const [clicks,setClicks] = useState([])


  const pressFunction = () => {
    setLoader(true);
    const count = countClick + 1;
    const t = new Date();
    const time = t.getTime();
    const Newclick = [...clicks,{number:count,time:time}] 

    setCount(count);
    setClicks(Newclick);
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  };

  return (
    <View style={styles.container}>

      <Avatar
        size= "xlarge"
        source={{
          uri:
          'https://i.ibb.co/vdsn5W4/patagocicon.png',
        }}
        onPress={() => console.log("Funciona")}
        activeOpacity={0}
        
      />

      <Text h3 style={styles.Text}>Bienvenidos</Text>

      <Input
        placeholder='User'
        style={styles.Input}
      />

      <Input placeholder="Password" secureTextEntry={true}
        
        style={styles.Input}
      />

      <Button
        title="Inicio"
        style={styles.Button}
      />
    
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 2,
    backgroundColor: "#0094c3",
    alignItems: "center",
    justifyContent: "center",
  },
  
  avatar: {
    backgroundColor: "black",
    color: "white",
  },

  Text: {
    color: "white",
  },

  Input: {
    backgroundColor:"#F5F5F5",
    borderColor: "#781713",
    borderWidth: 4,
    width:"200px",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    size:"10",
  },

  Button: {
    backgroundColor: "#F5F5F5",
    borderColor: "#781713",
    borderWidth: 4,
    width:"200px"
  }

});