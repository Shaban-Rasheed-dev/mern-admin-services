import { Service } from "../models/serviceModel.js";

export const serviceController = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json({ msg: services });
  } catch (error) {
    console.log(`Services : ${error}`);
  }
};
