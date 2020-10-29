import React from "react"
import {
    Text,    
    View
} from "react-native";
import {Header} from "react-native-elements";
import {setUserName} from "../../actions";


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
                        navigation.openDrawer()
                      }}}
                rightComponent={{
                  icon: 'home',
                  color: '#fff',
                  onPress: () => store.dispatch(setUserName("Gonzalo"))
                  }}
                />
        <Text> Texto por aquí </Text>
      </View>
    );
  };