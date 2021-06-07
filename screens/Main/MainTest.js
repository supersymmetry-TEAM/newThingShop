import { StyleSheet, View, Text, Alert, Dimensions,SafeAreaView,StatusBar, ScrollView} from 'react-native';
import { Icon } from 'react-native-elements'

import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';

let height = Dimensions.get('window').height; //full height
let width = Dimensions.get('window').width; //full width
export default function WelcomeScreen ({navigation}) {
  const loggingOut = async() => {
    try {
      await auth().signOut();
      console.log("??");
    } catch (err) {
      Alert.alert("There is something wrong!", err.message);
    }
  }
  return (
    <SafeAreaView >
    <StatusBar />
    <ScrollView 
    style={styles.scroll}>
      <View style={styles.background}>
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
   
      <TouchableOpacity style={styles.button} onPress={() => loggingOut()}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>

      </View>
      </ScrollView>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  background: {
    flex :1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "gray",
  },
  scroll: {
    backgroundColor: "gray",
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