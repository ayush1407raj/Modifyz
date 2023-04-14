import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Background from './Background';
import Field from './Field';
import Btn from './Btn';
import { darkGreen } from './Constants';

const Login = (props) => {
    return(
        <Background>
            <View style={{ alignItems:'center', width: 415}}>
              <Text style={{ color:'white', fontSize: 50, fontWeight:'bold',
              marginVertical: 70, letterSpacing: 1}}>Login</Text> 
            </View>
            <View style={{ backgroundColor: '#c4c4c57c', height: 700, width: 415, alignItems:'center', borderTopLeftRadius: 70, borderTopRightRadius: 70, paddingTop: 70}}>
              <Field placeholder="Email / Username" keyboardType={"email-address"}/>
              <Field placeholder="Password" secureTextEntry={true}/>
              <View style={{marginBottom:140}}></View>
              <Btn  textColor='white' bgColor={darkGreen} btnLabel="Login" Press={() => alert ("Logged In")}/>
              <View style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                  <Text>Don't have an Account ? </Text>
                  <TouchableOpacity onPress={() => props.navigation.navigate("SignUp")}>
                  <Text style={{color:'#ab0d1a', fontWeight:'bold', fontSize: 15}}>SignUp</Text>
                  </TouchableOpacity>
              </View>
            </View>
        </Background>
    );
}


export default Login;