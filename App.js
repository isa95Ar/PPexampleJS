import * as React from "react";
import {
    StyleSheet,
} from "react-native";
import {NavigationContainer} from "@react-navigation/native"
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainScreen from "./componentes/screens/MainScreen";
import {Provider} from "react-redux";
import {createStore,combineReducers} from 'redux';
import user from "./redux/user";
import thunk from 'redux-thunk'
import { applyMiddleware } from "@reduxjs/toolkit";



export default function App() {
  const reducers = combineReducers({user})
  const store = createStore(reducers,applyMiddleware(thunk));
  const Drawer = createDrawerNavigator();
  
  

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
