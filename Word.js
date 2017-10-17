

// constructor function used to create programmer objects
function Word(word) {
  this.word = word.split("");
  console.log(this.word);
}

Word('flower');
