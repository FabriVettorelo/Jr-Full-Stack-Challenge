const { body, param, query } = require('express-validator');

const createSchemas = (orders, pizzas) => ({
    createOrder: [
        body('items')
            .isArray().withMessage('422: Order must be an array of objects')
            .notEmpty().withMessage('422: Order cannot be empty'),
        body('items.*')
            .isObject().withMessage('422: Each item must be an object'),
        body('items.*.pizza')
            .isString().withMessage('422: Pizza name must be a string')
            .notEmpty().withMessage('422: Pizza name cannot be empty')
            .custom(value => {
                if (!pizzas.find(p => p.name === value)) {
                    throw new Error('404: Pizza not found');
                }
                return true;
            }),
        body('items.*.quantity')
            .isInt({ gt: 0 }).withMessage('422: Quantity must be a positive integer')
            .notEmpty().withMessage('422: Quantity cannot be empty')
    ],
    getOrder: [
        param('id')
            .optional()
            .isInt({ gt: 0 }).withMessage('422: Order ID must be a positive integer')
            .custom(value => orders.find(o => o.id === parseInt(value)) || '404: Order not found')
    ],
    getOrders: [
        query().custom((value, { req }) => Object.keys(req.query).length === 0)
               .withMessage('422: No parameters should be sent')
    ],
});

module.exports = createSchemas;