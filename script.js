const products = {
    "Ficha": { price: 2.00, img: 'none' },
    "Palheiro solto": {price:2.00,img:'palheiro.png'},
    "Palheiro Caixa": {price:28.00,img:'palheiro.png'},
    "Antártica Boa Lata": { price: 4.50, img: 'antart.boal.png' },
    "Amstel Lata 350 ML": { price: 4.50, img: 'amstel.png' },
    "império Lata 350ML": { price: 4.50, img: 'imperiolata.png' },
    "Budweiser Lata 350ML": { price: 6.00, img: 'budwieser.png' },
    "Antártica GF 300ML": { price: 4.00, img: 'antar.300ml.png' },
    "Heineken LT": { price: 6.50, img: 'heinekenLT.png' },
    "Heineken LN": { price: 8.00, img: 'heinekenLN.png' },
    "Skol GF 300 ML": { price: 4.00, img: 'skolGF300ml.png' },
    "Heineken zero": { price: 6.50, img: 'heineken0.png' },
    "Corona": { price: 9.00, img: 'corona.png' },
    "Corote": {price:3.50,img:'corote.png'},
    "Coca lata": { price: 5.00, img: 'coca-lata.png' },
    "Guaraná lata": { price: 5.00, img: 'guarana-lata.png' },
    "Água": { price: 2.50, img: 'agua.png' },
    "Água com gás": { price: 3.50, img: 'aguacgas.png' },
    "Smirnoff ice": { price: 10.00, img: 'smirnofICE.png' },
    "51 ice": { price: 7.50, img: '51ice.png' },
    "Energético BALLY 2 L.": { price: 15.00, img: 'e.bally.png' },
    "Energético Furioso 2 L": { price: 15.00, img: 'energ.furious.png' },
    "Red Bull LT 255ML": { price: 12.00, img: 'redBULLlt.png' },
    "Whisk. Red label 1 L.": { price: 110.00, img: 'w.redl.1l.png' },
    "Whisk. Red label 7 mL.": { price: 90.00, img: 'w.redl.700ml.png' },
    "Whisk. Jack Daniels": { price: 159.90, img: 'w.jackd.png' },
    "wh.cavalo branco": { price: 100.00, img: 'w.cav.branco.png' },
    "Whisk. Ballantines": { price: 110.00, img: 'w.balantines.png' },
    "Whis. Passport h.": { price: 60.00, img: 'w.pasporth.png' },
    "Whisk. Gold Label": { price: 299.00, img: 'w.goldl.png' },
    "Whisk. Chivas": { price: 169.00, img: 'w.chivas.png' },
    "Gin intencion": { price: 30.00, img: 'ginintenc.png' },
    "Combo Red label": { price: 140.00, img: 'none' },
    "Combo cav. branco": { price: 130.00, img: 'none' },
    "Combo Gin intencion": { price: 65.00, img: 'none' },
};


const prodDIV = document.getElementById('prod-div');
const mainDiv = document.getElementById('main-div');
const produtosInput = document.getElementById('produto');
const datalistProdutos = document.getElementById('produtos');
const searchButton = document.getElementById('serch-pd');
const productDiv = document.getElementById('product-search-div');
const productText = document.getElementById('product');
const priceText = document.getElementById('price');

for(const item in products){
    const prodITMdiv = document.createElement('div')
  const itm = document.createElement('p')
  const itmprice = document.createElement('p')
  const itmIMG= document.createElement('img')
  
  prodITMdiv.addEventListener('click',()=>{
    produtosInput.value = itm.textContent
    searchButton.click()
  })
  

  prodITMdiv.id ='product-div'
  itm.id ='prod-name'
  itmprice.id ='prod-price'
  
  let preco = JSON.stringify(products[item].price)
  let hpoints = preco.includes(".")
  if(hpoints){
    itm.innerHTML = item
    itmprice.innerHTML = 'R$ ' + preco.replace('.',',')
  }else{
    itm.innerHTML = item.replace('Cerveja','')
    itmprice.innerHTML = 'R$ ' + preco + ',00'
  }
  if(products[item].img == 'none'){
    itmIMG.style.content = 'url(not-finded.png)'
   
    itmIMG.style.width = 75 +'%'
  }else{
    itmIMG.style.content = `url(${products[item].img})`
  }
  prodITMdiv.append(itmIMG)
  prodITMdiv.append(itm)
  prodITMdiv.append(itmprice)
  prodDIV.append(prodITMdiv)
  if(itmprice.value == ''){
    itmprice.parentNode.remove()
  }
}

searchButton.addEventListener('click',()=>{
    let iptValue = produtosInput.value
    if(iptValue == ''){
        alert('por favor digite algo no input')
    }else if (iptValue != ''){
         productText.innerHTML = iptValue
         priceText.innerHTML ='<i class="fa-solid fa-brazilian-real-sign"></i>: ' +products[iptValue].price
        }
})

const isSelled =document.getElementById('is-selled')
const totalSell= document.getElementById('total-sell')


let gettedsells = JSON.parse(localStorage.getItem("sells")) || 0
localStorage.setItem('sells',JSON.stringify({total:gettedsells.total == null ? 0 : gettedsells.total,tdnum:0,}))

totalSell.innerHTML = 'Venda total: $' +JSON.parse(localStorage.getItem('sells')).total

isSelled.addEventListener('click',()=>{
    let totalfromls =JSON.parse(localStorage.getItem('sells'))
    totalfromls.total = totalfromls.total + products[produtosInput.value].price
    localStorage.setItem('sells',JSON.stringify(totalfromls))
    totalSell.innerHTML='venda total: $' + totalfromls.total
})

const clearTotalbtn = document.getElementById('clear-total')
clearTotalbtn.addEventListener('click',()=>{
    const resp = confirm('quer mesmo zerar o total ?')
    if(resp == true){
        let lsitmTOTAL = JSON.parse(localStorage.getItem('sells'))
        lsitmTOTAL.total = 0
        localStorage.setItem('sells',JSON.stringify(lsitmTOTAL))
        totalSell.innerHTML = 'venda total: $0'
    }else{
        console.log('nao zerou')
    }
    
})