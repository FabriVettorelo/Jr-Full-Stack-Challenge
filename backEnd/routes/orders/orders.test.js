const axios = require("axios");

beforeEach(async () => {
  const newOrder = {
    items: [
      {
        pizza: "Margherita",
        quantity: 1,
      },
    ],
  };
  await axios.post("http://localhost:3001/api/orders", newOrder);
});

describe("GET /api/orders", () => {
  it("should return all orders", async () => {
    const response = await axios.get("http://localhost:3001/api/orders");
    expect(response.status).toBe(200);
    expect(response.data).toBeInstanceOf(Array);
  });

  it("should return 422 if invalid parameters are sent", async () => {
    try {
      await axios.get("http://localhost:3001/api/orders?invalidParam=1");
    } catch (error) {
      expect(error.response.status).toBe(422);
    }
  });
});

describe("GET /api/orders/:id", () => {
  it("should return a single order", async () => {
    const response = await axios.get("http://localhost:3001/api/orders/1");
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty("id", 1);
  });

  it("should return 404 if order not found", async () => {
    try {
      await axios.get("http://localhost:3001/api/orders/9999");
    } catch (error) {
      expect(error.response.status).toBe(404);
    }
  });
});

describe("POST /api/orders", () => {
  it("should create a new order", async () => {
    const newOrder = {
      items: [
        {
          pizza: "Bufala",
          quantity: 2,
        },
      ],
    };
    const response = await axios.post(
      "http://localhost:3001/api/orders",
      newOrder
    );
    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty("id");
    expect(response.data.items).toEqual(newOrder.items);
  });

  it("should return 422 if invalid order is sent", async () => {
    const invalidOrder = {
      items: [
        {
          pizza: 123,
          quantity: 2,
        },
      ],
    };
    try {
      await axios.post("http://localhost:3001/api/orders", invalidOrder);
    } catch (error) {
      expect(error.response.status).toBe(422);
    }
  });

  it("should return 404 if pizza not found", async () => {
    const invalidOrder = {
      items: [
        {
          pizza: "NonExistentPizza",
          quantity: 2,
        },
      ],
    };
    try {
      await axios.post("http://localhost:3001/api/orders", invalidOrder);
    } catch (error) {
      expect(error.response.status).toBe(404);
    }
  });
});
