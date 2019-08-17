import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default StyleSheet.create({
    container: {
        height: hp('10.719%'),
        width: wp('100%'),
        borderBottomWidth: hp('0.1%'),
        borderColor: '#E8E8E8',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff'
    },
    text: {
        color: '#000000',
        fontFamily: 'sans-serif',
        fontSize: hp('3%'),
        marginLeft: wp('3%'),
    },
    spinner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})