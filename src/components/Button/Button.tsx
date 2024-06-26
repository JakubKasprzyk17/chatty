import React from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
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
    <Pressable onPress={onPress} style={[s.container, style]}>
      <Text style={s.label}>{label}</Text>
    </Pressable>
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
