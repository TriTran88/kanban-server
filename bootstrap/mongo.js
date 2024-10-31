const config = require("../config");
const mongoose = require('mongoose');

const connect = async () => {
  const address = config.mongodbUri;
  const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true,
      serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 45000,
      family: 4
  };
  await mongoose
      .connect(address, options)
      .catch((error) => console.error(error))
      .then(() => console.log(`Connected to MongoDB!`));
};

module.exports = { connect }