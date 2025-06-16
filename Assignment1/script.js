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