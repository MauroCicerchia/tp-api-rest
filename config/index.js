module.exports = {
  mongo: {
    uri: process.env.MONGO_URI || "mongodb://localhost:27017/dblandit"
  },
  port: process.env.PORT || 3000
};
