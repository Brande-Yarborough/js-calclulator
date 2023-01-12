//alert("hello");//Write an alert inside your `main.js` to ensure that your file is linked properly; it should alert "hello" when you refresh the page. Just ensures main.js file is linked to html. 

(function() {
    'use strict'
    
    const $numberButtons = document.querySelectorAll('.number');
    const $operationButtons = document.querySelectorAll('.operator');
    const $clearButton = document.querySelector('.clear');
    const $equalButton = document.querySelector('.equal-sign');
    const $calculatorScreen = document.querySelector('.calculator-screen');
    let calculation = [];//Define/initialize a variable `calculation` pointing to an empty array

    function pushNumber (event) { //Define a function named `pushNumber` that `alert()`s the number associated with its event argument when called
        //alert(event.target.value);//HTML events ex:click,targets HTML event element that event occuring on,finds number in HTML which is value
        calculation.push(event.target.value);//pushing to calulation array the numbers
        $calculatorScreen.value = event.target.value //get numbers to display on calculator screen
        console.log(calculation);
    
    }


    $numberButtons.forEach(function(button) {  //add this function pushNumber as an event listener for the number buttons
        button.addEventListener('click', pushNumber); //addEventLIstener(type of event, event listener)-telling JS to listen for event 'click' and call this function-pushNumber
    });
    // pushNumber (event)


    function pushOperator (event) {
        //alert(event.target.value);
        calculation.push(event.target.value);//pushing to calculation array the operators
        $calculatorScreen.value = event.target.value //get operators to display on calculator screen
        console.log(calculation);
    }

        $operationButtons.forEach(function(button) {
            button.addEventListener('click', pushOperator);
        });
    //pushOperator (event)

    function clear (event) {
        $calculatorScreen.value = 0;
    }

    $clearButton.addEventListener('click', clear);
    

    function calculate (event) {
        // alert(event.target.value);
        // calculation.push(event.target.value);//pushing to calculation array the equal sign
        // console.log(calculation);
        console.log('=');

        //coerces loop as undefined string to be concatenated
        let num1 = "", num2 = "", operator = null;

        //creates array of operators as strings the for loop searches
        const operators = ['+', '-', '/', '*'];

        // ['2', '+', '3']


        for (let i = 0; i < calculation.length; i++) {  //Using a `for` loop, `alert()` the calculation when `=` is pressed
            // console.log(calculation[i]); 

            //value is whatever array value on index of [i] is
            const value = calculation[i];



            if(operators.includes(value)) { //checks to see if value includes operators
                operator = value;
            } else if(operator === null) {
                num1 += value;
            } else {
                num2 += value;
            }   
        }

        let result;
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        if(operator === '+') { //checks value of operator to determine how expression should be evaluated
            result = num1 + num2;
        } else if(operator === '-') {
            result = num1 - num2;
        } else if(operator === '/') {
            result = num1 / num2;
        } else if(operator === '*') {
            result = num1 * num2;
        } 

        
        // alert(result); //shows calculation and result in console
        $calculatorScreen.value = result; //shows result on display of calculator screen
      
}

    $equalButton.addEventListener('click', calculate);
    
    

   

   


   

    















})();











