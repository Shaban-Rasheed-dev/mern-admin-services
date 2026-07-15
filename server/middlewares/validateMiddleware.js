export const validateSchema = (schema) => async (req, res, next) => {
  try {
    const data = await schema.parseAsync(req.body);
    req.body = data;
    next();
  } catch (err) {
    // console.log(error);
    const status = 422;
    const message = "fill the input properly";
    const extraDetails = err.issues[0].message;

    const error = {
      status,
      message,
      extraDetails,
    };

    console.log(error);
    next(error);
  }
};
