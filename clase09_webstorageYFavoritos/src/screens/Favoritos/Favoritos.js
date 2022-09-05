import React, {Component} from 'react';
import CharacterCard from '../../components/CharacterCard/CharacterCard'

class Favoritos extends Component{
    constructor(){
        super();
        this.state = {
            personajes:[] //Es array de objetos literales con cada personaje.
        }
    }

    componentDidMount(){
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')

        if(recuperoStorage !== null){
            favoritos = JSON.parse(recuperoStorage) //es un array de ids
            let personajes = [];

            //recorrer el array y pedirla al endpoint por los datos de cada personaje.
            favoritos.forEach(unIdFavorito => {
                //pedir por cada id los datos del personaje
                let url = `https://rickandmortyapi.com/api/character/${unIdFavorito}`
                fetch(url)
                    .then(res => res.json())
                    .then(data => personajes.push(data))
                    .catch(e => console.log(e))
            })

            console.log(personajes);
        }
        
    }
    
    render(){
        return(
            <React.Fragment>
                <h2>Mis personajes favoritos de Rick & Morty</h2>
                 <section className='card-container'>
                    { 
                        this.state.personajes.map( (unPersonaje, idx) => <CharacterCard key={unPersonaje.name+idx} datosPersonaje={unPersonaje}/>)
                    }
                </section>
            </React.Fragment>
        )
    }
}

export default Favoritos;