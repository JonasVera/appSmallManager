import React from 'react';
import {View,Image,Text,TextInput,TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles'; 
import PageHeader from '../../../components/PageHeader/pageHeader';
function Contacts(){
    const navigation = useNavigation();
    function handleNavigateToLogin(){
        navigation.navigate('Login');
    }

    return (
        <>
        <PageHeader title={'Contatos'}/>
        <View style={styles.container}>
          
          <View style={styles.cardLogin}>
               <View style={styles.headerCard}>
                   <Text style={styles.textRegister}> Configurações</Text>
               </View>
                
          </View>
      </View>
      </>
    );
}

export default Contacts;