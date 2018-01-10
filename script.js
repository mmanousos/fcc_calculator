$(document).ready(function() {
    
    
    
    var holdValue = '';
    var runningValue = '';
    var holdOperator = '';
    var finalValue = 0;
    var underValue = '';
    console.log(holdValue);


    var exp = 2.3 + 5; 
    console.log(exp);
    
    $('#clear-all').on('click', function() {
        holdValue = '';
        runningValue = '';
        holdOperator = '';
        finalValue = 0;
        underValue = '0';
        $('#display-under').html("");
    });
    
    $('.number, .operator').on('click', function() {
        var buttonValue = $(this).find('.text').html();
        var btnValStr = buttonValue.toString();
        // until '.operator' button is clicked, holdValue needs to concatenate
        // once '.operator' is clicked, runningValue needs to collect holdValue & holdOperator, clear holdValue;
        console.log(buttonValue);
        
        if ($(this).is('.number')) {
            underValue = underValue + btnValStr;
            $('#display-under').html('' + underValue + ''); 
            
            
            holdValue = holdValue + buttonValue;   
            console.log('current hold value is ' + holdValue);
        } else if ($(this).is('.operator')) {
            underValue = underValue + " " +  btnValStr + " ";
            $('#display-under').html('' + underValue + ''); 
            
            holdOperator = buttonValue;
            runningValue += holdValue;
            runningValue += buttonValue; 
            finalValue = runningValue;
            holdValue = 0; 
            console.log("current finalValue is " + finalValue);
            console.log("running value is " + runningValue);
        }

        
            
           // hold = $(this).html();
            //   console.log('hold = ' + ($(this).find('.text').html()));
        //    };    
            
        });    
    
    
    });