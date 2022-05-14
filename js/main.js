"use strict";


var rgp = 0;
var tier = 1;
var orbs = 0;



//////////////////////////
//Add RGP 
//////////////////////////
function rgpClick(click){
    rgp = rgp + click;
    document.getElementById("rgp").innerHTML = rgp;
    changeTier();
    addTier();
    unlockFarming();
}

//////////////////////////
//Add tier
//////////////////////////

function addTier(){
    if (rgp / 100 >= tier && tier < 11){
        tier++;
        document.getElementById("tier").innerHTML = tier;
        orbs++;
        document.getElementById('orbs').innerHTML = orbs;
        console.log("Added tier! RGP:",rgp);
    }
}

//////////////////////////
//Change tier image
//////////////////////////

function changeTier(){

    if (rgp >= 99 && rgp <= 199){
        document.getElementById("tierimg").src = "img/blocks/tier_1.png";
    } else if (rgp >= 200 && rgp <= 300){
        document.getElementById("tierimg").src = "img/blocks/tier_2.png";
    } else if (rgp >= 300 && rgp <= 400){
        document.getElementById("tierimg").src = "img/blocks/tier_3.png";
    } else if (rgp >= 399 && rgp <= 500){
        document.getElementById("tierimg").src = "img/blocks/tier_4.png";
    } else if (rgp >= 499 && rgp <= 600){
        document.getElementById("tierimg").src = "img/blocks/tier_5.png";
    } else if (rgp >= 599 && rgp <= 700){
        document.getElementById("tierimg").src = "img/blocks/tier_6.png";
    } else if (rgp >= 699 && rgp <= 800){
        document.getElementById("tierimg").src = "img/blocks/tier_7.png";
    } else if (rgp >= 799 && rgp <= 900){
        document.getElementById("tierimg").src = "img/blocks/tier_8.png";
    } else if (rgp >= 899 && rgp <= 999){
        document.getElementById("tierimg").src = "img/blocks/tier_9.png";
    } else if (rgp >= 1000){
        document.getElementById("tierimg").src = "img/other/tier_10.gif";
    }
}

//////////////////////////
//Buy Orbs Function
//////////////////////////

function buyExpOrb(){
    var orbCost = Math.floor(10 * Math.pow(1.1,orbs));
    var button = document.getElementById("orbbuy");

    if (orbs <= orbCost && rgp >= orbCost){    
        orbs = orbs + 1;        //Add 1 Orb
        rgp = rgp - orbCost;    //Subtract Orb Cost

        document.getElementById('orbs').innerHTML = orbs;
        document.getElementById('rgp').innerHTML = rgp;
        console.log("Bought Orb! Orbs:",orbs);    
    } else {
        button.classList.toggle("no");
        console.log("Couldn't buy, not enough orbs:",orbs);
    }

    var nextCost = Math.floor(10 * Math.pow(1.1,orbs));
    document.getElementById('orbCost').innerHTML = nextCost;
}


//////////////////////////
//New unlock
//////////////////////////

function unlockFarming() {
    var farmingdiv = document.getElementById("FarmingDiv");

    if (tier >= 11 ) {
        farmingdiv.style.removeProperty('display');
        console.log("Farming Unlocked!")
    }
  }















//////////////////////////
//Game Loop
//////////////////////////
window.setInterval(function(){
    rgpClick(orbs);    
    console.log("RGP:",rgp,"Tier:",tier);
}, 1000);