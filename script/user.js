var settings = {
    "url": "https://gorest.co.in/public-api/users/",
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {

    debugger;
    console.log(response);
    response.data.forEach(data => {

        console.log(data['name']);

       
        $(".wrapper").prepend("<div class='box'>"+data['name']+'<p>'+data['email']+'</p> </div>');
        
    });
  
});
  
  
  
  