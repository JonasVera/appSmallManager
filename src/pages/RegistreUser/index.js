import React, { useState } from 'react';
import {View,Text,TextInput,Alert,TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Input } from 'react-native-elements';
import { FontAwesome5} from "@expo/vector-icons";
import styles from './styles';
import {AuthContext} from '../../components/Context/context';
import api from '../../services/api';

function RegisterUser(){
    const navigation = useNavigation();
    const [username,setUserName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [statusRegister,setStatusRegister] = useState(false);
    const {signUp} = React.useContext(AuthContext);
   async function  handleRegisterUser()  {
    
         try {
         if(statusRegister){
           handleNavigateToLogin();
         }else{
          if(email !== '' || password !== ''){
            if(password === confirmPassword){
              const resp = await api.post('users',{username,email,password});
              setStatusRegister(true);
            } 
            
             else{
              Alert.alert("Senhas não conferem !"); 
             }
                  
      }else{
        Alert.alert('Alerta',"Preencha todos os dados necessário para finalizar o cadastro !");
      }
         }
             
         } catch (error) {
             Alert.alert("Aviso","Já existe um usúario com estes dados em nossa base !");
         }
          
    }

    function handleNavigateToLogin(){
        navigation.navigate('Login');
    }

    return (
      
        <View style={styles.container}>
             <View style={styles.headerLogin}>
                <Text style={styles.txtBemVindo}>Cadastre-se </Text>
           </View>
            <View style={styles.cardLogin}>
                 
                 <View style={styles.formLogin}> 
                 
                 <Input
                    style={{color:'#8257E5',fontWeight:'bold'}}
                    value={username}
                    onChangeText={(text)=>setUserName(text)}
                    placeholder="Nome de usúario"
                    errorMessage={username !== '' ? "" : "Preencha com seu nome !"}
                    leftIcon={<FontAwesome5 name={'user-circle'} color={'#8257E5'}size={24}  />}
                  />
                   
                  <Input
                    style={{color:'#8257E5',fontWeight:'bold'}}
                    value={email}
                    onChangeText={(text)=>setEmail(text)}
                    placeholder="Email"
                    errorStyle={{ color: 'red' }}
                    errorMessage={email !== '' ? "" : "Preencha com seu email !"}
                    leftIcon={{ type: 'Fontisto', name: 'email', color:'#8257E5' }}
                  />
                   <Input
                    style={{color:'#8257E5',fontWeight:'bold'}}
                    value={password}
                    onChangeText={(text)=>setPassword(text)}
                    secureTextEntry={true}
                    placeholder="Senha"
                    errorMessage={password !== '' ? "" : "Preencha com sua senha !"}
                    leftIcon={{ type: 'FontAwesome', name: 'lock', color:'#8257E5'}}
                   
                  />
                  <Input
                    style={{color:'#8257E5',fontWeight:'bold'}}
                    value={confirmPassword}
                    onChangeText={(text)=>setConfirmPassword(text)}
                    secureTextEntry={true}
                    secureTextEntry={true}
                    placeholder="Confirmar senha"
                    errorMessage={confirmPassword === password ? "" : "Senhas não conferem "}
                    leftIcon={{ type: 'FontAwesome', name: 'lock', color:'#8257E5'}}
                   
                  />
                    <TouchableOpacity onPress={handleRegisterUser} style={styles.btnLogin}>
                        <Text style={styles.txtEntrar}>{statusRegister ? 'Fazer login agora' : 'Finalizar cadastro'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleNavigateToLogin} style={styles.bntCadastro} >
                        <Text style={styles.txtCadastro}> Voltar ao login   </Text>
                    </TouchableOpacity>
                 </View>
                
                   
                  
            </View>
        </View>
    );
}

export default RegisterUser;