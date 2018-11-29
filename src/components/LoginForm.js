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
          .then(this.onLoginSuccess.bind(this))
            .catch(()=>{
               firebase.auth().createUserWithEmailAndPassword(email,password)
                .then(this.onLoginSuccess.bind(this))
               .catch(
                   this.onLoginFail.bind(this)
               )
           })
    }
    onLoginFail(){
        this.setState({
            errorOccured:'Authentication Failed',
            loading:false
           });
    }
    onLoginSuccess() {
       this.setState({
           email:'',
           password:'',
           loading:false,
           errorOccured:''
       }) 
    }
    renderButton(){
        if(this.state.loading){
           return <Spinner size='small'/>
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