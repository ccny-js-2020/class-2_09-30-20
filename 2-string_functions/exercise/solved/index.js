/*

  Using the lyricString variable below and String Functions on that variable:
    1. Log the length of the string.
    2. Write an if else statement if the string value is greater than or equal to 50
    3. Find the first instance/index of a lowercase i
    4. Find the first instance of an uppercase I
    5. Log only the word top using one of the string functions
    6. Log it all to uppercase
    7. Log it all to lowercase
    8. Get the value of the string at the 15th index
    9. Write an if else statement looking to see that the word "back" is contained in the string variable
    10. Write an if else statement looking to see that the word "front" is contained in the string variable

    Some Bonus:
    1. Log the word "slide" and change it to all toUpperCase
    2. Log the whole string with only the word "slide" all in uppercase
    3. Prompt a word and write an if else statement check if the word is in the string variable

*/

var lyricString = "When I get to the bottom I go back to the top of the slide";

//1
console.log(lyricString.length);
//2
if(lyricString.length >= 50){
  console.log("String length is greater than or equal to 50 characters");
} else {
  console.log("String length is less than 50 characters");
}
//3
console.log(lyricString.indexOf("i"));
//4
console.log(lyricString.indexOf("I"));
//5
console.log(lyricString.substring(42,45));
//6
console.log(lyricString.toUpperCase());
//7
console.log(lyricString.toLowerCase());
//8
console.log(lyricString.charAt(15));
//9
if(lyricString.indexOf("back") > -1){
  console.log("The word 'back' is in the variable string");
} else {
  console.log("The word 'back' is not in the variable string");
}
//10
if(lyricString.indexOf("front") > -1){
  console.log("The word 'front' is in the variable string");
} else {
  console.log("The word 'front' is not in the variable string");
}


//Bonus
//1
console.log(lyricString.substring(53,58).toUpperCase());
//2
console.log(lyricString.substring(0,52) + " " + lyricString.substring(53,58).toUpperCase())
//3
var prompt = prompt("Check if this word is in the String Variable")
if(lyricString.indexOf(prompt) == -1){
  console.log("The prompt value is not in the word")
} else {
  console.log("The prompt value is in the word")
}
