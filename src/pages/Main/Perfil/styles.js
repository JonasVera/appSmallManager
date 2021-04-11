import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container:{
         flex:1,
         marginTop:20,
         color:'#fff',
         width:'100%'
    },
     
    textButtonCard:{
        color:'#fff',
        fontSize:20,
        marginLeft:20,
        width:'60%' 
    }, 
    headerButtons:{
       backgroundColor:'#fff',
       padding:10, 
       borderColor:'#8257e5',
       borderStartWidth:3,
       borderTopEndRadius:40,
       borderTopStartRadius:40,
       shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.84,
        elevation:24,
       height:'100%'  
    },
    cardButton:{ 
        flexDirection:'row',
        alignContent:'space-between',
        backgroundColor:"#6300D6",   
        padding:15, 
        marginEnd:5,
        marginTop:50,
        marginStart:10,  
        borderRadius:8,
        alignItems:'center', 
        shadowColor: "#0000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.02,
        shadowRadius: 4.84,
        elevation:15 
        
    },
    gradient:{
        height:'100%',
        position:"absolute",
        left:0,
        right:0,
        top:0,
        paddingHorizontal:20,
        paddingTop:30
    },
});

export default styles;