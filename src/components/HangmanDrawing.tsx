const HEAD = (
    <div id="HEAD"></div>
)

const BODY = (
    <div id="BODY"></div>
)

const RIGHT_ARM = (
    <div id="RIGHT_ARM"></div>
)

export function HangmanDrawing() {
    return <div className="hangman-drawing">
        {HEAD}
        {BODY}
        {RIGHT_ARM}
        <div id="smallVerticalBar"></div>
        <div id="horizontalBar"></div>
        <div id="firstUpright"></div>
        <div id="bottomBar"></div>
    </div>

}