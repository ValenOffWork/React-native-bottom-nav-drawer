import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Wrap each screen in a stack to add a header with hamburger
function HomeStack({ navigation }: any) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="HomeStack"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ marginLeft: 10 }}>
              <Ionicons name="menu" size={24} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack({ navigation }: any) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="ProfileStack"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ marginLeft: 10 }}>
              <Ionicons name="menu" size={24} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function SettingsStack({ navigation }: any) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="SettingsStack"
        component={SettingsScreen}
        options={{
          title: 'Settings',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ marginLeft: 10 }}>
              <Ionicons name="menu" size={24} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

// Bottom Tabs with 3 screens wrapped in stack
function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#e91e63' }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

// Drawer contains just the tab nav
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Home" component={BottomTabs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
