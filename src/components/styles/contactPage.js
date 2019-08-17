import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default  StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff'
    },
    text:{
        fontFamily:'sans-serif',
        fontSize:hp('2.5%'),
        color:'#000000', 
        width: wp('90%'),
        alignSelf:'center',
        textAlign:'left',
        marginTop:hp('2%'),
        marginBottom:hp('2%')
    },
    emailText:{
        fontFamily:'sans-serif',
        fontSize:hp('2.5%'),
        color:'#003366', 
        width: wp('90%'),
        alignSelf:'center',
    }
})
