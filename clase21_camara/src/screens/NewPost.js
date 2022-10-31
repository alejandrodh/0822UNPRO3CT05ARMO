import React, {Component} from 'react'
import {Text, TextInput, TouchableOpacity,View} from 'react-native';
import {auth, db} from '../firebase/config';
import MyCamera from '../components/MyCamera';


class NewPost extends Component{
    constructor(){
        super()
        this.state={
            textoPost:'',
            createdAt:'',
            photo:'',
            showCamera: true
        }
    }

    createPost(texto, photo){
        db.collection('posts').add({
                owner: 'facu@dh.com', //deberia ser el usuario registrado. auth.currentUser
                textoPost: texto,
                photo: photo,
                likes:[],
                comments:[],
                createdAt: Date.now()
            })
            .then(() => {
                this.setState({
                    texto:'',
                })
                this.props.navigation.navigate('Home')
            })
            .catch( e => console.log(e))
    }

    render(){
        return(
            <View>
            {
                this.state.showCamera ?
                <MyCamera />
                :
                <View>
                    <Text> Nuevo posteo form</Text>
                    <View>
                        <TextInput  
                            placeholder='texto post'
                            keyboardType='default'
                            //poner propiedad para transformarlo en textArea
                            onChangeText={ text => this.setState({textoPost:text}) }
                            value={this.state.textoPost}
                        /> 
                        <TouchableOpacity onPress={()=>this.createPost(this.state.textoPost, this.state.photo)}>
                            <Text>Guardar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }
            </View>
        )
    }
}

export default NewPost;