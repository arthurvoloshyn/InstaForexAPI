import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  DETAILS_SCREEN,
  HOME_SCREEN,
  HOME_OPTIONS,
  DETAILS_OPTIONS,
} from '../constants/routes';
import QuotesList from '../screens/QuotesList';
import Details from '../screens/Details';

const Stack = createStackNavigator();

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={HOME_SCREEN}>
      <Stack.Screen
        name={HOME_SCREEN}
        component={QuotesList}
        options={HOME_OPTIONS}
      />

      <Stack.Screen
        name={DETAILS_SCREEN}
        component={Details}
        options={DETAILS_OPTIONS}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
