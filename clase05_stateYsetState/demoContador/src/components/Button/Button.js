import React, { Component } from 'react';

class Button extends Component {

    clickeame(){
        console.log('me clickearon');
    }

    render(){
        return(
            <button onClick={()=>this.clickeame()}>Cambiar fondo</button>
        )
    }

}

export default Button;