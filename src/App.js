import { useState } from "react";
import "./styles.css";
//databse
var emojiDictionary = {
  "๐": "Grinning Face",
  "๐": "Grinning Face with Big Eyes",
  "๐": "Grinning Face with Smiling Eyes",
  "๐": "Beaming Face with Smiling Eyes",
  "๐": "Grinning Squinting Face",
  "๐": "Grinning Face with Sweat",
  "๐คฃ": "Rolling on the Floor Laughing",
  "๐": "Face with Tears of Joy",
  "๐": "Slightly Smiling Face",
  "๐": "Upside-Down Face",
  "๐": "Winking Face",
  "๐": "Smiling Face with Smiling Eyes",
  "๐": "Smiling Face with Halo",
  "๐ฅฐ": "Smiling Face with Hearts",
  "๐": "Smiling Face with Heart-Eyes",
  "๐คฉ": "Star-Struck",
  "๐": "Face Blowing a Kiss",
  "๐": "Kissing Face",
  "๐": "Kissing Face with Closed Eyes",
  "๐": "Kissing Face with Smiling Eyes",
  "๐": "Face Savoring Food",
  "๐": "Face with Tongue",
  "๐": "Winking Face with Tongue",
  "๐คช": "Zany Face",
  "๐": "Squinting Face with Tongue",
  "๐ค": "Money-Mouth Face",
  "๐ค": "Smiling Face with Open Hands",
  "๐คญ": "Face with Hand Over Mouth",
  "๐คด": " Prince",
  "๐ธ": " Princess",
  "๐ณ": " Person Wearing Turban",
  "๐ณโโ๏ธ": " Man Wearing Turban",
  "๐ณโโ๏ธ": " Woman Wearing Turban",
  "๐ฒ": " Person with Skullcap",
  "๐ง": " Woman with Headscarf",
  "๐คต": " Person in Tuxedo",
  "๐": " Heart with Arrow",
  "๐": " Heart with Ribbon",
  "๐": " Sparkling Heart",
  "๐": " Growing Heart",
  "๐": " Beating Heart",
  "๐": " Revolving Hearts",
  "๐": " Two Hearts",
  "๐": " Heart Decoration",
  "โฃ๏ธ": " Heart Exclamation",
  "๐": "Broken Heart",
  "โค๏ธโ๐ฅ": " Heart on Fire",
  "โค๏ธโ๐ฉน": " Mending Heart",
  "โค๏ธ": " Red Heart",
  "๐งก": " Orange Heart",
  "๐": "Yellow Heart",
  "๐": " Green Heart",
  "๐": " Blue Heart",
  "๐": " Purple Heart",
  "๐ค": " Brown Heart",
  "๐ค": " Black Heart",
  "๐ค": " White Heart",
  "๐ฏ": " Hundred Points",
  "๐ข": " Anger Symbol",
  "๐ฌ": " Speech Balloon",
  "๐๏ธโ๐จ๏ธ": " Eye in Speech Bubble",
  "โบ": "Smiling Face",
  "": ""
};
var emojiesCollection = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");
  function emojiMeaningChangeHandler(event) {
    const inputEmoji = event.target.value;

    var meaning = emojiDictionary[inputEmoji];
    if (meaning === undefined) {
      meaning = "Oops! That is not updated on our database.๐";
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
