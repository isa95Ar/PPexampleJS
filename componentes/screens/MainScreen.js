import React from "react"
import {
    Text,
    View
} from "react-native";
import {Header} from "react-native-elements";
import {connect} from "react-redux";
import {setUserName} from "../../redux/userRedux"


function MainScreen({navigation, setUserName, userName}) {
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
                        setUserName("Gonzalo")
                    }
                }}
            />
            <Text>Nombre de usuario actual {userName}</Text>
        </View>
    );
};

const mapStateToProps = state => ({
    userName: state.userName
});

const mapDispatchToProps = {
    setUserName
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainScreen)