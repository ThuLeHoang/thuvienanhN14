$(document).ready(function(){
    $("#registerModal").on("hidden.bs.modal", function () {
         $('#username').val("");
         $('#password').val("");
         $('#retypepassword').val("");
         $("#message").removeClass();
        var d = document.getElementById("message");
        d.innerHTML= "";

    });
   });
   $(document).ready(function(){
       $(".btn-success").click(function(e) {
        e.preventDefault();
        console.log("something run");
        var username = $("#username").val();
        var password = $("#password").val();
        var retypepassword = $("#retypepassword").val();
        var d = document.getElementById("message");
        if(username == "" || password == "" ||  retypepassword == ""){
            d.className += "alert alert-danger";
            d.innerHTML = "Please complete all of fields!";
        }else if(password != retypepassword){
            d.className += "alert alert-danger";
            d.innerHTML = "Retyping retype password fields";
        }else{
            $.ajax({    
            type    : 'POST',
            url     : '/user/register',
            data: {username: username, password: password, retypepassword: retypepassword },
            success : function(response) {
            console.log(response.notify);
            if(response.message_success){
                 // var dom = document.getElementById("message");
                 // dom.className += "alert alert-danger";
                 // dom.innerHTML = "Đăng ký thành công, vui lòng đăng nhập!";
                
                var dom = document.getElementById("message");
                 var login = document.getElementById("loginform");
                 var timer;
                 dom.className += "alert alert-success";
                 dom.innerHTML = "Register successfully!";

                 var sec = 5;
                   timer = setInterval(function() { 
                   if(sec == 5) login.className +="alert alert-success";
                   login.innerHTML = "Redirect to login page in  " + sec + " s!";
                   sec--;
                   if(sec == 0){
                        clearInterval(timer);
                        location.href = "user/login";
                   } 
                },1000);
                 

            }
            if(response.message_failure){
                 var dom = document.getElementById("message");
                 dom.className += "alert alert-danger";
                 dom.innerHTML = "This name account has been used!";
            }
            //location.href = "http://localhost:3000/user/";
            }
        });

        }    
    });
    });