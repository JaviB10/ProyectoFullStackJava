const borrarCampos = () => {
    document.getElementById('inputNombre').value = '';
    document.getElementById('inputApellido').value = '';
    document.getElementById('inputCorreo').value = '';
    document.getElementById('inputCantidad').value = '';
    document.getElementById('inputCategoria').value = '';
    document.getElementById('alerta').innerText = 'Total a pagar: $';
}

const calcularPrecio = () => {
    const cantidad = document.getElementById('inputCantidad').value;
    const categoria = document.getElementById('inputCategoria').value;

    const valorTicket = 200
    const descuentoEstudiante = 0.8
    const descuentoTrainee = 0.5
    const descuentoJunior = 0.15
    let precioFinal = 0

    if (categoria === 'estudiante') {
        precioFinal = valorTicket - (valorTicket * descuentoEstudiante)
        console.log(precioFinal);
    } else if (categoria === 'trainee') {
        precioFinal = valorTicket - (valorTicket * descuentoTrainee)
    } else if (categoria === 'junior') {
        precioFinal = valorTicket - (valorTicket * descuentoJunior)
    } else if (categoria === '') {
        precioFinal = valorTicket
    }

    precioFinal = precioFinal * cantidad

    document.getElementById('alerta').innerText = `Total a pagar: $ ${precioFinal}`;
}