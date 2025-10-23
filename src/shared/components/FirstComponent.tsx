import React from "react";
import { Button, Text, View } from "react-native";

interface IFirstComponentProps {
  order: string
}

export const FirstComponent = (props: IFirstComponentProps) => {
  return (
    <View>
      <Text>My first component { props.order }</Text>
    </View>
  );
};
