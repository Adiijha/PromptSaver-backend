import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
// import { errorHandler } from "./middlewares/err.middleware.js";

const app = express();

// Define CORS options
const corsOptions = {
  origin: [
    "chrome-extension://oodmkdpnacjmakdncodhfjnhmcfeknca", // Extension origin
    "http://localhost:3000" // Backend for testing
  ],
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"]
};

console.log("CORS Origins Allowed:", corsOptions.origin);

// Apply CORS Middleware
app.use(cors(corsOptions));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Routes
import chatRouter from "./routes/chat.routes.js";
app.use("/api", chatRouter);

// app.use(errorHandler);

export { app };
