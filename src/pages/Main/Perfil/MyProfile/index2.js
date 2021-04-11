import React from 'react';
import {View,Image,Text,TextInput,TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
 
function MyProfile(){
    const navigation = useNavigation();

    function handleNavigateToRegisterUser(){
        navigation.navigate('RegiterUser');
    }
    
    function handleNavigateToHome(){
        navigation.navigate('HomeTabs');
    }
    return (
        <View style={styles.container}>
           
             
            <View style={styles.cardLogin}>
                 <View style={styles.headerCard}>
                     <Text style={styles.textLogin}> Faça seu Login </Text>
                 </View>
                 <View style={styles.formLogin}> 
                     
                 <TextInput placeholder="Email"
                      style={{height: 40,borderRadius:10, borderColor: 'gray',textAlign:'center',fontSize:18,marginTop:30, borderLeftColor:'#fff',borderWidth: 0.5}}
                 />
                  <TextInput placeholder="Senha"
                      style={{height: 40,borderRadius:10, borderColor: 'gray',marginTop:10,textAlign:'center',fontSize:18,marginBottom:20, borderWidth: 0.5}}
                 />
                    <TouchableOpacity  onPress={handleNavigateToHome} style={styles.btnLogin}>
                        <Text style={styles.txtEntrar}>Entrar</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={handleNavigateToRegisterUser} >
                        <Text style={styles.txtCadastro}> Ainda não é cadastrado ?  </Text>
                    </TouchableOpacity>
                    
                 </View>
                 
                  
            </View>
        </View>
    );
}

export default MyProfile;