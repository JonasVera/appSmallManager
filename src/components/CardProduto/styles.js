import {StyleSheet} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
         
        backgroundColor:'#ECECEC'
    },
    
    cardLogin:{
        backgroundColor:'#fff',
        margin:10,
        borderRadius:8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.84,
        
        elevation: 2,
         
    },
    formLogin:{
        margin:10, 
    },
    headerCard:{
        backgroundColor:'#8257E5',
        borderTopRightRadius:8,
        borderTopLeftRadius:8,
        height:25,
    },
    logo:{
        
        alignContent:'center',
        resizeMode:'contain',
        width:'100%',
        justifyContent:'center'
    },
    textHeader:{
        fontSize:18,
        textAlign:'center',
        marginTop:0,
        color:'#fff',
       
    },
    txtEntrar:{
        color:'#8257E5',
        fontSize:18,
        textAlign:'center',
        fontWeight:'bold'
    },
    txtCadastro:{
        fontSize:17,  
        marginTop:10,
        color:'#8257E5'
    },
    btnEdit:{
        width:'100%',
        textAlign:'center',
        backgroundColor:'transparent',
        padding:5,
    },
     grupInfo:{
         flexDirection:'row',
         padding:10,
     },
     txtLabel:{
         fontSize:20,
         alignItems:'center',
         
     }
     
});

export default styles;