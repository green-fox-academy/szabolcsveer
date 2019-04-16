'use strict';
export{}

// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

const fs = require('fs');

function creator(name){
  try{let fileContent = name;
    fs.writeFileSync('my-file.txt', fileContent);
  }
  catch(e){
    console.log("Unable to write file: " + e.path);
    
  }
}

console.log(creator("Szabi"));


