import mongoose from "mongoose";

const connectDataBase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`Mongodb is connected: ${data.connection.host}`);
    })
};

export { connectDataBase };
