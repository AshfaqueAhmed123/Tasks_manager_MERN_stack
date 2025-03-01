import app from "./src/App.js";
import { connectDB } from "./src/db/connection.db.js";
import dotenv from "dotenv";
dotenv.config();

const db_uri = process.env.DB_URI;
const db_name = process.env.DB_NAME;
const PORT = process.env.PORT;

connectDB(db_uri, db_name)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running at port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
