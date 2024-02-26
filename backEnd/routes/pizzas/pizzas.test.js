const axios = require("axios");

describe("GET /api/pizzas", () => {
  it("should return all pizzas", async () => {
    const response = await axios.get("http://localhost:3001/api/pizzas");
    expect(response.status).toBe(200);
    expect(response.data).toBeInstanceOf(Array);
  });

  it("should return 422 if parameters are sent", async () => {
    try {
      await axios.get("http://localhost:3001/api/pizzas?invalidParam=1");
    } catch (error) {
      expect(error.response.status).toBe(422);
    }
  });
});

describe("GET /api/pizzas/:name", () => {
  it("should return a single pizza", async () => {
    const response = await axios.get(
      "http://localhost:3001/api/pizzas/Margherita"
    );
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty("name", "Margherita");
  });

  it("should return 404 if pizza not found", async () => {
    try {
      await axios.get("http://localhost:3001/api/pizzas/NonExistentPizza");
    } catch (error) {
      expect(error.response.status).toBe(404);
    }
  });

  it("should return 422 if pizza name is not a string", async () => {
    try {
      await axios.get("http://localhost:3001/api/pizzas/123");
    } catch (error) {
      expect(error.response.status).toBe(422);
    }
  });
});
