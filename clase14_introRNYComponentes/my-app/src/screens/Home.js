import react, {Component} from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native"
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
            </View>

        )
    }
}

const styles = StyleSheet.create({
    title:{
        fontSize:22,
        color:"red"
    },
    container:{
        textAlign:"center",
        paddingHorizontal:10
    },
    button:{
        backgroundColor:"#ccc",
        borderRadius: 6,
        padding:4
    }
    
})

export default Home;


