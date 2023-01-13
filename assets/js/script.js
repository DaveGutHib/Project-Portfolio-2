//document.getElementById("click", randomName);

var names = [];
let pairs = [];
let revealCount = 0;

function reveal() {
    console.log("revealcount");
    console.log(revealCount);
    let person = pairs[revealCount];
    console.log("Print names from reveal button");
    console.log(pairs);
    console.log(person["Gifter"]);
    document.getElementById("giftee"+revealCount).innerText = person.Giftee;
    revealCount = revealCount + 1;
    
    g = document.createElement('div');
    g.setAttribute("id", "gifter"+(revealCount));
    g.innerText = person.Giftee;
    document.getElementById("results-container").appendChild(g);

    g = document.createElement('div');
    g.setAttribute("id", "giftee"+(revealCount));
    g.innerText = person.Giftee;
    document.getElementById("results-container").appendChild(g);
    
}

const shuffle = (randomiser) => {
    for (let x = randomiser.length - 1; x > 0; x--) {
        const y = Math.floor(Math.random() * (x + 1));
        [randomiser[x], randomiser[y]] = [randomiser[y], randomiser[x]];
    }
    return randomiser;

};

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

        // must be given at least two names to randomise
        if (names.length >= 2) {
            let item = names[Math.floor(Math.random() * names.length)];
            console.log(`Output secret Santa List: ${item}`);
        } else {
            console.log(`Please enter at least two names`);
        }

        //Shuffling the order of the names in the array

        const shuffle = (randomiser) => {
            for (let x = randomiser.length - 1; x > 0; x--) {
                const y = Math.floor(Math.random() * (x + 1));
                [randomiser[x], randomiser[y]] = [randomiser[y], randomiser[x]];
            }
            return randomiser;

        };

        const randomisedNames = shuffle(names);

        //Pair person 1 in randomised list with person 2, 2 with 3, and the max value back with person 1

        pairs = randomisedNames.map((name, index) => {
            return {
                Gifter: name,
                Giftee: randomisedNames[index + 1] || randomisedNames[0],
            };
        });
        let person = pairs[revealCount];
        document.getElementById("gifter"+revealCount).innerText = person.Gifter;
        document.getElementById("reveal-btn").addEventListener("click", reveal);
        console.log(pairs);
	console.log(person.Gifter);

    }
    // action for clear button
    if (evt.target.id === "clear") {
        [...document.querySelectorAll("input[type='text']")]
            .forEach(input => input.id.startsWith("name") && (input.value = ""));

    }

}