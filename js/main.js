//////////////////////////
//Add RGP Function
//////////////////////////
var rgp = 0;

function rgpClick(number){
    rgp = rgp + number;
    document.getElementById("rgp").innerHTML = rgp;
    changeTier();
};

//////////////////////////
//Change tier
//////////////////////////

function changeTier(){
    tier = 0;
    if (rgp != 0 && rgp <= 100){
        tier = 0;
        document.getElementById("tierimg").src = "img/tier_0.png";

    } else if (rgp >= 100 && rgp <= 200){
        tier = 1;
        document.getElementById("tierimg").src = "img/tier_1.png";

    } else if(rgp >= 200 && rgp <= 300){
        tier = 2; 
        document.getElementById("tierimg").src = "img/tier_2.png";

    } else if(rgp >= 300 && rgp <= 400){
        tier = 3; 
        document.getElementById("tierimg").src = "img/tier_3.png";

    } else if(rgp >= 400 && rgp <= 500){
        tier = 4;
        document.getElementById("tierimg").src = "img/tier_4.png";

    } else if(rgp >= 500 && rgp <= 600){
        tier = 5;
        document.getElementById("tierimg").src = "img/tier_5.png";

    } else if(rgp >= 600 && rgp <= 700){
        tier = 6;
        document.getElementById("tierimg").src = "img/tier_6.png";
    }
}

//////////////////////////
//Buy Orbs Function
//////////////////////////
var orbs = 0;

function buyRgpOrb(){
    var orbCost = Math.floor(10 * Math.pow(1.1,orbs));
    var element = document.getElementById("orbbuy");

    if (orbs <= orbCost && rgp >= orbCost){    
        orbs = orbs + 1;        //Add 1 Orb
        rgp = rgp - orbCost;    //Subtract Orb Cost

        document.getElementById('orbs').innerHTML = orbs;   //Set Orb amount text
        document.getElementById('rgp').innerHTML = rgp;     //Set RGP amount text
    } else {
        element.classList.toggle("no");
    }

    var nextCost = Math.floor(10 * Math.pow(1.1,orbs));
    document.getElementById('orbCost').innerHTML = nextCost;
}


//////////////////////////
//Game Loop
//////////////////////////
window.setInterval(function(){
    rgpClick(orbs)
    console.log(rgp)
}, 1000);