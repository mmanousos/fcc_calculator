$(document).ready(function() {
    
    // to display 
    var holdValue = ''; // value of numbers
    var holdOperator = ''; // operator
    var underValue = ''; // display contents
    
    // to calculate
    var runningValue = 0; // calculating value
    var finalValue = 0; // return value
    
    // 'clear-all' button functionality
    $('#clear-all').on('click', function() {
        holdValue = '';
        runningValue = 0;
        holdOperator = '';
        finalValue = 0;
        underValue = '';
        $('#display-under').html("");
        $('#display-main').html("");
    });
    
    // push button values into an array? 
    
  /*  
    
    $('.number, .calc, #enter').on('click', function() { 
        var buttonValue = $(this).find('.text').html();
        var btnValStr = buttonValue.toString();
        
        // if number button is pressed    
        if ($(this).is('.number')) {
            console.log("buttonValue is " + buttonValue);
            // add number value to holdValue
            holdValue += btnValStr; 
            console.log("holdValue is " + holdValue);
            
            // add number value to runningValue 
            runningValue.push(buttonValue);
            console.log("runningValue is " + runningValue);
            
        } else if ($(this).is('.calc')) {
            console.log("buttonValue is " + buttonValue);
            // hold operator in it's own variable 
            holdOperator = btnValStr;
            console.log("holdOperator is " + holdOperator);
        
            // add operator value to runningValue 
            runningValue.push(buttonValue); 
            console.log("runningValue is " + runningValue);
        
        } else if ($(this).is('#enter')) {
            //combine runningValue to generate finalValue
            finalValue = runningValue.join('');
            console.log(eval(finalValue));

            // display calculated finalValue
            $('#display-main').html('' + finalValue + '');
            
        }
    });
    */
    // 'clear-entry' button functionality
    $('#clear-entry').on('click', function() {
        holdValue = '';
        //runningValue = 0;
        holdOperator = '';
        //$('#display-under').html("");
    });
    
    // buttons clicked on to calculate
    $('.number, .operator, #enter').on('click', function() { 
        var buttonValue = $(this).find('.text').html();
        var btnValStr = buttonValue.toString();
        // until '.operator' button is clicked, holdValue needs to concatenate
        // on each click, runningValue needs to collect integers or operators, clear holdValue;
        console.log(buttonValue);
        
        // if 'enter' button is pressed
        if ($(this).is('#enter')) {
            // display equal sign with spaces on either side
            underValue = underValue + " " +  btnValStr + " ";
            $('#display-under').html('' + underValue + ''); 
            
            finalValue = eval(runningValue);
            
            // display total calculated value in main display field
            $('#display-main').html('' + finalValue + '');
            
        // if number button is pressed    
        } else if ($(this).is('.number')) {
            // display number with digits together
            underValue = underValue + btnValStr;
            $('#display-under').html('' + underValue + ''); 
            
            // add digits from button to holdValue with digits together   
            holdValue = holdValue + buttonValue;   
            console.log('current hold value is ' + holdValue);
            
            // add button value to runningValue
            if (runningValue === 0) {
                runningValue = buttonValue; 
            } else {
                runningValue = runningValue + buttonValue;
            }
            console.log('current running value is ' + runningValue);
            
            
        // if operator button is pressed    
        } else if ($(this).is('.operator')) {
            // display operator with spaces on either side
            underValue = underValue + " " +  btnValStr + " ";
            $('#display-under').html('' + underValue + ''); 
            
            holdOperator = buttonValue;
            runningValue += buttonValue; 
            console.log('current running value is ' + runningValue);
            holdValue = ''; 
        }
    });    
    
});