import React from 'react';
import {View,Text,TextInput} from 'react-native';

const Input = ({label,secureTextEntry,placeholder,value,onChangeText}) =>{
  const {inputStyle,labelStyle,ContainerStyle} 
    return(
        <View style ={containerStyle}>
            <Text style ={labelStyle}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                autoCorrect={false}
                secureTextEntry={secureTextEntry}
                style = {inputStyle} 
                value={value}
                onChangeText ={onChangeText}>
           
            </TextInput>
        </View>
    );
};
const styles = {
  inputStyle:{
      color:'#000',
      paddingRight:5,
      paddingLeft:5,
      fontSize:18,
      lineHeight:23,
      flex:2
  },
  labelStyle:{
      fontSize:18,
      flex:1,
      paddingLeft:20
  },
  containerStyle:{
      height:40,
      flex:1,
      flexDirection:'row',
      alignItems:'center'
  }
};
export {Input};