//Example.html

function my$function (p1,p2){
    return p1+p2;
}

function myCelsius(fahrenheit){
    return (5/6)*(fahrenheit-32);
}

var x=my$function(2,2);
var y=myCelsius(8);

document.getElementById("function").innerHTML=y;
document.getElementById("function").innerHTML=x;
