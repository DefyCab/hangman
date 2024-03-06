import { useState } from "react"
import words from "../wordList.json"
import { HangmanDrawing } from "./components/HangmanDrawing"
import { HangmanWord } from "./components/HangmanWord"
import { Keyboard } from "./components/Keyboard"
// import "./App.css"

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  return (
    <div className="container">
      <div className="gameResult">Lose Win</div>
      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />
    </div>
  )
}

export default App
