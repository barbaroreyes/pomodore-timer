import logo from './logo.svg';
import './App.css';
// import Pomodore from './pomodore/pomodore'
import Pomodore2 from './Pomodore@/pomodore@'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          
         <Pomodore2/>
      </header>
    </div>
  );
}

export default App;
// <Pomodore/>