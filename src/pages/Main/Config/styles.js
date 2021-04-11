import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
         
        backgroundColor:'#ECECEC'
    },
    
    cardLogin:{
        backgroundColor:'#fff',
        margin:20,
        borderRadius:8,
         
    },
    formLogin:{
        margin:10, 
    },
    headerCard:{
        backgroundColor:'#8257E5',
        borderTopRightRadius:8,
        borderTopLeftRadius:8,
    },
    logo:{
        alignContent:'center',
        resizeMode:'contain',
        width:'100%',
        justifyContent:'center'
    },
    textRegister:{
        fontSize:22,
        textAlign:'center',
        margin:5,
        color:'#fff'
        
    },
    txtEntrar:{
        color:'#fff',
        fontSize:18,
        textAlign:'center',
        fontWeight:'bold'
    },
    txtCadastro:{
        fontSize:15,  
        marginTop:10,
        color:'#8257E5'
    },
    btnLogin:{
        width:'100%',
        textAlign:'center',
        backgroundColor:'#8257E5',
        padding:10,
        borderRadius:10
        
     }
});

export default styles;