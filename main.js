//alert("hello");//Write an alert inside your `main.js` to ensure that your file is linked properly; it should alert "hello" when you refresh the page. Just ensures main.js file is linked to html. 

(function() {
    'use strict'
    
    const $numberButtons = document.querySelectorAll('.number');
    const $operationButtons = document.querySelectorAll('.operator');
    const $equalButton = document.querySelector('.equal-sign');

    function pushNumber (event) { //Define a function named `pushNumber` that `alert()`s the number associated with its event argument when called
        alert(event.target.value);//HTML events ex:click,targets HTML event element that event occuring on,finds number in HTML which is value
    }


    $numberButtons.forEach(function(button) {  //add this function pushNumber as an event listener for the number buttons
        button.addEventListener('click', pushNumber); //addEventLIstener(type of event, event listener)-telling JS to listen for event 'click' and call this function-pushNumber
    });
    // pushNumber (event)


    function pushOperator (event) {
        alert(event.target.value);
    }

        $operationButtons.forEach(function(button) {
            button.addEventListener('click', pushOperator);
        });
    //pushOperator (event)

    function calculate (event) {
        alert(event.target.value);
    }

    $equalButton.forEach(function(button) {
        button.addEventListener('click', calculate);
    });
   

   


   

    















})();











