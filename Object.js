/**
 * JS object
 */


var car = {
    //name:value
    type    :"Mustang",
    model   :"GT",
    colour  :"red",
    year    :97,
    fungsi : function() {
        return this.type+ " " + this.model;
    }
};

var person={name:"Frank", age:28, gender:"male", nasionality:"Wanolian"};

//Accessing object properties
car.year;
//or
person["name"];

panggil=car.fungsi();

document.getElementById("object").innerHTML="Type: "+car.type+". Model: "+car.model+". Colour: "+car.colour+". Year: "+car.year;
document.getElementById("object").innerHTML=
"Name: "+person["name"]+". Age: "+person["age"]+". Gender: "+person["gender"]+". Nasionality: "+person["nasionality"];
document.getElementById("object").innerHTML=panggil;
