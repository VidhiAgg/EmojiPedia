import { useState } from "react";
import "./styles.css";
//databse
var emojiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",
  "😚": "Kissing Face with Closed Eyes",
  "😙": "Kissing Face with Smiling Eyes",
  "😋": "Face Savoring Food",
  "😛": "Face with Tongue",
  "😜": "Winking Face with Tongue",
  "🤪": "Zany Face",
  "😝": "Squinting Face with Tongue",
  "🤑": "Money-Mouth Face",
  "🤗": "Smiling Face with Open Hands",
  "🤭": "Face with Hand Over Mouth",
  "🤴": " Prince",
  "👸": " Princess",
  "👳": " Person Wearing Turban",
  "👳‍♂️": " Man Wearing Turban",
  "👳‍♀️": " Woman Wearing Turban",
  "👲": " Person with Skullcap",
  "🧕": " Woman with Headscarf",
  "🤵": " Person in Tuxedo",
  "💘": " Heart with Arrow",
  "💝": " Heart with Ribbon",
  "💖": " Sparkling Heart",
  "💗": " Growing Heart",
  "💓": " Beating Heart",
  "💞": " Revolving Hearts",
  "💕": " Two Hearts",
  "💟": " Heart Decoration",
  "❣️": " Heart Exclamation",
  "💔": "Broken Heart",
  "❤️‍🔥": " Heart on Fire",
  "❤️‍🩹": " Mending Heart",
  "❤️": " Red Heart",
  "🧡": " Orange Heart",
  "💛": "Yellow Heart",
  "💚": " Green Heart",
  "💙": " Blue Heart",
  "💜": " Purple Heart",
  "🤎": " Brown Heart",
  "🖤": " Black Heart",
  "🤍": " White Heart",
  "💯": " Hundred Points",
  "💢": " Anger Symbol",
  "💬": " Speech Balloon",
  "👁️‍🗨️": " Eye in Speech Bubble",
  "☺": "Smiling Face",
  "": ""
};
var emojiesCollection = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");
  function emojiMeaningChangeHandler(event) {
    const inputEmoji = event.target.value;

    var meaning = emojiDictionary[inputEmoji];
    if (meaning === undefined) {
      meaning = "Oops! That is not updated on our database.🙁";
    }

    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>inside outtt!</h1>
      <input onChange={emojiMeaningChangeHandler}></input>
      <div
        style={{
          padding: "1rem",
          fontSize: "1rem",
          fontWeight: "bold",
          color: "red"
        }}
      >
        {" "}
        {meaning}{" "}
      </div>

      <h3>emojis we know</h3>
      {emojiesCollection.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              cursor: "pointer",
              fontSize: "2.3rem",
              padding: "1rem"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
