import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import Category from "./components/Category/Category";
import Footer from "./components/Footer/Footer";

function App() {
  let category =[]

  return (
    <React.Fragment>
      <Navbar />
      <h1>My App in React</h1>
      <main>
      <section className="top-data">
        <Card />
        <Card />
        <Card />
      </section>
      <h2>Categories in database</h2>
      <section className="general-data">
        <Category name="Categoria 1" data="7894656"/>
        <Category name="Categoria 2"/>
        <Category name="Categoria 3"/>
        <Category name="Categoria 4"/>
        <Category name="Categoria 5"/>
        <Category name="Categoria 6"/>
      </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
