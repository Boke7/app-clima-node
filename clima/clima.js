const axios = require('axios');

const getClima = async(lat, lon) => {

    const clima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2b6d3d310d477a5ac362b85c5799e36a&units=metric`);

    if (clima.data.main.temp.length === 0) {
        throw new Error(`No hay resultados para LAT: ${lat} y LON: ${lon}`);
    }

    return clima.data.main.temp;
}

module.exports = {
    getClima
}