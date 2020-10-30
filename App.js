import * as React from "react";
import {
    StyleSheet,
} from "react-native";
import {NavigationContainer} from "@react-navigation/native"
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainScreen from "./componentes/screens/MainScreen";
import {Provider} from "react-redux";
import {createStore} from 'redux';
import reducer from "./redux/userRedux";

const store = createStore(reducer);
const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Main">
                    <Drawer.Screen name="Main" component={MainScreen} />
                </Drawer.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

const styles = StyleSheet.create({
    StackScreen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
