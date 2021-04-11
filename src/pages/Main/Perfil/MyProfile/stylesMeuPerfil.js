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
    avisoPerfil:{
       margin:5,

    },
    txtPerfilInp:{
        color:'#8257E5',
        marginTop:5,
        marginBottom:5,
    },
    txtInfo:{
        color:'#8257E5',
        fontSize:15,
        paddingTop:10,
        paddingLeft:10,
        textAlign:'center',
        fontFamily:'Archivo_700Bold'
    },
     
    txtEntrar:{
        color:'#fff',
        fontSize:15,
        paddingLeft:20,
        textAlign:'center',
        fontFamily:'Poppins_400Regular'
    },
    txtCadastro:{
        fontSize:17,  
        textAlign:'center',
        color:'#8257E5'
    },
    btnEdit:{ 
        borderRadius:8,
        textAlign:'center',
        backgroundColor:'#8257E5',
        padding:5,
         
     },
     
     grupInfo:{
         flexDirection:'row',
          
     },
     txtLabel:{
         fontSize:20,
         alignItems:'center',
         
     }
     
});

export default styles;