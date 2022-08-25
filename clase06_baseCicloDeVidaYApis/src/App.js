import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import Category from "./components/Category/Category";
import Characters from "./components/Characters/Characters";
import Footer from "./components/Footer/Footer";


function App() {
  let categorias=[
    'Categoria 1',
    'Categoria 2',
    'Categoria 3',
    'Categoria 4',
    'Categoria 5',
    'Categoria 6',
    'Categoria 7',
    'Categoria 8',
    'Categoria 9',
  ];

  let menu = [
    'Home',
    'menú1',
    'menú2',
    'menú3',
  ]


  return (
    <React.Fragment>
      <Navbar elementosMenu={menu}/>
      <h1>My App in React</h1>
      <main>
      <section className="top-data">
        <Card />
        <Card />
        <Card />
      </section>
      <h2>Categories in database</h2>
      <section className="general-data">
      {
        categorias.map( (unaCategoria, idx) => <Category key={unaCategoria+idx} name={unaCategoria} />)
      }
      </section>
       
      <h2>Personajes de Rick and Morty</h2>
        <Characters />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
