import React, { useRef, useState } from 'react';
import { Pressable, Text } from 'react-native';
import PropTypes from 'prop-types';
import tabButtonStyle from './TabButtonStyle';
import { horizontalScale } from '../../assets/styles/scaling';

const TabButton = (props) => {


    const [width, setWidth] = useState(0);
    const textRef = useRef(null);
    const paddingHorizontal = 33;
    const tabButtonWidth = {
        width: horizontalScale(paddingHorizontal * 2 + width),
    }

    return (
        <Pressable 
            disabled={props.isInactive} 
            style={[
                tabButtonStyle.tab, 
                props.isInactive && tabButtonStyle.inactiveTab, tabButtonWidth
            ]}
            onPress={() => props.onPress()}
        >
            <Text onTextLayout={(event) => {setWidth(event.nativeEvent.lines[0].width);}} ref={textRef} style={[tabButtonStyle.title, props.isInactive && tabButtonStyle.inactiveTitle]}>{props.title}</Text>
        </Pressable>
    );
};

TabButton.default={
    isInactive: false,
    onPress: () => {}
}
TabButton.PropTypes={
    title: PropTypes.string.isRequired,
    isInactive: PropTypes.bool.isRequired,
    onPress: PropTypes.func
}

export default TabButton;