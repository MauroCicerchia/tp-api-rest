module.exports = {
  mongo: {
    uri: process.env.MONGO_URI || "mongodb://localhost:27017/movies"
  },
  port: process.env.PORT || 3000
};
