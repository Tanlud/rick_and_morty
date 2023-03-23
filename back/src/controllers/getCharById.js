const axios = require("axios");
const { KEY, URL } = process.env;

// ? VARIABLES DE ENTORNO
// Son variables privadas. Le pertenecen al proyecto. No se exponen en el código.
// Se configuran por fuera del código de la App, en el entorno

const successH = (response, res) => {
  const { id, image, name, gender, species } = response.data;
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ id, name, gender, species, image }));
};

const errorH = (error, res) => {
  res.writeHead(500, { "Content-Type": "text/plain" });
  res.end(error.message);
};

const getCharById = (res, id) => {
  axios
    .get(`${URL}/character/${id}?key=${KEY}`)
    .then((response) => successH(response, res))
    .catch((error) => errorH(error, res));
};

module.exports = getCharById;
