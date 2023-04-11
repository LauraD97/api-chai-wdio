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
});
