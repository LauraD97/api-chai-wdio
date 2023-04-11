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
};
