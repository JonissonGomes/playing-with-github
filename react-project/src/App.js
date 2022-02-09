import logo from "./production.svg";
import "./App.css";

function App() {
  const welcome = "Bem vindo";
  const academy = "</ Globo Academy>";
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>{welcome}</p>
          <img src={logo} />
          <p>{academy}</p>
          <div className="Box-integrantes">
            <h3> Integrantes: </h3>
            <p>Hello, World! Carolina Ribeiro</p>
            <p>Hello world Raquel!</p>
            <p> Olá, mundo - Brendha </p>
            <p> Hi, mundos - Jonisson Gomes</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
