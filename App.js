import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Search from './components/Search';
import Restaurent from './Screens/Restaurent';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import Maps from './Screens/Maps';
import Setting from './Screens/Setting';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Search />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'restaurant',
                size = 24
            } else if (route.name === 'Maps') {
              iconName = 'map';
              size = 24
            }
            else if (route.name === 'Car') {
              iconName = 'md-settings';
              size = 24
            }
            return <Ionicons name={iconName} size={size} color={color} />;

          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={Restaurent} />
        <Tab.Screen name="Maps" component={Maps} />
        <Tab.Screen name="Car" component={Setting} />


        {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1

  },
  restaurent: {
    flex: 1,
    padding: 10,

  },

});
