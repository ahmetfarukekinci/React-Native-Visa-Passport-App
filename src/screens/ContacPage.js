import React, { Component } from 'react'
import { Text, View, ToastAndroid, Clipboard } from 'react-native'
import {contacts, email} from '../components/constants'
import {openInbox} from 'react-native-email-link'
import { Header } from '../components/common';
import styles from '../components/styles/contactPage'

export default class ContacPage extends Component {

    // clipboard email before mail app opens 
    mailHandler= async (mail)=>{
     await Clipboard.setString(mail); 
     await ToastAndroid.
     showWithGravity(
        'E-Posta Kopyalandı',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER); 
     await openInbox(); 
    }

    render() {
        return (
            <View style={styles.container}>
                <Header 
                text='İletişim'
                leftButtonBackActive
                leftButtonFunction={()=>this.props.navigation.goBack()}
                rightButtonBlank
                /> 
                <Text style={styles.text}>{contacts}</Text>
                <Text  
                onPress={()=>this.mailHandler(email)}
                style={styles.emailText}>{email}</Text>
            </View>
        )
    }
}

