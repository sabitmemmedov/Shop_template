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


let table = document.getElementById("table")
let Name = document.getElementById("name")
let Price = document.getElementById("price")
let form = document.getElementById("form")
let db

async function postData(e) {
    e.preventDefault()
    let data = {
        name: Name.value,
        price: Price.value,
    }
  await  axios.post(`https://6569b50bde53105b0dd78115.mockapi.io/adCart/`, data)
    form.reset()
    getData()
}
form.addEventListener("submit", postData)

function getData() {
    table.innerHTML = ""
    axios.get(`https://6569b50bde53105b0dd78115.mockapi.io/adCart`)
        .then(res => {
            db = res.data
            db.forEach(item => {
                let tr = document.createElement("tr")
                tr.innerHTML = `
                
                <tr>
                    <td><img src=${item.url} alt=""></td>
                    <td>Name: ${item.name}</td>
                    <td>Price:${item.price}</td>
                    <td>Id :${item.id}</td>
                    <td><button onclick="sil(${item.id})">SIl</button></td>
                </tr>

                `
                table.appendChild(tr)
            });
        })
}

window.onload =()=>{
    getData()
}

async function sil(id) {
  await  axios.delete(`https://6569b50bde53105b0dd78115.mockapi.io/adCart/${id}`)
    getData()
}


/////////////// 
let inp = document.getElementById("inp")
function getName() {
    table.innerHTML = ""
    axios.get(`https://6569b50bde53105b0dd78115.mockapi.io/adCart?name=${inp.value}`)
        .then(res => {
            db = res.data
            db.forEach(item => {
                let tr = document.createElement("tr")
                tr.innerHTML = `
                
                <tr>
                    <td><img src=${item.url} alt=""></td>
                    <td>Name: ${item.name}</td>
                    <td>Price:${item.price}</td>
                    <td>Id :${item.id}</td>
                    <td><button onclick="sil(${item.id})">SIl</button></td>
                </tr>

                `
                table.appendChild(tr)
            });
        })
}

document.getElementById("axtar").addEventListener("click",getName)

/////////sort


function getSort(){
    table.innerHTML = ""
    axios.get(`https://6569b50bde53105b0dd78115.mockapi.io/adCart`)
        .then(res => {
            db = res.data
            let sortedData = db.sort((a,b)=> a.name.localeCompare(b.name))
            sortedData.forEach(item => {
                let tr = document.createElement("tr")
                tr.innerHTML = `
                
                <tr>
                    <td><img src=${item.url} alt=""></td>
                    <td>Name: ${item.name}</td>
                    <td>Price:${item.price}</td>
                    <td>Id :${item.id}</td>
                    <td><button onclick="sil(${item.id})">SIl</button></td>
                </tr>

                `
                table.appendChild(tr)
            });
        })
}

document.getElementById("btnA").addEventListener("click",getSort)

function getSortt(){
    table.innerHTML = ""
    axios.get(`https://6569b50bde53105b0dd78115.mockapi.io/adCart`)
        .then(res => {
            db = res.data
            let sortedData = db.sort((a,b)=> b.name.localeCompare(a.name))
            sortedData.forEach(item => {
                let tr = document.createElement("tr")
                tr.innerHTML = `
                
                <tr>
                    <td><img src=${item.url} alt=""></td>
                    <td>Name: ${item.name}</td>
                    <td>Price:${item.price}</td>
                    <td>Id :${item.id}</td>
                    <td><button onclick="sil(${item.id})">SIl</button></td>
                </tr>

                `
                table.appendChild(tr)
            });
        })
}
document.getElementById("btnZ").addEventListener("click",getSortt)
document.getElementById("btnD").addEventListener("click",getData)
