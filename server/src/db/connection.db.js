import mongoose from "mongoose";

const connectDB = async (db_uri, db_name) => {
  try {
    const connection = await mongoose.connect(`${db_uri}/${db_name}`);
    if (connection) {
      console.log(`db connected at ${connection.connection.name}`);
    }
  } catch (error) {
    console.log(error);
  }
};

export { connectDB };
