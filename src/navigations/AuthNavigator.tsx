import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login, Register } from '_screens';
import { AuthNavigatorParamsList, AuthRoutes } from '_types';

const StackAuth = createNativeStackNavigator<AuthNavigatorParamsList>();

const AuthNavigator = () => {
  return (
    <StackAuth.Navigator
      screenOptions={{
        animation: 'slide_from_right',
        headerShown: false,
      }}
      initialRouteName={AuthRoutes.Login}>
      <StackAuth.Screen name={AuthRoutes.Login} component={Login} />
      <StackAuth.Screen name={AuthRoutes.Register} component={Register} />
    </StackAuth.Navigator>
  );
};

export default AuthNavigator;
