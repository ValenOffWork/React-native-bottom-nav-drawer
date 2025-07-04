import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AccountScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Account Screen</Text>

      <Button
        title="Back to Drawer"
        onPress={() => navigation.replace('Drawer')}
      />
    </View>
  );
};

export default AccountScreen;
