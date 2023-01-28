// querySelector()- methods, it listens when a button gets clicked
// querySelectorAll()- same as querySelector() just works for all button


  // addEventListener performs some functions when event is happened
 // addEventListener has 2 perameter 1. event-Type (prebuilt keywords are here) 
 //				     2. listener function (going to be called when event happens user made) 
  

var numberOfDrumButtons = document.querySelectorAll(".drum").length;  
// here querySelectorAll(".drum") selects all the items that has the class drum in it and get how many numbers are they using length



// function for making sound by clicking mouse
for (var i = 0; i < numberOfDrumButtons; i++) 				// looping through each button to apply the event listener
{

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {  

    var buttonInnerHTML = this.innerHTML;  // this stores the inner html of where the mouse has clicked 
    					  //  inner html - context inside tags <li>*****</li> or output we see  

    makeSound(buttonInnerHTML);  // calling makesound function for making sound

    buttonAnimation(buttonInnerHTML);

  });

}

/* this can be donr seperately too without () with function, cause we want to call function when event is click
   if we use () it will be clicked immediately without waiting for event to be clicked

   document.querySelectorAll(".drum")[i].addEventListener("click", function);

   function() {  
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
   };*/



// function for making sound by keyboard press
document.addEventListener("keypress", function(event) {

  makeSound(event.key);		// calling makesound function for making sound

  buttonAnimation(event.key);

});

/* 
both works

function()
{
}

function function_name()
{
}

*/

function makeSound(key) { 	 // taking key as perameter for which sound to make

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3"); // stores the audio in tom1 variable
      tom1.play(); 				// play is method provided by js
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

// query selector can have tags and classes too, it returns full html statement that matches the perameter passed to it

  var activeButton = document.querySelector("." + currentKey);  // storing current key class to activeButton by using . and the current key

  activeButton.classList.add("pressed"); // classlist gives the list of classes that has been applied to it 
  					// classList.add()  adds "pressed" class to  current button that has been pressed
  					//pressed is a class

// setTimeout has 2 perameter 1. function() - what to do
//			      2. time - after waiting for how to time to perform the function

  setTimeout(function() { 
    activeButton.classList.remove("pressed"); // pressed class got removed from activeButton
  }, 100);		// function will be performed after waiting 100 milisec

}
