import { View, StyleSheet} from "react-native"
import { Avatar, Text, TextInput, Button } from "react-native-paper";
import styles from "../styles/styles";
import { useState } from "react";



const Login = () => {
    
    
const [togglePassword, setTogglePassword]  = useState(false);
  return (

    <View style={loginStyle.container}>
        <View style={{...loginStyle.section, ...loginStyle.logoBox}}>
            <Avatar.Image style={{backgroundColor: 'transparent', bandWidth: 3 }} source={require("../assets/avatar.png")} size={180}/>
            <Text variant="headlineMedium" style={{marginTop: 10, color:'indigo', textAlign: 'center'}}>Pet Care Shop</Text>
        </View>
         <View style={{...loginStyle.section, marginTop: 20}}>
            <TextInput
               textContentType="emailAddress"
               label= "Email"
               mode="outlined"
               placeholder="Email"
               style={loginStyle.input}
               left={<TextInput.Icon icon="email" size={18}/> }
            />
             <TextInput
               label= "Password"
               mode="outlined"
               placeholder="Password"
               style={loginStyle.input}
               left={<TextInput.Icon icon="key" size={18} /> }
               right={<TextInput.Icon 
                    onPress= {() => setTogglePassword(!togglePassword)}
                    icon={togglePassword ? "eye" : "eye-off"} 
                    size={18} 
                /> }
               secureTextEntry={!togglePassword}
            />
        </View>
        <View style={{...loginStyle.section, marginTop: 20}}>
            <Button onPress={() => console.log("login")} mode="contained" style={loginStyle.button}>
                Login
            </Button>
            <View style={{alignItems: 'center', justifyContent: 'center', marginVertical: 10}}>
                <Text>Don't have an account yet?</Text>
            </View>
            <Button onPress={() => console.log("register")} mode="contained-tonal" style={loginStyle.button} >
                Register Here
            </Button>
            <Button onPress={() => console.log("forgot")}  style={loginStyle.button} >
                Forgot Password?
            </Button>

            
        </View>
    </View>
  )
}

export default Login

const loginStyle = StyleSheet.create(styles)
