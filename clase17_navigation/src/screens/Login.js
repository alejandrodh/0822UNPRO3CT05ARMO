import React, { Component } from 'react';
import { View,
         Text,
         TextInput,
         TouchableOpacity,
        StyleSheet } from 'react-native';

class Login extends Component {
    constructor(){
        super()
        this.state = {
            email:'',
            pass:'',
            userName:'',
            errors:''
        }
    }

    render(){
        return(
            <View> 
                <Text>Login</Text>
                <View>
                    <TextInput 
                        
                        placeholder='email'
                        keyboardType='email-address'
                        onChangeText={ text => this.setState({email:text}) }
                        value={this.state.email}
                    />  
                    <Text onPress={ () => this.props.navigation.navigate('Register')} >Ir a Registro</Text>
                </View>
            </View>
        )
    }
    
}


export default Login;