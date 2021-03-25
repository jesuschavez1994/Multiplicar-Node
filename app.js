
const argv = require('./config/yargs.js').argv;
const { crearTabla, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch(comando){

    case 'listar':
    	listarTabla( argv.base, argv.limite)
    break;
    case 'crear':
        crearTabla(argv.base).then( archivo => {
            console.log(`Archivo creado ${archivo}` );
            }).catch( err => {
                console.log(err);
        });
    break;

    default:
        console.log('Comando no reconocido')
}


let argv2 = process.argv;
