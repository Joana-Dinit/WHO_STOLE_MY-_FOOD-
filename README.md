<img width="1280" height="640" alt="git (1)" src="https://github.com/user-attachments/assets/8920b256-2ba8-4988-b824-5351134eb4bd" />

<<<<<<< HEAD
# Who Ate My Food? 🍕🔎

## Basic Details
=======


# WHO STOLE MY FOOD 🎯


## Basic Details
### Team Name: Noobiess
>>>>>>> 42991055b8d0ef942531fe29220e8b6923ccf96e

### Team Name: Noobiess

### Team Members
<<<<<<< HEAD

- Member 1: Aryalakshmi E S - Model Engineering College Thrikkakara
- Member 2: Joana Dinit - Model Engineering College Thrikkakara

### Project Description

Who Ate My Food? is a funny food investigation web application that investigates suspiciously disappearing food.

Users upload a BEFORE photo and an AFTER photo of their food. The application can use AI image analysis to determine whether the food appears to have decreased.

It then generates a ridiculous investigation, randomly suspects someone, and provides funny evidence.

The application is intentionally fictional and does not actually identify who ate the food..

### The Problem (that doesn't exist)

Food mysteriously disappears from the refrigerator, and nobody ever admits eating it. 😭

This project solves the extremely serious problem of finding someone to blame for missing food.

### The Solution (that nobody asked for)

The application acts as a completely unreliable food detective.

The user:

1. Uploads a BEFORE photo of the food.
2. Confirms whether something feels "fisshhyy".
3. Uploads an AFTER photo.
4. Adds the names of people who were around the food.
5. Continues to a fictional investigation result.

The planned investigation result includes:

- A randomly selected suspect
- A suspicion percentage
- Ridiculous fake evidence

The application is intentionally fictional and does not actually identify who ate the food.

## Technical Details

### Technologies/Components Used

- HTML
- CSS
- JavaScript
- Gemini API — planned
- Backend API — planned

=======
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
>>>>>>> 42991055b8d0ef942531fe29220e8b6923ccf96e
### Implementation

For Software:

- Frontend built using HTML, CSS and JavaScript
- Users can enter the people living at home
- Users can upload BEFORE and AFTER food photos
- JavaScript handles user input and photo selection
- AI image analysis will be integrated using the Gemini API
- Backend will handle the AI API request securely
- Random suspect and funny evidence generation will be added
- Frontend will be deployed using Vercel
- Backend will be deployed using Render

# Installation
<<<<<<< HEAD

[commands]

# Run

[commands]
=======
npm install
# Run
node server.js
>>>>>>> 42991055b8d0ef942531fe29220e8b6923ccf96e

### Project Documentation

For Software:

# Screenshots (Add at least 3)

### Screenshots

![Suspicion screen](Something%20fisshhyy.png)

_The food detective asks whether something suspicious happened and lets the user choose whether to investigate further._

![Screenshot2](Add screenshot 2 here with proper name)
_Add caption explaining what this shows_

![Screenshot3](Add screenshot 3 here with proper name)
_Add caption explaining what this shows_

# Diagrams
<<<<<<< HEAD

![Workflow](Add your workflow/architecture diagram here)
_Add caption explaining your workflow_

For Hardware:

# Schematic & Circuit

![Circuit](Add your circuit diagram here)
_Add caption explaining connections_

![Schematic](Add your schematic diagram here)
_Add caption explaining the schematic_

# Build Photos

![Components](Add photo of your components here)
_List out all components shown_

![Build](Add photos of build process here)
_Explain the build steps_

![Final](Add photo of final product here)
_Explain the final build_
=======
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

>>>>>>> 42991055b8d0ef942531fe29220e8b6923ccf96e

### Project Demo

# Video

[Add your demo video link here]
_Explain what the video demonstrates_

# Additional Demos

[Add any extra demo materials/links]

## Team Contributions

- ## Team Contributions

### Aryalakshmi E S

- Frontend development
- HTML/CSS/JavaScript implementation
- User interaction and screen navigation
- Photo upload handling
- People input and validation
- Result-screen functionality
- Print and restart functionality

### Joana Dinit

- Backend development
- Gemini API integration
- AI image-analysis workflow
- Backend/frontend integration

---

Made with ❤️ at TinkerHub Useless Projects

![Static Badge](https://img.shields.io/badge/TinkerHub-24?color=%23000000&link=https%3A%2F%2Fwww.tinkerhub.org%2F)
![Static Badge](https://img.shields.io/badge/UselessProjects--26-26?link=https%3A%2F%2Ftinkerhub.org%2Fevents%2F1M8ORET9A1%2Fuseless-projects-3.0)
