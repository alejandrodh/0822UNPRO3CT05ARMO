import React, {Component} from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import './characters.css'

class Characters extends Component{
    constructor(){
        super()
        this.state={
            personajes:[], //aparecer personajes
            nextUrl:'',
            value:''
        }
    }

    componentDidMount(){
        //BUscamos datos
        fetch('https://rickandmortyapi.com/api/character')
            .then( res => res.json())
            .then( data => this.setState({
                personajes: data.results,
                nextUrl: data.info.next
            }))
            .catch()
    }
    
    traerMas(){
        //Traer la siguiente página de personajes
        fetch(this.state.nextUrl)
            .then( res => res.json())
            .then( data => this.setState({
                personajes: data.results.concat(this.state.personajes),
                nextUrl: data.info.next
            }))
            .catch()
    }

    borrar(id){
       let personajesFiltrados = this.state.personajes.filter(unPersonaje => unPersonaje.id !== id);
       this.setState({
        personajes: personajesFiltrados
       })
    }


    render(){
        //console.log(this.state.personajes);
        return(
            <React.Fragment>
                <header className='headerCards'>
                    <button onClick={()=>this.traerMas()}> Traer más </button>
                    {/* <form>
                        <input type="text" name="" id="" value={this.state.value} placeholder='Filtrar por nombre'/>
                    </form> */}
                </header>
                <section className='card-container'>
                    { 
                        this.state.personajes.map( (unPersonaje, idx) => <CharacterCard key={unPersonaje.name+idx} datosPersonaje={unPersonaje} borrar={(id)=>this.borrar(id)}/>)
                    }
                </section>
            </React.Fragment>
        )
    }

}


export default Characters