import './App.css';
import { useState } from "react";

const flashCards = [
  { id: 1, question: "Mee-jo naam ____ aa-heh.", answer: "My name is ____." },
  { id: 2, question: "Eye kee yoo?", answer: "How are you?" },
  { id: 3, question: "Mee-keh koh-wo kah-peh-toh.", answer: "I need food." },
  { id: 4, question: "Mee-keh paah-nee keh-peh-toh.", answer: "I need water." },
  { id: 5, question: "Ah-ow, chai pee-yoo-tah.", answer: "Come, let's have tea." },
  { id: 6, question: "Mee-keh mah-dud kah-peh-tee.", answer: "I need help." },
  { id: 7, question: "Pah kroh kah-ree-ree-yah-yo?", answer: "What are we doing?" },
  { id: 8, question: "Mee-keh ghaar vee-noh eye.", answer: "I want to go home." },
  { id: 9, question: "Ee kee-toh joh eye?", answer: "How much does this cost?" },
  { id: 10, question: "Mee-keh kroh ker-neh kah-peh?", answer: "What should I do?" }
];


function App() {
  const [currentIndex, setCurrentIndex] = useState(0); // Start with the first card
  const [showAnswer, setShowAnswer] = useState(false);

  const currentCard = flashCards[currentIndex];

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

  const speakText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);

    // Select an Indian English voice
    const voices = speechSynthesis.getVoices();
    const indianVoice = voices.find((voice) => voice.lang === "en-IN");

    // Set the voice if an Indian voice is available
    if (indianVoice) {
      utterance.voice = indianVoice;
    }

    // Speak the text
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="App">
      <header className="Header">
        <h1>Memon Vocabulary</h1>
      </header>
      <p className="Description">Let's practice your Memoni 🍵🗣️</p>
      <p className="CardCount">Card Count: {flashCards.length}</p>
      <div className="FlashCard">
        <button
          className="VolumeButton"
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering card click
            speakText(showAnswer ? currentCard.answer : currentCard.question);
          }}
        >
          🔊
        </button>
        <div onClick={handleCardClick}>
          <div className="FlashCardHeader">
            <h2>{showAnswer ? "English" : "Memoni"}</h2>
          </div>
          <p>{showAnswer ? currentCard.answer : currentCard.question}</p>
        </div>
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
