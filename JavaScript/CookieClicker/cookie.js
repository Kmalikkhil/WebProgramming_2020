let numberOfCookies = document.getElementById("numberOfCookies");
let cookieimg = document.getElementById("cookieImg");
let pointerImg = document.getElementById("pointerImg");
let numberOfCookiesPerSecond = document.getElementById("numberOfCookiesPerSecond");
let pointerValue = document.getElementById("pointerValue");
let upgradePurchased = document.getElementById("upgradePurchased");
let cookieCounter = 0;
let cookieCounterPerSecond = 0;
let buyingAbility = 10;

pointerImg.onclick = upgradepointer;

function upgradepointer(){

    
    
    if(cookieCounter >= buyingAbility)
    {
        cookieCounterPerSecond += 1
        numberOfCookiesPerSecond.innerHTML = "Per Second " + cookieCounterPerSecond;
        cookieCounter -= buyingAbility;
        numberOfCookies.innerHTML = cookieCounter + " Cookies";
        //let newdiv = document.createElement("div");
        //upgradePurchased.appendChild(newdiv);
        

        setInterval(function() {
            cookieCounter += cookieCounterPerSecond;
            numberOfCookiesPerSecond.innerHTML = "Per Second " + cookieCounterPerSecond;
            numberOfCookies.innerHTML = cookieCounter + " Cookies";


        },1000);
        buyingAbility += 10;
        pointerValue.innerHTML = "Worth: " + buyingAbility + " Cookies";
       
        //upgradePurchased.innerHTML = pointerImg;
    }
    
    
}





cookieimg.onclick = cookieClick;

function cookieClick(){

   cookieCounter += 1; 
   numberOfCookies.innerHTML = cookieCounter + " Cookies";


}


