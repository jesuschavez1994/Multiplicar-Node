const fs = require('fs');

const array1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];

let listarTabla = (base, limite = 10) => {

    for( let i = 1; i <= limite; i++){
        console.log(`${base} * ${i} = ${ base * i}`)
    }

}


let crearTabla = ( base ) => {

    return new Promise((resolve, reject) => {

        if(!Number(base)){
            reject('La base no es un número');
            return;
        }

        let data = '';

        array1.forEach( (element, index) => {
            data += ` ${base} * ${index} = ${ base * index}\n`;
            }
        );

        fs.writeFile(`text-${base}.txt`,  data, (err) => {
            if(err){
                reject(err)
            } else{ 
                resolve(`tabla - ${base}.txt`) 
            };
            console.log('File save');
        });
    });
}

module.exports = {
    crearTabla, 
    listarTabla
}

