// console.log('Hello world')
// console.log('Bluecoder')

//variables- (var, let, const)
// let name = 'shiny'
// console.log(name)

// sentence = 'How are you doing today, nice to see you, hope your are having a great day!'

// console.log(sentence)

//operators
//fruit = prompt('What is your favourite fruitee?')
//console.log(fruit)

// * / ** + -
// food = Number(prompt('How much was the food?'))
// tipPercentage = Number(prompt('tip%?') / 100)
// tipAmount = food * tipPercentage
// total = tipAmount + food
// console.log('tipAmount', tipAmount)
// console.log('total', total)
//alert(tipAmount)
//We usually use forms in Js or in apps to collect the userside info not prompts

//user input 

// data types (strings, numbers)
// Initially it is reading as 20200 because it is reading as a string.....to convert >>> 

//>>Number ('100')

//Functions

//Type casting

/* data types
numbers 1,5,10,100,2.5
strings   'hello', "what is up"
arrays []
objects {}
boolean true/false
*/
/* Math Operators
multiply *
divide /
exponents **
Modulo/remainder  5 %2 =1
Add +
Substract -
*/
/*Math Methods
Floor, ceil, Random
Math.floor()method rounds a number down to the nearest integer, and returns the result

Math.ceil() method rounds a number up to the nearest integer, and returns the result.

Math.random() returns a random number between 0(inclusive) and 1(exclusive)

Math.floor(Math.random()*3)
in rock 0, paper 1, scissor 2

*/

//baby weather app

// if rain 'grab your umbrella '
// else 'wear sunglasses'
// let weather = prompt('how is the weather right now ?')
// if (weather == 'rainy') {
//   console.log('grab your umbrella')
// } else {
//   console.log('Wear your sunglasses')
// }
// //conditional operators
// They always return a boolean- true or false
// ==, ===, >, <, <=, >=, !==

/*Functions
lesson 1- basics of functions
lesson 2 - Dynamic functions
lesson 3 - Tip calculor App

A javascript function is a block of code designed to perform a particular task and is executed when 'something' calls it
*/
//this function is called 'sayMyname' 
// it has 0 arguments
//does: it logs out your name to console

// function sayMyname() {
//   console.log('justice')
//   console.log('great')
//   console.log('nope')
//   console.log('god help')
// }

// sayMyname()

//dyanamic function
//this function is called dudeme
//it has 1 argument called name
//does: it logs out your name to console.
// function dudeme(name) {
//   console.log(name)
// }

// dudeme('hari')
/*Function arguments are the values received by the function when it is called, they behave as variables, however they only live within the function and cannot be accessed outside*/

// function greeting(name) {
//   greet = 'hi ' + name + ', Nice to meet you!'
//   console.log(greet)
// }
// greeting('lance')

//Template literals provide an easy way to interpolate variables and expressions into strings 
// interpolation is an efficient way of concatenation.

// function greeting(name) {
//   greet = 'hi $(name), Nice to meet you!'
//   console.log(greet)
// }

// greeting('lancs')
//need to verify the above o/p

function sum(a, b) {
  //return : The return statement stops the execution of a function and returns a value.
  return a + b
}
//console.log(sum(1, 2))
// num1 = sum(1, 2)
//console.log(num1)

// function sum1(b, d) {
//   console.log(b + d)
// }
// sum1(3, 4)

//.........tip Calculator..................
// function calculateFoodTotal(food, tip) {
//   const tipPercentage = tip / 100
//   const tipAmount = food * tipPercentage
//   const total = sum(food, tipAmount)
//   return total
// }
// console.log(calculateFoodTotal(6780, 10))


//modern way of writing a function, can be seen widely in todays javascript 

//ES6 
//Arrow Functions =>
//Arrow functions allow us to write shorter function syntax.

//arrow function with explicit return
const sumArrow = (a, b) => {
  return a + b
}
//arrow function with implicit return (A Function is returning implicitly if it doesn't use the return method.)
//IMPORTANT: for implicit return, remove squigglies(curly braces)
//const sum1 = (a, b) => a + b

//console.log(sumArrow(10, 50))

//ARRAYS

const month = ['june', 'july', 'september', 'august']
//console.log(month[0])
const groceries = ['🍏', '🍓', '🍆', '🥕']
//console.log(groceries)
//console.log(groceries[0])
//grab the 1st index
//console.log(groceries[1])

//The index gives you the location of a value within an array. It is similar to a street number.

//ARRAY METHODS

groceries.push('🍞')

//console.log(groceries)

groceries.push('🍜')

//console.log(groceries)


//The slice()method returns the portion of the array you want in a new array.

//ARRAY Slice
//Start from 0 INCLUSIVE and UP to 2 [0,1]
//console.log(groceries.slice(3, 6))

//array methods(slice, push, indexOf, length)

//console.log(groceries.indexOf('🥕'))
//length is an array property that returns the number of elements you have in a given array.

//console.log(groceries.length)


//OBJECTS'''''{}--swigglies
//key-value pairs
//Objects are type of variable, quite similar to arrays but they have something called key-value pairs.
//A property is just one of the key value pairs

