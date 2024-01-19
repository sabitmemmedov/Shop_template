let list = document.getElementById("list")
let db
function getData() {
  list.innerHTML = ""
    let basket = JSON.parse(localStorage.getItem("basket")) || []
    basket.forEach((item,id) => {
    let card = document.createElement("div")
    card.className = "cart"
    card.innerHTML = `
          
          <div class="imgDiv">
          <img src=${item.url} alt="">
          </div>
          <div class="textDiv">
          <h4>${item.name}</h4>
          <h4>count: ${item.count}</h4>
          <h2>$ ${item.price}</h2>
          <button onclick="sil(${id})">Sil</button> 
          </div>

          `
    list.appendChild(card)
  });
}

window.onload = ()=>{
  getData()
}



function sil(id){
    let cart  = JSON.parse(localStorage.getItem("basket"))|| []
    cart.splice(id,1)
    localStorage.setItem("basket",JSON.stringify(cart))
    getData()
}