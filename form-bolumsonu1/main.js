let userFromDOM = document.querySelector("#userForm")
userFromDOM.addEventListener("submit",formHandler)

const alertFunction = (baslik, mesaj, className="warning") =>`
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${baslik}</strong> ${mesaj} 
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div>`

let alertDOM = document.querySelector("#alert")

function formHandler(event){
    event.preventDefault()
    const USER_NAME_DOM = document.querySelector("#username")
    const SCORE_DOM = document.querySelector("#score")
    if(USER_NAME_DOM.value && SCORE_DOM.value){
        addItem(USER_NAME_DOM.value, SCORE_DOM.value)
        USER_NAME_DOM.value = ""
        SCORE_DOM.value = ""
    }else{
        alertDOM.innerHTML = alertFunction(
            "Başlık bilgisi",
            "Hatalı veya eksik bilgi girdiniz"
        )
    }
}

let userListDOM = document.querySelector("#userList")

function addItem(userName, score) {
    // Burada ul tagının içine li tagı oluşturduk
    let liDOM = document.createElement("li")
    liDOM.innerHTML = `${userName} 
    <span class="badge bg-primary rounded-pill">${score}</span>`
    liDOM.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center")
    userListDOM.append(liDOM)
}