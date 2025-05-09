import { StyleSheet } from "react-native";

const badgeButtonStyle = StyleSheet.create({

    badge:{
        backgroundColor: '#145855',
        borderRadius: 50,
        height: 22,
        justifyContent: 'center'
    },
    title:{
        fontFamily: 'Inter',
        fontSize: 10,
        fontWeight: 500,
        textAlign: 'center',
        color: 'white',
        lineHeight: 12
    },
});

export default badgeButtonStyle;