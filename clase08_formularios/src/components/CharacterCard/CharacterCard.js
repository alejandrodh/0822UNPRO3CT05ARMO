import React, {Component} from 'react';
import './CharacterCard.css'
import {Link} from 'react-router-dom';

class CharacterCard extends Component{
    constructor(props){
        super(props)
        this.state={
           
        }
    }

    render(){
        // console.log(this.props);
        return(
             <article className='character-card'>
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