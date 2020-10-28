/*Instituto Patagonico
  Facundo Crespo
  Desarrollo de Software
  28/10/20
   */

  import React from "react";
  import { StyleSheet, View } from "react-native";
  import { Avatar, Accesory } from "react-native-elements";
  import { Text } from 'react-native-elements';
  import { Input } from 'react-native-elements';
  import { Button } from 'react-native-elements';

  export default function App() {
    return (
      <View style={styles.container}>
        <Avatar
          rounded
          size="xlarge"
          source={{
            uri:
              'https://scontent.fnqn2-1.fna.fbcdn.net/v/t1.0-9/58641557_3051203668238115_6615079470766227456_n.png?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=1M_h0ydzDfcAX_MY4nP&_nc_ht=scontent.fnqn2-1.fna&oh=50e31e43e07f3486be640872c895283b&oe=5FBF0CA0',
          }}
        />
        <View style={styles.Text}>
          <Text h1>Bienvenid@s!</Text>
        </View>
        <View style={styles.input}>
          <Input
          placeholder='Usuario'
          placeholderTextColor="red"
        />
          <Input
          placeholder='Contraseña'
          placeholderTextColor="red"
        />
        </View>
        
          <Button
          title="Inicio"
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
    avatar: {
      backgroundColor:"white"
    },
    Text: {
      color:"white",
    },
    input: {
      borderWidth:1,
      borderColor: 'red',
      width: 250,
      backgroundColor: 'white',
    },
    Button: {
    }
  });