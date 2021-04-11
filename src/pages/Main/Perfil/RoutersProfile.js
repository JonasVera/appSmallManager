import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import MyProfile from './MyProfile/index2';
 
const {Navigator,Screen} = createStackNavigator();

function RoutersProfile (){
    return(
    
        <Navigator screenOptions={{
            headerShown:false
        }}>
            <Screen name="MyProfile" component={MyProfile}/>
             
        </Navigator>
   
    ); 
}
export default RoutersProfile;