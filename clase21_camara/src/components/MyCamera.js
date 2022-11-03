import React, {Component} from 'react';
import {Camera } from 'expo-camera';
import {storage} from '../firebase/config';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

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

    guardarFoto(){
        fetch(this.state.urlTemporal) //buscar la foto de la carpeta temporal en nuestra máquina
            .then(res => res.blob()) //Quedarnos con la foto en formato binario.
            .then( image => { //Ya podemos trabajar el dato final.
                //Crear el destino y nombre con el que se guarda la foto en Storage
                const refStorage = storage.ref(`photos/${Date.now()}.jpg`);
                refStorage.put(image) //Mandar la foto al storage. Put es asincrónico.
                    .then(()=>{
                        refStorage.getDownloadURL() //la url pública de firebase.
                        .then( url => this.props.onImageUpload(url))
                    })
            })
            .catch(e => console.log(e))
    }


    render(){
        return(
            <View>
            {
                this.state.permissions ? 
                    this.state.showCamera ?
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
                    <View>
                        <Image 
                            style={styles.preview}
                            source={{uri: this.state.urlTemporal}}
                            resizeMode='cover'
                        />
                        <TouchableOpacity style={styles.button} onPress={()=>this.cancelar()}>
                            <Text>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={()=>this.guardarFoto()}>
                            <Text>Aceptar</Text>
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
    preview:{
        height:'40vh'
    }
}) 

export default MyCamera;