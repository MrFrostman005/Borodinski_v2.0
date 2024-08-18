var form = document.querySelector('#appointment__form');
console.log(form)

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    console.log('Событие submit:', event);

            // Логируем тип события
            console.log('Тип события:', event.type); // 'submit'
            
            // Логируем целевой элемент, на котором произошло событие
            console.log('Целевой элемент:', event.target); // это будет форма
            
            // Логируем текущий элемент, на котором установлен обработчик события
            console.log('Текущий элемент:', event.currentTarget);
    console.log('event.preventDefault() сработал, форма не отправляется.');

    const inputs = document.querySelectorAll('#appointment__form input'); // Изменение селектора
    console.log(inputs);
    let hasError = false;

    inputs.forEach(function(input) {
        if (input.value.trim() === "") {
            input.classList.add('error');
            hasError = true;
        } else {
            input.classList.remove('error');
        }
    });

    console.log(hasError);

    // Если есть ошибки, показываем popup с ошибкой
    if (hasError) {
        console.log('Показать ошибочный попап');
        showPopup('error-popup');
    } else {
        // Если ошибок нет, показываем popup с успешной отправкой
        console.log('Показать успешный попап');
        showPopup('success-popup');
    }
});

function showPopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
        popup.classList.remove('visually-hidden');
        popup.style.display = 'block';
    } else {
        console.error('Попап не найден: ' + popupId);
    }
}

// Закрытие popup по клику на кнопку
document.querySelectorAll('.close-popup').forEach(function(button) {
    button.addEventListener('click', function() {
        const popup = button.closest('.popup');
        if (popup) {
            popup.classList.add('visually-hidden');
        } else {
            console.error('Кнопка закрытия не находит родительский попап');
        }
    });
});