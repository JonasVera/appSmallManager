import React, { useState } from 'react';
import {View,Image,Text,TextInput,TouchableOpacity, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { MaterialIcons,Feather} from "@expo/vector-icons";
import styles from './styles'; 
import PageHeader from '../../../components/PageHeader/pageHeader';
import {AuthContext} from '../../../components/Context/context';
import { Badge ,Divider} from 'react-native-elements';
function Home(){
    const navigation = useNavigation();
    const [viewInfoPagar,setViewPagar] = useState(true);
    const [viewInfoReceber,setViewInfoReceber] = useState(true);
    

    function disableViewPagar(){
   
        if(viewInfoPagar) 
            setViewPagar(false);
         else 
            setViewPagar(true);     
         
    }
    function disableViewReceber(){
   
        if(viewInfoReceber) 
            setViewInfoReceber(false);
         else 
             setViewInfoReceber(true);     
         
    }
    
    function handleNavigateToLogin(){
        navigation.navigate('Login');
    }

    return (
        <>
        <PageHeader title={'Home'}/>
        <View style={styles.container}>
            <View style={styles.infoFinances}>
                
                <View style={styles.infoApagar}>
                    <View>
                        <Text style={styles.textApagar}>Contas a pagar</Text>

                        <View style={styles.viewInfo}>
                        
                        {viewInfoPagar ? (
                            <>
                            <Text style={styles.textValue}>R$ 520,98</Text>
                            <TouchableOpacity onPress={()=> disableViewPagar()}>
                                 <Feather name={'eye'} size={20} color={'#fff'}/>
                             </TouchableOpacity>
                            </>
                        ): 
                        <>
                         <View style={styles.box}></View>    
                        <TouchableOpacity onPress={()=> disableViewPagar()}>
                                 <Feather name={'eye-off'} size={20} color={'#ff'}/>
                             </TouchableOpacity>
                        </>
                        }
                        </View>
                     </View>
                </View>

               <View style={styles.infoReceber}>
                      <View> 
                            <Text style={styles.textReceber}>Contas a receber</Text>
                            <View style={styles.viewInfo}>
                           
                            {viewInfoReceber ===true ? (
                                <>
                                     <Text style={styles.textValue}>R$ 1.520,98</Text>
                                    <TouchableOpacity onPress={()=> disableViewReceber()}>
                                         <Feather name={'eye'} size={20} color={'#fff'}/>
                                    </TouchableOpacity>
                                </>
                                
                            ) :  
                            <>
                               <View style={styles.box}></View>    
                            <TouchableOpacity onPress={()=> disableViewReceber()}>
                             
                             <Feather name={'eye-off'} size={20} color={'#fff'}/>
                            </TouchableOpacity>
                            
                            </>
                         }
                                
                              
                        </View>
                        
                        </View>
                </View>
            </View>
         
            <View style={styles.cardNotificacoes}>
                <View style={styles.cardHeader}>
                  <MaterialIcons  name={'notifications'} size={30} color={'#fff'}/>
                   <Text style={styles.textHeader}>Notificações</Text>
                     
                </View>
                <ScrollView>
                <View style={styles.cardBody}>
                  <View style={styles.notifItem}>
                      <Badge    status="success" value='10' />
                      <Text style={styles.txtNotificacao}>Contas a receber</Text>
                  </View>
                  <Divider/>
                  <View style={styles.notifItem}>
                      <Badge   size="large"  status="error" value='20' />
                      <Text style={styles.txtNotificacao}>Contas a pagar</Text>
                  </View>
                  <Divider/>
                  <View style={styles.notifItem}>
                      <Badge   size="large"  status="primary" value='5' />
                      <Text style={styles.txtNotificacao}>Mensagens</Text>
                  </View>
                  <Divider/>
                  <View style={styles.notifItem}>
                      <Badge   size="large"  status="primary" value='6' />
                      <Text style={styles.txtNotificacao}>Pedidos de Orçamento</Text>
                  </View>
                  </View>  
           </ScrollView>
            </View>
    
        </View>
                         
        </>
    );
}

export default Home;