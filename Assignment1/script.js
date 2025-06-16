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