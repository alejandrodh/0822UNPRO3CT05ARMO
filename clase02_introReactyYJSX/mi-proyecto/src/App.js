
function App() {
  let nombre = "Facu";
  let peliculas = ["Avengers", "Dr. Strange MoM"];
  let pelisFiltradas = peliculas.filter(function(unaPeli){
    return unaPeli === "Avengers"
  })


  return (
    <section>
      <h1>Hola Mundo. Bienvenido { nombre }</h1>
      <ul>
        { pelisFiltradas.map( unaPeli => <li> {unaPeli} </li>) }
      </ul>
    </section>
  
  );
}

export default App;
