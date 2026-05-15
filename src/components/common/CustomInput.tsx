import React from 'react';

import { TextInput, StyleSheet } from 'react-native';

interface Props {
  placeholder: string;
  value: string;

  // Function receives text string
  onChangeText: (text: string) => void;

  // Optional prop
  secureTextEntry?: boolean;
}

const CustomInput = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
}: Props) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#ccc"
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    color: 'white',
  },
});

export default CustomInput;