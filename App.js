import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, Alert, StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/login';
import {AuthContext} from './src/components/Context/context';
import AppStack from './src/routes/AppStack';
import Home from './src/pages/Main/Home';
import { AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeTabs from './src/routes/HomeTabs';
import {AppLoading} from 'expo';
export default function App() {
 
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };
  
  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async(auth,data,token) => {
        
        if(auth){
         try {
         
             await AsyncStorage.setItem('user',data.username);
             await AsyncStorage.setItem('data',JSON.stringify(data));
             await AsyncStorage.setItem('email',data.email);
             await AsyncStorage.setItem('sexo',data.gender);
             await AsyncStorage.setItem('bio',data.bio);
             await AsyncStorage.setItem('avatar',JSON.stringify(data.avatar));
             await AsyncStorage.setItem('dataCad',data.create_at);
    
             const id = data.id.toString();
             await AsyncStorage.setItem('id',JSON.stringify(id));

             await AsyncStorage.setItem('userToken',token);
             
             
             dispatch({ type: 'LOGIN',token: token });       
            
          } catch(e) {
        
        }
     } 
     
    },
    signOut: async() => {
       
      try {
        await AsyncStorageStatic.removeItem('userToken');
        await AsyncStorage.removeItem('user');
        await AsyncStorage.removeItem('id');
        await AsyncStorage.removeItem('email');
        await AsyncStorage.removeItem('sexo');
        await AsyncStorage.removeItem('bio');
        await AsyncStorage.removeItem('avatar');
        await AsyncStorage.removeItem('dataCad');

         
      } catch(e) {
         
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
      // setUserToken('fgkj');
      // setIsLoading(false);
      dispatch({ type: 'RETRIEVE_TOKEN', token: null });
    },
     
  }), []);
     
  useEffect(() => {
    setTimeout(async() => {
     let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e) {
        
      }
        dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);
 
      return (
        <>
         
          <AuthContext.Provider value={authContext}>
          <NavigationContainer>
          <HomeTabs/>
 
         </NavigationContainer>
           
          </AuthContext.Provider>
          <StatusBar style='light' backgroundColor='#8257E5'/>
           
        </>
      );
    }
    
 
