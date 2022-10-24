import React, { Component } from 'react';
import {auth, db} from '../firebase/config';
import {Text, View, FlatList} from 'react-native'


class Home extends Component{
    constructor(){
        super();
        this.state = {
            users:[]
        }
    }

    componentDidMount(){
        db.collection('users').onSnapshot(
            docs => {
                let users = [];
                docs.forEach( doc => {
                    users.push({
                        id: doc.id,
                        data: doc.data()
                    })
                    this.setState({
                        users: users
                    })
                })
                
            }
        )


    }

    render(){
        console.log(this.state.users);
        return(
            <View>
                <Text> Home</Text>
                <Text> Usarios registrados</Text>
                <FlatList 
                    data={this.state.users}
                    keyExtractor={ oneUser => oneUser.id.toString()}
                    renderItem={ ({item}) => <Text> {item.data.owner } </Text>}
                />        
            </View>

        )
    }
}

export default Home