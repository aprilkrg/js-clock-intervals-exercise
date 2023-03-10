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

// variable to select DOM elements
const secondHand = document.querySelector("#second")
const minuteHand = document.querySelector("#minute")
const hourHand = document.querySelector("#hour")
// console.log("HANDS", secondHand, minuteHand, hourHand)

// ===== !! FUNCTIONAL APPROACH !! ===== //
// increase seconds
// increase minutes
// increase hours
// update DOM

// functions accept a number, and divide that number by the complete count of that unit (seconds 60, hours 12). then multiply that result by 360 to get the proper amount of rotation needed to style the clock
const secondRotation = function(secs) {
	return (secs / 60) * 360
}
const minuteRotation = function(mins) {
	return (mins / 60) * 360
}
const hourRotation = function(hrs) {
	return (hrs / 12) * 360
}
const setTime = function(seconds, minutes, hours) {
	// increment seconds
	seconds++
	// check if the value of seconds is 60, and increment minutes if so
	if (seconds > 59) {
		minutes++
		// set seconds to 0 to reset the value
		seconds = 0
	}
	// check if the value of minutes is 60, increment hours if so
	if (minutes > 59) {
		hours++
		// set minutes to 0 to reset
		minutes = 0
	}
	// check if the value of hours is 12
	if (hours > 11) {
		hours = 0
	}
	// console log time values to check if it incremented
	console.log("hr:", hours, "min:", minutes, "sec:", seconds, "\n")
}
// use this function to get current time, then pass return to move clock invocation
const getCurrentTime = function() {
	// ===== !! BONUS !! ===== //
	let currentTime = new Date()
	return currentTime
}
const moveClock = function(dateObj) {
	// get values from parameter to provide as arguments to increase time invocation
	let currentSec = dateObj.getSeconds()
	let currentMin = dateObj.getMinutes()
	let currentHour = dateObj.getHours()
    // account for 24 hour clock issues
    if (currentHour > 12) {
        currentHour = currentHour - 12
    } else {
        currentHour = currentHour
    }
	// increment time 
	setTime(currentSec, currentMin, currentHour)

    // get rotation values
    let secondHandRotation = secondRotation(currentSec)
    let minuteHandRotation = minuteRotation(currentMin)
    let hourHandRotation = hourRotation(currentHour)

	// update dom
    secondHand.style.transform = `rotate(${secondHandRotation}deg)`
	minuteHand.style.transform = `rotate(${minuteHandRotation}deg)`
	hourHand.style.transform = `rotate(${hourHandRotation}deg)`
}

const tickTock = function() {
    console.log("tick tock")
    const dateNow = getCurrentTime()
    moveClock(dateNow)
}

const clockInterval = setInterval(tickTock, 1000)