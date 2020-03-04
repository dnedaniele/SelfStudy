// Twitter Text Character Counter

var textInput = prompt();

var leftChar = 280 - textInput.length;

alert(
  "You have written " +
    textInput.length +
    " characters, you have " +
    leftChar +
    " left"
);

///
