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
        $('#display-main').html("0");
    });
    
    // buttons clicked on to calculate
    $('.number, .operator, #enter').on('click', function() { 
        var buttonValue = $(this).find('.text').html();
        var btnValStr = buttonValue.toString();
        
        // if 'enter' button is pressed
        if ($(this).is('#enter')) {
            finalValue = eval(runningValue);
            
            // display total calculated value in main display field
            $('#display-main').html('' + finalValue + '');
            
            // display equal sign with spaces on either side
            underValue = underValue + " " +  btnValStr + " " + finalValue + " " ;
            $('#display-under').html('' + underValue + ''); 
            
        // if number button is pressed    
        } else if ($(this).is('.number')) {
            // display number with digits together
            underValue = underValue + btnValStr;
            $('#display-under').html('' + underValue + ''); 
            
            // add digits from button to holdValue with digits together   
            holdValue = holdValue + buttonValue;   
            
            // add button value to runningValue
            if (runningValue === 0) {
                runningValue = buttonValue; 
            } else {
                runningValue = runningValue + buttonValue;
            }
            
            
        // if operator button is pressed    
        } else if ($(this).is('.operator')) {
            // display operator with spaces on either side
            underValue = underValue + " " +  btnValStr + " ";
            $('#display-under').html('' + underValue + ''); 
            
            holdOperator = buttonValue;
            runningValue += buttonValue; 
            holdValue = ''; 
        }
    });      
});