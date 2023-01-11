document.addEventListener("click", randomName);

function randomName(evt) {
  if (evt.target.id === "randomName") {
    // act only if button is clicked
    let names = [...document.querySelectorAll("input[type='text']")]
    // gets input elements
      .filter(input => input.id.startsWith("name") && input.value)
      // filter only all #namex with value
      .map(input => input.value);
      // map to values only
    console.clear();

    // must be given at least two names to randomise
    if (names.length >= 2) {
      let item = names[Math.floor(Math.random() * names.length)];
      console.log(`Random name chosen: ${item}`);
    } else { 
      console.log(`Please enter at least two names`);
    }
    return;
  }
  // action for clear button
  if (evt.target.id === "clear") {
      [...document.querySelectorAll("input[type='text']")]
       .forEach(input => input.id.startsWith("name") && (input.value = ""))

  }
}

