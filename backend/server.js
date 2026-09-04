const express = require("express");
const cors = require("cors");
const multer = require("multer");
const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();

const app = express();
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

const PORT = process.env.PORT || 5000;

// Allow the frontend to communicate with the backend
app.use(cors());

// Allow JSON data in requests
app.use(express.json());

// Store uploaded images temporarily in memory
const upload = multer({
    storage: multer.memoryStorage()
});

// --------------------------------------------------
// TEST ROUTE
// --------------------------------------------------

app.get("/", (req, res) => {
    res.json({
        message: "Who Ate My Food? backend is running!"
    });
});

// --------------------------------------------------
// ANALYZE FOOD
// --------------------------------------------------

app.post(
    "/analyze",

    upload.fields([
        {
            name: "beforeImage",
            maxCount: 1
        },
        {
            name: "afterImage",
            maxCount: 1
        }
    ]),

    async (req, res) => {

        // Check if BEFORE image exists
        if (!req.files?.beforeImage) {
            return res.status(400).json({
                error: "BEFORE image is required."
            });
        }

        // Check if AFTER image exists
        if (!req.files?.afterImage) {
            return res.status(400).json({
                error: "AFTER image is required."
            });
        }

        // Get the uploaded images
       const beforeImage = req.files.beforeImage[0];
const afterImage = req.files.afterImage[0];

const beforeMimeType =
    beforeImage.mimetype === "application/octet-stream"
        ? "image/jpeg"
        : beforeImage.mimetype;

const afterMimeType =
    afterImage.mimetype === "application/octet-stream"
        ? "image/jpeg"
        : afterImage.mimetype;

console.log("BEFORE MIME TYPE:", beforeImage.mimetype);
console.log("AFTER MIME TYPE:", afterImage.mimetype);

const suspectsText = req.body.suspects;

let suspects;

try {
    suspects = JSON.parse(suspectsText);
} catch (error) {
    return res.status(400).json({
        success: false,
        error: "Invalid suspect list."
    });
}

if (!Array.isArray(suspects) || suspects.length === 0) {
    return res.status(400).json({
        success: false,
        error: "At least one suspect is required."
    });
}

console.log("SUSPECTS RECEIVED:");
console.log(suspects);




        console.log("BEFORE image received:");
        console.log(beforeImage.originalname);

        console.log("AFTER image received:");
        console.log(afterImage.originalname);

        try {

            const prompt = `
You are analyzing a food comparison for a fun application.

The FIRST image is the BEFORE image.
The SECOND image is the AFTER image.

Compare the two images carefully.

Determine whether the visible amount of food has decreased.

Return your answer using EXACTLY these three lines:

FOOD_REDUCED: YES or NO
MISSING: a short description of what appears to be missing or reduced (but dont mention the quantity of food)

If the food has NOT decreased, return:

FOOD_REDUCED: NO
MISSING:Nothing significant appears to be missing

Do NOT identify a person who ate the food.
Do NOT claim that a person actually stole the food.

Do not add extra explanations, numbered lists, or Markdown.
`;

            
            const response = await ai.interactions.create({
                model: "gemini-3-flash-preview",
                input: [
                    {
                        type: "image",
                        mime_type: beforeMimeType,
                        data: beforeImage.buffer.toString("base64")
                    },
                    {
                        type: "image",
                        mime_type: afterMimeType,
                        data: afterImage.buffer.toString("base64")
                    },
                    {
                        type: "text",
                        text: prompt
                    }
                ]
            });

            console.log("AI RESPONSE:");
            console.log(response);
            const aiText = response.output_text;
            console.log("AI TEXT:");
            console.log(aiText);


            const foodReducedMatch = aiText.match(/FOOD_REDUCED:\s*(YES|NO)/i);
            const foodReduced =
    foodReducedMatch &&
    foodReducedMatch[1].toUpperCase() === "YES";

            const missingMatch = aiText.match(/MISSING:\s*(.+)/i);
            const missingDescription =
    missingMatch
        ? missingMatch[1].trim()
        : "Unable to determine.";

    let suspect = null;
    let suspicion = null;
    let evidence = null;
    let resultMessage = "Calm down brother... You're just hungry";
    let caseStatus = "EAT SNICKERS";
    const evidenceList = [
    "No Evidence Needed... Nee thanne🫵!",
    "Had suspiciously convenient access to the the food🤔",
    "Bro u lowkey look sus🦊",
    "Was mysteriously nearby when the food disappeared🍑",
    "Claims to know nothing. Extremely sus.🤨",
    "Was within a suspiciously small distance of the crime scene🏃",
    "Don't try to deny it... You were rubbing your fingers in your jeans🫣"
];

if (foodReduced) {
    const randomIndex = Math.floor(Math.random() * suspects.length);
    suspect = suspects[randomIndex];

    suspicion = Math.floor(Math.random() * 31) + 70;

    const evidenceIndex =
        Math.floor(Math.random() * evidenceList.length);

    evidence = evidenceList[evidenceIndex];

    resultMessage = "🚨 FOOD CRIME DETECTED";
    caseStatus = "WHO TOOK MY FOOODD??!!";
}

            res.json({
    success: true,
    foodReduced: foodReduced,
    missingDescription: missingDescription,
    suspect: suspect,
    suspicion: suspicion,
    evidence: evidence,
    resultMessage: resultMessage,
    caseStatus: caseStatus
});

        } catch (error) {

            console.error("AI ERROR:");
            console.error(error);

            res.status(500).json({
                error: "AI analysis failed.",
                details: error.message
            });
        }
    }
);

// --------------------------------------------------
// START SERVER
// --------------------------------------------------

app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});