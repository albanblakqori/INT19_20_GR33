function validateForm()
{  var text;
    var error_message = document.getElementById("error");

    error_message.style.padding = " 20px";

    var name  = document.getElementById("fname").value;
    if(name.length <3){
       document.getElementById("fname").style.border =  "1px solid red"; 
        text = "Please Enter valid Name";
        error_message.innerHTML = text;
        return false;
    } 
    
    var last_name  = document.getElementById("lname").value;
    if(last_name <3){
       document.getElementById("lname").style.border =  "1px solid red" ;
       text = "Please enter valid Last Name";
       error_message.innerHTML = text;
       return false; 
        

    }

    var emailx = document.getElementById("email").value;

    if( emailx.length<6 || emailx.indexOf("@") == -1){
        document.getElementById("email").style.border = "1px solid red";
        text = "Please enter valid Email";
        error_message.innerHTML = text; 
       
        return false;


    }

   var number = document.getElementById("number").value; 

    if(isNaN(number) || number.length < 9){

        document.getElementById("number").style.border = "1px solid red";
        text = "Please enter valid number";
        error_message.innerHTML = text;
        return false;
    }

    var tarea = document.getElementById("subject").value;
    if(tarea.length < 50){
        document.getElementById("subject").style.border = "1px solid red";
        
        text= "Please enter more than 50 characters";
        error_message.innerHTML = text;
        return false;
    }

}