//Add speech api + event listener
const synth = window.speechSynthesis;
document.querySelector('#yell').addEventListener('click', run)

//Add function for program to run - Conditionals
function run () {
  const fName = document.querySelector('#firstName').value
  const fMidName = document.querySelector('#firstMiddle').value
  const lMidName = document.querySelector('#lastMiddle').value
  const lName = document.querySelector('#lastName').value

  const yellText = `${fName} ${fMidName} ${lMidName} ${lName}`

  document.querySelector('#placeToYell').innerText = yellText

  let yellThis = new SpeechSynthesisUtterance(yellText);

  //Change voice

  synth.speak(yellThis);
}