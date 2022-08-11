import React from 'react';

function Navbar(){
    return (
        <nav>
            <ul className="main-nav">
                <li>elemento menu</li>
                <li>elemento menu</li>
                <li>elemento menu</li>
                <li>elemento menu</li>
            </ul>
            <ul className="user">
                <li>Nombre usuario <img src="./img/user.jpg" alt=""/></li>
            </ul>
        </nav>
    )
}

export default Navbar