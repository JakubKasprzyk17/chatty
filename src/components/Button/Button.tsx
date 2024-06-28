import React from 'react';
import {
  ActivityIndicator,
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
  loading?: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

const Button = ({ onPress, label, loading, disabled, style }: ButtonProps) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        s.container,
        style,
        {
          backgroundColor: disabled ? Colors.GRAY[300] : Colors.PLUM[500],
        },
      ]}
      underlayColor={Colors.PLUM[700]}>
      {loading ? (
        <ActivityIndicator color={Colors.WHITE} />
      ) : (
        <Text style={s.label}>{label}</Text>
      )}
    </TouchableHighlight>
  );
};

export default Button;

const s = StyleSheet.create({
  container: {
    width: '100%',

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
