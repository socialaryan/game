var randomno1 = Math.floor(Math.random() * 6)+1;
var rr = "dice" + randomno1 + ".png";

var rrims = "images/" + rr;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",rrims);


var randomno2 = Math.floor(Math.random() * 6)+1;
var rr = "dice" + randomno2 + ".png";

var rrims2 = "images/" + rr;


var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",rrims2);


if(rrims > rrims2){
document.querySelector("h1").innerHTML= "Anisha win";
}

else if(rrims < rrims2) {
    document.querySelector("h1").innerHTML= "Aryan win";
}
else{
    document.querySelector("h1").innerHTML= "Draw ho gya yrr";
}