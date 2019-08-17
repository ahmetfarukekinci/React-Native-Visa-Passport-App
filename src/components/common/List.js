import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'
import styles from '../styles/list'

const List = props => {
    return (

        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.container}>
                <Text numberOfLines={1} style={styles.text}>{props.text}</Text>
            </View>
        </TouchableOpacity>

    )


}

List.propTypes = {
    onPress: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
};

export { List }; 