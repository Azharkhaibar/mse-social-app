import { View, Text } from 'react-native'
import { HomeScreen } from '../screens/homescreen'
import React from 'react'
import { cardTexts } from '../data/homedata'

export const CardHome = (props) => {
  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 20 }}>
      {cardTexts.map((text, index) => (
        <View key={index} style={{ width: 100, height: 100, padding: 20, backgroundColor: "white" }}>
          <Text>{text}</Text>
        </View>
      ))}
    </View>
  );
}

