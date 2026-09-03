const express = require("express");
const cors = require("cors");
const multer = require("multer");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

// Allow frontend to communicate with backend
app.use(cors());

// Handle uploaded images
const upload = multer({
    storage: multer.memoryStorage()
});

// Test route
app.get("/", (req, res) => {
    res.json({
        message: "Who Ate My Food? backend is running!"
    });
});

// Analyze endpoint
app.post(
    "/analyze",
    upload.fields([
        { name: "beforeImage", maxCount: 1 },
        { name: "afterImage", maxCount: 1 }
    ]),
    (req, res) => {

        if (!req.files?.beforeImage || !req.files?.afterImage) {
            return res.status(400).json({
                error: "Both BEFORE and AFTER images are required."
            });
        }

        // AI will be connected here later

        res.json({
            foodReduced: true,
            analysis: "Test response. AI not connected yet."
        });
    }
);

app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});