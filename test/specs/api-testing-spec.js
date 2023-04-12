const { expect } = require("chai");
const swAPI = require("../apis/swAPI");

describe("API Testing - Star Wars API", () => {
  //GET Method examples
  it("should return 200 OK when get films", async () => {
    let filmsResponse = await swAPI.getFilms();
    expect(filmsResponse.status).to.equal(200);
  });

  it("should be able to get films", async () => {
    let filmsResponse = await swAPI.getFilms();
    expect(filmsResponse.body.results).to.have.length(6);
    expect(filmsResponse.body.results[0]).to.have.property("title", "A New Hope");
  });

  it("should be able to get people", async () => {
    let peopleResponse = await swAPI.getPeople(1);
    expect(peopleResponse.body.name).to.equal("Luke Skywalker");
  });

  it("should be able to get planets", async () => {
    let planetResponse = await swAPI.getPlanets();
    expect(planetResponse.body).to.be.an("object").that.includes.property("count");
  });

  //POST Method example
  it('should create a new planet', async () => {
    const newPlanet = {
      name: "Tatooine",
			rotation_period: "23",
			orbital_period: "304",
    }

    let planetResponse = await swAPI.postPlanet(newPlanet);
    expect(planetResponse.status).to.equal(201);
  });

  //PUT method example
  it('should edit a specie', async () => {
    const specieToUpdate = {
      name: "Human",
			classification: "mammal",
			designation: "sentient",
    }

    let specieResponse = await swAPI.putSpecies(1, specieToUpdate);
    expect(specieResponse.status).to.equal(200);    
  });

  //Delete method example
  it.only('should delete an existing vehicle', async() => {
    let vehicleResponse = await swAPI.deleteVehicle(1);
    expect(vehicleResponse.status).to.equal(204);
  });
});
