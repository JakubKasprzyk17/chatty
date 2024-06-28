import { NavigatorScreenParams } from '@react-navigation/native';

export enum RootRoutes {
  AppNavigation = 'AppNavigation',
  AuthNavigation = 'AuthNavigation',
}

export enum AuthRoutes {
  Login = 'Login',
  Register = 'Register',
}

export enum AppRoutes {
  ChatRooms = 'ChatRooms',
  Chat = 'Chat',
}

export type RootNavigatorParamsList = {
  [RootRoutes.AppNavigation]: NavigatorScreenParams<AppNavigatorParamsList>;
  [RootRoutes.AuthNavigation]: NavigatorScreenParams<AuthNavigatorParamsList>;
};

export type AuthNavigatorParamsList = {
  [AuthRoutes.Login]: undefined;
  [AuthRoutes.Register]: undefined;
};

export type AppNavigatorParamsList = {
  [AppRoutes.ChatRooms]: undefined;
  [AppRoutes.Chat]: { id: string };
};
