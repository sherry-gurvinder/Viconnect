var settings = {
    "url": "https://gorest.co.in/public-api/users/",
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {

   
    console.log(response);
    response.data.forEach(data => {

        console.log(data['name']);

       
        $(".wrapper").prepend("<div class='box'>"+data['name']+'<form class="emailform" )><p><h4>Start Video call by sending link to user email</h4></p><p><input class="email" style="color:black" type="email" id='+data['email']+' value='+data['email']+'></p>'+
        '<input type="button" class="sendemail" value="Send Email" onclick=sendemail("'+data['email']+'")  /></form/>'+ '</div>');
        
    });
  
});



function sendemail(emailid)
{ 
  debugger;
  var email = document.getElementById(emailid);
  email = email.value;
  alert(email);
  

  if(email.value == "")

    {
      debugger
        document.getElementsByClassName("email").innerHTML = "Email is required";
        email.style.border = " solid #f39c12";
        flag = 0;
    }
    else
    {
        if(IsEMAILVALID(email))
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

    if(flag==1)
    {
       alert("sendemail")
       Email.send({
        Host: "smtp.gmail.com",
        Username: "viconnect123@gmail.com",
        Password: "Lambton@321",
        To: email,
        From: "viconnect123@gmail.com",
        Subject: "Sending Email using javascript",
        Body: $('#emailTemplate').html(),
      })
        .then(function (message) {
          window.location.href = "https://sherry-gurvinder.github.io/videocallstart/";
        alert("mail sent successfully")
        });
      
    }
  }


function IsEMAILVALID(email) {
  alert("email.com")

  var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);

  if (pattern.test(email)) {
      return true;
      
     
  } else {
     
      return false;
  }

}
  
  
  
