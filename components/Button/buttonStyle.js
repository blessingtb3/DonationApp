import { StyleSheet } from "react-native";

const buttonStyle = StyleSheet.create({

    button:{
        backgroundColor: '#2979F2',
        borderRadius: 50,
        height: 55,
        justifyContent: 'center',
    },
    title:{
        fontFamily: 'Inter',
        fontSize: 16,
        fontWeight: 500,
        textAlign: 'center',
        color: 'white',
    },
    disabledButton:{
        opacity: 0.5
    }
});

export default buttonStyle;