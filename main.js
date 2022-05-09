var rgp = 0;

function rgpClick(number){
    rgp = rgp + number;
    document.getElementById("rgp").innerHTML = rgp;
};

var orbs = 0;

function buyRgpOrb(){

var orbCost = Math.floor(10 * Math.pow(1.1,orbs));

if (orbs <= orbCost && rgp >= orbCost){
    orbs = orbs + 1;
    rgp = rgp - orbCost;
    document.getElementById('orbs').innerHTML = orbs;
    document.getElementById('rgp').innerHTML = rgp;    
} else {
    alert("You do not have enough RGP!");
};

var nextCost = Math.floor(10 * Math.pow(1.1,orbs));
document.getElementById('orbCost').innerHTML = nextCost;
}





//Game Loop
window.setInterval(function(){
    rgpClick(orbs)
    console.log(rgp)
}, 1000);