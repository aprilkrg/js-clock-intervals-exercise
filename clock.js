/*
WHAT DO WE NEED TO STORE IN VARIABLES?
- hour
- minute
- second
^ need both a js variable and a html dom variable

- function to rotate the arms
^ need one per hand?

HOW DO WE APPROACH?
- create variables in js
- write functions to console log values
- check terminal to see if it's working
- once it functions, then we'll move onto the dom

*/

// variables to hold the time values
let seconds = 0
let minutes = 0
let hours = 0

// function to increment seconds
function runClock() {
    // increment seconds
    seconds++
    // console log seconds value to check if it incremented
    console.log("sec:", seconds)
    // check if the value of seconds is 60, and increment minutes if so
    if(seconds > 59) {
        minutes++
        // set seconds to 0 to reset the value
        seconds = 0
    }
    // console log minutes value to check if it incremented
    console.log("min:", minutes)
}
// invoke the funciton to see if it increments in the terminal
runClock()
// set the interval to run every second, and save to a variable
const clockInterval = setInterval(runClock, 1000)