import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ChatList } from '_screens';
import { AppNavigatorParamsList, AppRoutes } from '_types';

const StackApp = createNativeStackNavigator<AppNavigatorParamsList>();

const AppNavigator = () => {
  return (
    <StackApp.Navigator
      initialRouteName={AppRoutes.ChatList}
      screenOptions={{
        animation: 'fade_from_bottom',
        headerShown: false,
      }}>
      <StackApp.Screen name={AppRoutes.ChatList} component={ChatList} />
    </StackApp.Navigator>
  );
};

export default AppNavigator;
