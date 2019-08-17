import {createAppContainer,createStackNavigator, createDrawerNavigator} from 'react-navigation';

import leftBar from '../screens/Drawer'; 
import MainPage from '../screens/MainPage' 
import VisaListPage from '../screens/VisaListPage'
import VisaDetailPage from '../screens/VisaDetailPage' 
import AboutPage from '../screens/AboutPage'
import ContacPage from '../screens/ContacPage'

// Main Page is the only page drawer can open
// That is why it has one stack 
const drawerStack= createDrawerNavigator({
    MainPage
},{
    contentComponent: leftBar
})

// Main Stack is the stack where all pages are nested; except main page 
const mainStack = createStackNavigator({
    ContacPage,
    AboutPage,
    drawerStack,
    VisaListPage,
    VisaDetailPage,  
},
{
    headerMode:'none',
    initialRouteName:'drawerStack'
})
export default createAppContainer(mainStack); 