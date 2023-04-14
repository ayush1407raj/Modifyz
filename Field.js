import React from 'react';
import {TextInput} from 'react-native';
import { darkGreen } from './Constants';

const Field = props => {
    return(
        <TextInput {...props} 
        style={{ borderRadius: 100, color: 'white',
        paddingHorizontal: 10, width:'80%', backgroundColor:'#3636367c', marginVertical:17}}
        placeholderTextColor='#ffffffd0'>
        </TextInput>
    );
}


export default Field;