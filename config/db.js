const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

// const conectDB = () => {
//   mongoose
//     .connect(db, {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useFindAndModify: false
//     })
//     .then(() => console.log("mongo DB connected"))
//     .catch(err => {
//       console.log(err.message);
//       process.exit(1);
//     });
// };

const conectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log("MOngoDB connected...");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = conectDB;
