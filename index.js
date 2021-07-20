function leapYear(year){

    var year=document.getElementById("year").value;
    if((year%400 == 0) || (year%4 == 0  && year% 100 !== 0)){
        alert(year+"   is a leap");

    }else{
        alert(year+"   is not a leap");
    }
}

