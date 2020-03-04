// Twitter Text Character Counter

var textInput = prompt("Please, compose your tweet");

console.log(textInput.length);

var leftChar = 280 - textInput.length;

console.log(leftChar);

alert(
  "You have written " +
    textInput.length +
    " characters, you have " +
    leftChar +
    " left"
);

///
