const products = {
    "Cerveja Antártica Boa Lata": 4.50,
    "Cerveja Amstel Lata 350 ML": 4.50,
    "Cerveja império Lata 350ML": 4.50,
    "Cerveja Budweiser Lata 350ML": 6.00,
    "Cerveja Antártica GF 300ML": 4.00,
    "Cerveja Heineken LT": 6.50,
    "Cerveja Heineken LN": 8.00,
    "Cerveja Skol GF 300 ML": 4.00,
    "Heineken zero": 6.50,
    "Cerveja Corona": 9.00,
    "Coca lata": 5.00,
    "Guaraná lata": 5.00,
    "Água": 2.50,
    "Água com gás": 3.50,
    "Smirnoff ice": 10.00,
    "51 ice": 7.50,
    "Energético BALLY 2 litros": 15.00,
    "Energético Furioso 2 litros": 15.00,
    "Red Bull LT 255ML": 12.00,
    "Whsiky Red label 1 litro": 110.00,
    "Whisky Red label 700 ML": 90.00,
    "Whisky Jack Daniels": 159.90,
    "Whisky cavalo branco": 100.00,
    "Whisky Ballantines": 110.00,
    "Whisky Passport honey": 60.00,
    "Whisky Gold Label": 299.00,
    "Whisky Chivas": 169.00,
    "Gin intencion": 30.00,
    "Combo Red label": 140.00,
    "Combo cavalo branco": 130.00,
    "Combo Gin intencion": 65.00
};


const mainDiv = document.getElementById('main-div');
const produtosInput = document.getElementById('produto');
const datalistProdutos = document.getElementById('produtos');
const searchButton = document.getElementById('serch-pd');
const productDiv = document.getElementById('product-div');
const productText = document.getElementById('product');
const priceText = document.getElementById('price');


searchButton.addEventListener('click',()=>{
    let iptValue = produtosInput.value
    if(iptValue == ''){
        alert('por favor digite algo no input')
    }else if (iptValue != ''){
         productText.innerHTML = iptValue
         priceText.innerHTML ='<i class="fa-solid fa-brazilian-real-sign"></i>: ' +products[iptValue]
        }
})

const isSelled =document.getElementById('is-selled')
const totalSell= document.getElementById('total-sell')


let gettedsells = JSON.parse(localStorage.getItem("sells")) || 0
localStorage.setItem('sells',JSON.stringify({total:gettedsells.total == null ? 0 : gettedsells.total,tdnum:0,}))

totalSell.innerHTML = 'Venda total: $' +JSON.parse(localStorage.getItem('sells')).total

isSelled.addEventListener('click',()=>{
    let totalfromls =JSON.parse(localStorage.getItem('sells'))
    totalfromls.total = totalfromls.total + products[produtosInput.value]
    localStorage.setItem('sells',JSON.stringify(totalfromls))
    totalSell.innerHTML='venda total: $' + totalfromls.total
})

const clearTotalbtn = document.getElementById('clear-total')
clearTotalbtn.addEventListener('click',()=>{
    let lsitmTOTAL = JSON.parse(localStorage.getItem('sells'))
    lsitmTOTAL.total = 0
    localStorage.setItem('sells',JSON.stringify(lsitmTOTAL))
    totalSell.innerHTML = 'venda total: $0' 
})