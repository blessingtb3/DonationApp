import React from 'react';
import { Image, View} from 'react-native';
import BadgeButton from '../Badge/BadgeButton';
import Header from '../Header/Header';
import PropTypes from 'prop-types';
import singleDonationStyling from './singleDonationItemStying';

const SingleDonationItem = (props) => {

    return (
        <View>
            <View>
                <View style={singleDonationStyling.badge}>
                    <BadgeButton title={props.badgeTitle}/>
                </View>
                <Image source={{uri: props.uri}} style={singleDonationStyling.image}/>
            </View>

            <View style={singleDonationStyling.donationInformation}>
                
                <Header title={props.donationTitle} type={3} color={'#0A043C'}/>

                <View style={singleDonationStyling.price}>
                    <Header title={'$' + props.price.toFixed(2)} type={3} color={'#156CF7'}/>
                </View>
            </View>
        </View>
    );
};

SingleDonationItem.PropTypes = {
    uri: PropTypes.string.isRequired,
    badgeTitle: PropTypes.string.isRequired,
    donationTitle: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

export default SingleDonationItem;
