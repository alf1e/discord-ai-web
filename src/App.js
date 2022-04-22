import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          DISCORD-AI discord bot. 
        </p>
        <p>
          Coming Soon!
        </p>
        <Button variant="contained" color="primary" disabled>Invite Now!</Button>
      </header>
    </div>
  );
}

export default App;
