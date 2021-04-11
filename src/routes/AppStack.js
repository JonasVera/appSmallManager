import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import Login from '../pages/login';
import RegisterUser from '../pages/RegistreUser';
import Home from '../pages/Main/Home';
import HomeTabs from './HomeTabs';

const {Navigator,Screen} = createStackNavigator();

function AppStack (){
    return(
  
        <Navigator screenOptions={{
            headerShown:false
        }}>
            <Screen name="Login" component={Login}/>
            <Screen name="RegiterUser" component={RegisterUser}/>
             
        </Navigator>
     
    ); 
}
export default AppStack;