const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const http = require("http");
const { Server } = require("socket.io");
const bodyParser = require("body-parser");
const mainRouter = require("./routes/main.router");

// Config load karo
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));

// Routes
app.use("/", mainRouter);

const httpServer = http.createServer(app);

// Socket.io setup
const io = new Server(httpServer, {
    cors: { origin: "*", methods: ["GET", "POST"] }
});

io.on("connection", (socket) => {
    socket.on("joinRoom", (userID) => {
        socket.join(userID);
        console.log("User joined:", userID);
    });
});

// Database Connection
const mongoURI = process.env.MONGODB_URI;
mongoose.connect(mongoURI)
    .then(() => console.log("MongoDB connected!"))
    .catch((err) => console.error("Unable to connect:", err));

// Server Start
httpServer.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
});
