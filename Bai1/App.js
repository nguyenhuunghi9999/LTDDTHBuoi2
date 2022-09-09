import React, { useState } from 'react';
import { Text, TextInput, View, Button, Alert } from 'react-native';

const PizzaTranslator = () => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 50}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Button title= 'Show' onPress = {() => {
         Alert.alert(text);
        }}
/>
    </View>
  );
}

export default PizzaTranslator;
