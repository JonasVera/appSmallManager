import React, { useEffect, useState} from 'react';
import {View,Image,Text,TextInput,TouchableOpacity, Alert} from 'react-native';
import { AsyncStorage } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { FontAwesome5,Feather,Entypo,MaterialIcons } from "@expo/vector-icons";
import { ProgressBar, Colors } from 'react-native-paper';
import styles from './stylesMeuPerfil';
import { Avatar, Accessory, Divider } from 'react-native-elements';
import { CheckBox } from 'react-native-elements'
import { Input } from 'react-native-elements';
import api from '../../services/api';

function CardInfo(){
    const navigation = useNavigation();
    const [userName,setUserName] = useState('');
    const [id,setId] = useState();
    const [email,setEmail] = useState('');
    const [bio,setBio] = useState('');
    const [sexo,setSexo] = useState('');
    const [avatar,setAvatar] = useState('');
    const [ckF,setCkF] = useState(false);
    const [ckM,setCkM] = useState(false);
    const [ckIndefinido,setCkIndefinido] = useState(false);
    const [ltAvatar,setLtAvatar] = useState('');      
    const [password,setPassword] = useState('');
    const [dataCad,setDataCad] = useState('');

    const clearStorage = async () => {
         try {
              await AsyncStorage.removeItem('userToken');
              await AsyncStorage.removeItem('user');
              await AsyncStorage.removeItem('id');
              await AsyncStorage.removeItem('email');
              await AsyncStorage.removeItem('sexo');
              await AsyncStorage.removeItem('bio');
              await AsyncStorage.removeItem('avatar');
               
              await AsyncStorage.setItem('user',userName);
              await AsyncStorage.setItem('email',email);
              await AsyncStorage.setItem('sexo',sexo);
              await AsyncStorage.setItem('bio',bio);
              await AsyncStorage.setItem('avatar',"");
            
            } catch(e) {
               
            }
           
    };
    const  getIdStorage = async () => {
        try{
             var id = await AsyncStorage.getItem('id');
             var user = await AsyncStorage.getItem('user');
             var email = await AsyncStorage.getItem('email');
             var bio = await AsyncStorage.getItem('bio');
             var sexo = await AsyncStorage.getItem('sexo');
             var avatar = await AsyncStorage.getItem('avatar');
             var avatar = await AsyncStorage.getItem('avatar');
             var dataC = await AsyncStorage.getItem('dataCad');
             setId(id);  
             setUserName(user);  
             setBio(bio);
             setAvatar(avatar);
             setSexo(sexo);
             let dtF = dataC.split('-');
             let dia = dtF[2].split('T');
             let mes = dtF[1];
             let ano = dtF[0];
             
             let Formt =dia[0]+"/"+mes+"/"+ano;
             setDataCad(Formt);
                 
             if(sexo != ''){
                if(sexo === 'M'){
                    setCkM(true);
                }else if (sexo == 'F'){
                    setCkF(true);
                }else if(sexo == 'I')
                    setCkIndefinido(true);

             }
                 
             setEmail(email);
              if(userName != undefined){
                let letAv = userName.substr(0,1);
                setLtAvatar(letAv);
              }
             
        }catch(error){
            
        }          
           
    }  
    
    function updateUser(){
        if(password != ''){
              
            if(userName != '' && email != ''){
                const resp = api.put(`users/${id}`,{ 
                    username: userName,
                    avatar: "null",
                    email: email,
                    bio: bio,
                    gender: sexo,
                    password:password });
                    clearStorage();
                    setPassword('');
                    Alert.alert("Sucesso","Dados alterados !");
            }else{
                Alert.alert("Aviso","Usúario e email não estão preenchidos");
            }
        }else{
            Alert.alert("Aviso","Informe sua senha para alterar seus dados");
        }
    }
    useEffect(()=>{
        getIdStorage();
          
    },);
    
    return (
        <View style={styles.container}>
            
            <View style={styles.cardLogin}>
            
                 <View style={styles.headerCard}>
                     <Text style={styles.textHeader}> Meu perfil </Text>
                 </View>
                 <View style={styles.formLogin}>
                  <View style={styles.grupInfo}>
                  <Avatar
  rounded
  source={{
    uri:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  }}
/>

                        <Avatar
                           size="medium"
                           rounded
                           title={ltAvatar}
                           source={{
                            uri:
                              'http://192.168.42.235:4520/files/c281f48HZJAPu7RcRWCm2JxZw3fA3TZWgFt4.jpg',
                          }}
                           containerStyle={{backgroundColor:'#8257E5'}}
                       />
                       <Text style={styles.txtInfo}>
                             Precione o avatar para alterar
                        </Text>
                            
                     </View>
                     <Text style={styles.txtInfo}>
                                Data de Cadastro: {dataCad}
                            </Text>
                     <Divider/>
                        <View style={styles.grupInfo}>
                        <Input  style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}} 
                                    value={userName}
                                    onChangeText={(text)=>setUserName(text)}
                                    placeholder="Nome de usuario"
                                    leftIcon={<FontAwesome5 name={'user'}  color={'#8257E5'} size={20}  />}
                                />
                        </View>
                        <View style={styles.grupInfo}>
                        <Input 
                                  value={email}
                                  onChangeText={(text)=>setEmail(text)}
                                  style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}} 
                                  placeholder="Email"
                                  leftIcon={{ type: 'Fontisto', name: 'email', color:'#8257E5' }}
                                />
                        </View>
                       <View style={styles.grupInfo}>
                            
                        </View> 
                        <View style={styles.grupInfo}>
                             <Input  style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}}
                                     value={bio}
                                    onChangeText={(text)=>setBio(text)}
                                    placeholder="Bio"
                                    leftIcon={ <Feather name={'align-left'} color={'#8257E5'}size={30}  />}
                                />
                        </View> 
                      
                      <View style={styles.grupInfo}>
                            <CheckBox
                                 style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}} 
                                 checked={ckF}  
                                 onPress={()=> {!ckF ? (setCkF(true),setSexo('F')): setCkF(false);}} 
                                 title='Fem'
                                 checkedColor='#8257E5'
                                 checkedIcon='dot-circle-o'
                                 containerStyle={{backgroundColor:'#fff',width:90}}
                                
                                 uncheckedIcon='circle-o' />
                            <CheckBox
                                    style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}} 
                                    title='Masc'
                                    checked={ckM}  
                                    containerStyle={{backgroundColor:'#fff',width:90}}
                                    onPress={()=> {!ckM ? (setCkM(true),setSexo('M')): setCkM(false);} } 
                                    checkedIcon='dot-circle-o'
                                    checkedColor='#8257E5'
                                    uncheckedIcon='circle-o' />
                             <CheckBox
                                    checked={ckIndefinido}
                                    onPress={()=> {!ckIndefinido ? (setCkIndefinido(true),setSexo('I')): setCkIndefinido(false);} } 
                                    style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}} 
                                    containerStyle={{backgroundColor:'#fff',width:90}}
                                    checkedColor='#8257E5'
                                    title='Indef.'
                                    checkedIcon='dot-circle-o'
                                    uncheckedIcon='circle-o' />
                            
                        </View> 
                        <Input  style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}} 
                             secureTextEntry={true}
                             value={password}
                             onChangeText={(text)=>setPassword(text)}
                             placeholder="sua senha"
                             leftIcon={{ type: 'FontAwesome', name: 'lock',color:'#8257E5'  }}
                       />
                     
                        <TouchableOpacity  onPress={()=> updateUser()} style={styles.btnEdit}>
                       
                        <Text style={styles.txtEntrar}>
                            <FontAwesome5 name={'check'}  color={'#fff'} size={20}  />
                                Salvar
                        </Text>
                    </TouchableOpacity>
                    
                    
                 </View>
                
                   
                  
            </View>
        </View>
    );
}

export default CardInfo;