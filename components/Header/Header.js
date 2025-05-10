import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import headerStyle from './style';


const Header = (props) => {

    //style to apply according to header type 
    const styleToApply = () => {
        switch(props.type){
            case 1:
                return headerStyle.title1
            case 2:
                return headerStyle.title2
            case 3:
                return headerStyle.title3
            default:
                return headerStyle.title1
        }
    };

    return (
        <View>
            <Text style={[styleToApply(), props.color && {color: props.color}]}>{props.title}</Text>
        </View>
    );
};

Header.default = {
    title: '',
    type: 1,
    default: 'black',
}
Header.prototype = {
    title: PropTypes.string,
    types: PropTypes.number,
    color: PropTypes.string,
};

export default Header;