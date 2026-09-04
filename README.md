<img width="1280" height="640" alt="git (1)" src="https://github.com/user-attachments/assets/8920b256-2ba8-4988-b824-5351134eb4bd" />



# WHO STOLE MY FOOD 🎯


## Basic Details
### Team Name: Noobiess


### Team Members
- Member 1: [Joana Dinit] - [Model Engineering College, Thrikkakara]
- Member 2: [Aryalakshmi ES] - [Model Engineering College, Thrikkakara]

### Project Description
Who Ate My Food? is a fun, interactive AI-powered food investigation web application that determines whether our food has been reduced by comparing before and after images. If a change is detected, the system analyzes what appears to be missing and generates a fictional investigation result by randomly selecting a suspect from the list of people provided by the user, along with a random suspicion percentage and humorous evidence.

### The Problem (that doesn't exist)
Someone ate your food.
You have no witnesses, no evidence, and absolutely no idea who did it.
The only thing you have left is a before photo, an after photo, and a feeling of betrayal.

### The Solution (that nobody asked for)
Food is an emotion. And you totally cannot let another person mess it up. 
Who Ate My Food? uses AI to compare before and after photos of your food and detect whether anything has mysteriously disappeared.
And based on  "evidences" it will blame one of the people you suspect. Cuz sometimes blaming others for your own carelessness is the best form of therapy.

## Technical Details
### Technologies/Components Used
For Software:
-HTML5
-CSS3
-JavaScript
-Node.js
-Express.js
-Google Gemini AI
-Multer
-CORS
-dotenv
-Git & GitHub
-Postman

For Hardware:
- None
- 
### Implementation
For Software:
# Installation
npm install
# Run
node server.js

### Project Documentation
For Software:

# Screenshots (Add at least 3)
![Screenshot1](Add screenshot 1 here with proper name)
*Add caption explaining what this shows*

![Screenshot2](Add screenshot 2 here with proper name)
*Add caption explaining what this shows*

![Screenshot3](Add screenshot 3 here with proper name)
*Add caption explaining what this shows*

# Diagrams
                         ┌───────────────────────┐
                         │         USER          │
                         └───────────┬───────────┘
                                     │
                                     ▼
                         ┌───────────────────────┐
                         │    WELCOME SCREEN     │
                         │ "WHO ATE MY FOOD?"    │
                         └───────────┬───────────┘
                                     │
                              Start Investigation
                                     │
                                     ▼
                         ┌───────────────────────┐
                         │   UPLOAD BEFORE       │
                         │       IMAGE           │
                         │       📸🍕            │
                         └───────────┬───────────┘
                                     │
                                     ▼
                         ┌───────────────────────┐
                         │   SUSPICION SCREEN    │
                         │ Something suspicious?│
                         └───────────┬───────────┘
                                     │
                                YES / CHECK
                                     │
                                     ▼
                         ┌───────────────────────┐
                         │   UPLOAD AFTER        │
                         │       IMAGE           │
                         │       📸🍕            │
                         └───────────┬───────────┘
                                     │
                                     ▼
                         ┌───────────────────────┐
                         │    ENTER SUSPECTS     │
                         │  Alex, Sam, Mia, etc. │
                         └───────────┬───────────┘
                                     │
                              Click Continue
                                     │
                                     ▼
              ╔══════════════════════════════════════════╗
              ║             FRONTEND (JS)                ║
              ║                                          ║
              ║  Creates FormData containing:            ║
              ║  • BEFORE image                          ║
              ║  • AFTER image                           ║
              ║  • Suspect list                          ║
              ╚══════════════════╤═══════════════════════╝
                                 │
                         HTTP POST /analyze
                                 │
                                 ▼
              ╔══════════════════════════════════════════╗
              ║          NODE.JS + EXPRESS               ║
              ║              BACKEND                     ║
              ║                                          ║
              ║  • Receives uploaded images              ║
              ║  • Receives suspect list                 ║
              ║  • Processes the request                 ║
              ╚══════════════════╤═══════════════════════╝
                                 │
                          Send images to AI
                                 │
                                 ▼
              ╔══════════════════════════════════════════╗
              ║             GOOGLE GEMINI AI             ║
              ║                                          ║
              ║  Compares BEFORE and AFTER images        ║
              ║                                          ║
              ║  Determines:                             ║
              ║  • Is food reduced?                      ║
              ║  • What appears to be missing?           ║
              ╚══════════════════╤═══════════════════════╝
                                 │
                         AI analysis returned
                                 │
                                 ▼
              ╔══════════════════════════════════════════╗
              ║          BACKEND INVESTIGATION           ║
              ║                                          ║
              ║       Was food reduced?                  ║
              ║             /       \                    ║
              ║           NO         YES                 ║
              ║           │           │                  ║
              ║           ▼           ▼                  ║
              ║      FALSE ALARM    RANDOMLY SELECT      ║
              ║      / CASE CLOSED  A SUSPECT            ║
              ║                       │                  ║
              ║                       ├─ Suspicion %    ║
              ║                       │                  ║
              ║                       └─ Funny Evidence ║
              ╚══════════════════════╤═══════════════════╝
                                     │
                              JSON RESPONSE
                                     │
                                     ▼
              ╔══════════════════════════════════════════╗
              ║             FRONTEND (JS)                ║
              ║                                          ║
              ║  Receives backend result                 ║
              ║  and updates the result screen           ║
              ╚══════════════════════╤═══════════════════╝
                                     │
                        ┌────────────┴────────────┐
                        │                         │
                        ▼                         ▼
                 FOOD NOT REDUCED          FOOD REDUCED
                        │                         │
                        ▼                         ▼
                ┌───────────────┐       ┌─────────────────┐
                │  FALSE ALARM  │       │ FOOD CRIME 🚨  │
                │               │       │                 │
                │ "Enjoy your   │       │ Missing food    │
                │ food!"        │       │ Suspect         │
                └───────────────┘       │ Suspicion %     │
                                        │ Evidence        │
                                        └─────────────────┘


### Project Demo
# Video
[Add your demo video link here]
*Explain what the video demonstrates*

# Additional Demos
[Add any extra demo materials/links]

## Team Contributions
- [Name 1]: [Specific contributions]
- [Name 2]: [Specific contributions]
- [Name 3]: [Specific contributions]

---
Made with ❤️ at TinkerHub Useless Projects 

![Static Badge](https://img.shields.io/badge/TinkerHub-24?color=%23000000&link=https%3A%2F%2Fwww.tinkerhub.org%2F)
![Static Badge](https://img.shields.io/badge/UselessProjects--26-26?link=https%3A%2F%2Ftinkerhub.org%2Fevents%2F1M8ORET9A1%2Fuseless-projects-3.0)



