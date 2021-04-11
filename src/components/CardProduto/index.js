import React from 'react';
import {View,Image,Text,TextInput,TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { FontAwesome5,Feather } from "@expo/vector-icons";
import styles from './styles';
import { Input } from 'react-native-elements';
import { Avatar, Accessory } from 'react-native-elements';
function CardProduto(){
    const navigation = useNavigation();

    
    return (
        <View style={styles.container}>
           
             
            <View style={styles.cardLogin}>
                 <View style={styles.headerCard}>
                     <Text style={styles.textHeader}> Produto </Text>
                 </View>
                 <View style={styles.formLogin}>
     
                        <View style={styles.grupInfo}>
                             <Feather name={'tag'} color={'#8257E5'}size={30}  />
                             <Text style={styles.txtLabel}> nome do produto</Text>
                        </View> 
                       
                        <View style={styles.s}>
                             <Feather name={'tag'} color={'#8257E5'}size={30}  />
                             <Text style={styles.txtLabel}> Preço de venda</Text>
                        </View> 
                        <View style={styles.grupInfo}>
                             <Feather name={'tag'} color={'#8257E5'}size={30}  />
                             <Text style={styles.txtLabel}>Preço de custo</Text>
                        </View> 
                        <View style={styles.grupInfo}>
                             <Feather name={'tag'} color={'#8257E5'}size={30}  />
                             <Text style={styles.txtLabel}>Estoque minimo</Text>
                        </View> 
                        <View style={styles.grupInfo}>
                             <Feather name={'tag'} color={'#8257E5'}size={30}  />
                             <Text style={styles.txtLabel}>Estoque máximo</Text>
                        </View> 
                        <View style={styles.grupInfo}>
                             <Feather name={'tag'} color={'#8257E5'}size={30}  />
                             <Text style={styles.txtLabel}>Descrição do produto</Text>
                        </View>
                    
                    <TouchableOpacity  style={styles.btnEdit}>
                       
                        <Text style={styles.txtEntrar}>
                            <FontAwesome5 name={'edit'}  color={'#8257E5'} size={20}  />
                               Editar
                        </Text>
                    </TouchableOpacity>
                    
                    
                 </View>
                
                   
                  
            </View>
        </View>
    );
}

export default CardProduto;