import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useAppSelector } from '_hooks';
import { AppNavigator, AuthNavigator } from '_navigations';
import { RootNavigatorParamsList, RootRoutes } from '_types';

const RootStack = createNativeStackNavigator<RootNavigatorParamsList>();

const RootNavigator = () => {
  const { authorised } = useAppSelector(({ auth }) => auth);
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {authorised ? (
        <RootStack.Screen
          name={RootRoutes.AppNavigation}
          component={AppNavigator}
        />
      ) : (
        <RootStack.Screen
          name={RootRoutes.AuthNavigation}
          component={AuthNavigator}
        />
      )}
    </RootStack.Navigator>
  );
};
export default RootNavigator;
