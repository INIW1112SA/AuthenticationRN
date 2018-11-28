import React,{Component} from 'react';
import {View,TextInput} from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';
class App extends Component{
    componentWillMount(){
        firebase.initializeApp({
            
              
            
        })
    }
    render(){
        return(
            <View>
                <Header headerText="Aswini"/>
                <LoginForm/>
            </View>
        )
    }
}
export default App;