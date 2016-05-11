// More Function Exercises!

// 1. Without using Math.min(), write a function called minimum() that takes two numbers
//    and outputs the smallest one to the console.
function minimum(a,b) {
	if (a < b) {
		return a;
	} else {
		return b;
	}
}

minimum(55,65);

// 2. Create a new function called minimum3() to find the smallest of three numbers
function minimum3(a,b,c) {
	if (a < b && a < c) {
		return (a + ' is the smallest number');
	} else if (b < a && b < c) {
		return (b + ' is the smallest number');
	} else {
		return (c + ' is the smallest number');
	}
}

minimum(55,65,77);

// 3. Declare a function called sum() that takes an array of numbers as an argument adds them.
//    i.e. sum([1, 2, 3, 4]) should return 10.
var numArray = [1,2,3,4];
var total = 0;
function sum() {
	for (i=0; i < numArray.length; i++) {
		total += numArray[i];
		console.log(total);
	}
}

sum(numArray);

// 4. Declare a function called multiply() that takes an array of numbers and multiplies them together.
//    i.e. multiply([1, 2, 3, 4]) should return 24.

var numArray = [1,2,3,4];
var total = 1;
function multiply() {
	for (i=0; i < numArray.length; i++) {
		total = total * numArray[i];
		console.log(total);
	}
}

multiply(numArray);

// 5. Write a function called filterSixPlus() that takes the following array and removes words
//    that are less than six characters.
var words = ["window", "table", "cup", "knife", "barstool", "glass", "charger", "outlet"];

function filterSixPlus(array) {
	var results = [];
	for (i=0; i < array.length; i++) {
		if (array[i].length >= 6) {
		results.push(array[i]);
		}
	}
	return results;
}
filterSixPlus(words);
console.log(words);


// 6. Use a function to ask a user for a temperature in Celsius and converts it to Fahrenheit.
//    HINT: You may need to use parseFloat to convert the user's string input to a float.
var user = prompt('What is the temperature in celsius?');
function temperature (celcius) {
	return (('It is ') + ((celcius * 1.8) + 32) + (' Degrees Fahrenheit.'));
}
temperature(parseFloat(user));
console.log(temperature);


// 7. Adding to the code in #6, prompt the user a second time to determine whether they'd like to convert from Fahrenheit to Celsius
//    or from Celsius to Fahrenheit. To keep it simple, instruct them to use "F to C" or "C to F".
//    Alert them with an error if they do not follow the rules.




// 8. Write a function countBs() that takes a string as its only argument and returns
//    a number that indicates how many uppercase “B” characters are in the string.
//    HINT: Google charAt()

function countBs (str) {
	var amountOfBs = '';
	for (var i = 0; i < str.length; i++) {
		if (str.charAt[i]==='B') {
			amountOfBs++;
		}
	}
	console.log("There are " + amountOfBs + " B's");
}
countBs('bdfbbBNBBBkdjvbkjba');



// 9. Write a function called countChars() that behaves like countBs(), except it takes a
//    second argument that indicates what character is to be counted.

function countChars (str, character) {
	var amountOfChars = '';
	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) === character) {
			amountOfChars++;
		}
	}
	console.log("There are " + amountOfChars + ' ' + character + "'s");
}
countChars('bdfbbBNBBBkDjvbkjba', 'D');



// 10. Declare a function called ohZero that replaces all of the o's in a string with 0's.
var string = 'I would like to swim in the pool';
function ohZero (string) {
		newString = string.replace(/o/g, '0');
		console.log(newString);
}
ohZero(string);


// 11. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.

function beerSong() {
	var bottlesOfBeer = 99;
	while (bottlesOfBeer > 0) {
		console.log(bottlesOfBeer + " bottles of beer on the wall, " + bottlesOfBeer + " bottles of beer, take 1 down, pass it around ... " + (bottlesOfBeer - 1) + " bottles of beer on the wall");
		bottlesOfBeer--;
    }
}
beerSong();


// 12. Create a 'Guessing Game'. The game starts by picking a random number.
//    It then prompts the user to guess the number. If the user's number is lower/higher,
//    it will prompt the user to enter another guess and tell the user if the guess was
//    too high or too low. This continues until the correct guess is entered.
//    When the correct guess is entered the user is given a success message with the correct number.

// 13. http://games.usvsth3m.com/javascript-under-pressure/
//     Have fun with these! Get as far as you can and record your progress and time. We'll try this again in a few weeks!
