const { moveDB, addtoCart } = require("../controller/cart.controller");

const cartRouter = require("express").Router();

// cartRouter.get("/", get);
cartRouter.post("/sync", moveDB);
cartRouter.post("/add-to-cart", addtoCart);

module.exports = cartRouter;
