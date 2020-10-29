import * as React from "react";
import {
    StyleSheet,
} from "react-native";
import {NavigationContainer} from "@react-navigation/native"
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainScreen from "./componentes/screens/MainScreen";
import store from "./store/index";
import {render} from "react-dom";
import {Provider} from "react-redux";


const Drawer = createDrawerNavigator();

function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Main">
                <Drawer.Screen name="Main" component={MainScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default function index(){
    render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById("root")
    )
}

const styles = StyleSheet.create({
    StackScreen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
