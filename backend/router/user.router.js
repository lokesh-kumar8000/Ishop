const {
  register,
  login,
  address,
  get,
  remove,
} = require("../controller/user.controller");
const userRouter = require("express").Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.put("/address/:userId", address);
userRouter.get("/get/:id?", get);
userRouter.delete('/delete/:id/:index', remove )
module.exports = userRouter;
