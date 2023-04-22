import { View, Text } from 'react-native'
import React from 'react'

const RowText = ({message1, message2, containerStyle, message1Styles, message2Styles}) => {
  return (
    <View style={containerStyle}>
      <Text style={message1Styles}>{message1}</Text>
      <Text style={message2Styles}>{message2}</Text>
    </View>
  )
}

export default RowText