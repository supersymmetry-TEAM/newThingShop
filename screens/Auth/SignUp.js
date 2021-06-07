import { StyleSheet, View, Text, TouchableOpacity,Alert,Dimensions,SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
var height = Dimensions.get('window').height; //full height
var width = Dimensions.get('window').width; //full width


export default function SignUpSc ({navigation}) {
  const emailRegistration = async(email, password, displayName) => {
    if(email === "" && password === "" && displayName === ""){
      alert("E,P");
      }else{
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      const currentUser = auth().currentUser;
      const db = firestore();
      db.collection("users")
        .doc(currentUser.uid)
        .set({
          uid: currentUser.uid,
          displayName: displayName,
          email: currentUser.email,
          photoURL: currentUser.photoURL,
          providerId: currentUser.providerId,
        });
      await auth().signInWithEmailAndPassword(email, password);

    } catch (err) {
      Alert.alert("There is something wrong!!!!", err.message);
    }}
    
  }
  const [email, setEmail] =useState("")
  const [password, setPasword] = useState("")
  const [displayName, setDisplayName] =  useState("")
  return (
    <SafeAreaView >

      <View style={styles.background}>
      <View style={ [styles.back, backgroundgetstyle()]}>
      
      {/* Header */}
      <View style={{width:"100%", height:"8%", flexDirection:"row", alignItems:"center", }}>
 <TouchableOpacity onPress={()=>navigation.goBack()}>
 <Icon style={{marginLeft : 10}} name="angle-left" size={40} color="#900" />
 </TouchableOpacity >
    </View>    
      {/* Header */}
      <Input
     placeholder="email"
     style={{width :"100%"}}
     onChangeText={value => setEmail(value)}
  />
        <Input
     placeholder="password"
     style={{width :"100%"}}
     onChangeText={value => setPasword(value)}
  />
          <Input
     placeholder="name"
     style={{width :"100%"}}
     onChangeText={value => setDisplayName(value)}
  />
      <Text style={styles.inlineText}>Already have an account?</Text>
      <TouchableOpacity style={styles.button} onPress={() => emailRegistration(email,password,displayName)}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      </View>
      </View>
      </SafeAreaView >

  )
}

const styles = StyleSheet.create({

  background: {
    width:"100%",
    height:height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "gray",

  },
  scroll: {
    width: "100%", 
    height: "100%",
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

});

const backgroundgetstyle =( )=> {
  var width = Dimensions.get('window').width; //full width
  console.log(width);
  var height = Dimensions.get('window').height; //full height
    if (width >= 600) {
      console.log("?")
        return {
          width:500,
          height:750,
          alignItems: 'center',
          backgroundColor:"white",

        };
    }
    else {
      console.log("??")
        return {
          width:"100%",
          height:"100%",
          alignItems: 'center',
          backgroundColor:"white",

        };
    }
}