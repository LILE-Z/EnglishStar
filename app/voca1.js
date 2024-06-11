import React from "react";
import { View, Text } from "react-native";



export default function Voca1() {
    return (
        <View
        style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black',
        }}
        >
            <Text
            style={{
                color: 'white',
                fontSize: 24,
                fontWeight: 'bold',
            }}
            >Vocabulary 1</Text>
            <Text
            style={{
                color: 'white',
                fontSize: 18,
                marginVertical: 20,
            }}
            >
                Numbers, Animals
            </Text>
        </View>
    )
}