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
    try {
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
    } catch (error) {
      console.log(error);
      errorResponse(error);
    }
  },

  async address(req, res) {
    try {
      const userId = req.params.userId;
      const userData = await userModel.findByIdAndUpdate(
        { _id: userId },
        {
          $push: { shipping_address: { ...req.body } }, 
        }
      );
      return createdSuccess(res, "user address updated", userData);
    } catch (error) {
      console.log(error);
      errorResponse(error);
    }
  },
  async get(req, res) {
    try {
      const id = req.params.id;
      let user = null;
      if (id) {
        user = await userModel.findById(id);
      } else {
        user = await userModel.find();
      }
      if (user) {
        return successResponse(res, "user found", user);
      }
    } catch (error) {
      console.log(error);
      errorResponse(res);
    }
  },
  async remove(req, res) {
    try {
      const id = req.params.id;
      const index = req.params.index;
      const userData = await userModel.findById(id);
      if (!userData) return errorResponse(res, "User not found");
      userData?.shipping_address.splice(index, 1);
      await userData.save();
      return successResponse(res, "address deleted", userData);
    } catch (error) {
      console.log(error);
      errorResponse(res);
    }
  },
};

module.exports = user;
