/* 
Project: "Silly Character Customizer"
Objective:
You’ll create a small interactive webpage that generates a random, 
funny character with attributes like name, age, favorite food, and special powers. 
The user can also customize some aspects like updating the character's name or age.

Project Breakdown:
Declare, Initialize, and Update Variables:

You’ll create variables to store different character attributes 
(name, age, favorite food, etc.).
Users will have the option to update some of these variables, like 
changing the character’s name or age.

Use different data types for each attribute:
characterName (string)
Age (number)
Is the character a superhero? (boolean)
Special powers (array)
Favorite food (string)
Conduct Basic Math Operations:

You can randomly generate the character's age using math operations.
You could also include a small feature where the character's age increases 
or decreases when a button is clicked.
Create and Manipulate Strings:

Use string manipulation to generate a funny description of the character 
based on the data. You can concatenate strings or use template literals to 
display the character's attributes in a creative and humorous way.

*/

// Declare and initialize variables

let characterName = "Money Magician"; // string
let age = Math.floor(Math.random() * 100) + 1; // number
let isSuperhero = true; // boolean
let specialPowers = ["read minds", "run at super speed", "explode minds" ]; // array
let favoriteFood = "pizza"; // string

// Arrays for randomness
const nameList = ["Money Magician", "Sir Super", "Lady Luck", "Dr. Dastardly", "Nuclear Noodle"];
const foodList = ["tacos", "ice cream", "pizza", "hot dogs", "steak"];
const powersList = [
    ["fly", "turn invisible", "teleport short distances"],
    ["lift a building", "transform into a dragon", "summon storms"],
    ["do nuclear punches", "control bugs", "do painful pranks"],
    ["read minds", "run at super speed", "explode minds" ]
];

// Function to generate a random character description

function generateCharacterDescription() {
    const powers = specialPowers.join(", ");
    const heroStatus = isSuperhero ? "a superhero" : "just a regular person";
    const description = `Meet ${characterName}, a ${age}-year-old ${heroStatus} who loves ${favoriteFood} and can ${powers}!`;
    document.getElementById("characterDescription").innerText = description;
}

// Functions to update character's age

function increaseAge() {
    age++;
    generateCharacterDescription();
}

function decreaseAge() {
    if (age > 0) {
        age--;
    }
    generateCharacterDescription();
}

// Function to update the character's description after changing age
// Already done in the previous comment

// Add event listeners for buttons using querySelector
document.querySelector("#generateButton").addEventListener("click", () => {
    characterName = nameList[Math.floor(Math.random() * nameList.length)];
    age = Math.floor(Math.random() * 100) + 1;
    isSuperhero = Math.random() < 0.5;
    favoriteFood = foodList[Math.floor(Math.random() * foodList.length)];
    specialPowers = powersList[Math.floor(Math.random() * powersList.length)];
    generateCharacterDescription();
});

document.querySelector("#increaseAgeButton").addEventListener("click", increaseAge);
document.querySelector("#decreaseAgeButton").addEventListener("click", decreaseAge);

// Show the default character as soon as the page loads
generateCharacterDescription();
