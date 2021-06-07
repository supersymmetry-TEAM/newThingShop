import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";
import Welcome from "../Auth/Welcome";
import Loading from "../Auth/Loading";
const Auth = createStackNavigator();

export default () => (
<Auth.Navigator
    screenOptions={{
      headerShown: false,
      headerBackTitleVisible: true,
      headerTransparent: true,
    }}
  >
<Auth.Screen
      name="Welcome"
      component={Welcome}
      options={{ title: "Welcome" }}
    />
   <Auth.Screen
      name="SignIn"
      component={SignIn}
      options={{title: "SignIn" }}
    />
    <Auth.Screen
      name="SignUp"
      component={SignUp}
      options={{ title: "SignUp" }}
    />
    <Auth.Screen
      name="Loading"
      component={Loading}
      options={{ title: "Loading" }}
    />
  </Auth.Navigator>
);