import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthNavigator } from '_navigations';
import { RootNavigatorParamsList, RootRoutes } from '_types';

const RootStack = createNativeStackNavigator<RootNavigatorParamsList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen
        name={RootRoutes.AuthNavigation}
        component={AuthNavigator}
      />
    </RootStack.Navigator>
  );
};
export default RootNavigator;
