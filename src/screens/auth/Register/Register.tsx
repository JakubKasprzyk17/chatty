import React, { useRef } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Button, Input, Terms } from '_components';
import { useRegisterMutation } from '_services';
import { Colors, Typography } from '_styles';
import { AuthNavigatorParamsList, AuthRoutes } from '_types';

interface RegisterProps {
  navigation: NativeStackNavigationProp<
    AuthNavigatorParamsList,
    AuthRoutes.Register
  >;
}

interface FormValues {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  passwordConfirmation: string;
}

const Register = ({ navigation }: RegisterProps) => {
  const { t } = useTranslation();
  const { top } = useSafeAreaInsets();
  const firstNameRef = useRef<TextInput>(null);
  const lastNameRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const passwordCopyRef = useRef<TextInput>(null);

  const registerSchema = Yup.object().shape({
    email: Yup.string()
      .required(t('errors.required'))
      .email(t('errors.invalidEmail')),
    firstName: Yup.string().required(t('errors.required')),
    lastName: Yup.string().required(t('errors.required')),
    password: Yup.string()
      .required(t('errors.required'))
      .min(8, t('errors.minLength', { min: 8 })),
    passwordConfirmation: Yup.string()
      .required(t('errors.required'))
      .oneOf([Yup.ref('password')], t('errors.passwordsMustBeSame')),
  });

  const initialValues: FormValues = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    passwordConfirmation: '',
  };

  const [registerMutation, { loading }] = useRegisterMutation(() => {
    navigation.navigate(AuthRoutes.Login);
  });

  const onSubmit = async (values: FormValues) => {
    registerMutation({
      variables: values,
    });
  };

  return (
    <View style={s.container}>
      <Text style={[s.title, { marginTop: top }]}>
        {t('auth.createAccount')}
      </Text>
      <Formik
        validationSchema={registerSchema}
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
            <Input
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              label={t('auth.email')}
              value={values.email}
              textContentType="emailAddress"
              keyboardType="email-address"
              autoCapitalize="none"
              error={touched.email ? errors.email : undefined}
              testID="register-email"
              onSubmitEditing={() => {
                firstNameRef.current?.focus();
              }}
            />
            <Input
              ref={firstNameRef}
              onChangeText={handleChange('firstName')}
              onBlur={handleBlur('firstName')}
              label={t('auth.firstName')}
              value={values.firstName}
              error={touched.firstName ? errors.firstName : undefined}
              testID="register-firstname"
              onSubmitEditing={() => {
                lastNameRef.current?.focus();
              }}
            />
            <Input
              ref={lastNameRef}
              onChangeText={handleChange('lastName')}
              onBlur={handleBlur('lastName')}
              label={t('auth.lastName')}
              value={values.lastName}
              error={touched.lastName ? errors.lastName : undefined}
              testID="register-lastname"
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
              autoCapitalize="none"
              testID="register-password"
              onSubmitEditing={() => {
                passwordCopyRef.current?.focus();
              }}
            />
            <Input
              ref={passwordCopyRef}
              label={t('auth.passwordCopy')}
              value={values.passwordConfirmation}
              onChangeText={handleChange('passwordConfirmation')}
              onBlur={handleBlur('passwordConfirmation')}
              error={
                touched.passwordConfirmation
                  ? errors.passwordConfirmation
                  : undefined
              }
              passwordInput
              testID="register-password-copy"
              autoCapitalize="none"
            />

            <Button
              label={t('auth.signUp')}
              style={{ marginTop: 25 }}
              disabled={isSubmitting}
              loading={loading}
              onPress={handleSubmit}
            />
            <Terms />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 30,
              }}>
              <Text style={s.text}>{t('auth.alreadyHaveAccount')}</Text>
              <Pressable onPress={() => navigation.navigate(AuthRoutes.Login)}>
                <Text style={s.login}>{t('auth.login')}</Text>
              </Pressable>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Register;

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
    marginTop: 25,
  },
  text: {
    ...Typography.TEXT.bodyText,
    color: Colors.WHITE,
  },
  login: {
    ...Typography.TEXT.button,
    color: Colors.PLUM[500],
    marginLeft: 10,
  },
});
