
function getDay() {
    var Day;

    switch (new Date().getDay()){

    case 0 : 
    Day = "Sunday" ;
    console.log("Today is Sunday");
    break;

    case 1 :
    Day = "Monday" ;
    console.log("Today is Monday");
    break;

    case 2 :
    Day = "Tuesday";
    console.log("Tuesday");
    break;

    case 3 :
    Day = "Wednesday";
    console.log("Wednesday");
    break;

    case 4 : 
    Day = "Thursday";
    console.log("Thursday");
    break;

    case 5 :
    Day = "Friday";
    console.log("Friday");
    break;

    case 6 :
    Day = "Saturday";
    console.log("Saturday");
    break;

    };
    document.getElementById("display").innerHTML = "Today is" + Day;
    
    console.log("Button was cliciked");
}
    