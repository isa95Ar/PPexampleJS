import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Boton from './componentes/Boton';

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
      <View>
        <Text>You press {countClick} times the button! </Text>
        <Boton titulo="cambia de color"/>
        
        <Button
          title={
            !loading ? (
              "Click Me"
            ) : (
              <ActivityIndicator
                size="small"
                color="white"
                animating={loading}
              />
            )
          }
          onPress={pressFunction}
          disabled={loading}
        />
      </View>
      <ListExample clicks = {clicks}/>
      <StatusBar style="auto" />
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
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
