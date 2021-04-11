import React,{useState} from 'react';
import {View,Image,Text,TextInput,Animated,TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
 import Modal from './Modal';
import styles from './styles'; 
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../../components/PageHeader/Header';
import RoutersProfile from './RoutersProfile';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
 
import { FontAwesome,SimpleLineIcons,Ionicons,Feather} from "@expo/vector-icons";
import CardInfoEmpresa from '../../../components/CardInfoEmpresa';
import CardProduto from '../../../components/CardProduto';
import profileImg from '../../../assets/profile.png';
import ConfigImg from '../../../assets/settings.png';
import EmpresaImg from '../../../assets/buildings.png';

import CardInfo from '../../../components/CardInfor';
import MeuPefil from './MyProfile/MeuPerfil';
function Perfil(){
    const [modal, setModal] = useState(false);
    const [viewCard,setViewCard] = useState('Meu perfil');
    const navigation = useNavigation();
    function handleNavigateToMyProfile(){
        navigation.navigate('MyProfile');
    }

    function hadleRenderCard(view){
        setViewCard(view);
    } 
    return (
       
          
        <>
      <LinearGradient
        colors={['#6300D6', '#7406F4', '#923AF9']}
        style={styles.gradient}
       ></LinearGradient>
      
        <View style={styles.container}>
        <ScrollView>
            <Header title={'Produtos'}/>
            
            <View style={styles.headerButtons}>
             <TouchableOpacity  onPress={() =>hadleRenderCard('Meu perfil')} style={styles.cardButton}>
                    <Image source={profileImg}  style={{width:70,marginTop:-60,height:70}}/>
                     <Text style={styles.textButtonCard}>Meu perfil</Text>
                     <SimpleLineIcons   name={'arrow-right'} color={'#fff'}size={25}  />
                     
                </TouchableOpacity>
                
                <TouchableOpacity  onPress={() =>hadleRenderCard('Empresa')} style={styles.cardButton}>
                    
                <Image source={EmpresaImg}  style={{width:70,marginTop:-60,height:70}}/>
                        <Text style={styles.textButtonCard}>Minha Empresa</Text>
                        <SimpleLineIcons   name={'arrow-right'} color={'#fff'}size={30}  />
                </TouchableOpacity>
                <TouchableOpacity  onPress={() =>hadleRenderCard('Config')} style={styles.cardButton}>
                <Image source={ConfigImg}  style={{width:70,marginTop:-60,height:70}}/>
                     <Text style={styles.textButtonCard}>Configurações</Text>
                     <SimpleLineIcons   name={'arrow-right'} color={'#fff'}size={30}  />
                </TouchableOpacity> 
          </View>
          
           
           <MeuPefil/>
            
          </ScrollView>
         
          
      </View>
               
      </>
    );
}

export default Perfil;