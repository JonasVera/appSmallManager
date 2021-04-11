import React, { useEffect, useState } from 'react';
import {Alert, Image, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BorderlessButton} from 'react-native-gesture-handler';
import { AntDesign,SimpleLineIcons } from "@expo/vector-icons";
import {AuthContext} from '../Context/context';
import { Avatar, Accessory } from 'react-native-elements';
 
import logo from '../../assets/logo.png';

import styles from './headerStyles'; 
function Header(props){
    const {signOut} = React.useContext(AuthContext);
    const [userLog,setUserLog] = React.useState('');
    const navigation = useNavigation();
    const [ltAvatar,setLtAvatar] = useState(''); 

    const  displayData = async () => {
        try{
             var user = await AsyncStorage.getItem('user');
      
             setUserLog(user); 
             const letAv = userLog.substr(0,1);
             setLtAvatar(letAv);
            
        }catch(error){
            
        }                   
    } 
    displayData();
    return (
        <View style={styles.container}>
             <View style={styles.topBar}>
                 <View style={styles.tbnSair} >
                 <SimpleLineIcons   name={'arrow-left'} color={'#fff'}size={30}  />
                     <Text style={styles.txtSair}>Perfil</Text>
                 </View> 
            </View>
            <View style={styles.profile} >
                <Text style={styles.title}> {userLog}</Text>
             </View> 
        </View>
    );
}

export default Header;