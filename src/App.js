import logo from './logo.svg';
import './App.css';
import FiglioStock from './FiglioStock';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      <FiglioStock nome="APPLE" fondatore="Jobs" />
      <FiglioStock nome="GOOGLE" fondatore="Gates" />
      <FiglioStock />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
