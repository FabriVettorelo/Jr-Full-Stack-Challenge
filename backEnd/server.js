const express = require("express");
const ordersRoutes = require("./routes/orders/orders");
const pizzasRoutes = require("./routes/pizzas/pizzas");
const cors = require("cors")
const corsOptions = {origin:"*",}

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

app.use("/api/orders", ordersRoutes);
app.use("/api/pizzas", pizzasRoutes);

app.listen(3001, () => console.log("Server running on port 3001"));
