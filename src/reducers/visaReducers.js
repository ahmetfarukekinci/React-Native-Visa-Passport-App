import {
    COUNTRY_LIST, 
    LOADING_TRUE,
    COUNTRY_SELECTED,
    COUNTRY_FILTER,
    VISA_FILTER,
    TOGGLE_SEARCH_BAR,
    VISA_SELECTED,
    GO_BACK
} from '../actions/constants'; 

const initialState = {
    country_list_full:[],
    country_list:[],
    visa_list_full:[],
    visa_list:[],
    loading: false,
    isSearchVisible: false,
    visa_details:{}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case LOADING_TRUE: 

        return{...state, loading:true}

    case COUNTRY_LIST:

        return { 
             ...state,
             country_list: payload,
             country_list_full:payload,
             loading: false 
            }; 

    case COUNTRY_FILTER: 

        return{...state, country_list: payload};

    case COUNTRY_SELECTED: 

        return{
            ...state,
            visa_list:payload,
            visa_list_full:payload,
            isSearchVisible:false,
            country_list: state.country_list_full
        };

    case VISA_FILTER: 

        return {...state,visa_list: payload};

    case TOGGLE_SEARCH_BAR: 

        return {
            ...state,
            isSearchVisible:!state.isSearchVisible,
            country_list: state.country_list_full,
             visa_list: state.visa_list_full
        };

    case VISA_SELECTED:

        return{
            ...state,
            visa_details:payload,
            isSearchVisible: false,
            visa_list: state.visa_list_full,
         };

    case GO_BACK: 

         return{
             ...state, 
             isSearchVisible: false,
             country_list: state.country_list_full,
             visa_list: state.visa_list_full
         };
         
    default:
        return state
    }
}
