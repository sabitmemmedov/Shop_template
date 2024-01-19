const mD = document.getElementById('menuDiv')
const btnn = document.getElementById('menuDivBtn')

btnn.addEventListener('click', function () {
  if (mD.style.display === 'none' || mD.style.display === '') {
    mD.style.display = 'flex'
  } else {
    mD.style.display = 'none'
  }
  console.log('dsa');
})
/////////////////////
let list = document.getElementById("list")
let db
function getData() {
  list.innerHTML = ""
  axios.get(`https://6569b50bde53105b0dd78115.mockapi.io/adCart`)
    .then(res => {
      db = res.data
      db.forEach(item => {
        let card = document.createElement("div")
        card.className = "cart"
        card.innerHTML = `
              
              <div class="imgDiv">
              <img src=${item.url} alt="">
              </div>
              <div class="textDiv">
              <h4>${item.name}</h4>
              <h2>$ ${item.price}</h2>
              <button onclick="adBasket(${item.id})">AD BASKET</button> <button
                  onclick="adWish(${item.id})">AD WISH</button>
              </div>

              `
        list.appendChild(card)
      });
    })
}

window.onload = ()=>{
  getData()
}


///////////// ad Basket


function adBasket(id){
  let cart =  JSON.parse(localStorage.getItem("basket"))||[]
  let itemMM = cart.find(item => item.id == id)
  if(itemMM){
    itemMM.count = (itemMM.count || 1) +1
  }
  else{
    let newItem =  db.find(item=>item.id ==id)
    newItem.count = 1
    cart.push(newItem)
  }
  localStorage.setItem("basket", JSON.stringify(cart))

}

function adWish(id){
  let cart =  JSON.parse(localStorage.getItem("wish"))||[]
  let itemMM = cart.find(item => item.id == id)
  if(itemMM){
    alert("Wish de Var artiq")
  }
  else{
    let newItem =  db.find(item=>item.id ==id)
    cart.push(newItem)
  }
  localStorage.setItem("wish", JSON.stringify(cart))
}