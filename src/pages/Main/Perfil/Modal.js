import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet,ScrollView, Image,TouchableOpacity, Animated, Dimensions } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
 
const { height } = Dimensions.get('window')

const Modal = ({ show, close }) => {
  const [state, setState] = useState({
    opacity: new Animated.Value(0),
    container: new Animated.Value(height),
    modal: new Animated.Value(height)
  })

  const openModal = () => {
      Animated.sequence([
      Animated.timing(state.container, { toValue: 0, duration: 100 }),
      Animated.timing(state.opacity, { toValue: 1, duration: 300 }),
      Animated.spring(state.modal, { toValue: 0, bounciness: 5, useNativeDriver: true })
    ]).start()
  }

  const closeModal = () => {
    Animated.sequence([
      Animated.timing(state.modal, { toValue: height, duration: 250, useNativeDriver: true }),
      Animated.timing(state.opacity, { toValue: 0, duration: 300 }),
      Animated.timing(state.container, { toValue: height, duration: 100 })
    ]).start()
  }

  useEffect(() => {
    console.log(show)
    if(show){
      openModal()
    }else{
      closeModal()
    }
  }, [show])

  return( 
    <Animated.View 
      style={[styles.container, {
        opacity: state.opacity,
        transform: [
          { translateY: state.container }
        ]
      }]}
    >
    
      <Animated.View 
        style={[styles.modal, {
          transform: [
            { translateY: state.modal }
          ]
        }]}
      >
      <ScrollView> 
        <View style={styles.indicator} />
        <Text style={{ color: '#000' }}>Meu usúario</Text>
        <View style={styles.formLogin}> 
                     
                <View />
                
                 <TextInput placeholder="Nome de usúario"
                         style={{height: 40,borderRadius:10, borderColor: 'gray',textAlign:'center',fontSize:15,marginTop:30, borderLeftColor:'#fff',borderWidth: 0.5}}
                 />
 
                 <TextInput placeholder="Nome de usúario"
                      style={{height: 40,borderRadius:10, borderColor: 'gray',textAlign:'center',fontSize:15,marginTop:30, borderLeftColor:'#fff',borderWidth: 0.5}}
                 />
                  <TextInput placeholder="Email"
                      style={{height: 40,borderRadius:10, borderColor: 'gray',marginTop:10,textAlign:'center',fontSize:15, borderWidth: 0.5}}
                 />
                 <TextInput placeholder="Senha"
                      style={{height: 40,borderRadius:10, borderColor: 'gray',textAlign:'center',fontSize:15,marginTop:20, borderLeftColor:'#fff',borderWidth: 0.5}}
                 />
                  <TextInput placeholder="Confirmar Senha"
                      style={{height: 40,borderRadius:10, borderColor: 'gray',marginTop:10,textAlign:'center',fontSize:18,marginBottom:20, borderWidth: 0.5}}
                  />
              </View>
 
        <TouchableOpacity style={styles.btn} onPress={close}>
          <Text style={{ color: '#fff' }}>Salvar</Text>
        </TouchableOpacity>
        </ScrollView>
      </Animated.View>
      
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    position: 'absolute'
  },
  modal: {
    bottom: 0,
    position: 'absolute',
    height: '80%',
    backgroundColor: '#fff',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft: 25,
    paddingRight: 25
  },
  indicator: {
    width: 50,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 5
  },
  text: {
    marginTop: 50,
    textAlign: 'center'
  },
  btn: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#9b59b6',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  }
})

export default Modal