import React, { useState } from "react";
import { Dimensions, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Header = ({}) => {
  return (
    <View style={{width:"100%", height:"8%", flexDirection:"row", alignItems:"center", }}>
 <TouchableOpacity>
 <Icon style={{marginLeft : 10}} name="angle-left" size={40} color="#900" />
 </TouchableOpacity >
    </View>
  );
};



export default Header;