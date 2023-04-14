import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Background from './Background';
import Field from './Field';
import Btn from './Btn';
import { darkGreen } from './Constants';

const SignUp = (props) => {
    return(
        <Background>
            <View style={{ alignItems:'center', width: 415}}>
              <Text style={{ color:'white', fontSize: 50, fontWeight:'bold',
              marginVertical: 38, letterSpacing: 1}}>Create your Account</Text> 
            </View>
            <View style={{ backgroundColor: '#c4c4c57c', height: 700, width: 415, alignItems:'center', borderTopLeftRadius: 70, borderTopRightRadius: 70, paddingTop: 20}}>
              <Field placeholder="Name" />
              <Field placeholder="Email Id" keyboardType={"email-address"}/>
              <Field placeholder="Password" secureTextEntry={true}/>
              <Text style={{alignItems:'center', color: 'white', fontSize: 14, margin:12}}>or continue with</Text>
              <View style={{display:'flex',flexDirection:'row', justifyContent:'center', gap: 55}}>
                <TouchableOpacity>
                    <Image style={{width: 30, height: 30}} source={require('./assets/google.png')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={{width: 30, height: 30}} source={require('./assets/gmail.png')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={{width: 30, height: 30}} source={require('./assets/Apple.png')}/>
                </TouchableOpacity>
              </View>
              <View style={{marginBottom:35}}></View>
              <Btn  textColor='white' bgColor={darkGreen} btnLabel="Sign Up" Press={() => alert ("Account Created")}/>
              <View style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                  <Text>Already have an Account ? </Text>
                  <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
                  <Text style={{color:'#9f2f39', fontWeight:'bold', fontSize: 15}}>Login</Text>
                  </TouchableOpacity>
              </View>
            </View>
        </Background>
    );
}


export default SignUp;