import React from "react";
import {View, Text} from "react-native";

export default function Home (){
  return (
    <View  style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'beige'
    }}>
      <Text
      style={{
        fontSize: 50,
        color: 'white'
      }}
      >Home</Text>
    </View>
  )
}