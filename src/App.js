import './App.css';
import { useState } from "react";

const flashCards = [
  { id: 1, question: "Mijo naam ____ aahe.", answer: "My name is ____." },
  { id: 2, question: "Ai ki yu?", answer: "How are you?" },
  { id: 3, question: "Mikhe kowho kapeto.", answer: "I need food." },
  { id: 4, question: "Mikhe paani kepto.", answer: "I need water." },
  { id: 5, question: "Aao, chai piyoota.", answer: "Come, let's have tea." },
  { id: 6, question: "Mikhe madad kapeti.", answer: "I need help." },
  { id: 7, question: "Pa kro kariri-ya-yo?", answer: "What are we doing?" },
  { id: 8, question: "Mikhe ghar vino ai.", answer: "I want to go home." },
  { id: 9, question: "Ee Kito Jo Ai?", answer: "How much does this cost?" },
  { id: 10, question: "Mike Kro Kerne Kape?", answer: "What should I do?" }
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0); // Start with the first card
  const [showAnswer, setShowAnswer] = useState(false);

  const handleCardClick = () => {
    setShowAnswer(!showAnswer);
  };

  const handleNextCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === flashCards.length - 1 ? 0 : prevIndex + 1
    );
    setShowAnswer(false); // Reset to show question first
  };

  const handlePreviousCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? flashCards.length - 1 : prevIndex - 1
    );
    setShowAnswer(false); // Reset to show question first
  };

  const currentCard = flashCards[currentIndex];

  return (
      <div className="App">
        <header className="Header">
          <h1>Memon Vocabulary</h1>
        </header>
        <p className="Description">Let's practice your Memoni 🍵🗣️</p>
        <p className="CardCount">Card Count: {flashCards.length}</p>
        <div className="FlashCard" onClick={handleCardClick}>
          <div className="FlashCardHeader">
            <h2>{showAnswer ? "English" : "Memoni"}</h2>
          </div>
          <p>{showAnswer ? currentCard.answer : currentCard.question}</p>
        </div>
        <div className="Navigation">
          <button className="Arrow" onClick={handlePreviousCard}>
            ◀️
          </button>
          <button className="Arrow" onClick={handleNextCard}>
            ▶️
          </button>
        </div>

      </div>
  );
}

export default App;
