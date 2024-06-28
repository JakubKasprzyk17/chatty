import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Chat, ChatRooms } from '_screens';
import { AppNavigatorParamsList, AppRoutes } from '_types';

const StackApp = createNativeStackNavigator<AppNavigatorParamsList>();

const AppNavigator = () => {
  return (
    <StackApp.Navigator
      initialRouteName={AppRoutes.ChatRooms}
      screenOptions={{
        animation: 'fade_from_bottom',
        headerShown: false,
      }}>
      <StackApp.Screen name={AppRoutes.ChatRooms} component={ChatRooms} />
      <StackApp.Screen name={AppRoutes.Chat} component={Chat} />
    </StackApp.Navigator>
  );
};

export default AppNavigator;
