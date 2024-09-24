/*selecciona la section del carusel y los puntos*/
const sections = document.querySelector('.sections');
const dot = document.querySelectorAll('.dot');
/*Recorre cada punto de la ul*/
dot.forEach((eachPoint, i) => {
    /*Le agrega un EventListener de click */
    dot[i].addEventListener('click', () => {

        /* Toma la posición del boton al que se le hizo click */
        let position = i;
        /* Se toma la posición al que se le hizo click y se multiplica para elegir
            la posición del testimonio
        */
        let operacion = position * -25;
        /* Se le agrega el translate a la section */
        sections.style.transform = `translateX(${operacion}%)`;

        /* Recorre los puntos y les quita el atributo activo */
        dot.forEach((eachPoint, i) => {
            dot[i].classList.remove('activo');
        })
        /* Al boton seleccionado se le agrega la clase activo */
        dot[i].classList.add('activo');
    })
})

document.getElementById('subscriptionForm').addEventListener('submit', function (event) {
    // Obtener valores de los inputs
    const name = document.getElementById('Name').value.trim();
    const mail = document.getElementById('Mail').value.trim();

    // Elementos para mostrar mensajes de error
    const nameError = document.getElementById('nameError');
    const mailError = document.getElementById('mailError');

    // Limpiar mensajes de error
    nameError.textContent = '';
    mailError.textContent = '';

    // Validaciones
    let isValid = true;

    // Validar nombre
    if (name === '') {
        nameError.textContent = 'El nombre es obligatorio.';
        isValid = false;
    } else if (name.length < 3) {
        nameError.textContent = 'El nombre debe tener al menos 3 caracteres.';
        isValid = false;
    }

    // Validar correo electrónico
    const mailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar correos
    if (mail === '') {
        mailError.textContent = 'El correo es obligatorio.';
        isValid = false;
    } else if (!mailPattern.test(mail)) {
        mailError.textContent = 'Por favor, ingresa un correo válido.';
        isValid = false;
    }

    // Si no es válido, prevenir el envío del formulario
    if (!isValid) {
        event.preventDefault();
    }
});