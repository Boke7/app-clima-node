const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion',
        demand: true
    }
}).argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

/*lugar.getLugarLTLN(argv.direccion)
    .then(console.log);*/


/*clima.getClima(42.400002, -7.080000)
    .then(console.log)
    .catch(console.log);*/

const getInfo = async(dir) => {

    try {
        const coords = await lugar.getLugarLTLN(dir);
        const temp = await clima.getClima(coords.lat, coords.lng);

        return `El clima de ${coords.dir} es de ${temp}`;

    } catch (e) {
        return `No se pudo determinar el clima de ${dir}`;
    }
};

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);