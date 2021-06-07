import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainTest from "../Main/MainTest"
const TabNav = createBottomTabNavigator();


const Tabs = () => (
  <TabNav.Navigator  >

<TabNav.Screen name="MainTest" component={MainTest} />
<TabNav.Screen name="HomeScreen" component={HomeScreen} />
<TabNav.Screen name="MainTest2" component={MainTest} />

  </TabNav.Navigator>
);
const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <View style={{  alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function Main({isBig}) {
  console.log(isBig);
  const ref = React.useRef(null);

  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"gray"}}>
    <View style={ [styles.back, backgroundgetstyle(isBig)]}>
      <NavigationContainer ref={ref}>
        <Stack.Navigator >
        <Stack.Screen name="Tabs" component={Tabs} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
    </View>
  );
}
const styles = StyleSheet.create({});

const backgroundgetstyle =(is)=> {
    if (is) {
        return {
          width:500,
          height:750,
        };
    }
    else {
        return {
          width:"100%",
          height:"100%",
        };
    }
}
export default Main;



// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createStackNavigator } from "@react-navigation/stack";
// import MainTest from "../Main/MainTest";
// import { View, ScrollView, TouchableOpacity } from 'react-native';


// const TabNav = createBottomTabNavigator();


// const Tabs = () => (
//   <TabNav.Navigator  >

// <TabNav.Screen name="MainTest" component={MainTest} />

//   </TabNav.Navigator>
// );

// const MainNavigator = createStackNavigator();
// export default () => (
//   <MainNavigator.Navigator 
//   screenOptions={{ headerBackTitleVisible: false }}>
//     <MainNavigator.Screen
//       name="Tabs"
//       component={Tabs}
//       options={{ headerShown: false }}
//     />
//   </MainNavigator.Navigator>
// );