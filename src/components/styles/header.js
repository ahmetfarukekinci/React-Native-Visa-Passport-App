import {StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

export default StyleSheet.create({
    container:{
        height: hp('10%'), 
        width: wp('100%'),
        flexDirection:'row',
        flexWrap:'wrap',
        backgroundColor:'white',
        elevation: hp('1%')
    },
    leftButtonWrapper:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
       
    },
    textWrapper:{
        flex:8,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize: hp('3.5%'),
        fontFamily:'sans-serif',
        color:'#000000'
    },
    rightButtonWrapper:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
    }
})
