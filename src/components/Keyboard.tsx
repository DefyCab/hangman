// todo import styles from indivudal file

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "d",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]

export function Keyboard() {
  return (
    <div className="keyGrid">
      {KEYS.map((key) => {
        return <button className="btn" key={key}>{key}</button>
      })}
    </div>
  )
}
