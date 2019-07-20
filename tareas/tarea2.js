function calcularNota2 (nota){
    var notaLetra2 = ''
    switch (true) {
        case (nota >= 90):
            notaLetra2 = 'A';
            break;
        case (nota >= 80): notaLetra2 = 'B';
            break;
        case (nota >= 70): notaLetra2 = 'C';
            break;
        case (nota >= 60): notaLetra2 = 'D';
            break;
        default: nota = 'F'
    }
    console.log (nota + ' es igual a ' + notaLetra2);
}

calcularNota2 (100)