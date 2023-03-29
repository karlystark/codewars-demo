/* 
In this kata you are given a string, for example:

"example(unwanted thing)example"

Your task is to remove everything inside the parentheses as well as the parentheses themselves.

The example above would return:

"exampleexample"

Other than parentheses only letters and spaces can occur in the string. 
Don't worry about other brackets like "[]" and "{}" as these will never appear.
There can be multiple parentheses.
The parentheses can be nested.

*/

// my solution:

function removeParentheses(str){
    let isOpen = 0;
    let result = "";

  for (let i = 0; i < str.length; ++i) {
    if (str[i] === "(") {
      isOpen++;
    } else if (str[i] === ")") {
      isOpen -= 1;
    } else if (isOpen === 0) {
      result += str[i];
    }
  }

  return result;
}