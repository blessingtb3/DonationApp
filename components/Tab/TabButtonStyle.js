import { StyleSheet } from "react-native";

const tabButtonStyle = StyleSheet.create({

    tab:{
        backgroundColor: '#2979F2',
        borderRadius: 50,
        height: 50,
        justifyContent: 'center'
    },
    inactiveTab:{
        backgroundColor: '#F3F5F9'
    },
    inactiveTitle:{
        color: '#79869F'
    },
    title:{
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: 500,
        textAlign: 'center',
        color: 'white',
        lineHeight: 17
    },
});

export default tabButtonStyle;