import React, { useState } from 'react';
import { View, StyleSheet, Image } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import styles from "../styles/styles";
import { useRouter } from "expo-router";

const PasswordRecovery = () => {

  const router = useRouter();
  const [togglePassword, setTogglePassword] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <Image style={{ backgroundColor: 'transparent', width: 280, height: 180}} source={require("../assets/password.png")} />
        <View style={{ alignItems: 'center' }}>
          <Text variant="headlineMedium" style={{ marginTop: 20, color: 'indigo' }}>Forgot Password</Text>
          <Text>Create a strong password</Text>
        </View>
      </View>
      <View style={{ ...styles.section, marginTop: 20 }}>
      <TextInput
          label="Old Password"
          mode="flat"
          placeholder="Old Password"
          style={{ ...styles.input, backgroundColor: 'transparent'}}
          left={<TextInput.Icon icon="lock" size={18} />}
          right={<TextInput.Icon 
            onPress={() => setTogglePassword(!togglePassword)}
            icon={togglePassword ? "eye" : "eye-off"} 
            size={18} 
          />}
          secureTextEntry={!togglePassword}
        />
        <TextInput
          label="New Password"
          mode="flat"
          placeholder="New Password"
          style={{ ...styles.input, backgroundColor: 'transparent'}}
          left={<TextInput.Icon icon="lock-check" size={18} />}
          right={<TextInput.Icon 
            onPress={() => setTogglePassword(!togglePassword)}
            icon={togglePassword ? "eye" : "eye-off"} 
            size={18} 
          />}
          secureTextEntry={!togglePassword}
        />
      </View>
      <View style={{ ...styles.section, marginTop: 20 }}>
        <Button onPress={() => console.log("Resetting Password...")} mode="contained" style={styles.button}>
          Reset Password
        </Button>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 10 }}>
          <Text>Remember your password? </Text>
          <Button onPress={() => router.back()} mode="text" textColor="indigo">
            Login here
          </Button>
      </View>

    </View>
  );
};

export default PasswordRecovery;