import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  authorised: boolean;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  role: string;
}

export interface LoginAction {
  email: string | null;
  firstName: string | null;
  id: string | null;
  lastName: string | null;
  role: string | null;
}

export const initialState: AuthState = {
  authorised: false,
  email: '',
  firstName: '',
  id: '',
  lastName: '',
  role: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginAction>) => {
      state.authorised = true;
      state.email = action.payload.email || '';
      state.firstName = action.payload.firstName || '';
      state.id = action.payload.id || '';
      state.lastName = action.payload.lastName || '';
      state.role = action.payload.role || '';
    },
    logout: () => {
      return initialState;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
