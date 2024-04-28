const HEAD = <div id="HEAD"></div>

const BODY = <div id="BODY"></div>

const RIGHT_ARM = <div id="RIGHT_ARM"></div>

const LEFT_ARM = <div id="LEFT_ARM"></div>

const RIGHT_LEG = <div id="RIGHT_LEG"></div>

const LEFT_LEG = <div id="LEFT_LEG"></div>

type HangmanDrawingProps = {
  numberOfGuesses: number
}

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div className="hangman-drawing">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      {/* {HEAD}
      {BODY}
      {RIGHT_ARM}
      {LEFT_ARM}
      {RIGHT_LEG}
      {LEFT_LEG} */}

      <div id="smallVerticalBar"></div>
      <div id="horizontalBar"></div>
      <div id="firstUpright"></div>
      <div id="bottomBar"></div>
    </div>
  )
}
