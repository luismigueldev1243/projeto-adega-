const vendasDiv = document.querySelector('.sells')
const addSell = document.getElementById('add-sell')

let lsARRAY = []

let toDOnum = 0

for (let i = 1;i < localStorage.length;i++){
    if(!localStorage.getItem('venda'+i)){

    }else{
    lsARRAY.push(localStorage.key(i))
    const daySell = document.createElement('div')
    const btnrem = document.createElement('button')
    const day = document.createElement('p')
    const rsimbol = document.createElement('p')
    const price = document.createElement('p')
    
    daySell.id = 'venda' + i
    btnrem.id = 'removeBTN'
    btnrem.innerHTML= "X"
    day.id = 'day'
    rsimbol.id ='real-simbol'
    rsimbol.innerHTML = 'R$'
    price.id = 'sell-by-day'
    
    let itemFromLocal = JSON.parse(localStorage.getItem(daySell.id)) 
    day.innerHTML = itemFromLocal.dia = null ? '':itemFromLocal['dia']
    price.innerHTML = itemFromLocal.preco || ''
    

    day.contentEditable = 'true'
    price.contentEditable = 'true'
     
    day.addEventListener('focusout',()=>{
        let itemFromLocal = JSON.parse(localStorage.getItem(daySell.id))
        itemFromLocal.dia = day.textContent
        localStorage.setItem(day.parentNode.id , JSON.stringify(itemFromLocal))
    })
    price.addEventListener('focusout',()=>{
        let itemFromLocal = JSON.parse(localStorage.getItem(daySell.id))
        itemFromLocal.preco = price.textContent
        localStorage.setItem(price.parentNode.id , JSON.stringify(itemFromLocal))
    })
     
    daySell.appendChild(btnrem)
    daySell.append(day)
    daySell.append(rsimbol)
    daySell.append(price)
    vendasDiv.append(daySell)

    let gettedTDnum = JSON.parse(localStorage.getItem('sells'))
    gettedTDnum.tdnum = i
    gettedTDnum.total = gettedTDnum.total
    toDOnum =gettedTDnum.tdnum
    localStorage.setItem('sells',JSON.stringify({total:gettedTDnum.total,tdnum:gettedTDnum.tdnum,}))
}
}



addSell.addEventListener('click',()=>{
    toDOnum++
    lsARRAY.push('venda' + toDOnum)
    const daySell = document.createElement('div')
    const btnrem = document.createElement('button')
    const day = document.createElement('p')
    const rsimbol = document.createElement('p')
    const price = document.createElement('p')
    
    daySell.id = 'venda' + toDOnum
    btnrem.id = 'removeBTN'
    btnrem.innerHTML= "X" 
    day.id = 'day'
    rsimbol.id ='real-simbol'
    rsimbol.innerHTML = 'R$'
    price.id = 'sell-by-day'
    

    day.contentEditable = 'true'
    price.contentEditable = 'true'

    day.addEventListener('focusout',()=>{
        let itemFromLocal = JSON.parse(localStorage.getItem(daySell.id))
        itemFromLocal.dia = day.textContent
        localStorage.setItem(day.parentNode.id , JSON.stringify(itemFromLocal))
    })
    price.addEventListener('focusout',()=>{
        let itemFromLocal = JSON.parse(localStorage.getItem(daySell.id))
        itemFromLocal.preco = price.textContent
        localStorage.setItem(price.parentNode.id , JSON.stringify(itemFromLocal))
    })

    daySell.appendChild(day)
    daySell.append(rsimbol)
    daySell.appendChild(price)
    daySell.appendChild(btnrem)
    vendasDiv.appendChild(daySell)

     let obj = {
        dia:day.textContent,
        preco:price.textContent
     }

    localStorage.setItem(daySell.id,JSON.stringify(obj))
})

document.addEventListener('click', (e) => {
    if (e.target.id === 'removeBTN') {

      e.target.parentNode.remove();

      localStorage.removeItem(e.target.parentNode.id);

      const chaves = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('venda')) {
          chaves.push(key);
        }
      }
  
      
      chaves.sort((a, b) => {
        const numA = parseInt(a.replace("venda", ""), 10);
        const numB = parseInt(b.replace("venda", ""), 10);
        return numA - numB;
      });
      chaves.forEach((key, index) => {
        const natual = parseInt(key.replace("venda", ""), 10);
        const nnovo = index + 1; 
  
        if (natual!== nnovo) {
          const itm = JSON.parse(localStorage.getItem(key));
          localStorage.removeItem(key);
          localStorage.setItem(`venda${nnovo}`, JSON.stringify(itm));
        }
      });
  
      
    }
  });
  