const { orderPlace } = require("../controller/order.controller");

const orderRouter = require("express").Router();

orderRouter.post("/order-place", orderPlace);

module.exports = orderRouter;
