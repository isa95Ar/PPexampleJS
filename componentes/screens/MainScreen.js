import React, { useEffect, useState } from "react"
import {
    Text,
    View
} from "react-native";
import {Header} from "react-native-elements";
import {connect} from "react-redux";
import {setUserName} from "../../redux/user"
import {useDispatch,useSelector} from "react-redux";
import { useNavigation } from '@react-navigation/native';

function MainScreen() {

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const dataUser = useSelector(state => state.user);

    const [dataUserNa,setdataUserNa] = useState(dataUser.userName);
    useEffect(() => {
        setdataUserNa(dataUser.userName);
    },[dataUser]);


    return (
        <View style={{ flex: 1, alignItems: "center" }}>
            <Header
                centerComponent={{ text: "Pantalla Principal", style: { color: "#fff" } }}
                containerStyle={{ backgroundColor: "brown" }}
                leftComponent={{
                    icon: "menu",
                    color: "#fff",
                    onPress: () => {
                        navigation.openDrawer()
                    }
                }}
                rightComponent={{
                    icon: 'home',
                    color: '#fff',
                    onPress: () => {
                        console.log("Al menos entendí el click");
                        dispatch(setUserName("Gonzalo"))
                    }
                }}
            />
            <Text>Nombre de usuario actual {dataUserNa}</Text>
        </View>
    );
};

export default MainScreen;