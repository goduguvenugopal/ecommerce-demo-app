import React from 'react';

import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
}

const CustomButton = ({
  title,
  onPress,
}: Props) => {
  return (

    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >

      <Text style={styles.buttonText}>
        {title}
      </Text>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

  button: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },

  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },

});

export default CustomButton;