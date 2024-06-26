import React, { forwardRef, useCallback, useMemo, useState } from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {
  FadeInRight,
  FadeInUp,
  FadeOutRight,
} from 'react-native-reanimated';

import { Close, Eye, EyeHidden } from '_icons';
import { Colors, Style, Typography } from '_styles';

interface InputProps extends TextInputProps {
  label: string;
  onChangeText?: (text: string) => void;
  onResetText?: () => void;
  onBlur?: (e: any) => void;
  value?: string;
  active?: boolean;
  error?: string;
  passwordInput?: boolean;
}

// eslint-disable-next-line react/display-name
const Input = forwardRef<TextInput, InputProps>(
  (
    { label, onChangeText, onBlur, onResetText, value, error, passwordInput },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false);

    const borderColor = useMemo(() => {
      if (error) {
        return Colors.ERROR;
      }
      return isFocused ? Colors.PLUM[500] : Colors.WHITE;
    }, [isFocused, error]);

    const handleBlur = useCallback(
      (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        onBlur && onBlur(e);
        setIsFocused(false);
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [],
    );
    return (
      <View style={s.container}>
        <Text style={s.label}>{label}</Text>
        <View style={[s.inputWrapper, { borderColor }]}>
          <TextInput
            style={s.textInput}
            ref={ref}
            onChangeText={onChangeText}
            value={value}
            onBlur={handleBlur}
            onFocus={() => setIsFocused(true)}
            secureTextEntry={passwordInput && !isPasswordShown}
          />
          {passwordInput ? (
            <Animated.View entering={FadeInRight} exiting={FadeOutRight}>
              <TouchableOpacity
                hitSlop={{ bottom: 20, left: 20, right: 20, top: 20 }}
                style={s.passwordVisibility}
                onPress={() => setIsPasswordShown(prev => !prev)}>
                {isPasswordShown ? <Eye /> : <EyeHidden />}
              </TouchableOpacity>
            </Animated.View>
          ) : (
            <Animated.View entering={FadeInRight} exiting={FadeOutRight}>
              <TouchableOpacity
                hitSlop={{ bottom: 20, left: 20, right: 20, top: 20 }}
                style={s.passwordVisibility}
                onPress={onResetText}>
                <Close />
              </TouchableOpacity>
            </Animated.View>
          )}
        </View>
        {error && (
          <Animated.Text entering={FadeInUp} style={s.errorText}>
            {error}
          </Animated.Text>
        )}
      </View>
    );
  },
);

export default Input;

const s = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 5,
  },
  label: {
    color: Colors.WHITE,
    ...Typography.TEXT,
    lineHeight: 22.5,
    marginBottom: 5,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    ...Style.smallBorderRadius,
    borderWidth: 2,
  },
  textInput: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    height: 47,
  },
  passwordVisibility: {
    marginRight: 20,
  },
  errorText: {
    textAlign: 'right',
    marginRight: 10,
    color: Colors.ERROR,
    marginTop: 10,
  },
});
