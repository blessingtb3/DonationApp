import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";


const SearchStyle = StyleSheet.create({

    searchInputContainer:{
        flexDirection: 'row',
        paddingHorizontal: horizontalScale(16),
        backgroundColor: '#F3F5F9',
        height: verticalScale(50),
        alignItems: 'center',
        borderRadius: 15,
    },
    searchInput:{
        flex: 1,
        marginLeft: horizontalScale(6),
        height: '100%',
        fontFamily: 'Inter',
        fontSize: scaleFontSize(14),
        lineHeight :scaleFontSize(14),
        color: '#686C7A'
    },
});

export default SearchStyle;