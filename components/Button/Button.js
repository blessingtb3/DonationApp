import React from 'react';
import { Pressable, Text } from 'react-native';
import PropTypes from 'prop-types';
import buttonStyle from './buttonStyle';

const Button = (props) => {

    return (
        <Pressable 
            disabled={props.isDisabled} 
            style={[
                buttonStyle.button, 
                props.isDisabled && buttonStyle.disabledButton
            ]}
            onPress={() => props.onPress()}
        >
            
            <Text style={buttonStyle.title}>{props.title}</Text>
        </Pressable>
    );
};

Button.default={
    isDisabled: false,
    onPress: () => {}
}
Button.PropTypes={
    title: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    onPress: PropTypes.func
}

export default Button;