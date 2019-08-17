import React, { Component } from 'react'
import { Text, View, Image, ScrollView, Linking } from 'react-native'
import { Header, } from '../components/common'
import { connect } from 'react-redux'
import { back } from '../actions/visaActions'
import styles from '../components/styles/visaDetailPage'
class VisaDetailPage extends Component {
    linkHandler = (url) => {
        Linking.openURL(url);
    }
    render() {
        const {
            visa_name,
            visa_details,
            visa_link,
            visa_flag,

        } = this.props.visa.visa_details;

        return (
            <View style={styles.container}>
                <Header
                    text={visa_name}
                    leftButtonBackActive
                    leftButtonFunction={() => {
                        this.props.navigation.goBack();
                        this.props.back();
                    }}
                    rightButtonBlank
                />
                <ScrollView>
                    <View style={styles.imageCard}>
                        <Image
                            source={{ uri: visa_flag }}
                            style={{ height: undefined, width: undefined, flex: 1 }}
                            resizeMode='cover'
                        />
                    </View>

                    <Text style={styles.text}>{visa_details}</Text>
                    {
                        visa_link !== '' && visa_link !== null && visa_link !== undefined ?
                            <View style={styles.linkWrapper}>
                                <Text style={styles.text}>Detaylı Bilgi için:</Text>
                                <Text
                                    onPress={() => this.linkHandler(visa_link)}
                                    numberOfLines={1}
                                    style={[styles.text, { color: '#003366', marginTop: null }]}>{visa_link}</Text>
                            </View>
                            : null
                    }
                </ScrollView>

            </View>
        )
    }
}
const mapStateToProps = state => {
    const { visa } = state;
    return {
        visa
    }
}

const mapDispatchToProps = {
    back
};

export default connect(mapStateToProps, mapDispatchToProps)(VisaDetailPage)