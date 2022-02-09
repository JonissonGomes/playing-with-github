import logo from './production.svg';
import './App.css';

function App() {

  const welcome = "Bem vindo";
  const academy = "</ Globo Academy>"
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>{welcome}</p>
        <img src={logo} />
        <p>{academy}</p>
        <p>Hello world Raquel!</p>
        </div>
      </header>
    </div>
  );
}

export default App;
