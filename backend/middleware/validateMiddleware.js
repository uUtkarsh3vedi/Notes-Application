const mongoose = require("mongoose")


const validateObjectId = (paramName) => (req,res, next) => {
    const id = req.params[paramName];
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({success: false , message:`Invalid ${paramName}`  })
    }
    next();
}
const validateBody = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ success: false, message: error.details[0].message });
    }
    next();
  };
};

module.exports = {
    validateObjectId,validateBody
}