import React, {Component} from 'react';

class Contador extends Component {
    constructor(props){
        super(props)
        this.state = {
            valor:0,
            texto: this.props.descripcion,
            darkmode: false,
            textoBoton: 'DarkMode Off',
        }
    }

    disminuir(){
        console.log('Disminuyendo');
        //Restar 1 al valor inicial del estado
        this.setState(
            {
                valor: this.state.valor - 1
            }
        )
    }

    aumentar(){
        this.setState(
            {
                valor: this.state.valor + 1
            }
        )
    }

    darkmode(){
        if(this.state.darkmode === false){
            this.setState(
                {
                    darkmode: true,
                    textoBoton: "DarkMode On",
                }
            )
        } else {
            this.setState(
                {
                    darkmode: false,
                    textoBoton: "DarkMode Off",
                }
            )
        }
    }



    render(){
        // console.log(this.props);
        return(
            <article className={ this.state.darkmode ? 'darkmode' : '' }>
                <button onClick={()=>this.darkmode()}> {this.state.textoBoton }</button>
                <p>El valor del estado es: {this.state.valor}</p>
                <p> {this.state.texto} </p>
                <button onClick={()=>this.disminuir()}> Dismimuir </button>
                <button onClick={()=>this.aumentar()}> Aumentar </button>
            </article>
        )
    }
}

export default Contador;