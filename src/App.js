import React,{Component} from 'react';
import {View,TextInput} from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
class App extends Component{
    constructor(){
        super();
        this.state = {
            loggedIn:null
        }
    }
    componentWillMount(){
        firebase.initializeApp({
              
        });
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({
                    loggedIn:true
                });
            }
            else{
                this.setState({
                    loggedIn:false
                });
            }
        });
    }
    renderContent(){
        switch(this.state.loggedIn){
            case true:
            return (
                <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>)
            case false:
            return <LoginForm/>;
            default:
            return <Spinner size= 'large'/>
        } 
    }
    render(){
        return(
            <View>
                <Header headerText="Aswini"/>
                
              {this.renderContent()}
            </View>
        )
    }
}
export default App;