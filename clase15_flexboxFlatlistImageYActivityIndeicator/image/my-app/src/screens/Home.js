import react, {Component} from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image} from "react-native"
import { Button } from "react-native-web";

class Home extends Component{
    constructor(){
        super()
        this.state={

        }
    }

    click(){
        console.log('Hola');
    }


    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Hola Mundo</Text>
                <TouchableOpacity style={styles.button} onPress={()=>this.click()}>
                    <Text>Click me</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Imagen desde nuestro proyecto</Text>
                <Image 
                    source={require('../../assets/tatantataan.jpg')}
                    style={styles.image}
                    resizeMode='cover'
                />

                <Text style={styles.title}>Imagen desde url externa</Text>
                <Image 
                    source={{uri:'https://lapaginamillonaria.com/__export/1633441863048/sites/lpm/img/2021/10/05/xlvarez_-_rojo_crop1633441784392.jpg_1693159006.jpg'}}
                    style={styles.image}
                    resizeMode='cover'
                />

            </View>

        )
    }
}

const styles = StyleSheet.create({
    title:{
        fontSize:22,
    },
    container:{
        textAlign:"center",
        paddingHorizontal:10
    },
    button:{
        backgroundColor:"#ccc",
        borderRadius: 6,
        padding:4
    },
    image:{
        height:300
    }
    
})

export default Home;


