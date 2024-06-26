import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '_screens';
import { AuthNavigatorParamsList, AuthRoutes } from '_types';

const StackAuth = createNativeStackNavigator<AuthNavigatorParamsList>();

const AuthNavigator = () => {
  return (
    <StackAuth.Navigator
      screenOptions={{
        animation: 'fade_from_bottom',
        headerShown: false,
      }}
      initialRouteName={AuthRoutes.Login}>
      <StackAuth.Screen name={AuthRoutes.Login} component={Login} />
    </StackAuth.Navigator>
  );
};

export default AuthNavigator;
