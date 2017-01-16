
// grab the number key elements that we need
var zeroKey = document.querySelector("#zero");
var oneKey = document.querySelector("#one");
var twoKey = document.querySelector("#two");
var threeKey = document.querySelector("#three");
var fourKey = document.querySelector("#four");
var fiveKey = document.querySelector("#five");
var sixKey = document.querySelector("#six");
var sevenKey = document.querySelector("#seven");
var eightKey = document.querySelector("#eight");
var nineKey = document.querySelector("#nine");

// grab the operator elements that we need
var deleteKey = document.querySelector("#delete");
var clearKey = document.querySelector("#clear");
var answerKey = document.querySelector("#answer");
var decimalKey = document.querySelector("#decimal");
var equalsKey = document.querySelector("#equals");
var multiplicationKey = document.querySelector("#multiplication");
var divisionKey = document.querySelector("#division");
var plusKey = document.querySelector("#plus");
var minusKey = document.querySelector("#minus");

// grab the calculator div for event listener
var calculator = document.querySelector(".keypad");

//create an event listener on key parent div and let propagation do its thing.
calculator.addEventListener('mouseup', function(event){

  //get id attribute to use for conditionals
  var keyAttribute = event.target.getAttribute("id");

  // get the value of pressed key as a string
  var keyValue = event.target.textContent;

  //set the answer variable to the content of answer key
  var answer = answerKey.innerHTML;

  //we reset the answer key to "0" if clear is pressed
  if(keyAttribute === "clear"){
    answer = "0";
    answerKey.innerHTML = answer;
    return;
  }

  //delete the last key press each time delete is used
  if(keyAttribute === "delete"){
    // make sure that we have at least 1 character to not break the design
    if(answerKey.innerHTML.length <= 1) {
      answerKey.innerHTML = "0";
      return;
    }

    //remove the last character
    answer = answer.slice(0,-1);

    //display answer in the answer key
    answerKey.innerHTML = answer;
    return;
  }

  //we use eval on our built expression and set answer key to the evaluation
  if(keyAttribute === "equals"){
    answerKey.innerHTML = eval(answer);
    return;
  }

  //build our expression by concatenating key values
  answer += keyValue;

  //display expression in answer key as it is built up
  answerKey.innerHTML = answer;
});
