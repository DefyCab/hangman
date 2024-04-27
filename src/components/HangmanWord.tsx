const word = "test"
const guessedLetters = ["t"]

export function HangmanWord() {
  return (
    <div className="hangmanWordDiv">
      {word.split("").map((letter, index) => (
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
