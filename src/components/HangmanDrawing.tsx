const HEAD = (
    <div id="HEAD"></div>
)

export function HangmanDrawing() {
    return <div className="hangman-drawing">
        {HEAD}
        <div id="smallVerticalBar"></div>
        <div id="horizontalBar"></div>
        <div id="firstUpright"></div>
        <div id="bottomBar"></div>
    </div>

}