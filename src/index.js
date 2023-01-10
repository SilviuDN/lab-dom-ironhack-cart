// ITERATION 1

function updateSubtotal(product) {

  let price = product.querySelector('.price span').innerText
  const numberNode = product.querySelector('.quantity input')
  let number = numberNode.value

  let subTotal = price * number

  const subTotalNode = product.querySelector('.subtotal span')
  subTotalNode.innerText = subTotal

  return subTotal



}

function calculateAll() {
  
  const allProducts = document.querySelectorAll('.product')
  let total = 0

  allProducts.forEach( el => {
    total += updateSubtotal(el)
  })

  const totalValue = document.getElementById('total-value')
  totalValue.innerText = total




  console.log(allProducts)



  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const e = event.currentTarget;
  console.log('The target in remove is:', e);

  let product = e.parentNode.parentNode
  console.log('The target in remove is:', product);
  product.remove()

  if( document.querySelector('#total-value').textContent != '0'){
    calculateAll()
  }


  //... your code goes here
}

// ITERATION 5

function createProduct() {
  const name = document.getElementById('newProductName').value
  const price = document.getElementById('newProductPrice').value

  addNewChild(name, price)
}

function addNewChild(name, price){
  const newTableRow = document.createElement('tr')
  newTableRow.classList.add('product')
  newTableRow.innerHTML = `          <td class="name">
  <span>${name}</span>
</td>
<td class="price">$<span>${price}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`

  newTableRow.classList.add('newTr')
  
  const tableBody = document.querySelector('tbody')
  tableBody.appendChild( newTableRow )

  const newDeleteButton = document.querySelector('.newTr button')
  newDeleteButton.addEventListener('click', (e) => {
    removeProduct(e)
  })

  document.getElementById('newProductName').value = '' 
  document.getElementById('newProductPrice').value = '0'


  newTableRow.classList.remove('newTr')




}

// function createProduct() {
//   const name = document.getElementById('newProductName').value
//   const price = document.getElementById('newProductPrice').value

//   addNewChild(name, price)
// }

// function addNewChild(name, price){
//   const newTableRow = document.createElement('tr')
//   newTableRow.classList.add('product')

//   const td1 = document.createElement('td', ['name'], '')
//   td1.className = 'name'
//   const span1 = document.createElement('span', [], name)
//   span1.textContent = name
//   td1.appendChild(span1)

//   const td2 = document.createElement('td', ['price'], '$')
//   td2.className = 'price'
//   td2.textContent = '$'
//   const span2 = document.createElement('span', [], price)
//   span2.textContent = price
//   td2.appendChild(span2)

//   const td3 = document.createElement('td', ['quantity'], '')
//   td3.className = 'quantity'
//   const input3 = document.createElement('input', [], '')
//   input3.type = 'number'
//   input3.setAttribute('value', '0')
//   input3.setAttribute('min', '0')
//   input3.setAttribute('placeholder', 'Quantity')
//   td3.appendChild(input3)

//   const td4 = document.createElement('td', ['subtotal'], '$')
//   td4.className = 'subtotal'
//   const span4 = document.createElement('span', [], 0)
//   span4.textContent = '0'
//   td4.appendChild(span4)

//   const td5 = document.createElement('td', ['action'], '')
//   td5.className = 'action'
//   const button5 = document.createElement('button', ['btn', 'btn-remove'], 'Remove')
//   button5.className = 'btn btn-remove'
//   button5.innerText = 'Remove'
//   td5.appendChild(button5)

//   newTableRow.appendChild(td1)
//   newTableRow.appendChild(td2)
//   newTableRow.appendChild(td3)
//   newTableRow.appendChild(td4)
//   newTableRow.appendChild(td5)
//   newTableRow.classList.add('newTr')
  
//   const tableBody = document.querySelector('tbody')
//   tableBody.appendChild( newTableRow )

//   const newDeleteButton = document.querySelector('.newTr button')
//   newDeleteButton.addEventListener('click', (e) => {
//     removeProduct(e)
//   })

//   document.getElementById('newProductName').value = '' 
//   document.getElementById('newProductPrice').value = '0'


//   newTableRow.classList.remove('newTr')

// }

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  const removeButtons = document.querySelectorAll('.btn-remove')
  const createProductBtn = document.getElementById('create')


  calculatePricesBtn.addEventListener('click', calculateAll);

  removeButtons.forEach( btn => {
    btn.addEventListener('click', removeProduct)
  })

  createProductBtn.addEventListener('click', createProduct)

  //... your code goes here
});
