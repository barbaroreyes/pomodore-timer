import logo from './logo.svg';
import './App.css';
import Pomodore from './pomodore/pomodore'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <Pomodore/>
      </header>
    </div>
  );
}

export default App;
