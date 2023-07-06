function lifeInWeeks(age) {

    /************Don't change the code above************/

        //Write your code here.
    let currentDays = age * 365;
    let currentWeeks = age * 52;
    let currentMonth = age * 12;
    let years = 90;
    let leftDays = years * 365 - currentDays;
    let leftWeeks = years * 52 - currentWeeks;
    let leftMonth = years * 12 - currentMonth;
    console.log('You have '+ leftDays + ' days, ' + leftWeeks + ' weeks, and '+ leftMonth + ' months  left. When age is ' + age)
}

lifeInWeeks(51);
lifeInWeeks(28);
lifeInWeeks(45);




    /*************Don't change the code below**********/



