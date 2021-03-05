
function validate()
{
    debugger;
    
    
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
   
    var email = document.getElementById("email").value;
    var Password = document.getElementById("Password").value;
    var MOBILE = document.getElementById("MOBILE").value;
    var ConfirmPassport = document.getElementById("Password").value;
    flag = 0;
   
    
    
   
    if(fname == "")
    {
        document.getElementById("fname-msg").innerHTML = "FIRST NAME can not be blank";
        flag = 0;
    }
    else
    {
        document.getElementById("fname-msg").innerHTML = "";
        flag = 1;
        
    }

    if(lname == "")
    {
        document.getElementById("lname-msg").innerHTML = "LAST NAME can not be blank";
        flag = 0;
    }
    else
    {
        document.getElementById("lname-msg").innerHTML = "";
        flag = 1;
    }

    if(email == "")
    {
        document.getElementById("email-msg").innerHTML = "Email is compulsory";
        flag = 0;
    }
    else
    {
        document.getElementById("email-msg").innerHTML = "";
        flag = 1;
    }  

   
    if(MOBILE == "")
    {
        document.getElementById("MOBILE-msg").innerHTML = "Mandatory";
        flag = 0;
    }
    else
    {
        document.getElementById("MOBILE-msg").innerHTML = "";
        flag = 1;
        
   
    }

    if(Password == "")
    {
        document.getElementById("Password-msg").innerHTML = "Mandatory";
        flag = 0;
    }
    if(ConfirmPassport == "")
    {
        document.getElementById("c-password-msg").innerHTML = "Mandatory";
        flag = 0;
    }

    else
    {
        if(Password == ConfirmPassport)
        {
        document.getElementById("Password-msg").innerHTML = "";
        flag = 1;
        }
        else
        {
            document.getElementById("c-password").innerHTML = "Password Mismatch";
            flag = 0;
        }
        
    }
    if (flag == 0)
    {
        return false;
    }

    
   
} 

function IsEMAILVALID(email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (reg.test(email.value) == false) 
        {
            
            return false;
        }
       
        return true;

};

