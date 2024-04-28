type HangmanWordProps = {
  guessedLetters: string[]
  wordToGuess: string
}

export function HangmanWord({ guessedLetters, wordToGuess }: HangmanWordProps) {
  return (
    <div className="hangmanWordDiv">
      {wordToGuess.split("").map((letter, index) => (
        <span id="displayWord">
          <span
            style={{
              color: "red",
              visibility: guessedLetters.includes(letter)
                ? "visible"
                : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  )
}
