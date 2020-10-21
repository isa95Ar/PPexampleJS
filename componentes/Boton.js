import React, { useState } from 'react';
import { View } from 'react-native';
import {Button} from 'react-native';
/*
{
    titulo:"titulo del boton",
    color_boton : "blue"
}
*/
function Boton({color_boton,titulo}){

    const [color,setColor] = useState("white");

   const mifuncion = () => {
         setColor("black");
   }

    return (<View>
            <Button title={titulo} onPress={mifuncion} color={color} />         
        </View>);
}

export default Boton;