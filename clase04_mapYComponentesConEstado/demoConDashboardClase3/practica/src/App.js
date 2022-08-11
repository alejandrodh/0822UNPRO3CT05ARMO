import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import Category from "./components/Category/Category";
import Footer from "./components/Footer/Footer";
import Button from "./components/Button/Button";

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

  let cardData = [];

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
      <Button/>
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
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
