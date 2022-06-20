/* 
1. Create two variables, firstName and lastName
//Concatenate the two variables int a third variable called fullName
// Log fullName to the console.
let firstName = "Daniel"
let lastName = "Laszlo"
let fullName = firstName + " " + lastName

console.log(fullName) 

************************************************

2. Create a function that logs out "Hi there, Linda!" when called.

let name = "Linda"
let greeting = "Hi there"

function myGreeting() {
    console.log(greeting + ", " + name + "!");
}

myGreeting()

************************************************

3. Create two functions, add3Points() and remove1Point, and have them 
// add/remove points to/from the myPoints variable 

 let myPoints = 3

 function add3Points() {
    myPoints += 3    
} 

function remove1Point() {
    myPoints -= 1    
}

add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()

console.log(myPoints) 
*******************************************************


3. Try to predict what each of the lines will log out

console.log("2" + 2) // 22
console.log(11 + 7) // 18
console.log(6 + "5") // 65
console.log("My points: " + 5 + 9) //My points: 59
console.log(2 + 2) // 4
console.log("11" + "14") // 1114 
*******************************************************
4. When the user clicks the purchase button, render out 
// "Something went wrong, please try again" in the paragraph
// that has the id="error"

let errorEl = document.getElementById("error")


function purchase() {    
    errorEl.textContent =  "Something went wrong, please try again"
}

************************************************

5. Calculator

let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// Create four function: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num 1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"
let sumEl = document.getElementById("sum-el")
// E.g. if the user clicks on the Plus button, you should render
// Sum: 10 (since 8 + 2 = 10) inside the paragraph with id="sum-el"

function add() {
    sumEl.textContent += num1 + num2
    sumEl = 0  
}

function subtract() {
    sumEl.textContent += num1 - num2
    sumEl = 0 
}

function divide() {
    sumEl.textContent += num1 / num2
    sumEl = 0 
}

function multiply() {
    sumEl.textContent += num1 * num2
    sumEl = 0 

} 

*********************************************************

Mini tasks: 
// Check if the person is old enough to enter the nightclub (21)
// Log suitable message to the consle in both cases
// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"
let age = 21

if (age <= 20) {
    console.log("You can not enter the club!")
} else {
    console.log("Welcome!")
} 

Check if the person is elegible for a birthday card from the King! (100)

let age = 100

if (age <= 99) {
    console.log("Not elegible")    
} else if (age === 100) {
    console.log("Here is your birthday card from the King!")
} else {
    console.log("Not elegible, you have already gotten one!")
}

console.log(4 === 3) // false
console.log(5 > 2) // true
console.log(12 > 12) // false
console.log(3 < 0) // false
console.log(3 >= 3) // true
console.log(11 <= 11) // true
console.log(3 <= 2) // false
*/


// 6. Blackjack game
// a, Create two variables, firstCard and secondCard and Set their values to a random number between 2-11
// b, Create a variable, sum, ande set it to the sum of the two cards
// c, CASH OUT! Create a variable isAlive is true, and flip it in the appropriate block
// d, Declare a variable called message and assign its value to an empty string
// e, Reassign the message variable to the string we're logging aout
// f, Store the message-el paragraph in a variable called messageEL
// g, Display the message in the messageEl using textContent
// h, Display the cards
// i, New Card button, newCard() function
// j, Create a card variable, and hard code its value to a number (2-11)
// add a new card to the sum variable
// k, change startGame to renderGame, then create a new startGame to call renderGame
// l, Create a new array - cards - that contains forstCard and secondCard
// m, Refer to the cards array when rendering out the cards
// n, Create a for loop that render out all the cards instead of just two
// o, Create a function, getRandomCard(), that always returns the number 5
// p, Make getRandomCard return a random number between 1 and 13
// q, Modify getRandomcar: if 1 --> return 11; if 11-13 --> return 10
// r, change isAlive to false and add with true startGame function 
// s, delete firstCard and secondCard, switch sum to zeroand generate under startGame two random numbers and reassign the cards and sum variables so that the game can start
// t, newCard: only allow the player get a new card if she IS alive and does NOT hace a Blackjack
// Create a player object




// let firstCard = getRandomCard()                      // 2 + Math.floor( Math.random() * (11 - 2 + 1))
// let secondCard = getRandomCard()                      // 2 + Math.floor( Math.random() * (11 - 2 + 1))


let player = {
    name: "LMD",          
    chips: 200    
}



let cards = []                  // cards array, had firstCard and secondCard
let sum = 0                           //  firstCard + secondCard it was at first
let hasBlackJack = false
let isAlive = false          // at first it was set true, at end was set false!!
let message = ""
let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")     // Ez is megfelelne:  document.querySelector("#sum-el") 
let cardsEl = document.getElementById("cards-el") 


let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips // calling an object into a function


function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }    
}


function startGame() {
    
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {

    cardsEl.textContent = "Cards: " // + cards[0] + " " + cards[1] would be deleted

    for (let i = 0; i < cards.length; i++) {

        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You are out of the game!"
        isAlive = false
    } 
    messageEl.textContent = message
        
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
    
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
    }
}

// console.log("Drawing a new card from the deck?")   