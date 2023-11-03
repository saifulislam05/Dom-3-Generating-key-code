
const firstParagraph = document.getElementById("first-p");
const output = document.getElementById("output-wrapper");

const pressedKeyDisplay = document.getElementById("pressed-key");
const keyCodeDisplay = document.getElementById("key-code");

const keySound = document.getElementById("key-sound");

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
    modifiers.push("Meta"); // Windows key on Windows, Command key on Mac
  }

  const modifierKeys = modifiers.join(" + ");

  pressedKeyDisplay.textContent =
    modifierKeys.length > 0 ? `${modifierKeys} + ${event.key}` : event.key;
  keyCodeDisplay.textContent = event.keyCode;
});
