const { orderPlace, orderGet } = require("../controller/order.controller");

const orderRouter = require("express").Router();

orderRouter.post("/order-place", orderPlace);
orderRouter.get("/get/:id?", orderGet); 

module.exports = orderRouter;
