
function validate()
{
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    flag = 0;
   
    
    
   
    if(fname.value == "")
    {
        document.getElementById("fname-msg").innerHTML = "User Name is required";
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
        document.getElementById("lname-msg").innerHTML = "Password is required";
        lname.style.border = " solid #f39c12";
        flag = 0;
    }
    else
    {
        document.getElementById("lname-msg").innerHTML = "";
        flag = 1;
    }
    if (flag == 0)
    {
        return false;
    }

   
} ;


