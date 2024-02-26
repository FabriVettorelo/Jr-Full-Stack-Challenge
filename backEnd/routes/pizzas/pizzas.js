const express = require('express');
const pizzas = require('../../example-pizzas.json');
const router = express.Router();
const { validationResult } = require('express-validator');
const schemas = require('./schemas'); 

router.get('/', schemas.getPizzas, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const firstError = errors.array()[0];
        const [statusCode, message] = firstError.msg.split(': ');
        return res.status(parseInt(statusCode)).json({ errors: [{ ...firstError, msg: message }] });
    }
    res.json(pizzas);
});

router.get('/:name', schemas.getPizzaByName, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const firstError = errors.array()[0];
        const [statusCode, message] = firstError.msg.split(': ');
        return res.status(parseInt(statusCode)).json({ errors: [{ ...firstError, msg: message }] });
    }

    const pizza = pizzas.find(p => p.name === req.params.name);
    if (!pizza) {
        return res.status(404).send('Pizza not found');
    }
    res.json(pizza);
});

module.exports = router;