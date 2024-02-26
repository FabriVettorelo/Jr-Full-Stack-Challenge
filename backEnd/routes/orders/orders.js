const express = require("express");
const router = express.Router();
const { validationResult } = require("express-validator");
const createSchemas = require("./schemas");

let orders = [];
const pizzas = require("../../example-pizzas.json");
const schemas = createSchemas(orders, pizzas);

router.get("/", schemas.getOrders, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const firstError = errors.array()[0];
      const [statusCode, message] = firstError.msg.split(": ");
      return res
        .status(parseInt(statusCode))
        .json({ errors: [{ ...firstError, msg: message }] });
    }
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", schemas.getOrder, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const firstError = errors.array()[0];
      const [statusCode, message] = firstError.msg.split(": ");
      return res
        .status(parseInt(statusCode))
        .json({ errors: [{ ...firstError, msg: message }] });
    }

    const order = orders.find((o) => o.id === Number(req.params.id));
    if (!order) return res.status(404).send("Order not found");
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", schemas.createOrder, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const firstError = errors.array()[0];
      const [statusCode, message] = firstError.msg.split(": ");
      return res
        .status(parseInt(statusCode))
        .json({ errors: [{ ...firstError, msg: message }] });
    }

    // Create new order
    const newOrder = {
      id: orders.length + 1,
      items: req.body.items,
    };

    // Save order
    orders.push(newOrder);

    // Return new order
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
