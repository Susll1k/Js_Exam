
let btn=document.querySelector('.btn')


btn.addEventListener("click", function(event) {
    event.preventDefault()
  
    let username = document.querySelector(".username").value
    let password = document.querySelector(".password").value
  
    let errorMessage = document.querySelector(".error-message")
  
    if(username === "admin" && password === "12345678"){
      window.location.href = "home.html" 
    } 
    
    else {
      if(username !== "admin"){
        errorMessage.textContent = "Неверный логин"
      } else if(password.length < 8){
        errorMessage.textContent = "Пароль должен быть не менее 8 символов"
      } else{
        errorMessage.textContent = "Неверный пароль"
      }
    }

})
  