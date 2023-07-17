function ageCalculator(){
    // Get label Name of input
    const labelDay = document.querySelector('.labelday');
    const labelyear = document.querySelector('.labelyear');
    const labelmonth = document.querySelector('.months');
        
    // get error text for empty input
    const emptyInputDay = document.querySelector('.empty-field');
    const emptyInputMonth = document.querySelector('.empty-field2');
    const emptyInputYear = document.querySelector('.empty-field3');
    
    // Get error text for invalid values
    const errorTextDay = document.querySelector('.invalid-day-error');
    const errorTextMonth = document.querySelector('.invalid-month-error');
    const errorTextYear = document.querySelector('.invalid-year-error');

    // Get the input value selector
    const day = document.querySelector('.day');
    const month = document.querySelector('.month');
    const year = document.querySelector('.year');

    // Get the output value selector
    const outputDay = document.querySelector('.days');
    const outputMonth = document.querySelector('.Month');
    const outputYear = document.querySelector('.years');

    // Define the current Month, date, year
    const date = new Date();
    const currentDate = date.getDate();
    const currentMonth = date.getMonth() + 1;
    const currentYear = date.getFullYear();

    // Get the last day of the month;
    var lastday = new Date(currentYear, currentMonth,0).getDate();
    // submit button
    const submitBtn = document.querySelector('img');
    // event handler 
    submitBtn.addEventListener('click', () =>{
        if ((day.value === "" )|| (month.value === "") || (year.value === "")){
            
            errorMessage(day, labelDay, emptyInputDay, 'emptyfielderror');
            
            errorMessage(month, labelmonth, emptyInputMonth, 'emptyfieldmonth');
            
            errorMessage(year, labelyear, emptyInputYear, 'emptyfieldyear');
            return;
        }
        else{

            removeErrormessage(day, labelDay, emptyInputDay, 'empty-field');
            
            removeErrormessage(month, labelmonth, emptyInputMonth, 'empty-field2');
            
            removeErrormessage(year, labelyear, emptyInputYear, 'empty-field3');
        }
        // Perform calculation of age
        calculateAge();
    });

    function calculateAge(){
        const inputDay  = parseInt(day.value);
        const inputMonth = parseInt(month.value);
        const inputYear = parseInt(year.value);  
        // error handler for checking if input is valid or not
        const validInput = isInputValid(inputDay, inputMonth, inputYear);
        // if input fields are valid than perform calculation
        if(validInput){

            let ageYear = currentYear - inputYear;
            let ageMonth = currentMonth - inputMonth;
            let ageDay = currentDate - inputDay;

            //check if the year is leap year or not
            
            if(ageDay < 0){
                ageMonth--;
                ageDay += lastday;
            }
            if (ageMonth < 0){
                ageYear--;
                ageMonth += 12;
            }
            outputDay.textContent = ageDay;
            outputMonth.textContent = ageMonth;
            outputYear.textContent = ageYear;
        }
    }
    function isInputValid(inputday, inputmonth, inputyear){
        const leapyear = new Date(inputyear, 1, 29).getDate() === 29;
        // for month with 31 days
        if ((inputmonth === 1) || (inputmonth === 3) || (inputmonth === 5) || (inputmonth === 7) || (inputmonth === 8) || (inputmonth === 12) || (inputmonth > 12)){
            
            if (inputyear > currentYear){
                errorMessage(year,labelyear ,errorTextYear, 'invalid-year')
            }
            else{
                removeErrormessage(year, labelyear, errorTextYear, 'invalid-year-error');
            }
            if (inputmonth > 12){
                errorMessage(month, labelmonth, errorTextMonth, 'invalid-month')
            }
            else{
                removeErrormessage(month, labelmonth, errorTextMonth, 'invalid-month-error');
            }
            if(inputday > lastday){
                errorMessage(day, labelDay, errorTextDay, 'invalid-day');
            }
            else{
                removeErrormessage(day, labelDay, errorTextDay, 'invalid-day-error');
            }
            if (inputday <= lastday && inputmonth <= 12 && inputyear <= currentYear) {
                return true;
            }

        }

        if (inputmonth == 4 || inputmonth == 6 || inputmonth == 9 || inputmonth == 11 || inputmonth > 12){
            lastday = 30;
            if(inputday > lastday){
                errorMessage(day, labelDay, errorTextDay, 'invalid-day');
            }
            else{
                removeErrormessage(day, labelDay, errorTextDay, 'invalid-day-error');
            }

            if (inputyear > currentYear){
                errorMessage(year,labelyear ,errorTextYear, 'invalid-year')
            }
            else{
                removeErrormessage(year, labelyear, errorTextYear, 'invalid-year-error');
            }
            if (inputmonth > 12){
                errorMessage(month, labelmonth, errorTextMonth, 'invalid-month')
            }
            else{
                removeErrormessage(month, labelmonth, errorTextMonth, 'invalid-month-error');
            }
            if (inputday <= lastday && inputmonth <= 12 && inputyear <= currentYear) {
                return true;
            }
        
        }
        if (inputmonth == 2){
            if (leapyear){
                lastday = 29;
                if(inputday > lastday){
                    errorMessage(day, labelDay, errorTextDay, 'invalid-day');
                }
                else{
                    removeErrormessage(day, labelDay, errorTextDay, 'invalid-day-error');
                }
    
                if (inputyear > currentYear){
                    errorMessage(year,labelyear ,errorTextYear, 'invalid-year')
                }
                else{
                    removeErrormessage(year, labelyear, errorTextYear, 'invalid-year-error');
                }
                if (inputmonth > 12){
                    errorMessage(month, labelmonth, errorTextMonth, 'invalid-month')
                }
                else{
                    removeErrormessage(month, labelmonth, errorTextMonth, 'invalid-month-error');
                }
                if (inputday <= lastday && inputmonth <= 12 && inputyear <= currentYear) {
                    return true;
                }
            }
            else if (!leapyear){
                lastday = 28;
                if(inputday > lastday){
                    errorMessage(day, labelDay, errorTextDay, 'invalid-day');
                }
                else{
                    removeErrormessage(day, labelDay, errorTextDay, 'invalid-day-error');
                }
    
                if (inputyear > currentYear){
                    errorMessage(year,labelyear ,errorTextYear, 'invalid-year')
                }
                else{
                    removeErrormessage(year, labelyear, errorTextYear, 'invalid-year-error');
                }
                if (inputmonth > 12){
                    errorMessage(month, labelmonth, errorTextMonth, 'invalid-month')
                }
                else{
                    removeErrormessage(month, labelmonth, errorTextMonth, 'invalid-month-error');
                }
                if (inputday <= lastday && inputmonth <= 12 && inputyear <= currentYear) {
                    return true;
                }
            }
        }


    }
    // error message function handler 
    function errorMessage(inputField,inputLabel, errorTextElement, addClass){
        // adding error class list to input
        inputField.setAttribute('id', 'errorDate');
        inputLabel.setAttribute('id','errorLabelYear');
        //Shows error text
        errorTextElement.setAttribute('class', addClass);
    }
    function removeErrormessage(inputField,inputLabel, errorTextElement, removeClass){
        inputField.removeAttribute('id', 'errorDate');
        inputLabel.removeAttribute('id','errorLabelYear');

        // remove error text
        errorTextElement.setAttribute('class', removeClass);
    }
}

ageCalculator()