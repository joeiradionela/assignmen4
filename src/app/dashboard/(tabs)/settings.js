import { View, Image } from "react-native";
import {  Button, Text } from "react-native-paper";
import styles from "../../../styles/styles";
import { useRouter } from "expo-router";

const Settings = () => {
  
    const router = useRouter();
  return (
    <View style={styles.container}>
      <View>
        <Image style={{ backgroundColor: 'transparent', width: 100, height: 100, marginHorizontal: 50 }} source={require("../../../assets/logout.png")} />
        <View style={{ alignItems: 'center' }}>
          <Text variant="headlineMedium" style={{ marginTop: 20, color: 'indigo' }}>Logout Page</Text>
          <Text>Are you sure you want to log out?</Text>
        </View>
      </View>
      
      <View style={{ ...styles.section, marginTop: 20 }}>
        <Button onPress={() => router.replace('/')} mode="contained" style={styles.button}>
          Log Out
        </Button>
      </View>

    </View>
  );
};

export default Settings;