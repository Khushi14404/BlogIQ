import express from "express";
import dotenv from "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import adminRouter from "./routes/adminRoutes.js";
import blogRouter from "./routes/blogRoutes.js";

const app = express();

await connectDB(); // Connect to the database

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.send("Welcome to BlogIQ API");
});

app.use("/api/admin", adminRouter);
app.use("/api/blog", blogRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
export default app; // Exporting the app for testing purposes
// This allows the app to be imported in test files or other modules
// and used without starting the server immediately, which is useful for unit testing.
// The server can be started by running `node server.js` or `npm start`
// depending on the scripts defined in package.json.
