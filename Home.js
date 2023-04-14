import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { darkGreen } from './Constants';

const Home = (props) => {
    return(
        <Background>
            <View style={{ marginHorizontal: 40, marginVertical: 344}}>
              <Text style={{color:'#80a6cd', fontSize:45, marginBottom: -7,}}>Welcome To</Text>
              <Text style={{color:'white', fontSize:70, fontWeight:'bold', letterSpacing: 2, fontFamily: 'Segoe UI'}}>Modifyz</Text>
              <Text style={{color:'white', fontSize:14}}>The best barber & salon app in this centuary for your good looks and beauty.</Text>
              <View style={{marginBottom:77}}></View>
              <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
              <Btn bgColor={darkGreen} textColor='white'  btnLabel="SignUp" Press={() => props.navigation.navigate("SignUp")}/>
              <Btn bgColor='white' textColor={darkGreen}  btnLabel="Login" Press={() =>props.navigation.navigate("Login")}/>
              </View>
            </View>
        </Background>
    );
}

const style = StyleSheet.create({})

export default Home;