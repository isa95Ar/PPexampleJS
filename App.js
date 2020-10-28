/*Author: Lucas S - Instituto Superior Patagonico - 21-10-2020*/;
import { Avatar, Image, Text, Input, Button, Accessory } from 'react-native-elements';
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
        rounded
        source={{
          uri:
          'https://i.ibb.co/xq6HWCc/logo.png',
        }}
        onPress={() => console.log("Funciona")}
        activeOpacity={0.7}
        containerStyle={{flex: 2, marginLeft: 20, marginTop: 115}}
      />

      <Text h3 style={styles.Text}>Bienveni2</Text>


      <Input
        placeholder='User'
        style={styles.Input}
      />


      <Input placeholder="Password" secureTextEntry={true} 
        style={styles.Input}
      />

      <Button
        title="Iniciar"
        type="outline"
        style={styles.Button}
      />


      <Image
        source={{ uri: "https://emoji.gg/assets/emoji/8219_cheems.png" }}
        style={{ width: 50, height: 50 }}
      />
    
      <Avatar
        size="xlarge"
        rounded
        icon={{name: 'meteor', type: 'font-awesome-5'}}
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
        containerStyle={{flex: 5, marginRight: 60}}
      />

    </View>
  );
}

const Click = ({click}) => (
  <View>
  <Text>{`Click number ${click.number} at the ${click.time}`}</Text>
  </View>
  );

const ListExample = ({clicks}) => {
  
  const renderItems = ({item}) => (
    
     <Click click={item} />
  )

  return <View>
  <FlatList data={clicks} renderItem = {renderItems} keyExtractor={click => click.number}  />
  </View>;
};

const styles = StyleSheet.create({
  
  container: {
    flex: 2,
    backgroundColor: "#F0FFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  
  avatar: {
    backgroundColor: "black",
    color: "white",

  },

  Text: {
    color: "#4169E1",
  },

  Input: {
    backgroundColor:"#F0FFFF",
    width: "40px",
    borderColor: "#4169E1",
    borderWidth: 3,
    borderEndWidth: 100,

    width:"200px",
    
  },

  Button: {
    color: "#4169E1",
    borderColor: "#4169E1",
    borderWidth: 3,
    width:"100px"
  }

});
