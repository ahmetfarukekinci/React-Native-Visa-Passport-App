import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { Icon } from 'native-base'
import PropTypes from 'prop-types'
import styles from '../styles/header'
const Header = props => {
    let leftButton = null;
    let rightButton = null;

    if (props.leftButtonBackActive) {
        leftButton = (
            <Icon name='left' type='AntDesign' />
        )
    } else if (props.leftButtonMenuActive) {

        leftButton = (
            <Icon name='md-menu' type='Ionicons' />
        )

    } else if (props.leftButtonMenuBlank) {
        return null;
    }

    if (props.rightButtonSearchActive) {
        rightButton = (
            <Icon name='search1' type='AntDesign' />
        )

    } else if (props.rightButtonBlank) {
        rightButton = null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.leftButtonWrapper}>
                <TouchableOpacity onPress={props.leftButtonFunction}>
                    {leftButton}
                </TouchableOpacity>
            </View>
            <View style={styles.textWrapper}>
                <Text
                    numberOfLines={1}
                    style={styles.text}>{props.text}</Text>
            </View>
            <View style={styles.rightButtonWrapper}>
                <TouchableOpacity onPress={props.rightButtonFunction}>
                    {rightButton}
                </TouchableOpacity>
            </View>
        </View>
    )
};

Header.propTypes = {
    leftButtonBackActive: PropTypes.bool,
    leftButtonMenuActive: PropTypes.bool,
    leftButtonMenuBlank: PropTypes.bool,
    rightButtonSearchActive: PropTypes.bool,
    rightButtonBlank: PropTypes.bool,
    text: PropTypes.string.isRequired,
    leftButtonFunction: PropTypes.func,
    rightButtonFunction: PropTypes.func,
};

export { Header }; 