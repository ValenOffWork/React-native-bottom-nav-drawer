import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Icon name="Facebook" size={30} />
      <AntDesign name="arrowRight" size={30} />
    
    </View>
  );
};

export default HomeScreen;
