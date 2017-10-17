// constructor function used to create programmer objects
function Letter(char) {
  this.letter = char;
  console.log(this.letter);
}

module.exports = Letter;