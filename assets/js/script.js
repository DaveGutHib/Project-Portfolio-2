document.addEventListener("click", randomName);

var names = [];

//     // action for clear button
function clearButton(evt) {
    if (evt.target.id === "clear") {
        [...document.querySelectorAll("input[type='text']")]
            .forEach(input => input.id.startsWith("name") && (input.value = ""))

    }
}





function randomName(evt) {
    if (evt.target.id === "randomName") {
        // act only if button is clicked
        let names = [...document.querySelectorAll("input[type='text']")]
            // Function to pull the values from the text boxes into an array
            .filter(input => input.id.startsWith("name") && input.value)
            // filter only all #namex with value
            .map(input => input.value);
        // map to values only
        console.clear();
        console.log(names);
    }


    // must be given at least two names to randomise
    if (names.length >= 2) {
        let item = names[Math.floor(Math.random() * names.length)];
        console.log(`Output secret Santa List: ${item}`);
    } else {
        console.log(`Please enter at least two names`);
    }
}


//Shuffling the order of the names in the array
function shuffler(evt) {
    if (evt.target.id === "randomName") {
        const shuffle = (randomiser) => {
            for (let x = randomiser.length - 1; x > 0; x--) {
                const y = Math.floor(Math.random() * (x + 1));
                [randomiser[x], randomiser[y]] = [randomiser[y], randomiser[x]];
            }
            return randomiser;

        }
    }
}
function pairer(evt) {
    const randomisedNames = shuffle(names);

    //Pair person 1 in randomised list with person 2, 2 with 3, and the max value back with person 1

    const pairs = randomisedNames.map((name, index) => {
        return {
            Gifter: name,
            Giftee: randomisedNames[index + 1] || randomisedNames[0],
        }
    });
    console.log(pairs);
    return;
}
function addNewName(evt) {
    if (evt.target.id === "addNewName") {


        const label = document.createElement("label");
        label.setAttribute("for", "newName")
        label.innerHTML = "Add new name";
        document.body.appendChild(label);

        const input = document.createElement("input");
        input.setAttribute("type", "text");
        document.body.appendChild(input);
    }
}

function reveal(evt) {
    var r = document.getElementsByClassName("row");
    if (r.style.display === "none") {
        r.style.display = "block";
    } else {
        r.style.display = "none";
    }
}




