import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DETAILS_SCREEN, HOME_SCREEN } from "../constants/routes";
import Details from '../screens/Details';
import QuotesList from '../screens/QuotesList';

const Stack = createStackNavigator();

const Navigation = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={HOME_SCREEN}>
            <Stack.Screen
                name={HOME_SCREEN}
                component={QuotesList}
                options={{ title: 'InstaForex' }}
            />

            <Stack.Screen
                name={DETAILS_SCREEN}
                component={Details}
                options={({ route: { params: { symbol } }}) => ({ title: symbol })}
            />
        </Stack.Navigator>
    </NavigationContainer>
);

export default Navigation;
