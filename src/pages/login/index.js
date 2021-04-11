import React, { useEffect, useMemo, useState } from 'react';
import {View,Image,Text,TextInput,TouchableOpacity, ActivityIndicator, Alert, AsyncStorage} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Input } from 'react-native-elements';
import styles from './styles'; 
import {AuthContext} from '../../components/Context/context';
import api from '../../services/api';
import logo from '../../assets/logo.png';
import { CheckBox } from 'react-native-elements'
import RegisterUser from '../RegistreUser';
function CardInfo(){
   const navigation = useNavigation();
   const {signIn} = React.useContext(AuthContext);
   
   const [email,setEmail] = useState('MariaF@gmail.com');
   const [renderScremRegister,setRenderScremRegister] = useState(true); 
   const [password,setPassword] = useState('123');

   const [log,setLog] = useState(); 
    function handleNavigateToRegisterUser(){
        navigation.navigate('RegiterUser');
    }
    function handlerenderScremRegister (){
        setRenderScremRegister(true);
    }
    function handleNavigateToHome(){
        navigation.navigate('HomeTabs');
    }
    
       
    async function loginHandle (email,password) {
         
            const response = await api.post('auth',{email,password}).then((resp=>{
                if(resp.status == 200){
                     
                   signIn(true,resp.data.user,resp.data.token); 
                       
                }
                    
            }
            )).catch(err=>{
                Alert.alert("Aviso",'Usúario não existe !');
            });
                    
                         
    };
    return (
        
        <>
         
            <View style={styles.container}>
           <View style={styles.headerLogin}>
                <Text style={styles.txtBemVindo}>Bem vindo !</Text>
           </View>
          <Text>{log}</Text>
             <View style={styles.cardLogin}>
                 <View style={styles.headerCard}>
                     <Image source={logo}  style={{width:170,height:80}}/>
                 </View>
              <View style={styles.formLogin}> 
                     
                 <Input
                   value={email}
                   style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}}
                   onChangeText={(text)=>setEmail(text)}
                    placeholder="Digite seu email"
                    leftIcon={{ type: 'Fontisto', name: 'email', color:'#8257E5' }}
                  />
                  <Input
                   value={password}
                   
                   onChangeText={(text)=>setPassword(text)}
                   style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}}
                   
                    secureTextEntry={true}
                    placeholder="sua senha"
                    leftIcon={{ type: 'FontAwesome', name: 'lock', color:'#8257E5'}}
                   
                  />
                 <TouchableOpacity  onPress={()=>{loginHandle(email,password)}} style={styles.btnRecupSenha}>
                        <Text style={styles.txtRecuperarSenha}>Esqueceu a senha ?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>{loginHandle(email,password)}} style={styles.btnLogin}>
                        <Text style={styles.txtEntrar}>Entrar</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={handleNavigateToRegisterUser} style={styles.bntCadastro} >
                        <Text style={styles.txtCadastro}> Ainda não é cadastrado ?  </Text>
                    </TouchableOpacity>
                    
                 </View>
                  
            </View>
        </View>
        
        </>
    );
}

export default CardInfo;