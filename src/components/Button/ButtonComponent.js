import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {theme} from '../../theme/theme';

const ButtonComponent = ({ title = 'Modal', style, onClick }) => {
  return (
    <TouchableOpacity onPress={onClick} style={[styles.button, style]}>
      <View>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: theme.buttons.standardWidth,
    height: theme.buttons.standardHeight,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
  },
  buttonText: {
    fontSize: theme.fontSizes.standard,
  },
});

export default ButtonComponent;
