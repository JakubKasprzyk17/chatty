import React, { useRef } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Button, Input } from '_components';
import { useAppDispatch } from '_hooks';
import { useLoginMutation } from '_services';
import { login as loginDispatch } from '_store/slices/auth';
import { Colors, Typography } from '_styles';
import { AuthNavigatorParamsList, AuthRoutes } from '_types';

interface LoginProps {
  navigation: NativeStackNavigationProp<
    AuthNavigatorParamsList,
    AuthRoutes.Login
  >;
}

interface FormValues {
  email: string;
  password: string;
}

const Login = ({ navigation }: LoginProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { top } = useSafeAreaInsets();
  const passwordRef = useRef<TextInput>(null);

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .required(t('errors.required'))
      .email(t('errors.invalidEmail')),
    password: Yup.string()
      .required(t('Form.required'))
      .min(8, t('errors.minLength', { min: 8 })),
  });

  const initialValues: FormValues = {
    email: '',
    password: '',
  };

  const [loginMutation, { loading }] = useLoginMutation(async data => {
    if (!data.loginUser?.user) return;

    const user = {
      ...data.loginUser.user,
      email: data.loginUser.user.email ?? null,
      firstName: data.loginUser.user.firstName ?? null,
      lastName: data.loginUser.user.lastName ?? null,
      role: data.loginUser.user.role ?? null,
      id: data.loginUser.user.id ?? null,
    };

    dispatch(loginDispatch(user));
  });

  const onSubmit = async (values: FormValues) => {
    await loginMutation({
      variables: values,
      // variables: {

      //   email: 'emmy.sizergh@mail.com',
      //   password: 'MO0pnceEzLb0Arp',
      // },
    });
  };

  return (
    <View style={s.container}>
      <Text style={[s.title, { marginTop: top }]}>{t('auth.welcomeBack')}</Text>
      <Text style={s.subtitle}>{t('auth.loginSubtitle')}</Text>

      <Formik
        validationSchema={loginSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}>
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <View style={s.form}>
            <View>
              <Input
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                onResetText={() => handleChange('email')('')}
                label={t('auth.email')}
                value={values.email}
                textContentType="emailAddress"
                keyboardType="email-address"
                autoCapitalize="none"
                error={touched.email ? errors.email : undefined}
                testID="login-email"
                onSubmitEditing={() => {
                  passwordRef.current?.focus();
                }}
              />
              <Input
                ref={passwordRef}
                label={t('auth.password')}
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                error={touched.password ? errors.password : undefined}
                passwordInput
                testID="login-password"
              />
            </View>
            <View>
              <Button
                label={t('auth.login')}
                disabled={isSubmitting}
                onPress={handleSubmit}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: 20,
                }}>
                <Text style={s.text}>{t('auth.dontHaveAccount')}</Text>
                <Pressable
                  onPress={() => navigation.navigate(AuthRoutes.Register)}>
                  <Text style={s.signUp}>{t('auth.signUp')}</Text>
                </Pressable>
              </View>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;

const s = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    backgroundColor: Colors.BLUE[300],
    flex: 1,
  },
  title: {
    ...Typography.HEADING[2],
    color: Colors.PLUM[500],
  },
  subtitle: {
    ...Typography.HEADING[3],
    color: Colors.WHITE,
    marginTop: 25,
  },
  form: {
    flex: 1,
    marginVertical: 35,
    justifyContent: 'space-between',
  },
  text: {
    ...Typography.TEXT.bodyText,
    color: Colors.WHITE,
  },
  signUp: {
    ...Typography.TEXT.button,
    color: Colors.PLUM[500],
    marginLeft: 10,
  },
});
