// Define all words and create arrays  
const wordSets = [
  ["The turkey", "My mom", "My dad", "The dog", "My teacher", "The elephant", "The cat"],
  ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"],
  ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"],
  ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"],
  ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"]
];

// An array to track the current choice for each category
let choices = Array(5).fill(0);

// Function to cycle through options in each word set
function cycle(index) {
  // Go to the next option in the list
  choices[index] = (choices[index] + 1) % wordSets[index].length;

  // Update the text beside the button
  document.getElementById("choice" + index).textContent = wordSets[index][choices[index]];
}

// Combine the selected words into a full sentence
function showStory() {
  const story = choices.map((val, i) => wordSets[i][val]).join(" ");
  document.getElementById("story").textContent = "Your Story: " + story + ".";
}

// Generates a random story by selecting a random word from each set
function randomStory() {
  for (let i = 0; i < wordSets.length; i++) {
    choices[i] = Math.floor(Math.random() * wordSets[i].length);
    document.getElementById("choice" + i).textContent = wordSets[i][choices[i]];
  }
  
  showStory();
}

// Resets all the choices to the beginning state
function resetStory() {
  choices = Array(5).fill(0);
  
  // Clears all displayed choices
  for (let i = 0; i < wordSets.length; i++) {
    document.getElementById("choice" + i).textContent = "--";
  }

  // Clear the story output
  document.getElementById("story").textContent = "";
}