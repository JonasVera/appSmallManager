import React, { useEffect, useState } from 'react';
import {Alert, Image, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BorderlessButton} from 'react-native-gesture-handler';
import { AntDesign } from "@expo/vector-icons";
import {AuthContext} from '../Context/context';
import { Avatar, Accessory } from 'react-native-elements';
import { AsyncStorage } from 'react-native';
import logo from '../../assets/profile.png';

import styles from './styles'; 
function PageHeader(props){
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
                 <BorderlessButton style={styles.tbnSair} onPress={()=>{signOut()}}>
                     <AntDesign name={'back'} size={20} color={'#fff'}/>
                    <Text style={styles.txtSair}>Sair</Text>
                 </BorderlessButton>
                  <Image source={logo}  style={{width:90,height:40,marginLeft:180,marginTop:10}}/>
                  
            </View>
            <View style={styles.profile} >
                    <Avatar
                      size="medium"
                           rounded
                           title={ltAvatar}
                           titleStyle={{color:'#8257E5',fontSize:40}}
                           containerStyle={{backgroundColor:'#fff',color:'#8257E5'}}
                    />
                        <Text style={styles.title}> {userLog}</Text>
                        
                   </View> 
        </View>
    );
}

export default PageHeader;