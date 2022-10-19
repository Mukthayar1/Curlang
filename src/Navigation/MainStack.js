import React from 'react';
import navigationStrings from '../constants/navigationStrings';
import TabRoutes from './TabRoutes';
import { UserList ,SearchResult } from '../Screens';

export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.TAB_ROUTES}
        component={TabRoutes}
        options={{ headerShown: false }}
      
      />
      <Stack.Screen
        name={navigationStrings.UserList}
        component={UserList}
        options={{ headerShown: false }}
      
      />
      <Stack.Screen
        name={navigationStrings.SearchResult}
        component={SearchResult}
        options={{ headerShown: false }}
      
      />
    </>
  );
}

