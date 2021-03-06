let numberOfCookies = document.getElementById("numberOfCookies");
let cookieimg = document.getElementById("cookieImg");
let pointerImg = document.getElementById("pointerImg");
let numberOfCookiesPerSecond = document.getElementById("numberOfCookiesPerSecond");
let pointerValue = document.getElementById("pointerValue");
let upgradesPurchased = document.getElementById("upgradesPurchased");
let cookieCounter = 0;
let cookieCounterPerSecond = 0;
let buyingAbility = 10;
let resetLogButton = document.getElementById("resetLog");


//Disables upgrade after loading the page
pointerImg.style.pointerEvents = "none";
// Onclick event for upgrade pointer
pointerImg.onclick = upgradepointer;

function upgradepointer(){
        
// Condition to meet the purchase of an upgrade    
    if(cookieCounter >= buyingAbility)
    {
        cookieCounterPerSecond += 0.1
        numberOfCookiesPerSecond.innerHTML = "Per Second " + cookieCounterPerSecond.toFixed(1);
        cookieCounter -= buyingAbility;
        numberOfCookies.innerHTML = Math.floor(cookieCounter) + " Cookies";
        
        // setting the timer to add a cookie

        setInterval(function() {
            cookieCounter += cookieCounterPerSecond;
            numberOfCookiesPerSecond.innerHTML = "Per Second " + cookieCounterPerSecond.toFixed(1);
            numberOfCookies.innerHTML = Math.floor(cookieCounter) + " Cookies";

        // 1000 means 1 second in milliseconds
        },1000);

        //Condition to disable upgrades if not enough cookies
        if(cookieCounter >= buyingAbility)
            {
                pointerImg.src = "Pointer.png";
                pointerImg.style.pointerEvents = "auto";
               
            }
            else{
                pointerImg.src = "PointerOff.png";
                pointerImg.style.pointerEvents = "none";
                
            
            }

        // increases the price to purchase an upgrade
        buyingAbility += 10;
        

        // caption: current price of the upgrade
        pointerValue.innerHTML = "Worth: " + buyingAbility + " Cookies";
        
        //showing all the upgrades purchased so far
        let newFig = document.createElement("figure");
        let newImg = document.createElement("img")
        
        let newcaption = document.createElement("figcaption");
        newcaption.innerHTML = cookieCounterPerSecond.toFixed(1) + " Cookie/Sec";
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
   numberOfCookies.innerHTML = Math.floor(cookieCounter) + " Cookies";
   
   //Condition to disable upgrades if not enough cookies
   if(cookieCounter >= buyingAbility)
   {
       pointerImg.src = "Pointer.png";
       pointerImg.style.pointerEvents = "auto";
       
   }
   else{
       pointerImg.src = "PointerOff.png";
       pointerImg.style.pointerEvents = "none";
       
   }
   
}

//Resst the log page
resetLogButton.onclick = resetLog;

function resetLog(){

    log.innerHTML = " ";
}

// Adds events for any click on cookie

document.getElementById("cookieImg").addEventListener("click", addLog);

function addLog() {
    let line = document.createElement("li");
    log.appendChild(line);
    var d = new Date();
    d = d.toUTCString();
    line.innerHTML = "Cookie Clicked - 1 Cookie added on: " + "<span style = 'color:red;'>" + d;
}

// Adds events for any click on upgrades
document.getElementById("pointerImg").addEventListener("click", addLog2);

    function addLog2() {
        let line = document.createElement("li");
        log.appendChild(line);
        var d = new Date();
        d = d.toUTCString();
        line.innerHTML = "Upgrade Purchased on: " + "<span style = 'color:red;'>" + d ;
    }
