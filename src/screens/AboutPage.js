import React, { Component } from 'react'
import { Text,View } from 'react-native'
import {about} from '../components/constants'
import { Header } from '../components/common'
import styles from '../components/styles/aboutPage'

export default class AboutPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header 
                text='Uygulama Hakkında'
                leftButtonBackActive
                leftButtonFunction={()=>this.props.navigation.goBack()}
                rightButtonBlank
                /> 

                <Text style={styles.text}>{about}</Text>
               
            </View>
        )
    }
}; 

