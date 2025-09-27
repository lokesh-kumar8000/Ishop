const cartModel = require("../model/cart.model");
const orderModel = require("../model/order.model");
const mongoose = require("mongoose");
const { errorResponse, successResponse } = require("../utility/response");

const orderController = {
  async orderPlace(req, res) {
    try {
      const { user_id, payment_mode, shipping_details } = req.body;
      const cart = await cartModel
        .find({ user_id })
        .populate("product_id", "finalPrice _id");
      const productDetails = cart.map((item) => {
        return {
          product_Id: item?.product_id?._id,
          qty: item.qty,
          price: item.product_id.finalPrice,
          total: item.qty * item.product_id.finalPrice,
        };
      });
      const cart_total = productDetails.reduce(
        (sum, item) => sum + item.total,
        0
      );

      const order = await orderModel.create({
        user_id: user_id,
        product_details: productDetails,
        order_total: cart_total,
        payment_mode: payment_mode,
        shipping_details: shipping_details,
      });

      if (payment_mode == 0) {
        await order.save();
        await cartModel.deleteMany({ user_id });
        return res.status(201).json({
          success: true,
          message: "Order place",
          order_id: order._id,
        });
      }
    } catch (error) {
      console.log(error);
      errorResponse(res);
    }
  },
  async orderGet(req, res) {
    try {
      const id = req.params.id;
      let orderList = null;
      if (id == null) {
        orderList = await orderModel.find();
      } else {
        orderList = await orderModel.find({
          user_id: new mongoose.Types.ObjectId(id),
        });
      }
      if (orderList) {
        return successResponse(res, "Order List Found", orderList);
      }
    } catch (error) {
      console.log(error);
      errorResponse(res);
    }
  },
};

module.exports = orderController;
