import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, World!</h1>
        <p>Este é um exemplo de uma aplicação React melhorada.</p>
      </header>
      <main>
        <section className="introduction">
          <h2>INTRODUÇÃO</h2>
          <p>React é uma biblioteca JavaScript para construir interfaces de usuário.</p>
        </section>
        <section className="features">
          <h2>CARACTERÍSTICAS</h2>
          <ul>
            <li>Componente baseado em arquitetura</li>
            <li>Virtual DOM para desempenho eficiente</li>
            <li>Ferramentas poderosas para desenvolvedores</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>Desenvolvido por "Alesom Bernardes"</p>
      </footer>
    </div>
  );
}

export default App;
