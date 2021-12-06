import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/views/HomeScreen';
import NewTaskScreen from './src/views/NewTaskScreen';
import DetailsScreen from './src/views/DetailsScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        sscreenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerTintColor: '#f92ead'}}
        />
        <Stack.Screen
          name="New Task"
          component={NewTaskScreen}
          options={{headerTintColor: '#f92ead'}}
        />

        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{headerTintColor: '#f92ead'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
