import NavigationService from '../navigation/NavigationService'
import firebase from '@firebase/app';
require('firebase/database');
import _ from 'lodash'; 
import {
  COUNTRY_LIST,
  LOADING_TRUE,
  COUNTRY_SELECTED,
  COUNTRY_FILTER,
  TOGGLE_SEARCH_BAR,
} from './constants'; 


// first action before all components mounts. 
// dispatch all info from firebase to state 
export const mapCountries = () => {
    return async(dispatch) => {

      // loading spinner starts
       dispatch({
        type: LOADING_TRUE
      });
       
      // countries are mapped to state
      await firebase.database().ref('/countries')
        .on('value', (snapshot) => {
          const countries_obj = snapshot.val(); 
          const countries = _.map(countries_obj, (value,uid) => {
              return {...value,uid}
          });

          // Loading spinner ends
       dispatch({
            type: COUNTRY_LIST,
            payload: countries
          });
        });
    }
}; 

// reduce full list array of countries to searched text
export const filterCountry = (payload) => ({
  type: COUNTRY_FILTER,
  payload
}); 

// maps selected country's visas and navigate to visa list page
// resets search bar related states to default 
export const mapVisa = (item) => {
  return async dispatch =>{
       // mapping selected country's visa 
        const visa_array = _.map(item, (value,uid)=>{
            return{
                ...value,uid
            }
        }); 
        // Navigation to Visa List Page
        // Sending country name as param
        NavigationService.navigate('VisaListPage', {countryName:item.uid}); 
        
        dispatch({
          type: COUNTRY_SELECTED,
          payload: visa_array 
        }); 
  };  
}; 


// Sets searh bar boolean state to opposite
export const toggleSearchBar = () => ({
  type: TOGGLE_SEARCH_BAR
})
