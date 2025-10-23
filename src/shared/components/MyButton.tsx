import React from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'

interface IMyButtonProps {
  order?: string
  children: React.ReactNode
  onPress?: () => void
}
const MyButton = (props: IMyButtonProps) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
    <View>
        {props.children}
    </View>
    </TouchableOpacity>
  )
}

export default MyButton