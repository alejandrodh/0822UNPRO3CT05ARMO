import {View, Text, Image, StyleSheet} from 'react-native';

function Card(props){
    console.log(props);
    return(
        <View style={styles.container}>
            <Text>{props.data.title}</Text>
            <Text>{props.data.category}</Text>
            <Image 
                source={{uri:props.data.image}}
                style={styles.image}
                resizeMode='cover'
            />
            <Text>{props.data.price}</Text>
            <Text>{props.data.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginVertical:10,
        marginHorizontal:10,
        borderColor:'#ccc',
        borderWidth: 1,
        borderRadius: 4,
        padding: 10
    },
    image:{
        height:300
    }
})

export default Card;