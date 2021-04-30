function welcome()
{
    var name=document.getElementById("u_name").value;
    var pass=document.getElementById("pwd").value;
    var pwdf='[A-Za-z0-9]';
    var s,f=0;
    if(name.length===0)
    {
    s="Name cannot be empty";
    f=1;
    }
    else if(pass.match(pwdf))
    s="Hey, "+name+"! Welcome Back";
    else
    {
        f=1;
    } s="Password can only include letters and alphabets";
  if(f===1)
  {
  alert("Please enter correct username/Password");
  window.location.href = "login.html";
  }
  else
  {
  window.location.href="home.html";
  //document.getElementById("greet").innerHTML=s;
  
  } //window.location.href="home.html"+s;
    //else
   // document.getElementById("hello").innerHTML=s;
   // window.location.href="home.html"+s;

}
function register()
{
    var name=document.getElementById("username").value;
    var emailid=document.getElementById("emailId").value;
    var password1=document.getElementById("pass1").value;
    var password2=document.getElementById("pass2").value;
    var mailverify = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    var flag=1;  

    if(name=="")
    {
        alert("Username cannot be empty!");
        flag=0;
    }
    else if(!mailverify.test(emailid))
    {
        alert("Invalid Email Id");
        flag=0;
            }
    else if(password1!=password2){
        alert("Passwords didn't match");
        flag=0;
    }
    else {
    alert("Registered successfully");
    
    }
    if(flag==0)
    {
        window.location.href = "register.html";
    }
    else
    window.location.href = "home.html";

}
function image()
{
  var s=document.getElementById("source").value;
  var d=document.getElementById("destn").value;
  if(s==="Point 1")
  document.getElementById("x").src="C:\Users\sbhat\Downloads\map1.JPG";
  else if(s===2)
  document.getElementById("x").src="map2.jpg";
  else if(s===3)
  document.getElementById("x").src="map3.jpg";
  else if(s===4)
  document.getElementById("x").src="map4.jpg";
}