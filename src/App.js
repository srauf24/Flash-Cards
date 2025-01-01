import './App.css';
import {useState} from "react";

function App() {
    const [cardCount, setcardCount] = useState(0);


  return (
    <div className="App">
      <header className="Header">
       <h1> Memon Vocabulary</h1>
          <p className="Description"> Lets practice your memoni  🍵</p>
            <p className="CardCount">Card Count: {cardCount}</p>
      </header>
    </div>
  );
}

export default App;
