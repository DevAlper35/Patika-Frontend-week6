let counter = localStorage.getItem("counter") ? Number(localStorage.getItem("counter")): 0

// idlere göre değerleri eşitleme
let counterDOM  = document.querySelector("#counter")
let arttirDOM = document.querySelector("#arttir")
let azaltDOM = document.querySelector("#azalt")

// #counter id tagın textine counterdaki 0 değerini verdik
counterDOM.innerHTML = counter

// ARTTIR butonuna tıklanınca
arttirDOM.addEventListener("click", tiklamaEtkisi)
azaltDOM.addEventListener("click", tiklamaEtkisi)

function tiklamaEtkisi(){
    console.log(this.id)

    if(this.id == "arttir"){
        counter += 1
    }else if(this.id == "azalt"){
        counter -= 1
    }
    localStorage.setItem("counter", counter)
    counterDOM.innerHTML = counter
}