const { query, param } = require("express-validator");

const schemas = {
  getPizzas: [
    query()
      .custom((value, { req }) => Object.keys(req.query).length === 0)
      .withMessage("422: No parameters should be sent"),
  ],
  getPizzaByName: [
    param("name")
      .notEmpty()
      .withMessage("422: Pizza name cannot be empty")
      .custom(value => {
        if (!isNaN(value)) {
            throw new Error("422: Pizza name must be a string");
        }
        return true;
    }),
  ],
};

module.exports = schemas;
