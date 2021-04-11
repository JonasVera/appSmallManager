import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#8257E5',
       
    },
    
    cardLogin:{
        backgroundColor:'#fff',
        borderTopRightRadius:30,
        borderTopLeftRadius:30,  
        height:600,   
    },
    headerLogin:{
        height:300,  
        justifyContent:'center',
       
    },
    headerCard:{
        alignItems:'center',
        marginTop:10
    },
    txtBemVindo:{
        color:'#fff',
        fontSize:35,
        fontFamily:'Poppins_600SemiBold',
        marginTop:250,
        marginLeft:20, 
        justifyContent:'center',
         
    },
    formLogin:{
        margin:20,
        marginTop:20,
        alignContent:'center',
        justifyContent:'center',
         
    },
 
    logo:{
        
        alignContent:'center',
        resizeMode:'contain',
        width:'100%',
        justifyContent:'center'
    },
    textLogin:{
        fontSize:22,
        textAlign:'center',
        fontFamily:'Poppins_400Regular',
        color:'#fff',
       
    },
    txtEntrar:{
        color:'#fff',
        fontSize:18,
        textAlign:'center',
        fontFamily:'Poppins_400Regular',
    },
    txtCadastro:{
        fontSize:17,  
        textAlign:'center',
        fontFamily:'Poppins_400Regular',
        color:'#8257E5'
    },
    txtRecuperarSenha:{
        fontSize:18,
        marginLeft:5,
        marginBottom:10,  
        textAlign:'left',
        fontFamily:'Poppins_400Regular',
      
        color:'#8257E5'
    },
    btnLogin:{
        width:'100%',
        textAlign:'center',
        backgroundColor:'#8257E5',
        padding:10,
        borderRadius:10
        
     },
     bntCadastro:{
        borderWidth:2,
        borderColor:'#8257E5',
        padding:10,
        marginTop:5,
        borderRadius:10
     }
});

export default styles;