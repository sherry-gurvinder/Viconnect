
function validate()
{
    
   
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
   
    var email = document.getElementById("email");
    var Password = document.getElementById("Password");
    var MOBILE = document.getElementById("MOBILE");
    var ConfirmPassport = document.getElementById("c-password");
    flag = 0;
    
    
    
   
    if(fname.value == "")
    {
        document.getElementById("fname-msg").innerHTML = "First Name is required";
        fname.style.border = " solid #f39c12";
        flag = 0;
    }
    else
    {
        document.getElementById("fname-msg").innerHTML = "";
        flag = 1;
        
    }

    if(lname.value == "")
    {
        document.getElementById("lname-msg").innerHTML = "LAST Name is required";
        lname.style.border = " solid #f39c12";
        flag = 0;
    }
    else
    {
        document.getElementById("lname-msg").innerHTML = "";
        flag = 1;
    }

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
            email.style.border = " solid #f39c12";
            flag = 0;
        }
        
        
    }  

   
    if(MOBILE.value == "")
    {
        document.getElementById("MOBILE-msg").innerHTML = "Mobile No. is Required";
        MOBILE.style.border = " solid #f39c12";
        flag = 0;
    }
    else
    {
        document.getElementById("MOBILE-msg").innerHTML = "";
        flag = 1;
        
   
    }

    if(Password.value == "")
    {
        document.getElementById("Password-msg").innerHTML = "Password is Required";
        Password.style.border = "solid #f39c12";
        flag = 0;
    }
    if(ConfirmPassport.value == "")
    {
        document.getElementById("c-password-msg").innerHTML = "Confirm Passport  is Required";
        ConfirmPassport.style.border = "solid #f39c12";
        flag = 0;
    }

    else
    {
        if(Password.value == ConfirmPassport.value)
        {
        document.getElementById("Password-msg").innerHTML = "";
        flag = 1;
        }
        else
        {
            document.getElementById("c-password").innerHTML = "Password Mismatch ";
            ConfirmPassport.style.border = "solid #f39c12";
            flag = 0;
        }
        
    }
   
    if (flag == 0)
    {
        return false;
    }
    else
    {
        if(store())
        {
        return true;
        }
        else
        {
        return false;
        }
    }
    
   
} 
function store(){
    debugger

    window.navigate("Login.html");
      

  
  
        //var inputUsername= $("#username").val();
       var inputEmail= $("#email").val();
       var inputPassword= $("#Password").val();
       
    var retrievedObject = localStorage.getItem(inputEmail);
    
    if(retrievedObject == null)
    {
        
       
       
       var obj =
       {
          //'username' : inputUsername,
          'email' : inputEmail,
          'password' : inputPassword
       };
       
       localStorage.setItem(inputEmail, JSON.stringify(obj));
       alert("Account has been created!")
       return true;
      
       }
       else{ alert("Email already Exist");}

       return false;
      }

function IsEMAILVALID() {
   

    var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);

    if (pattern.test($("#email").val())) {


        return true;
        
       
    } else {
       
        return false;
    }

}


