import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator();

export default function SettingsStack({ navigation }: any) {
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
