import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function SignInSc ({navigation}) {
  return (
      <View style={styles.background}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>SignIn</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')} >
        <Text style={styles.buttonText}>Go Sign Up</Text>
       </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
  background: {
    width:"100%",
    height:"100%",
    maxWidth:500,
    maxWidth:900,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 200,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: '#4ecdc4',
    padding: 5,
    margin: '2%'
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'navy',
    textAlign: 'center'
  },
  inlineText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'navy',
    textAlign: 'center',
    marginTop: '5%',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  titleContainer: {
    position: 'absolute',
    top: 170,
  },
});