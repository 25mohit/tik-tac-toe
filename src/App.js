import { useState } from 'react';
import './App.css';
import Board from './components/Board/Board'


function App() {

  const [winMessage, setWinMessage] = useState('')

  return (
    <div className="App">
      <Board setWinMessage={setWinMessage}/>
      {winMessage }
    </div>
  );
}

export default App;
