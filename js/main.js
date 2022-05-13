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
};

//////////////////////////
//Change tier
//////////////////////////

function changeTier(){
    if (rgp / 100 == tier){
        tier++;
        orbs++;
        document.getElementById('orbs').innerHTML = orbs;
        console.log("Added tier! RGP:",rgp);
    }

    if (rgp != 0 && rgp <= 100){
        document.getElementById("tierimg").src = "img/blocks/tier_0.png";
    } else if (rgp >= 100 && rgp <= 200){
        document.getElementById("tierimg").src = "img/blocks/tier_1.png";
    } else if (rgp >= 200 && rgp <= 300){
        document.getElementById("tierimg").src = "img/blocks/tier_2.png";
    } else if (rgp >= 300 && rgp <= 400){
        document.getElementById("tierimg").src = "img/blocks/tier_3.png";
    } else if (rgp >= 400 && rgp <= 500){
        document.getElementById("tierimg").src = "img/blocks/tier_4.png";
    } else if (rgp >= 500 && rgp <= 600){
        document.getElementById("tierimg").src = "img/blocks/tier_5.png";
    } else if (rgp >= 600 && rgp <= 700){
        document.getElementById("tierimg").src = "img/blocks/tier_6.png";
    } else if (rgp >= 700 && rgp <= 800){
        document.getElementById("tierimg").src = "img/blocks/tier_7.png";
    } else if (rgp >= 800 && rgp <= 900){
        document.getElementById("tierimg").src = "img/blocks/tier_8.png";
    } else if (rgp >= 900 && rgp <= 1000){
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
    var element = document.getElementById("orbbuy");

    if (orbs <= orbCost && rgp >= orbCost){    
        orbs = orbs + 1;        //Add 1 Orb
        rgp = rgp - orbCost;    //Subtract Orb Cost

        document.getElementById('orbs').innerHTML = orbs;
        document.getElementById('rgp').innerHTML = rgp;
    } else {
        element.classList.toggle("no");
    }

    var nextCost = Math.floor(10 * Math.pow(1.1,orbs));
    document.getElementById('orbCost').innerHTML = nextCost;
    console.log("Bought Orb! Orbs:",orbs);
}


//////////////////////////
//Game Loop
//////////////////////////
window.setInterval(function(){
    rgpClick(orbs)    
    console.log("RGP:",rgp,"Tier:",tier);
}, 1000);