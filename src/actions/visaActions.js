import NavigationService from '../navigation/NavigationService'; 
import {
  VISA_FILTER,
  VISA_SELECTED,
  GO_BACK
} from './constants'; 

// reduce full list array of visa to searched text
export const visaFilter = payload =>({
  type: VISA_FILTER,
  payload
}); 

//Navigate to Visa Detail Page 
// Pass infos as object 
//Reset search bar related states
export const visaSelect = (payload)=>{
  return dispatch=>{
    dispatch({
      type: VISA_SELECTED,
      payload
    }); 
    NavigationService.navigate('VisaDetailPage'); 
  }
}


// handle all state that need to be turn to default 
export const back=()=>({
  type: GO_BACK
})
  


