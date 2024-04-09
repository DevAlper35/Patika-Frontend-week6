let liste = document.getElementById("list")
// Yeni bir görev ekleme methodu
let i = 1;
function yeniGorev(){

    // Yeni bir öğe için bir li elementi oluştur
    let li = document.createElement("li");

    // Giriş kutusundaki değeri al
    let girilen = document.getElementById("task").value;

    // Giriş kutusunun boş olup olmadığını kontrol et
    if (girilen === "") 
    {
      // Boşsa, hata bildirimi göster
      $(".error").toast("show");
    } 
    
    else 
    {
      // Değilse, li elementine giriş değerini ekle
      li.textContent = girilen;
      li.id= `gorev${i}`
      i = i + 1
      // Li elementine bir span elementi ekle
      span = document.createElement("span");

      // Span elementine "close" sınıfı ve "x" metni ver
      span.className = "close";
      span.textContent = "x";

      // Li elementine span elementini ekle
      li.appendChild(span);

      // Listeye li elementini ekle
      liste.appendChild(li);

      // Başarı bildirimi göster
      $(".success").toast("show");

      // Giriş kutusunu temizle
      document.getElementById("task").value = "";
      
    }
}

let ekleBtn = document.querySelector("#liveToastBtn");

ekleBtn.addEventListener("click",(event) =>{
    yeniGorev()
})

liste.addEventListener("click", function(task)
  {
    if (task.target.tagName === "LI") 
    {
      task.target.classList.toggle("checked");
    }
  });



  
closeDOM = document.querySelector(`#gorev${i}`)

closeDOM.addEventListener("click",(event) =>
{
    
    console.log(`Silindi `,`gorev${i}`)
    /*let target = event.target;
    console.log(target)
    target.parentElement.remove();*/
})