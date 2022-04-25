import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from '../configureStore';
import {Home} from '../screens';
import './GestureHandler';

const initialState = window.INITIAL_REDUX_STATE;
const store = configureStore(initialState);

export type StackParams = {
  Home: undefined;
};

const Stack = createStackNavigator<StackParams>();

export function Navigation(): React.ReactElement {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
