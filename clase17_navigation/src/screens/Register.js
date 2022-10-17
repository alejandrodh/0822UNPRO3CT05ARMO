import React, { Component } from 'react';
import {auth} from '../firebase/config';
import { View,
         Text,
         TextInput,
         TouchableOpacity,
        StyleSheet } from 'react-native';

class Register extends Component {
    constructor(){
        super()
        this.state = {
            email:'',
            pass:'',
            userName:'',
            errors:''
        }
    }

    registerUser(email, pass){
        //Registrar en firebase y si el reigstro sale bien redireccionar a Home
        auth.createUserWithEmailAndPassword(email, pass)
            .then( res => {
                //equivalente a res.redirect
                this.props.navigation.navigate('HomeMenu')
            })
            .catch(error => console.log(error))

    }



    render(){
        return(
            <View> 
                <Text>Registro</Text>
                <View>
                    <TextInput  
                        placeholder='email'
                        keyboardType='email-address'
                        onChangeText={ text => this.setState({email:text}) }
                        value={this.state.email}
                    /> 
                    <TextInput  
                        placeholder='password'
                        keyboardType='default'
                        onChangeText={ text => this.setState({pass:text}) }
                        value={this.state.pass}
                    />  

                    <TouchableOpacity onPress={()=>this.registerUser(this.state.email, this.state.pass)}>
                        <Text>Registrarme</Text>
                    </TouchableOpacity>

                    <Text onPress={ () => this.props.navigation.navigate('Login')} >Ir a login</Text>

                    
                </View>
            </View>
        )
    }
    
}


export default Register;