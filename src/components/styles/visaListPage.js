import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
export default StyleSheet.create({
    container:{
        flex:1
    },
    searchBarWrapper:{
        height: hp('6.5%'), 
        width: wp('100%'),
        backgroundColor:'#ffffff',
        justifyContent:'center',
        alignItems:'center',
        marginTop:hp('1%'),
        

    },
    searchBar:{
        height: hp('5.5%'), 
        width: wp('95%'),
        padding: hp('1%'),
        backgroundColor:'#a0a0a0',
        borderRadius:hp('1%'),
        color:'#000000',
        fontSize: hp('3%'),
        fontFamily:'sans-serif'
    }

});