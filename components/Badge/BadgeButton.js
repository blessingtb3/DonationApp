import React, { useRef, useState } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import badgeButtonStyle from './BadgeButtonStyle';
import { horizontalScale } from '../../assets/styles/scaling';

const BadgeButton = (props) => {


    const [width, setWidth] = useState(0);
    const textRef = useRef(null);
    const paddingHorizontal = 10;
    const BadgeButtonWidth = {
        width: horizontalScale(paddingHorizontal * 2 + width),
    }

    return (
        <View style={[badgeButtonStyle.badge, BadgeButtonWidth]}>
            <Text onTextLayout={(event) => {setWidth(event.nativeEvent.lines[0].width);}} ref={textRef} style={[badgeButtonStyle.title]}>{props.title}</Text>
        </View>
    );
};

BadgeButton.PropTypes={
    title: PropTypes.string.isRequired,
}

export default BadgeButton;