import React,{useState} from 'react';
import {View,Image,Text,Bu,TextInput,Animated,TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
 import Modal from './Modal';
import styles from './styles'; 
import Header from '../../../components/PageHeader/Header';
import RoutersProfile from './RoutersProfile';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import CardInfo from '../../../components/CardInfor';
import { FontAwesome,MaterialCommunityIcons,Ionicons,Feather} from "@expo/vector-icons";
import CardInfoEmpresa from '../../../components/CardInfoEmpresa';
import CardProduto from '../../../components/CardProduto';
import { Header } from 'react-native/Libraries/NewAppScreen';
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
        <Header title={'Produtos'}/>
        <View style={styles.container}>
        <CardInfo/>  
             <View style={styles.headerButtons}>
                <TouchableOpacity  onPress={() =>hadleRenderCard('Meu perfil')} style={styles.cardButton}>
                     <FontAwesome style={{justifyContent:'center'}} name={'user-circle'} color={'#fff'}size={20}  />
                     <Text style={styles.textButtonCard}>Meu perfil</Text>
                </TouchableOpacity>
                
                <TouchableOpacity  onPress={() =>hadleRenderCard('Empresa')} style={styles.cardButton}>
                     <Feather style={{justifyContent:'center'}} name={'briefcase'} color={'#fff'}size={20}  />
                     <Text style={styles.textButtonCard}>Empresa</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() =>hadleRenderCard('Config')} style={styles.cardButton}>
                     <FontAwesome style={{justifyContent:'center'}} name={'cog'} color={'#fff'}size={20}  />
                     <Text style={styles.textButtonCard}>Config.</Text>
                </TouchableOpacity>
                 
          </View>
           <ScrollView>
            
            
            
          </ScrollView>
         
          
      </View>
               
      </>
    );
}

export default Perfil;