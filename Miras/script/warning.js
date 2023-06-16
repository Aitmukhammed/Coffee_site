var orderButton = document.querySelector('.lng-btn_order');
orderButton.addEventListener('click', function(event) {
  var sumPrices = document.querySelector('#sum-prices');
  var totalAmount = parseInt(sumPrices.innerText);

  if (totalAmount < 3000) {
	event.preventDefault();
	var errorBlock = document.querySelector('#error');
	errorBlock.style.display = 'block'; // Показать блок

	setTimeout(function() {
	  errorBlock.style.display = 'none'; // Скрыть блок
	}, 3000);
  }
});