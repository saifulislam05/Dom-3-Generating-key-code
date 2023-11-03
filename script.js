
const firstParagraph = document.getElementById("first-p");
const output = document.getElementById("output-wrapper");

const pressedKeyDisplay = document.getElementById("pressed-key");
const keyCodeDisplay = document.getElementById("key-code");

const keySound = document.getElementById("key-sound");

const history = document.getElementById("history");
const pressedKeyWrapper = document.getElementById("pressed-keyWrapper");

// Key History Array
let keyHistory = [];

document.addEventListener("keydown", (event) => {
  keySound.play();

  firstParagraph.style.display = "none";
  output.style.display = "flex";

  pressedKeyDisplay.textContent = event.key;
  keyCodeDisplay.textContent = event.keyCode;
  const modifiers = [];

  if (event.shiftKey) {
    modifiers.push("Shift");
  }
  if (event.altKey) {
    modifiers.push("Alt");
  }
  if (event.ctrlKey) {
    modifiers.push("Ctrl");
  }
  if (event.metaKey) {
    modifiers.push("Meta"); 
  }

  const modifierKeys = modifiers.join(" + ");

  let pressedKey =
    modifierKeys.length > 0 ? `${modifierKeys} + ${event.key}` : event.key;
  pressedKeyDisplay.textContent = pressedKey;
   
  keyCodeDisplay.textContent = event.keyCode;

  const timeStamp = new Date().toLocaleTimeString();

  keyHistory.push({key:pressedKey,code:event.keyCode,time:timeStamp})

  history.style.display = "block";
  displayKeyHistory();

});

function displayKeyHistory (){
  // Last key of keyHistory
  const lastentry = keyHistory[keyHistory.length - 1];

  // distracutes all the entry's keys

  const { key, time } = lastentry;
  // creating new entry wrapper for ui
  const pressedKeyDiv = document.createElement("div");
  pressedKeyDiv.className = "pressedKey";

  const keyParagraph = document.createElement("p");
  keyParagraph.className = "key";
  keyParagraph.textContent = key; 

  const timeSpan = document.createElement("span");
  timeSpan.className = "time";
  timeSpan.textContent = time; 

  pressedKeyDiv.appendChild(keyParagraph);
  pressedKeyDiv.appendChild(timeSpan);

  pressedKeyWrapper.prepend(pressedKeyDiv);
}


