const argv = require('yargs')
                            .option('b',{
                                alias:'base',
                                type:'number',
                                demandOption:true,
                                describe:"Es la base de la tabla de multiplicar"
                            })
                            .option('l',{
                                alias:'listar',
                                type: 'boolean',
                                default:false,
                                describe:"Mustra la tabla de multiplicar en consola"
                            })
                            .option('h',{
                                alias:'hasta',
                                type: 'number',
                                describe:"Es el limite hasta donde se puede multiplicar"
                            })
                            .check((argv,options)=>{
                                if (isNaN(argv.b)) {
                                    throw 'La base debe ser un numero';
                                }
                                return true;
                            })
                            .argv;

module.exports = argv;