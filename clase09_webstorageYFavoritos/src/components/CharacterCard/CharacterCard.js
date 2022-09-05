import React, {Component} from 'react';
import './CharacterCard.css'
import {Link} from 'react-router-dom';

class CharacterCard extends Component{
    constructor(props){
        super(props)
        this.state={
           favsMessage: 'Agregar a favoritos',
        }
    }

    componentDidMount(){
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')

        if(recuperoStorage !== null){
            let favoritosToArray = JSON.parse(recuperoStorage);
            favoritos = favoritosToArray
        }

        if(favoritos.includes(this.props.datosPersonaje.id)){
            this.setState({
                favsMessage: 'Quitar de favoritos'
            })
        }

    }

    agregarYQuitarDeFavoritos(id){
        //Tiene que agegar un id dentro de un Array y guardarlo en localstorage.
        // Si el id ya existe ofrecer al usuario la posibilidad de quitar el id del array de favoritos.
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')

        if(recuperoStorage !== null){
            let favoritosToArray = JSON.parse(recuperoStorage);
            favoritos = favoritosToArray
        }

        //Preguntemos si el id ya está en el array.
        if(favoritos.includes(id)){ //includes retorna un booleano.
            favoritos = favoritos.filter(unId => unId !== id);
            //mostar al usuario un nuevo texto: agregar a favoritos
            this.setState({
                favsMessage: 'Agregar a favoritos'
            })
        } else {
            favoritos.push(id);
            //mostar un texto diferente al usuario. Quitar de favs
            this.setState({
                favsMessage: 'Quitar de favoritos'
            })
        }


        let favoritosToString = JSON.stringify(favoritos);
        localStorage.setItem('favoritos', favoritosToString);

        console.log(localStorage);

    }


    render(){
        // console.log(this.props);
        return(
             <article className='character-card'>
                <p onClick={()=>this.agregarYQuitarDeFavoritos(this.props.datosPersonaje.id)}>{this.state.favsMessage}</p>
                {/* ⚠️ Dejo Link solo en la foto del personaje. Si la aplico a toda la tarjeta anula el evento definido en Borrar porque Link reacciona primero que el evento onClcik. 👀 */}
                <Link to={`/personajes/id/${this.props.datosPersonaje.id}`}>
                    <img src={this.props.datosPersonaje.image} alt="" />
                </Link>
                <h2>{this.props.datosPersonaje.name}</h2> {/* Nombre */}
                <p>{this.props.datosPersonaje.status}</p> {/* Estado */}
                <p>{this.props.datosPersonaje.species}</p> {/* Especie */}
                <p className='more'>Ver más</p> 
                <section className='extra'>
                    <p>Origen: {this.props.datosPersonaje.origin.name}</p> 
                </section>
                <p className='delete' onClick={()=>this.props.borrar(this.props.datosPersonaje.id)}>Borrar</p>
                
            </article>

        )
    }

}

export default CharacterCard