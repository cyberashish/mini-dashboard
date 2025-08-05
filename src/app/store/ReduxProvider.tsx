'use client';

import { Provider } from 'react-redux';
import { AppStore } from './AppStore';



export function ReduxProvider({ children }:any) {
  return <Provider store={AppStore}>{children}</Provider>;
}
