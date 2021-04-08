
function validate()
{

    var email = $("#email").val();
    var pass = $("#password").val();
    flag = 0;
   
    
    
   
    if(email.value == "")
    {
        document.getElementById("email-msg").innerHTML = "Email is required";
        email.style.border = " solid #f39c12";
        flag = 0;
    }
    else
    {   
        if(IsEMAILVALID())
        {
            document.getElementById("email-msg").innerHTML = "";
            flag = 1;
        } 
        
        else
        {
            document.getElementById("email-msg").innerHTML = "Invalid Email Address";
            //$("#email").style.border = " solid #f39c12";
            flag = 0;
            return false;
        }
        
        
    }  

    if(pass.value == "")
    {
        document.getElementById("password-msg").innerHTML = "Password is required";
        document.getElementById("password").style.border = " solid #f39c12";
        flag = 0;
    }
    else
    {
        document.getElementById("password-msg").innerHTML = "";
        flag = 1;
    }
    debugger
    if (flag == 0)
    {
        return false;
    }
    else
    {
        return getStore();
    }

    

   
} ;

function getStore(){
	
    var inputEmail= $("#email").val();
    var inputPassword= $("#password").val();
   debugger;
  var retrievedObject = localStorage.getItem(inputEmail);
  var obj = JSON.parse(retrievedObject);
  alert(obj);
  if(obj!=null)
    {
    if(obj.email == inputEmail && obj.password == inputPassword)
    { 
        
        return true;
    }
    else
    {   
        document.getElementById("email-msg").innerHTML = "Wrong credentials";
        alert("Wrong credentials");
        return false;
    }
    }
    else
    {
        document.getElementById("email-msg").innerHTML = "Wrong credentials";
        alert("Wrong credentials");
        return false;
    }
}



  function IsEMAILVALID() {


    var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);

    if (pattern.test($("#email").val())) {
        return true;
        
       
    } else {
       
        return false;
    }

}