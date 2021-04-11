import React,{useState} from 'react';
import {View,Image,Switch,Text,TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { FontAwesome5,MaterialCommunityIcons,Entypo,Feather} from "@expo/vector-icons";
import styles from './styles';
import { Avatar, Accessory } from 'react-native-elements';
import { Divider } from 'react-native-elements';
import { Input } from 'react-native-elements';
import { TouchableOpacity } from "react-native-gesture-handler";
 
function CardInfoEmpresa(){
    const navigation = useNavigation();
 
    return (
        <View style={styles.container}>
            
            <View style={styles.cardLogin}>
                 <View style={styles.headerCard}>
                     <Text style={styles.textHeader}> Empresa </Text>
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
                          
                        </View>
                        <View style={styles.grupInfo}>
                             <Input style={{width:'50%'}} 
                                     
                                    placeholder="Nome da empresa"
                                    leftIcon={<Feather name={'briefcase'} color={'#8257E5'}size={30}  />}
                                />
                        </View> 
                        <View style={styles.grupInfo}>
                             <Input style={{width:'50%'}} 
                                    placeholder="Ramo de atividade"
                                    leftIcon={<Feather name={'bookmark'} color={'#8257E5'}size={30}  />}
                                />
                        </View> 
                  
                        <View style={styles.grupInfo}>
                             <Input style={{width:'50%'}} 
                                    placeholder="CNPJ"
                                    leftIcon={<MaterialCommunityIcons name={'file-document-outline'} color={'#8257E5'}size={30}  />}
                                />
                        </View> 
                       
                        <View style={styles.grupInfo}>
                             <Input style={{width:'50%'}} 
                                    placeholder="Descrição da empresa"
                                    leftIcon={ <Feather name={'align-left'} color={'#8257E5'}size={30}  />}
                                />
                        </View> 

                        <Divider/> 
                        <View style={styles.grupInfo}>
                            
                        </View> 
                        <View style={styles.grupInfo}>
                             <Input style={{width:'50%'}} 
                                    placeholder="Url instagram"
                                    leftIcon={ <FontAwesome5 name={'instagram'} color={'#8257E5'}size={30}  /> }
                                />
                        </View> 
                       <View style={styles.grupInfo}>
                        
                        <Input style={{width:'50%'}} 
                                    placeholder="Url Facebook"
                                    leftIcon={<FontAwesome5 name={'facebook'} color={'#8257E5'}size={30}  /> }
                                />
                        </View>  
                        <View style={styles.grupInfo}>
                           
                            <Input style={{width:'50%'}} 
                                    placeholder="Whatsapp"
                                    leftIcon={  <FontAwesome5 name={'whatsapp'} color={'#8257E5'}size={30}  /> }
                                />
                        </View>  
                      <Divider/>
                      <View style={styles.grupInfo}>
                                 <Input 
                                    placeholder="Endereço"
                                    leftIcon={<Entypo name={'address'} color={'#8257E5'}size={30}  />}
                                />
                          </View>

                       <View style={styles.grupInfo}>
                                 <Input 
                                    placeholder="Região de atendimento"
                                    leftIcon={<MaterialCommunityIcons name={'web'} color={'#8257E5'}size={30}  />}
                                />
                          </View>
                          <View style={styles.grupInfo}>
                                <FontAwesome5 name={'clock'} color={'#8257E5'}size={30}  />
                                <Text style={styles.txtLabel}> Funcionamento</Text>
                                <TouchableOpacity  style={styles.btnEdit}>
                                    <Text style={styles.txtEntrar}>
                                    <FontAwesome5 name={'calendar'}  color={'#8257E5'} size={20}  />  Configurar
                                         
                                </Text>
                    </TouchableOpacity>
                          </View>    
                                <View style={styles.grupInfoFuncinamento}>
                                    <View style={styles.itemDia}>
                                     
                                        <Text style={styles.txtLabel}>  Segunda-feira </Text>
                                        <Text  style={styles.txtLabel} >08:00 - 17:30</Text>
                                    </View>
                                    <View style={styles.itemDia}>
                                        <Text style={styles.txtLabel}>  Terça-feira </Text>
                                        <Text  style={styles.txtLabel} >08:00 - 17:30</Text>
                                    </View>
                                    <View style={styles.itemDia}>
                                        <Text style={styles.txtLabel}>  Quarta-feira </Text>
                                        <Text  style={styles.txtLabel} >08:00 - 17:30</Text>
                                    </View>
                                    <View style={styles.itemDia}>
                                        <Text style={styles.txtLabel}>  Quinta-feira </Text>
                                        <Text  style={styles.txtLabel} >08:00 - 17:30</Text>
                                    </View>
                                    <View style={styles.itemDia}>
                                        <Text style={styles.txtLabel}>  Sexta-feira </Text>
                                        <Text  style={styles.txtLabel} >08:00 - 17:30</Text>
                                    </View>
                                    <View style={styles.itemDia}>
                                        <Text style={styles.txtLabel}>  Sábado </Text>
                                        <Text  style={styles.txtLabel} >08:00 - 12:00</Text>
                                    </View>
                                     
                                </View>
                        <TouchableOpacity  style={styles.btnEdit}>
                        <Text style={styles.txtEntrar}>
                        <FontAwesome5 name={'check'}  color={'#8257E5'} size={20}  />
                               Salvar
                        </Text>
                    </TouchableOpacity>
                    
                    
                 </View>
                
                   
                  
            </View>
        </View>
    );
}

export default CardInfoEmpresa;