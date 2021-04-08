var settings = {
    "url": "https://gorest.co.in/public-api/users/",
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {

   
    console.log(response);
    response.data.forEach(data => {

        console.log(data['name']);

       
        $(".wrapper").prepend("<div class='box'>"+data['name']+'<form class="emailform" onsubmit=sendemail("'+data['email']+'")><p>Start Video call by sending link to user email</p><p><input class="email" type="email" id='+data['email']+' value='+data['email']+'></p>'+
        '<input type="submit" class="sendemail" value="Send Email"  /></form/>'+ '</div>');
        
    });
  
});



function sendemail(emailid)
{ 
  debugger;
  var email = document.getElementById(emailid);
  alert(email.value);
  

  if(email.value == "")

    {
      debugger
        document.getElementsByClassName("email").innerHTML = "Email is required";
        email.style.border = " solid #f39c12";
        flag = 0;
    }
    else
    {
        if(IsEMAILVALID())
        {
            document.getElementsByClassName("email").innerHTML = "";
            flag = 1;
        } 
        else
        {
            document.getElementsByClassName("email").innerHTML = "Invalid Email Address";
            
            flag = 0;
        }
        
        
    }  
  }


function IsEMAILVALID() {
  alert("email.com")

  var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);

  if (pattern.test($("#email").val())) {
      return true;
      
     
  } else {
     
      return false;
  }

}
  
  
  