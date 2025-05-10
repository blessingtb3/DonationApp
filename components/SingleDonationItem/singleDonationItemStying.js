import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../assets/styles/scaling";

const singleDonationStyling = StyleSheet.create({

    image:{
        height: horizontalScale(170),
        width: horizontalScale(155),
        backgroundColor: '#D9D9D9',
        borderRadius: 20,
    },
    badge:{
        position: 'absolute',
        zIndex: 1,
        top: verticalScale(13),
        left: horizontalScale(10),
    },
    donationInformation:{
        marginTop: verticalScale(16),
    },
    price:{
        marginTop: verticalScale(5),
    }
});

export default singleDonationStyling;