import React from 'react';
import {View,Image,Text,TextInput,TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { AntDesign } from "@expo/vector-icons";
import styles from './styles'; 
import PageHeader from '../../../components/PageHeader/pageHeader';
function Produtos(){
    const navigation = useNavigation();
    function handleNavigateToLogin(){
        navigation.navigate('Login');
    }

    return (
        <>
          <PageHeader title={'Produtos'}/>
          <View style={styles.container}>
           
             
            <View style={styles.cardLogin}>
                 <View style={styles.headerCard}>
                     <Text style={styles.textRegister}>Produtos</Text>
                 </View>
                  
            </View>
        </View>
        </>
        
    );
}

export default Produtos;