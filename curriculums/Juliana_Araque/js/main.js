const typed = new Typed('.typed', {
    strings : [
        '<i class="mensaje">Hola...</i>',
        '<i class="mensaje">Mi nombre es Maria Zaray Cortez Castro</i>',
        '<i class="mensaje">Soy estudiante de Ingenieria de Sistemas</i>', 
        '<i class="mensaje">Me encantan los gatos</i>'
    ],

    typeSpeed: 75, //Velocidad en milisegundos para poner una letra,
    startDelay: 300, //Tiempo de retraso en iniciar la animacion.Aplica tambien cuando termina y vuelve a iniciar
    backSpeed: 75, //velocidad en milisegundos para borrar una letra
    shuffle: false, //Alterar el orden en que se escriben las palabras
    backDelay: 1500, //Tiempo de espera despues que termino de escribir una palabra
    loop: true, //Repetir el array de String
    loopCount: false, //Cantidad de veces a repetir el array. false = infinito
    showCursor: true, //Mostrar cursor palpitante
    cursorChar: '|', //Caracter para marcar el cursor
    contentType: 'html', //'html' o 'null' para texto sin formato
}); 