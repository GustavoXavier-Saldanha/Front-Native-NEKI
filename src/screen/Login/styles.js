import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../helpers/dimensions";

const styles = StyleSheet.create({
    inputs: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    txt: {
        fontSize: 20,
        fontWeight: '500',
        color: '#fff',
        padding: 10,
    },

    btnLogin: {
        marginTop: windowHeight / 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default styles;