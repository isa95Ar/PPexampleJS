import * as React from "react";
import {
    StyleSheet,
} from "react-native";
import {NavigationContainer} from "@react-navigation/native"
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainScreen from "./componentes/screens/MainScreen";


const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Main">
                <Drawer.Screen name="Main" component={MainScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    StackScreen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
