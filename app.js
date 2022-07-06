const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

debugger;

let comando = argv._[0];

console.clear();

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}



// console.log(argv.base);



// let parametro = argv[2];
// let base = parametro.split('=')[1]