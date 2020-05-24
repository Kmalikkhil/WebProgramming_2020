
let AddLine = document.getElementById("AddLine");
let DeleteAll = document.getElementById("Delete");
let List1 = document.getElementById("List1");
let ListTimer = document.getElementById("ListTimer");

// function to play sad sound for uncomplete task
function sadsound() {
  let audio = document.createElement("audio");
  audio.src = "sad.mp3";
  audio.addEventListener("ended", function () {
    //document.removeChild(this);
  }, false);
  audio.play();
}


// function to play happy sound for completed tast
function happysound() {
  let audio = document.createElement("audio");
  audio.src = "happy.mp3";
  audio.addEventListener("ended", function () {
    //document.removeChild(this);
  }, false);
  audio.play();
}



function Add_Line() {

  //Disable Add button
  AddLine.disabled = true;
  AddLine.innerText = "Set Task Timer";

  let ListItem = document.createElement("div");


  let CheckBox = document.createElement("input");
  CheckBox.setAttribute("type", "checkbox");

  let a = document.createElement("a");
  a.href = "#";
  a.innerHTML = '<i class="fas fa-trash-alt"></i>';

  let settimerbutton = document.createElement("button");
  settimerbutton.innerText = "Set Timer for the Task";


  ListItem.appendChild(CheckBox);
  ListItem.appendChild(document.createTextNode("  " + InputBox.value));
  ListItem.appendChild(a);



  // Clearing the text box
  document.getElementById("InputBox").value = "";

  //adding textnode in new line

  let br = document.createElement("br");
  ListItem.appendChild(br);

  //Adding condition to insert list item in different lists
  List1.appendChild(ListItem);
  ListTimer.appendChild(settimerbutton);



  // Delete All button function
  DeleteAll.onclick = function Delete_All() {
    List1.innerHTML = "";
    ListTimer.innerText = " ";

  }

  document.getElementById("InputBox").focus();

  // Removing list item with bin icon
  a.onclick = function () {
    a.parentElement.remove();
    ListTimer.removeChild(settimerbutton);
    AddLine.innerText = "Add";
    AddLine.disabled = false;

  }

  // Making a list completed
  CheckBox.addEventListener("change", function () {
    if (this.checked) {

      a.parentElement.remove();
      ListTimer.removeChild(settimerbutton);
      happysound();
      AddLine.innerText = "Add";
      AddLine.disabled = false;

    }

  });

  settimerbutton.onclick = function () {

    // Prompt user to add the timer for the task
    let TimeInput = prompt("Please provide Countdown Timer for the task in Seconds");
    let TimeInput1 = parseInt(TimeInput);


    // enable add button to add more tasks
    AddLine.disabled = false;
    AddLine.innerText = "Add";

    // Set the date we're counting down to
    let timeNow = new Date(),
      expectedTimerCount = new Date(timeNow);

    //set the timer count
    expectedTimerCount.setSeconds(timeNow.getSeconds() + TimeInput1);

    // Update the count down every 1 second
    let x = setInterval(function () {

      // Get today's date and times
      let now = new Date();

      // Find the distance between now and the count down date
      let distance = expectedTimerCount - now;

      // Time calculations for minutes and seconds
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      settimerbutton.innerHTML = minutes + "m " + seconds + "s ";

      // If the count down is over, write some text 
      /*
      if (distance < 0) {
    
            if(CheckBox.checked){
                   // document.getElementById("ListTimer").innerHTML = "EXPIRED";
                   clearInterval(x);
                   settimerbutton.innerHTML = "Task Completed";
                   settimerbutton.style.background = "green";
                   AddLine.disabled = true;
                    
            
            }
    
            else {
                    
                    clearInterval(x);
                    a.parentElement.remove();
                    ListTimer.removeChild(settimerbutton);
    
    
            }
    
        
      }
    
      */


      if (distance < 0) {

        clearInterval(x);
        settimerbutton.innerHTML = "Task Not Completed - Click HERE to reset timer!";
        settimerbutton.style.background = "red";
        AddLine.disabled = true;
        sadsound();


      }

    }, 1000);
  }

}

AddLine.onclick = Add_Line;

