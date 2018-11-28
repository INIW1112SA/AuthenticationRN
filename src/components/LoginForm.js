import React ,{Component} from'react';
import {View,Text} from 'react-native';
import firebase from 'firebase';
import {Button,Input,Card,Spinner,CardSection} from './common';
class LoginForm extends Component
{
    constructor(){
        super();
        this.state ={
            email:'',
            password:'',
            errorOccured:'',
            loading:false
        }
    }
    onButtonPress(){
        const { email, password} =this.state;
        this.setState({
            errorOccured:'',
            loading:true
        })
        firebase.auth().signInWithEmailAndPassword(email,password)
           .catch(()=>{
               firebase.auth().createUserWithEmailAndPassword(email,password)
                .catch(()=>{
                    this.setState({
                        errorOccured:'Authentication Failed'
                    });
                })
           })
    }
    renderButton(){
        if(this.state.loading){
            <Spinner size='small'/>
        }
        return(
            <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
        )
    }
    render(){
        return(
            <View>
              <Card>
              <CardSection>
              <Input
                label='Email'
                placeholder='user@gmail.com'
                value = {this.state.email}
                onChangeText = {email =>{
                    this.setState({ email })
                }}/>
              </CardSection>
              <CardSection>
              <Input
              label='Password'
              placeholder='password'
              secureTextEntry
              value = {this.state.password}
              onChangeText = {password =>{
                  this.setState({ password })
              }}/>
              </CardSection>
              <Text style = {styles.errorTextSTyle}>{this.state.errorOccured}</Text>
              <CardSection>
                {this.renderButton()}
              </CardSection>
              </Card>
            </View>
        )
    }
}
const styles ={
    errorTextSTyle = {
        fontSize:20,
        color:'red',
        alignSelf:'center'
    }
}

export default LoginForm;