'use strict';


//  70

// //1. document.querySelector('.message') selects the element. 
// //2. On this element we can read the textContent property.  .textContent

// console.log(document.querySelector('.message').textContent);


//  71  What's the DOM and DOM Manipulation

// // DOM = stands for Document Object Model, and it is a STRUCTURED REPRESENTATION OF HTML documents.
// //     = allows us to use JavaScript to ACCESS HTML elements and styles to manipulate them.
// //     = is a connection point between HTML documents and JavaScript code.
// //     = is automatically created by the browser as soon as the HTML page loads and it is stored in a tree structure.
// /* Manipulate = Change text
//                 HTML attributes
//                 CSS styles


// DOCUMENT = is a special OBJECT that we have access to in JavaScript and this OBJECT serves as an entry point into the DOM.
// */



//  72 Selecting and Manipulating Elements

//  Here we manipulate the TEXT CONTENT of one of the DOM nodes.
// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// // Input field = value.

// // First we write it
// document.querySelector('.guess').value = 23;

// // Second we read it
// console.log(document.querySelector('.guess').value);








// 73 Handling Click Events

// An event = is something that happens on the page. ex: a mouse click or a mouse moving or a key press.

// 1. document.querySelector('.check') will return an ELEMENT.
// 2. On that ELEMENT we can call the addEventListener method.
// 3. Into this addEventListener method, we first need to pass in THE TYPE OF THE EVENT. 'click'.
// 4. Now we need to tell the event listener what to do.We need to specify the reaction to the click event.And we do that by defining a function and that function will contain the code that should be executed whenever this click event happens on this .check button.That function is going to be called THE EVENT HANDLER.
// 5. Whenever we get something from the user interface, for example, fron AN INPUT FIELD it usually always is a STRING.If we want to compare numbers with numbers, we need to first convert this string to a number Number().
// 6. Log to the console tha value that is in this input field.
document.querySelector('.check').addEventListener('click',function() {
    const guess = Number(document.querySelector('.guess').value);

    console.log(guess, typeof guess);


    if(!guess) { // ZERO is FALSE so guess here is FALSE now but then we use the NOT (!) OPERATOR to convert it to TRUE and we can then make this block of code execute.Because it only executes whenever this whole condition is true.
        document.querySelector('.message').textContent = 'No number!';
    }
});