import React from "react";
import { View, Text} from "react-native";



export default function Voca2() {
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
            >Vocabulary 2</Text>
            <Text
            style={{
                color: 'white',
                fontSize: 18,
                marginVertical: 20,
            }}
            >Family, Colors</Text>
        </View>
    )
}