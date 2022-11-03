import React, { Component } from 'react';
import {auth, db} from '../firebase/config';
import {Text, View, FlatList} from 'react-native';
import Post from '../components/Post';


class Home extends Component{
    constructor(){
        super();
        this.state = {
            posts:[]
        }
    }

    componentDidMount(){
        db.collection('posts').where('owner','==','ale@dh.com').limit(2).onSnapshot(
            docs => {
                //console.log(docs);
                let posts = [];
                docs.forEach( doc => {
                    posts.push({
                        id: doc.id,
                        data: doc.data()
                    })
                    this.setState({
                        posts: posts
                    })
                })
                
            }
        )
    }

    render(){
        console.log(this.state.posts);
        return(
            <View>
                <Text> Home</Text>
                <Text> Lista de posteos </Text>
                <FlatList 
                    data={this.state.posts}
                    keyExtractor={ onePost => onePost.id.toString()}
                    renderItem={ ({item}) => <Post postData={item} />}
                />        
            </View>

        )
    }
}

export default Home