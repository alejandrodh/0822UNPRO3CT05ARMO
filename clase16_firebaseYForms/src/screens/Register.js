import React, { Component } from 'react';
import { View,
         Text,
         TextInput,
         TouchableOpacity } from 'react-native';

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

    render(){
        return(
            <View> 
                <Text>Registro</Text>
                <View>
                    <TextInput 
                        style={styles.field}
                        placeholder='email'
                        keyboardType='email-address'
                        onChangeText={ text => this.setState({email:text}) }
                        value={this.state.email}
                    />  

                    
                </View>
            </View>
        )
    }

}


export default Register;