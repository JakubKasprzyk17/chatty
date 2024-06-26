import { NavigatorScreenParams } from '@react-navigation/native';

export enum RootRoutes {
  AppNavigation = 'AppNavigation',
  AuthNavigation = 'AuthNavigation',
}

export enum AuthRoutes {
  Login = 'Login',
}

export enum AppRoutes {}

export type RootNavigatorParamsList = {
  [RootRoutes.AppNavigation]: NavigatorScreenParams<AppNavigatorParamsList>;
  [RootRoutes.AuthNavigation]: NavigatorScreenParams<AuthNavigatorParamsList>;
};

export type AuthNavigatorParamsList = {
  [AuthRoutes.Login]: undefined;
};

export type AppNavigatorParamsList = {};
