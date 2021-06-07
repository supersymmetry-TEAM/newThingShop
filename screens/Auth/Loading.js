import { StyleSheet, Dimensions,View, Text,SafeAreaView,StatusBar, ScrollView, ActivityIndicator} from 'react-native';
import React,{useState} from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import { Input } from 'react-native-elements';
import { GoogleSignin } from '@react-native-google-signin/google-signin';


async function onGoogleButtonPress() {
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}
let height = Dimensions.get('window').height; //full height
let width = Dimensions.get('window').width; //full width




export default function WelcomeScreen ({navigation}) {
  const emailSignIn= async(email, password, loading) =>{
    if(email === "" && password === ""){
    alert("E,P");
    }else{
    
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (err) {
      alert("There is something wrong!");
      console.log(err);
    }}
  }


  const [email, setEmail] =useState("")
  const [password, setPasword] = useState("")
  return (
    <SafeAreaView >
    <StatusBar />
    <ScrollView 
    style={styles.scroll}>
      <View style={styles.background}>
    <View style={ [styles.back, backgroundgetstyle()]}>
           {/* Header */}
           <ActivityIndicator size="large" color="#00ff00" />     
            </View>
      </View>
      </ScrollView>
      </SafeAreaView>
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
    if (width >= 600) {
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
          justifyContent:"center",

        };
    }
}