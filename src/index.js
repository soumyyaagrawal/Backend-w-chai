import dotenv from "dotenv";
dotenv.config({path: "./.env"});
import express from "express";
import app from "./app.js"
import connectDB from "./connection/index.js";


// (async () => {                                           IIFE
//   try {
//     await mongoose.connect(`$(process.env.mongodb_url)/$
//         (db_name)`);
//     console.log("Connected to MongoDB");
//     app.on("error", (err) => {
//       console.error("Server error:", err);
      
//         });

//     app.listen(process.env.port, () => {
//         console.log(`Server is running on port ${process.env.port}`);
//       });

//   } catch (error) {
//     console.error("Error connecting  to MongoDB:", error);
//   }
// })();

// Connect to MongoDB
connectDB()
  .then(() => {
  app.listen(process.env.port, () => {
      console.log(`Server is running on port ${process.env.port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
