import React from "react"
import {
    Text,    
    View
} from "react-native";
import {Header} from 'react-native-elements';

export default function MainScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
            <Header
                centerComponent={{text: "Pantalla Principal", style: {color: "#fff"}}}
                containerStyle={{backgroundColor: "brown"}}
                leftComponent={{
                    icon: "menu", 
                    color: "#fff",
                    onPress: () => {
                        console.log("Click recibido");
                        navigation.openDrawer()}}}
                />
        <Text>Home Screen</Text>
      </View>
    );
  };