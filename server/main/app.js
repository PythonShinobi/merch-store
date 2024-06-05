// server/main/app.js
import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import env from "dotenv";

import apiRouter from "./api.js";

// Configuration for the server.
env.config();

// Create an Express application.
const app = express();

// Define the origins from which the frontend will be making requests.
const allowedOrigins = [ process.env.HOST, process.env.PHONE_ADDRESS ]

// Configure CORS to allow requests from specified origins.
app.use(cors({
	origin: function (origin, callback) {
		// Check if the origin is included in the allowedOrigins array or if it's undefined (which happens with same-origin requests)
		if (!origin || allowedOrigins.includes(origin)) {
			callback(null, true);  // Allow the request
		} else {
			callback(new Error("Not allowed by CORS"));  // Deny the request
		}
	},
	credentials: true  // Allow cookies to be sent along with the request.
}));

// Logging middleware: Log HTTP requests to the console in a development-friendly format
app.use(logger('dev'));

// Parse incoming JSON requests
app.use(bodyParser.json());

// Set up body-parser middleware to parse URL-encoded request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Parse cookies attached to the HTTP requests
app.use(cookieParser());

app.use("/api", apiRouter);

export default app;