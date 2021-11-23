
 $(document).ready(function(){
    
  $("#login").click(function(){

if ($("#loginusername").val()=='admin@gmail.com' && $("#loginpassword").val()=='password')
                            {
             
                                window.location.href = "about.html";
                                return false;
                            }


                            else
                            {
                                alert("enter the credentials");
                            }

                            });
  });