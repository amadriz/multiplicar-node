const argv = require('./config/yargs.js').argv;
const colors = require('colors');


const {
    crearArchivo,
    listarTabla
} = require('./multiplicar/multiplicar');

let comando = argv._[0];


switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}

//Despues de un const o let si vienen {} es una destructuracion

//let base = '7';


//crearArchivo(base)
// then es una promesa
//.then(archivo => console.log(`Archivo creado: ${ archivo }`))
//.catch(e => console.log(e))