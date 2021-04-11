import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({

    container:{
        padding:30,
        backgroundColor:'#8257e5',
        borderBottomEndRadius:20,
        borderBottomStartRadius:20,
    },
    topBar:{
        flexDirection:'row',
        alignContent:'space-between',
        
    },
    title:{
        color:'#fff',
        fontSize:20,
        textAlign:'center',
        marginVertical:10,
        fontFamily:'Poppins_600SemiBold',
        color:'#fff',
    },
    titlePage:{
        color:'#fff',
        fontSize:20,
        lineHeight:20,
        maxHeight:50,
        marginVertical:5
    },
    tbnSair:{
      flexDirection:'row',
      alignContent:'center',
      justifyContent:'center',
      marginTop:10

    },
    profile:{
       flexDirection:'row' ,
       justifyContent:'flex-start',
       alignItems:'center',
       paddingLeft:10
       
    },
    txtProfile:{
        fontFamily:'Poppins_600SemiBold',
        color:'#fff',
    },
    txtSair:{
        fontFamily:'Poppins_400Regular',
        color:'#fff',
        fontSize:18,
        paddingLeft:3,
        alignContent:'center',
    }
});

export default styles;