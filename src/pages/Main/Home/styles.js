import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10, 
        backgroundColor:'#ECECEC'
    },
    infoFinances:{
        width:'90%',
        flexDirection:'row',
        marginTop:20,
        alignItems:'center',
        justifyContent:'space-around'
    },
     infoApagar:{
        borderRadius:8,
        justifyContent:'center',
        marginRight:55,
        backgroundColor:'#8257E5',
        borderLeftWidth:5,
        borderLeftColor:'#FF2424',
         width:'50%',
         marginLeft:30,
         height:95,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.84,
        
        elevation: 2,
     },
     infoReceber:{
         borderRadius:8,
         justifyContent:'center',
         marginLeft:30,
        backgroundColor:'#8257E5',
       width:'50%',
       height:95,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      borderLeftWidth:6,
      borderLeftColor:'#00C12D',

      shadowOpacity: 0.25,
      shadowRadius: 1.84,
      
      elevation: 2,
   },
   viewInfo:{
      flexDirection:'row',
      alignContent:'center',
      alignItems:'center',
      padding:20,
      justifyContent:'space-around'
   },
   textApagar:{
    fontSize:18,
    color:'#fff',
    textAlign:'center',
    fontFamily:'Archivo_700Bold',
    textAlign:'center',
   },
   textReceber:{
    fontSize:18,
    fontFamily:'Archivo_700Bold',
    textAlign:'center',
    color:'#fff'
  },
  textValue:{
    fontSize:18,
    textAlign:'center',
    color:'#fff',
    fontFamily:'Poppins_600SemiBold'
  },

  cardNotificacoes:{
      width:'100%',
      
      marginTop:20,
      borderRadius:8,
      backgroundColor:'#fff',
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 2,
   },
   shadowOpacity: 0.25,
   shadowRadius: 1.84,
   
   elevation: 2,
  },
  cardHeader:{
    flexDirection:'row',
    borderTopEndRadius:8,
    borderTopLeftRadius:8,
    backgroundColor:'#8257E5',
   
    color:'#fff'
  },
  textHeader:{
    color:'#fff',
    justifyContent:'center',
    fontSize:20,
    padding:5
  },
  cardBody:{
      justifyContent:'center'
  },
  textCardBody:{
      marginTop:50,
      fontSize:18,
    textAlign:'center'
  },
  box:{
    width:80,
    height:15,
    backgroundColor:'#A663FF',
    justifyContent:'center',
    borderRadius:8,
  },
  notifItem:{
    alignContent:'center',
    flexDirection:'row',
    padding:10
  },
  txtNotificacao:{
    fontSize:20,
    padding:2
  }
});

export default styles;