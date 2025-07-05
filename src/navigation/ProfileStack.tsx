import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function ProfileStack({ navigation }: any) {
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
