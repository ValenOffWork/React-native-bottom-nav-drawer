import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  Drawer: any;
  // add other routes here if needed
};

const AccountScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Account Screen</Text>

      <Button
        title="Back to Drawer"
        onPress={() => navigation.navigate('Drawer')}
      />
    </View>
  );
};

export default AccountScreen;
