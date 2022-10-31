import React, {Component} from 'react';
import {Camera } from 'expo-camera';
import {storage} from '../firebase/config';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

class MyCamera extends Component{
    constructor(props){
        super(props);
        this.state = {
            permissions: false,
            showCamera: true,
            urlTemporal:''
       }

        this.metodosDeCamara = ''
    }

    componentDidMount(){
        Camera.requestCameraPermissionsAsync()
            .then( () => this.setState({
                permissions: true
            }))
            .catch( e => console.log(e))
    }

    sacarFoto(){
        //Aca hay que usar los métodos de la cámara
        this.metodosDeCamara.takePictureAsync()
            .then( photo => {
                this.setState({
                    urlTemporal: photo.uri,
                    showCamera: false
                })
            })
            .catch( e => console.log(e))
    }


    render(){
        return(
            <View>
            {
                this.state.permissions ? 
                    <View style={styles.cameraBody}>
                        <Camera
                            style={styles.cameraBody}
                            type = {Camera.Constants.Type.front}
                            ref={metodosDeCamara => this.metodosDeCamara = metodosDeCamara }
                        />
                        <TouchableOpacity style={styles.button} onPress={()=>this.sacarFoto()}>
                            <Text>Sacar foto</Text>
                        </TouchableOpacity>
                    </View>
                :
                    <Text>No tengo permisos</Text>
            }
            </View>
        )
    }

}

const styles = StyleSheet.create({
    cameraBody: {
        height: '80vh',
    },
    button:{
        height: '20vh',
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 5,
        borderRadius: 4,
        marginTop: 20
    },
    // preview:{
    //     height:'80%'
    // }
}) 

export default MyCamera;