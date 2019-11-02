const axios = require('axios');

const getLugarLTLN = async(direccion) => {

    const encodedEnlace = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedEnlace}`,
        headers: { 'X-RapidAPI-Key': 'f7e0ff33d2msh99a3463ee0d5a0ap1e2893jsn340c20912e6c' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        dir,
        lat,
        lng
    }
}

module.exports = {
    getLugarLTLN
}