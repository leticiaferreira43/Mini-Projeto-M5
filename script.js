import React from "react";
import Routes from "./route";

function App() {
  return (
    <>
      {/* Cabeçalho */}
      <header style={styles.header}>
        <h1>Meu Portfólio - Letícia Ferreira
       </h1>
        <nav>
          <a href="#sobre" style={styles.link}>Sobre</a>
          <a href="#projetos" style={styles.link}>Projetos</a>
          <a href="#contato" style={styles.link}>Contato</a>
        </nav>
      </header>

      {/* Conteúdo vindo do route.js */}
      <Routes />

    </>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    backgroundColor: "#4a00e0",
    color: "white",
  },
  link: {
    margin: "0 10px",
    color: "white",
    textDecoration: "none",
  },
  footer: {
    marginTop: "40px",
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#4a00e0",
    color: "white",
  },
};

export default App;