// const person = {
//   name: 'Lenardo',
//   shirt: 'white'
// }
// //access object: dot notation vs. bracket notation
// console.log(person.name)
// console.log(person.shirt)

// //bracket notation
// console.log(person['name'])
// console.log(person['shirt'])

// //assign object 
// person.phone = '1-222-333-4444'
// console.log(person.phone)
// console.log(person)

// person['phone'] = '1-222-333-4444'
// console.log(person.phone)
// console.log(person)

// //es6 arrow function (2 arguments)
// //object
// //template literals
//methods Math.floor


const introducer = (name, shirt) => {
  const person = {
    name: name,
    shirt: shirt,
    assets: 100000,
    liabilities: 50000,
    networth: function() {
      return this.assets - this.liabilities
      //     }
      //   }
      //   const intro = 'Hi my name is ${person.name} and the color of my shirt is ${shirt.name} and my net worth is $${person.networth} USD'

      //   return intro
      // }
      // console.log(introducer('shiny', 'purple'))



      //alert _ again need verification

      //method creation inside an object.

      //A method is a property containing a function definition.

      //for LOOPS
      const fruits = ['🍏', '🍓', '🍑', '🍐', '🍏', '🍓', '🍑', '🍐', '🍏', '🍓', '🍑', '🍐', '🍏', '🍓', '🍑', '🍐', '🍏', '🍓', '🍑', '🍐', '🍏', '🍓', '🍑', '🍐', '🍏', '🍓', '🍑', '🍐', '🍏', '🍓', '🍑', '🍐', '🍏', '🍓', '🍑', '🍐', '🍏', '🍓', '🍑', '🍐']
      //console.log(fruits[0])
      //console.log(fruits[1])
      //console.log(fruits[2])
      //console.log(fruits[3])

      // for (let i=0; i < fruits.length; i++){
      //   console.log(i, fruits[i])
      // }

      //Don't use this type of loop.Only reason we teach it, because this is the basic of all the other loops

      for (const fruit of fruits) {
        //console.log(fruit)
      }

      const numbers = [1, 2, 3, 4, 5, 6]

      for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i])
      }

      const double = (numbers) => {
        let result = []
        for (const num of numbers) {
          result.push(num ** 2)
        }
        return result
      }
      // console.log(double([1,2,3,4,5,6,7,8,9,20,20,5,6,3,4,5,6,7,8,9,20,20,5,6,3,4,5,6,7,8,9,20,20,5,6,3,4,5,6,7,8,9,20,20,5,6,]))



      // let result = []

      // for(const num of numbers){
      //   //console.log(num*2)
      //   result.push(num*2)
      // }
      // console.log(result)

      //[2,4,6,8,12]


      //Advanced ARRAY'S
      //ARRAY AND OBJECT EXERCISES

      // const howManyLetters = () => {
      //   const phrase = 'hey, can you go to grocery store with me?'
      // //for of 
      //   for (letter in phrase){
      //     console.log(letter)
      //   }  
      // }
      // (howManyLetters())

      // const howManyLetters = () => {
      //   const phrase = 'hey, can you go to grocery store with me?'
      // //for of 
      //   for (const letter of phrase){
      //     console.log(letter)
      //   }  
      // }
      // (howManyLetters())

      // const howManyLetters = () => {
      //   const phrase = 'hey, can you go to grocery store with me?'
      // //for of 
      //   for (letter in phrase){
      //     console.log(letter)
      //   }  
      // }
      // (howManyLetters())


      // const howManyLetters = () => {
      //   const phrase = 'hey, can you go to grocery store with me?'
      // //for of 
      //   for (letter in phrase){
      //     console.log(letter+1)
      //   }  
      // }
      // (howManyLetters())

      // const howManyLetters = () => {
      //   const phrase = 'hey, can you go to grocery store with me?'
      // //for of 
      //   for (letter in phrase){
      //     console.log(Number(letter)+1)
      //   }  
      // }
      // (howManyLetters())




      //const howManyLetters = () => {
      //const phrase = 'hey, can you go to grocery store with me?'
      //for of 

      //   let result = 0;

      //   for (const index in phrase){
      //   console.log(Number(index)+1)
      //     result = index
      //   }  
      //   return { result : index }
      // }
      // console.log(howManyLetters())
      //Hint - You can return results as an object.
      // {result: index}

      // const howManyLetters = (phrase) => {

      //   phrase.length
      //   //any string can have length...
      //   //banana =>6

      //   let result = 0;
      //   for (const index in phrase)
      //   {
      //   console.log(Number(index) + 1)
      //     result = Number(index) + 1
      //   }  
      //   return {result}
      // }
      //   const phrase = prompt('write your phrase')

      // console.log(howManyLetters(phrase))

      // const howManyletters = (phrase) => {
      //   return{ result : phrase.length}
      // }
      // const phrase = prompt('write your phrase')
      // console.log(howManyletters(phrase))
      //javascript string length

      //[1,2,3,4] //10
      // result = 0
      // result = 1
      // result = 3
      // result = 6
      // result = 10
      // const sumArray = (numbers) => {
      //    let result = 0;
      //   //for loop
      //   for (const number of numbers) {
      //     console.log(number)
      //     result = result + number
      //   }
      //   return {result}
      // }
      // const nums = [1, 2, 3, 4, 5]
      // console.log(sumArray(nums))

      // const sumArray = (numbers) =>{
      //     let result = 0;
      //     //for loop
      //   for(const number of numbers){
      //     console.log(number)
      //     result = result + number
      //   }
      //   return { result }
      // }
      // const nums = [1, 2, 3, 4, 5]
      // console.log(sumArray(nums))
      // //sum up all numbers in an array


      // const max = (numbers) => {
      //   let result = numbers[0]
      //   //loop

      //   for (const number of numbers) {
      //     if (number > result) {
      //       result = number
      //     }
      //   }
      //   return { result }
      // }

      // console.log(max([1, 2, 3, 4, 5, 1, 2]))




      const letterfrequency = (phrase) => {
        //'haha'
        //letterfrequency('haha') 👉 {'h': 2, 'a' :2}
        console.log(phrase)

        let frequency = {}
        for (const letter of phrase) {
          //check if letter exists in frequency
          if (letter in frequency) {
            //increment the value by +1
            frequency[letter] = frequency[letter] + 1  //frequency[letter]+=1
            //otherwise, set the value to 1
          } else {
            frequency[letter] = 1
          }
        }
        return frequency
      }
      //console.log(letterfrequency('Oh god it took me so long to write this actually, please help me complete this in this week itself, please'))


      //incremental operators
      // ++, --, +=

      //wordFrequency('lol what lol') --('lol' :2, 'what' : 1")




      // const wordFrequency = (phrase) => {
      //   let frequency = {}
      //   words = phrase.split(' ')

      //   for (const word of words) {
      //     console.log(word)
      //     if (word in frequency) {
      //       frequency[word] += 1
      //     } else {
      //       frequency[word] = 1
      //     }
      //   }
      //   console.log(words)

      //   return frequency
      // }
      // console.log(wordFrequency('lol what lol yo yo yo'))





      // for (letter of  phrase){
      //   console.log(letter)
      // }

      // phrase.split('')
      // => ['lol','what','lol']





      // const wordFrequency = (phrase) => {

      //   words = phrase.split(' ')
      //   return letterfrequency(words)
      // }
      // const userInput = prompt('Write your sentence')
      // console.log(wordFrequency(userInput))





      //HIGHER ORDER FUNCTIONS IN ARRAYS 
      //ARRAY METHODS
      //LESSON 1- MAP()   ---loops and returns an array
      //lesson 2- FILTER()----loops and returns an array with matching conditions
      //LESSON 3 - REDUCE()

      //[1, 2, 3, 4].map(number => console.log(number))
      //implicit return i.e automatic return

      // [1, 2, 3, 4].map(number => {
      //   console.log(number)
      //   console.log('haha')
      // })

      // const double = (numbers) => {
      //   let result = []
      //   for (const number of numbers) {
      //     result.push(number * 2)
      //   }
      //   return result
      // }
      // console.log(result)
      //something wrong

      const doubleMap = (numbers) => {
        return numbers.map(number => number * 2)
      }
      //console.log(doubleMap([1, 2, 3]))

      // let result = [1, 2, 3, 4].map(number => number * 2)
      // console.log(result)



      //Filter**********

      //filter([1,2,3,4,5,6],3) it should return [4,5,6]
      const filter = (numbers, greaterThan) => {
        let result = []
        for (const number of numbers) {
          if (number > greaterThan) {
            result.push(number)
          }
        }
        return result
      }
      //console.log(filter([1, 2, 3, 4, 5, 6], 3))

      const nums = [1, 2, 3, 4, 5, 6]
      //console.log(nums.filter(num => num > 4 || num < 2))

      //if (userIsAuthenticated && userIsPayingMember){
      // code goes here
      //}

      const actors = [
        { name: 'johnny', netWorth: 20000000 },
        { name: 'amber', netWorth: 10 },
        { name: 'leonardo', netWorth: 10000000 },
      ]
      let result = actors.filter(actor => actor.netWorth > 10)

      console.log(result)

      //name of the objects are not getting displayed in the console

      //playground.innerHTML = '<h1>${result[0].name}Leonardo</h1>'
      let names = result.map(actor => actor.name).join(', ')


      playground.innerHTML = '<h1>${JSON.stringify(result)}Leonardo</h1>'


      //REDUCE******* reduce()

      //sum all of the net worths
      //SUM: Think reduce
      // reduce takes in  a function as an argument  
      //reduce loops and gives you back the accumulator

      // const numms = [1, 2, 3]
      // numms.reduce(function(prev, nex) {
      //   console.log(nex)
      // })

      const numms = [1, 2, 3]
      const output = numms.reduce(function(prev, nex) {
        return prev + curr
      })
      console.log(output)




















































