import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

const homeStyle = StyleSheet.create({

    header:{
        marginTop: verticalScale(20),
        marginHorizontal: horizontalScale(24),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerIntroText:{
        fontFamily: 'Inter',
        fontSize: scaleFontSize(16),
        height: scaleFontSize(19),
        fontWeight: 400,
        color: '#636776',
    },
    name:{
        marginTop: verticalScale(5),
    },
    profileImage:{
        width: horizontalScale(50),
        height: verticalScale(50),
    },
    searchBox:{
        marginHorizontal: horizontalScale(24),
        marginTop: verticalScale(20),
    },
    highlightedImageContainer:{
        marginHorizontal: horizontalScale(24),
    },
    highlightedImage:{
        width: '100%',
        height: verticalScale(160),
    },
    categories:{
        marginLeft: horizontalScale(24),
    },
    categoryHeader:{
        marginHorizontal: horizontalScale(24),
        marginBottom: verticalScale(10),
        marginTop: verticalScale(6),
    },
    categoryItems:{
        paddingRight: 10,
    },
});

export default homeStyle;