const {
  moveDB,
  addtoCart,
  removeCart,
} = require("../controller/cart.controller");

const cartRouter = require("express").Router();

// cartRouter.get("/", get);
cartRouter.post("/sync", moveDB);
cartRouter.post("/add-to-cart", addtoCart);
cartRouter.delete("/delete-cart/:id/:userId", removeCart);

module.exports = cartRouter;
