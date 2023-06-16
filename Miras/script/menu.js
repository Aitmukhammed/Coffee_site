// Находим элементы с классами "lng-text_menu_1" и "count"
var menuLink = document.querySelector('.lng-text_menu_1');
var countBlock = document.querySelector('.lng-menu_coffee');
var menuLink_2 = document.querySelector('.lng-text_menu_2');
var countBlock_2 = document.querySelector('.lng-text_desserts');
var menuLink_3 = document.querySelector('.lng-text_menu_3');
var countBlock_3 = document.querySelector('.lng-cakes');
// Добавляем обработчик события "click" на элемент "menuLink"

menuLink_3.addEventListener('click', function(event) {
    event.preventDefault(); // Отменяем стандартное действие ссылки
    countBlock_3.scrollIntoView({ behavior: 'smooth' });
});
menuLink_2.addEventListener('click', function(event) {
    event.preventDefault(); // Отменяем стандартное действие ссылки
    countBlock_2.scrollIntoView({ behavior: 'smooth' });
});
menuLink.addEventListener('click', function(event) {
  event.preventDefault(); // Отменяем стандартное действие ссылки

  // Выполняем прокрутку к блоку "count"
  countBlock.scrollIntoView({ behavior: 'smooth' });
});

if (document.getElementById('hearderSlide')) {
	$('#hearderSlide').multislider();
	$('#hearderSlide').multislider('pause');
}


function closeCart() {
	const cart = document.querySelector('.producstOnCart');
	cart.classList.toggle('hide');
	document.querySelector('body').classList.toggle('stopScrolling')
}


const openShopCart = document.querySelector('.shoppingCartButton');
openShopCart.addEventListener('click', () => {
	const cart = document.querySelector('.producstOnCart');
	cart.classList.toggle('hide');
	document.querySelector('body').classList.toggle('stopScrolling');
});


const closeShopCart = document.querySelector('#closeButton');
closeShopCart.addEventListener('click', closeCart);



  function addToCart() {
    var modal = document.getElementById('modal');
    modal.style.display = 'block';

    // Здесь вы можете выполнить другие действия, связанные с добавлением продукта в корзину

    // Через определенное время скрываем блок с сообщением
    setTimeout(function() {
      modal.style.display = 'none';
    }, 3000); // 3000 миллисекунд (3 секунды) - можно изменить время
  }

  const email = document.getElementById("mail");

  email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
      email.setCustomValidity("I am expecting an e-mail address!");
    } else {
      email.setCustomValidity("");
    }
  });