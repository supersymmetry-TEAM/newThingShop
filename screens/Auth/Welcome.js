import { StyleSheet, Dimensions,View, Text,SafeAreaView,StatusBar, ScrollView} from 'react-native';
import React,{useState} from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import { Input } from 'react-native-elements';
import { GoogleSignin } from '@react-native-google-signin/google-signin';



let height = Dimensions.get('window').height; //full height
let width = Dimensions.get('window').width; //full width




export default function WelcomeScreen ({navigation}) {
  async function onGoogleButtonPress() {
    navigation.navigate("Loading")
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }
  const emailSignIn= async(email, password, loading) =>{
    if(email === "" && password === ""){
    alert("E,P");
    }else{
      navigation.navigate("Loading")

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
           <View style={{width:"100%", height:"8%", flexDirection:"row", alignItems:"center", }}>
 <TouchableOpacity onPress={()=>navigation.goBack()}>
 </TouchableOpacity >
    </View>    
      {/* Header */}   
    <View style={{width : "100%"  ,justifyContent: 'center',
    alignItems: 'center',}}>
    <Text style={styles.title}>Welcome to Firebase/Firestore Example</Text>
    </View>
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
      <TouchableOpacity style={styles.button} onPress={() => emailSignIn(email,password)}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')} >
        <Text style={styles.buttonText}>Sign Up</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.button} onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}>
        <Text style={styles.buttonText}>Google</Text>
      </TouchableOpacity>      
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

        };
    }
}