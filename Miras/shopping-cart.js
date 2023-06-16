let productsInCart = JSON.parse(localStorage.getItem('shoppingCart'));
if(!productsInCart){
	productsInCart = [];
}
const parentElement = document.querySelector('#buyItems');
const cartSumPrice = document.querySelector('#sum-prices');
const products = document.querySelectorAll('.product-under');


const countTheSumPrice = function () { // 4
	let sum = 0;
	productsInCart.forEach(item => {
		sum += item.price;
	});
	return sum;
}

const updateShoppingCartHTML = function () {
	localStorage.setItem('shoppingCart', JSON.stringify(productsInCart));
	if (productsInCart.length > 0) {
		let result = productsInCart.map(product => {
			return `
				<li class="buyItem">	
					<img style="border-radius:15px; width: 120px; height:100px;" src="${product.image}">
					<div>
							<div style="display:inline-block" class="product-actions">
								<h5 class="productName" style="display:inline-block">${product.name}</h5>
								<button class="button-remove" data-id=${product.id}>&times;</button>
							</div>	
							<h6 class="product-price">${product.price}тг</h6>
							<div>
								<button class="button-minus" data-id=${product.id}>-</button>
								<span class="countOfProduct">${product.count}</span>
								<button class="button-plus" data-id=${product.id}>+</button>
							</div>	
					</div>	
				</li>`;
});
parentElement.innerHTML = result.join('');
document.querySelector('.checkout').classList.remove('hidden');
cartSumPrice.innerHTML = countTheSumPrice() + " ₸";


const totalQuantity = productsInCart.reduce((total, item) => total + item.count, 0);
const totalQuantityElement = document.querySelector('.total_quantity');
totalQuantityElement.textContent = totalQuantity;

const removeButtons = document.querySelectorAll('.button-remove');
removeButtons.forEach(button => {
	button.addEventListener('click', (e) => {
		const productId = e.target.dataset.id;
		productsInCart = productsInCart.filter(product => product.id !== productId);
		updateShoppingCartHTML();
	});
});

const removeAllButton = document.querySelector('.lng-button-remove-all');
const confirmationBlock = document.getElementById('confirmationBlock');
const confirmDeleteButton = document.getElementById('lng-confirmDeleteButton');
const cancelDeleteButton = document.getElementById('lng-cancelDeleteButton');

removeAllButton.addEventListener('click', () => {
  confirmationBlock.classList.remove('hide');
});

confirmDeleteButton.addEventListener('click', () => {
  productsInCart = []; // Очищаем массив товаров в корзине
  updateShoppingCartHTML(); // Обновляем отображение корзины
  confirmationBlock.classList.add('hide');
});

cancelDeleteButton.addEventListener('click', () => {
  confirmationBlock.classList.add('hide');
});


} else {
	document.querySelector('.checkout').classList.add('hidden');
	parentElement.innerHTML = '<h4 class="lng-empty"></h4>';
	cartSumPrice.innerHTML = '';
	const totalQuantityElement = document.querySelector('.total_quantity');
	totalQuantityElement.textContent = '0';
	}
};





// function updateProductsInCart(product) { // 2
// 	for (let i = 0; i < productsInCart.length; i++) {
// 		if (productsInCart[i].id == product.id) {
// 			productsInCart[i].count += 1;
// 			productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
// 			return;
// 		}
// 	}
// 	productsInCart.push(product);

// 	const totalQuantity = productsInCart.reduce((acc, item) => acc + item.count, 0);
// 	document.querySelector('.total_quantity').textContent = totalQuantity;
// }

function updateProductsInCart(product) {
	for (let i = 0; i < productsInCart.length; i++) {
		if (productsInCart[i].id == product.id) {
			productsInCart[i].count += 1;
			productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
			return;
		}
	}
	productsInCart.push(product);

	const totalQuantity = productsInCart.reduce((acc, item) => acc + item.count, 0);
	document.querySelector('.total_quantity').textContent = totalQuantity;
}


products.forEach(item => {   // 1
	item.addEventListener('click', (e) => {
		if (e.target.classList.contains('addToCart')) {
			const productID = e.target.dataset.productId;
			const productName = item.querySelector('.productName').innerHTML;
			const productPrice = item.querySelector('.priceValue').innerHTML;
			const productImage = item.querySelector('img').src;
			let product = {
				name: productName,
				image: productImage,
				id: productID,
				count: 1,
				price: +productPrice,
				basePrice: +productPrice,
			}
			updateProductsInCart(product);
			updateShoppingCartHTML();
		}
	});
});

parentElement.addEventListener('click', (e) => { // Last
	const isPlusButton = e.target.classList.contains('button-plus');
	const isMinusButton = e.target.classList.contains('button-minus');
	if (isPlusButton || isMinusButton) {
		for (let i = 0; i < productsInCart.length; i++) {
			if (productsInCart[i].id == e.target.dataset.id) {
				if (isPlusButton) {
					productsInCart[i].count += 1
				}
				else if (isMinusButton) {
					productsInCart[i].count -= 1
				}
				productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
			}
			if (productsInCart[i].count <= 0) {
				productsInCart.splice(i, 1);
			}
		}
		updateShoppingCartHTML();
	}
});

updateShoppingCartHTML();

