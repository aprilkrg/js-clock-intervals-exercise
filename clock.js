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
- create dom variables
- apply styles to dom variables so they move
- move hands to proper place on clock
*/

// variables to hold the time values
let seconds = 45
let minutes = 59
let hours = 11

// variable to select DOM elements
const secondHand = document.querySelector("#second")
const minuteHand = document.querySelector("#minute")
const hourHand = document.querySelector("#hour")
console.log("HANDS", secondHand, minuteHand, hourHand)

// because we're setting css in our js we need to set the value to a string
secondHand.style.transform = `rotate(${180}deg)`

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
    // check if the value of minutes is 60, increment hours if so
    if(minutes > 59) {
        hours++
        // set minutes to 0 to reset
        minutes = 0
    }
    // console log hours value to check if it incremented
    console.log("hr:", hours)
    // check if the value of hours is 12
    if(hours > 11) {
        hours = 0
    }
}
// invoke the funciton to see if it increments in the terminal
// runClock()

// set the interval to run every second, and save to a variable
const clockInterval = setInterval(runClock, 1000)