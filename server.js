import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import portfinder from "portfinder";
import todoRoutes from "./routes/todoRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error(err));

app.use("/todos", todoRoutes);

const DEFAULT_PORT = process.env.PORT || 5000;
portfinder.basePort = DEFAULT_PORT;

portfinder.getPort((err, port) => {
  if (err) {
    console.error("Error finding available port:", err);
    return;
  }
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});




/*import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import todoRoutes from "./routes/todoRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use("/todos", todoRoutes);
app.listen(5000, () => console.log("Server running on port 5000"));
*/
