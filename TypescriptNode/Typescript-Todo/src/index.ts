
let AddLine = document.getElementById("AddLine") as HTMLButtonElement | null;
let DeleteAll = document.getElementById("Delete") as HTMLButtonElement;
let List1 = document.getElementById("List1") as HTMLDivElement;
let List2 = document.getElementById("List2") as HTMLDivElement;
let List3 = document.getElementById("List3") as HTMLDivElement;
let List1Header = document.getElementById("List1Header");
let InputBox = document.getElementById("InputBox") as HTMLDataElement;

function Add_Line()
{
let sel = document.getElementById("TypesOfTask") as HTMLFormElement;

let ListItem = document.createElement("div");

let CheckBox = document.createElement("input") as HTMLInputElement;
CheckBox.setAttribute("type", "checkbox");

let a = document.createElement("a") as HTMLAnchorElement;
if(a ==null){
        alert('Null')
}
else{
a.href = "#";
a.innerHTML = '<i class="fas fa-trash-alt"></i>';

}
ListItem.appendChild(CheckBox);
ListItem.appendChild(document.createTextNode("  " + InputBox.value));
ListItem.appendChild(a);

// Clearing the text box
InputBox.value = "";

//adding textnode in new line

var br = document.createElement("br");
ListItem.appendChild(br);

//Adding condition to insert list item in different lists

if (sel.options[sel.selectedIndex].value === "Grocery"){
        List1.appendChild(ListItem);
}
else if (sel.options[sel.selectedIndex].value === "Electronics"){
        List2.appendChild(ListItem);
}
else {
        List3.appendChild(ListItem);
}

// Delete All button function
if (DeleteAll == null){
        alert ('No Button');
}
else{
DeleteAll.onclick = function Delete_All()
           {
           // We can use this code as well but i prefered the other one
           /* while (List1.hasChildNodes()) {      
            List1.removeChild(List1.lastChild);
            }
            */
           if (sel.options[sel.selectedIndex].value === "Grocery")
                {
                List1.innerHTML = "";
                }
                 else if (sel.options[sel.selectedIndex].value === "Electronics"){
                List2.innerHTML = "";
                }
                 else 
                {
                List3.innerHTML = "";
                }
            
           }

        }

           InputBox.focus(); 

// Removing list item with bin icon
a.onclick = function()
           {    
                if(a.parentElement ==null)
                {
                        alert('can not delete')
                }
                else{
                a.parentElement.remove();
                }
                  
           }

// Making a list completed
CheckBox.addEventListener("change", function() {

        if(this.checked){
                
                //this.parentNode.setAttribute("style");
                this.parentNode.style.textDecoration = "line-through";
                this.parentNode.style.color = "red";
                
                
        }
        else {
                this.parentNode.style.textDecoration = "none";
                this.parentNode.style.color = "black";
        }
        
});


}

if (AddLine ==null){
        alert ("No Button Found")
}
else{
AddLine.onclick = Add_Line;
}