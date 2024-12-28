let form = document.getElementById("form")

form.addEventListener("submit", function(){
    event.preventDefault()
    let email = form.email.value;
    let password = form.password.value;

    console.log(email, password)

    
  if(email=="empher@gmail.com" && password=="empher@123"){
    alert( "User Not Logged In.")
    window.location.href = "admin.html"
  }

})