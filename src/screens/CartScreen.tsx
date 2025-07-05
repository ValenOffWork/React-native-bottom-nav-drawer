import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation, NavigationProp } from '@react-navigation/native';

// Replace 'RootStackParamList' with the actual type for your navigator
type RootStackParamList = {
  Drawer: any; // This should match the type of your Drawer navigator
  // add other routes here if needed
};

const CartScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Cart Screen</Text>

      <Button
        title="Back to Drawer"
        onPress={() => navigation.navigate('Drawer')}
      />
    </View>
  );
};

export default CartScreen;
