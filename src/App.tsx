import { useState } from "react"
import words from "../wordList.json"

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })

  return <h1>Hello World!</h1> 
   
}

export default App
