const HEAD = (
    <div id="HEAD"></div>
)

const BODY = (
    <div id="BODY"></div>
)

export function HangmanDrawing() {
    return <div className="hangman-drawing">
        {HEAD}
        {BODY}
        <div id="smallVerticalBar"></div>
        <div id="horizontalBar"></div>
        <div id="firstUpright"></div>
        <div id="bottomBar"></div>
    </div>

}