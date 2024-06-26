import React from 'react';
import {
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  TouchableHighlight,
  ViewStyle,
} from 'react-native';

import { Colors, Typography } from '_styles';

interface ButtonProps extends PressableProps {
  label: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const Button = ({ onPress, label, style }: ButtonProps) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={[s.container, style]}
      underlayColor={Colors.PLUM[700]}>
      <Text style={s.label}>{label}</Text>
    </TouchableHighlight>
  );
};

export default Button;

const s = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.PLUM[500],
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    borderRadius: 12,
    padding: 12,
  },
  label: {
    color: Colors.WHITE,
    ...Typography.TEXT.button,
  },
});
