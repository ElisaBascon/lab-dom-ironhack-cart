// ITERATION 1



function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  
  let subtotal = (price * quantity);
  const spanSubTot = product.querySelector('.subtotal span');
    spanSubTot.innerHTML = `${subtotal.toFixed(2)}`;
      console.log(subtotal);
  }


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const someProducts = [...document.getElementsByClassName('product')];
    let totalPrice = 0;
      someProducts.forEach((elem) => {
        updateSubtotal (elem);
    totalPrice += updateSubtotal(elem)
  })
console.log (totalPrice);
 }

  // ITERATION 3 
      //let totalValue = document.querySelector('#total-value span')
    //totalValue.innerText =totalPrice;


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
