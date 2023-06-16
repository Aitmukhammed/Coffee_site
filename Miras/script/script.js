const select = document.querySelector('select');
const allLang = ['kz', 'ru', 'en'];
let hash = window.location.hash.substr(1); // определение hash в глобальной области видимости

select.addEventListener('change', changeURLLanguage);

// перенаправить на url с указанием языка
function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#kz';
        location.reload();
    }
    select.value = hash;
    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }
    }
    
    document.querySelectorAll('.lng-add').forEach(button => {
        button.textContent = langArr['add'][hash];
    });
}

changeLanguage();

let input = document.querySelector("#cardNumber"),
            numbers = /[0-9]/,
            regExp = /[0-9]{4}/
            // добавляем слушатель события на инпут
        input.addEventListener("input",(ev)=>{
            // не позволяем ввести ничего, кроме цифр 0-9, ограничиваем размер поля 19-ю символами
            if( ev.inputType === "insertText" && !numbers.test(ev.data) || input.value.length > 19){
                input.value = input.value.slice(0, input.value.length - 1)
                return
            }
            // обеспечиваем работу клавиш "backspace","delete"
            let value = input.value
            if( ev.inputType === "deleteContentBackward" && regExp.test(value.slice(-4)) ){
                input.value = input.value.slice(0, input.value.length - 1)
                return
            }
            // добавяем пробел после 4 цифр подряд
            if( regExp.test(value.slice(-4)) && value.length < 19){
                input.value += " "
            }
        })

//////////////////////////////////////////////////////////////////////////////////////////////////        
  const cashRadio = document.querySelector('.radio_2');
  const cardRadio = document.querySelector('.radio_3');
  const cardPaymentBlock = document.getElementById('cardPaymentBlock');

  cashRadio.addEventListener('click', () => {
    cardPaymentBlock.style.display = 'none';
  });

  cardRadio.addEventListener('click', () => {
    cardPaymentBlock.style.display = 'block';
  });


//////////////////////////////////////////////////////////////////////////////////////////////////
  var paymentMethodRadios = document.getElementsByName("paymentMethod");
  // Добавляем обработчик события "change" для каждой радио-кнопки
  for (var i = 0; i < paymentMethodRadios.length; i++) {
    paymentMethodRadios[i].addEventListener("change", handlePaymentMethodChange);
  }
  
  // Отключение валидации при выборе оплаты
  function handlePaymentMethodChange() {
    var cardNumberInput = document.getElementById("cardNumber");
    var expiryMonthInput = document.getElementById("expiryMonth");
    var expiryYearInput = document.getElementById("expiryYear");
    var cvvInput = document.getElementById("cvv");
    var cardName = document.getElementById("cardName");
  
    if (this.value === "card") {
      cardPaymentBlock.style.display = "block";
      cardNumberInput.required = true;
      expiryMonthInput.required = true;
      expiryYearInput.required = true;
      cvvInput.required = true;
      cardName.required = true;
    } else {
      cardPaymentBlock.style.display = "none";
      cardNumberInput.required = false;
      expiryMonthInput.required = false;
      expiryYearInput.required = false;
      cvvInput.required = false;
      cardName.required = false;
    }
  }


  // Проверка на латинские буквы
    var cardNameInput = document.getElementById("cardName");

    cardNameInput.addEventListener("input", validateCardName);

    function validateCardName() {
    var value = cardNameInput.value;
    // Проверяем, что значение состоит только из латинских букв и пробелов
    if (!/^[A-Za-z\s]+$/.test(value)) {
        cardNameInput.setCustomValidity("Неверное имя карты");
    } else {
        cardNameInput.setCustomValidity("");
    }
    }

    

    

    