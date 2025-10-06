const {
  orderPlace,
  orderGet,
  removeOrder,
} = require("../controller/order.controller");

const orderRouter = require("express").Router();

orderRouter.post("/order-place", orderPlace);
orderRouter.get("/get/:id?", orderGet);
orderRouter.delete("/remove-oder/:userId/:orderId", removeOrder);

module.exports = orderRouter; 
