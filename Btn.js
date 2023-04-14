import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function Btn({ bgColor, btnLabel, textColor, Press }) {
    return (
        <TouchableOpacity onPress={Press} style={{ backgroundColor: bgColor,
        borderRadius: 50, alignItems: 'center', width: 150,
        paddingVertical:9, marginLeft: 14}}>
        <Text style={{color: textColor, fontSize: 17, fontWeight:"bold"}}>{btnLabel}</Text>
        </TouchableOpacity>
    )
}