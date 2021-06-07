import 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import React,{useState,useEffect, useRef} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import Auth from "./screens/navigation/Auth";
import Main from "./screens/navigation/Main";
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: "498267749805-a74ib926edm2jv03n0hb9rgfnk6iuftd.apps.googleusercontent.com",
});

const App = () => {
  let height = Dimensions.get('window').height; //full height
  let width = Dimensions.get('window').width; //full width
  const [isbig, setIsBig ]= useState(true)
  const isBig = () => {
    if(width >= 600){
      return setIsBig(true)
    }else{
      return setIsBig(false)
    }
  }
  const [isLoggedIn, setIsLoggedIn] = useState({
    loggedIn: false,
  });
  useEffect(
    () => {
      auth().onAuthStateChanged((user) => {
        if (!user) {
          setIsLoggedIn({
            loggedIn: false,
            loaded: true,
          })
        } else {
          setIsLoggedIn({
            loggedIn: true,
            loaded: true,
          })
        }
      })
      isBig()
   }
 ,[]);
  if(!isLoggedIn.loggedIn){
    return (
<NavigationContainer>
   <Auth ></Auth>
   </NavigationContainer>
     );
    }if(isLoggedIn.loggedIn){
    return (
 <Main isBig={isbig}></Main>
    );}
};
const backgroundgetstyle =( )=> {
  var width = Dimensions.get('window').width; //full width
    if (width >= 600) {
        return {
          width:500,
          height:750,
          alignItems: 'center',
        };
    }
    else {
      console.log("??")
        return {
          width:"100%",
          height:"100%",
          alignItems: 'center',
        };
    }
}

const styles = StyleSheet.create({

  background: {
    width:"100%",
    height:"100%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "gray",
  },


});
export default App;