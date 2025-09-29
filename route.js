import React from "react";

function Routes() {
  return (
    <main style={styles.main}>
      {/* ===== Sobre Mim ===== */}
      <section id="sobre" style={styles.section}>
        <h2>Sobre Mim</h2>
        <p>
          Meu nome é Letícia Geralda Conceição Ferreira, sou estudante do ensino médio e faço um curso de programação.
Tenho interesse em tecnologia, desenvolvimento web e futuramente em jornalismo investigativo, unindo comunicação e análise de dados.
Minhas linguagens de estudo até agora incluem JavaScript e conceitos de APIs.
           </p>
      </section>

      {/* ===== Projetos ===== */}
      <section id="projetos" style={styles.section}>
        <h2>Projetos</h2>

        <div style={styles.card}>
          <h3>Projeto 1</h3>
          <p>
            Um projeto de API usando Node.js, com rotas e organização de arquivos (index.js, script.js, route.js).
            </p>
        </div>

        <div style={styles.card}>
          <h3>Projeto 2</h3>
          <p>
            Este portfólio é parte dos exercícios do curso de programação.
 </p>
        </div>
      </section>

      {/* ===== Contato ===== */}
      <section id="contato" style={styles.section}>
        <h2>Contato</h2>
        <p>
          Email: leticiageralda405@gmail.com
        </p>
       
      </section>
    </main>
  );
}

const styles = {
  main: {
    padding: "20px",
  },
  section: {
    margin: "50px 0",
    textAlign: "center",
  },
  card: {
    margin: "20px auto",
    padding: "15px",
    maxWidth: "400px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  },
};

export default Routes;
