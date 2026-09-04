const welcomeScreen = document.getElementById("welcomeScreen");
const startButton = document.getElementById("startButton");

const foodScreen = document.getElementById("foodScreen");
const beforeImage = document.getElementById("beforeImage");
const beforeImageButton = document.getElementById("beforeImageButton");

const loadingScreen = document.getElementById("loadingScreen");

const suspicionScreen = document.getElementById("suspicionScreen");
const yesSuspicion = document.getElementById("yesSuspicion");
const noSuspicion = document.getElementById("noSuspicion");

const last = document.getElementById("last");
const afterPhotoScreen = document.getElementById("afterPhotoScreen");
const afterImageButton = document.getElementById("afterImageButton");

const peopleScreen = document.getElementById("peopleScreen");
//const numberOfPeople = document.getElementById("numberOfPeople"); 
const addPeopleButton = document.getElementById("addPeopleButton");
const peopleInputs = document.getElementById("peopleInputs");
const continueButton = document.getElementById("continueButton");

const resultScreen = document.getElementById("resultScreen");
const investigateAgain = document.getElementById("investigateAgainButton");
const printButton = document.getElementById("printButton");
const finishButton = document.getElementById("finishButton");
const missingDescription = document.getElementById("missingDescription");
const caseStatus = document.getElementById("caseStatus");
const suspect = document.getElementById("suspect");
const suspicion = document.getElementById("suspicion");
const evidence = document.getElementById("evidence");

let beforePhotoFile = null;
let afterPhotoFile = null;

startButton.addEventListener("click", function() {
    welcomeScreen.style.display = "none";
    foodScreen.style.display = "block";
});

beforeImageButton.addEventListener("click", function() {

    if (beforeImage.files.length === 0) {
        alert("No image is selected");
    }
    else {
        beforePhotoFile = beforeImage.files[0];

        foodScreen.style.display = "none";
        loadingScreen.style.display = "block";

        setTimeout(function() {
            loadingScreen.style.display = "none";
            suspicionScreen.style.display = "block";
        }, 5000);
    }

});

yesSuspicion.addEventListener("click", function() {
    suspicionScreen.style.display = "none";
    afterPhotoScreen.style.display="block";
});

noSuspicion.addEventListener("click", function() {
    suspicionScreen.style.display ="none";
    last.style.display ="block";
});

afterImageButton.addEventListener("click", function() {

    if(afterImage.files.length === 0) {
        alert("Oh! No image is selected");
    }
    else { 
    
    afterPhotoFile = afterImage.files[0];

    

    afterPhotoScreen.style.display ="none";
    peopleScreen.style.display ="block";
    }
});

addPeopleButton.addEventListener("click", function() {
    
    const input = document.createElement("input");

    input.placeholder = "Enter here";

    peopleInputs.appendChild(input);
});

continueButton.addEventListener("click", async function() {

    const nameInputs = peopleInputs.querySelectorAll("input");

    const people = [];

    nameInputs.forEach(function(input) {

        const name = input.value.trim();

        if (name !== "") {
            people.push(name);
        }

    });

    // Make sure at least two actual names were entered
    if (people.length < 2) {
        alert("Need at least two people");
        return;
    }

    // Create multipart/form-data
    const formData = new FormData();

    // Add the two image files
    formData.append("beforeImage", beforePhotoFile);
    formData.append("afterImage", afterPhotoFile);

    // Backend expects the field name "suspects"
    formData.append("suspects", JSON.stringify(people));

    // Show loading screen while backend works
    peopleScreen.style.display = "none";
    loadingScreen.style.display = "block";

    try {

        const response = await fetch(CONFIG.BACKEND_URL, {
            method: "POST",
            body: formData
        });

        if (!response.ok) {
            throw new Error("Backend request failed");
        }

        const data = await response.json();

        console.log("BACKEND RESPONSE:", data);

        // Hide loading screen
        loadingScreen.style.display = "none";

        // Show result screen
        resultScreen.style.display = "block";

        // Display case status
        caseStatus.textContent = data.caseStatus;

        // Display missing food description
        missingDescription.textContent =
            "Missing: " + data.missingDescription;

        // -----------------------------------------
        // FOOD WAS REDUCED
        // -----------------------------------------

        if (data.foodReduced === true) {

            resultScreen.querySelector("h2").textContent =
                data.resultMessage;

            suspect.textContent =
                "Primary Suspect: " + data.suspect;

            suspicion.textContent =
                "Suspicion: " + data.suspicion + "%";

            evidence.textContent =
                "Evidence: " + data.evidence;

        }

        // -----------------------------------------
        // FOOD WAS NOT REDUCED
        // -----------------------------------------

        else {

            resultScreen.querySelector("h2").textContent =
                data.resultMessage;

            suspect.textContent =
                "No suspect required.";

            suspicion.textContent =
                "False alarm! No significant food reduction detected.";

            evidence.textContent =
                "Case closed. Nobody is being blamed this time. 😂";

        }

    }

    catch (error) {

        console.error("BACKEND ERROR:", error);

        loadingScreen.style.display = "none";
        peopleScreen.style.display = "block";

        alert(
            "Could not connect to the food detective backend. Make sure the backend server is running."
        );

    }

});
investigateAgain.addEventListener("click", function () {
    resultScreen.style.display = "none";
    afterPhotoScreen.style.display ="block";
});

printButton.addEventListener("click", function() {

    window.print();

});

finishButton.addEventListener("click", function() {
    resultScreen.style.display = "none";
    welcomeScreen.style.display = "block";

});