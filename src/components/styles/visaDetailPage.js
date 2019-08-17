import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default StyleSheet.create({ 
    container: {
        flex:1,
        backgroundColor: '#ffffff'
    },
    imageCard:{
        height: hp('30%'),
        width: wp('90%'),
        alignSelf:'center',
        flexWrap:'wrap',
        marginTop: hp('2.5%')
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
    linkWrapper:{
        width: wp('90%'),
        alignSelf:'center',
        marginBottom:hp('2%'),
        flexWrap:'wrap'  
    }
}); 
