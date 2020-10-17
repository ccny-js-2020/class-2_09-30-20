/*

  1. Create 3 Variables that have Integer values
  2. If you add two of them together and the sum is greater than the third value, log that it is true.
     Get this to equate to true.
  3. If ...
    - you add two of the variables together and the sum is greater than the third value
      AND
    - you subtract two of them and the difference is less than the third value
    - log "yes" for true and "no" for false
    - Get this to equate to true as well
  4. If ...
   - you add two of the variables together and the sum is greater than the third value
    OR
   - you subtract two of them and the difference is greater than the third value
   - Get this to equate to false

*/

var num1 = 1;
var num2 = 2;
var num3 = 3;

if((num2 + num3) > num1){
  console.log("this is true");
}

if((num2 + num3) > num1 && (num2 - num1) < 3){
  console.log("this is true")
}

if((num1 + num2) > num3 || (num2 - num1) > num3){
  console.log("this is true")
} else {
  console.log("this is false")
}
