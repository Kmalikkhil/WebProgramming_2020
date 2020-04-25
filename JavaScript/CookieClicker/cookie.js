let numberOfCookies = document.getElementById("numberOfCookies");
let cookieimg = document.getElementById("cookieImg");
let pointerImg = document.getElementById("pointerImg");
let numberOfCookiesPerSecond = document.getElementById("numberOfCookiesPerSecond");
let pointerValue = document.getElementById("pointerValue");
let upgradesPurchased = document.getElementById("upgradesPurchased");
let cookieCounter = 0;
let cookieCounterPerSecond = 0;
let buyingAbility = 10;


// Onclick event for upgrade pointer
pointerImg.onclick = upgradepointer;

function upgradepointer(){

    
// Condition to meet the purchase of an upgrade    
    if(cookieCounter >= buyingAbility)
    {
        cookieCounterPerSecond += 1
        numberOfCookiesPerSecond.innerHTML = "Per Second " + cookieCounterPerSecond;
        cookieCounter -= buyingAbility;
        numberOfCookies.innerHTML = cookieCounter + " Cookies";
        
        // setting the timer to add a cookie

        setInterval(function() {
            cookieCounter += cookieCounterPerSecond;
            numberOfCookiesPerSecond.innerHTML = "Per Second " + cookieCounterPerSecond;
            numberOfCookies.innerHTML = cookieCounter + " Cookies";

        // 1000 means 1 second in milliseconds
        },1000);

        // increases the price to purchase an upgrade
        buyingAbility += 10;

        // caption: current price of the upgrade
        pointerValue.innerHTML = "Worth: " + buyingAbility + " Cookies";
        
        //showing all the upgrades purchased so far
        let newFig = document.createElement("figure");
        let newImg = document.createElement("img")
        
        let newcaption = document.createElement("figcaption");
        newcaption.innerHTML = cookieCounterPerSecond + " Cookie/Sec";
        newImg.src = "pointer.png";

        upgradesPurchased.appendChild(newFig);
        newFig.appendChild(newImg);
        newFig.appendChild(newcaption);
        
        
    }
    
    
}


//Function for clicking on Cookie image
cookieimg.onclick = cookieClick;

function cookieClick(){

   cookieCounter += 1; 
   numberOfCookies.innerHTML = cookieCounter + " Cookies";


}


