const fs = require('fs');
const colors = require('colors');
const crearArchivo = async(base = 5,listar,hasta) => {

    try {

    let salida = '';
    let consola = '';
    nombreArchivo = `tabla${base}.txt`;
    for (let index = 1; index <= hasta; index++) {
        salida += `        ${base} X ${index} = ${base*index}\n`;
        consola += `        ${base} ${'X'.green} ${index} ${'='.blue} ${base*index}\n`;
    }
    if (listar) {
        console.log('========================'.green)
        console.log('      Tabla del'.green,colors.blue(base))
        console.log('========================'.green)
        console.log(salida)
    }
    
    fs.writeFileSync(`./salida/${nombreArchivo}`,salida);
    return nombreArchivo;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}