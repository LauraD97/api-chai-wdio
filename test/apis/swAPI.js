const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

module.exports = {
  getFilms: function () {
    return chai.request("https://swapi.dev/").get("/api/films");
  },
  getPeople: function (id) {
    return chai.request("https://swapi.dev/").get(`/api/people/${id}`);
  },
  getPlanets: function () {
    return chai.request("https://swapi.dev/").get("/api/planets");
  },
  postPlanet: function(planet) {
    return chai.request("https://swapi.dev/")
               .post("/api/planets")
               .send(planet);
  },
  putSpecies: function(id, specie) {
    return chai.request("https://swapi.dev/")
              .put(`/api/species/${id}`)
              .send(specie);            
  },
  deleteVehicle: function(id) {
    return chai.request("https://swapi.dev/")
              .delete(`/api/vehicles/${id}`)
  }
};
