const userModel = require("../model/user.model");
const {
  errorResponse,
  bedResponse,
  createdSuccess,
  successResponse,
} = require("../utility/response");
const Cryptr = require("cryptr");
const cryptr = new Cryptr(process.env.TOKEN_SECRETY_KEY);
var jwt = require("jsonwebtoken");

const user = {
  async register(req, res) {
    try {
      const { name, email, password } = req.body;
      const existing = await userModel.findOne({ email: email });
      if (existing) return bedResponse(res, "email already registrd");
      const encryptedPassword = cryptr.encrypt(password);
      const newUser = await new userModel({
        name,
        email,
        password: encryptedPassword,
      });
      newUser.save();
      const token = jwt.sign(
        {
          id: newUser._id,
          email: newUser.email,
        },
        process.env.TOKEN_SECRETY_KEY,
        { expiresIn: "7d" }
      );
      return createdSuccess(res, "user Registerd", {
      user: {
         ...newUser.toJSON(),
        password: null,
       },
        token,
      });
    } catch (error) {
      console.log(error);
      errorResponse(error);
    }
  },
  async login(req, res) {
    const { email, password } = req.body;
    const existingUser = await userModel.findOne({ email: email });
    if (!existingUser) return errorResponse(res, "User not found");
    const decryptedPassword = cryptr.decrypt(existingUser.password);
    console.log(decryptedPassword);
    if (decryptedPassword !== password)
      return errorResponse(res, "Invalid password");

    const token = jwt.sign(
      {
        id: existingUser._id,
        email: existingUser.email,
      },
      process.env.TOKEN_SECRETY_KEY,
      { expiresIn: "7d" }
    );

    return successResponse(res, "User Logged In ", {
      user: {
        ...existingUser.toJSON(),
        password: null,
      },
      token,
    });
  },
};

module.exports = user;
