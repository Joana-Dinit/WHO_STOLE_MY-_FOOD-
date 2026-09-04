
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
const investigateAgain = document.getElementById("investigateAgain");
const printButton = document.getElementById("printButton");
const finishButton = document.getElementById("finishButton");

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
    loadingScreen.style.display ="block";
    setTimeout(function() {
        loadingScreen.style.display = "none";
        suspicionScreen.style.display = "block";
    }, 10000);
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

    if (people.length < 2) {
        alert("Need at least two people");
        return;
    }

    const formData = new FormData();

    formData.append("beforeImage", beforePhotoFile);
    formData.append("afterImage", afterPhotoFile);
    formData.append("suspects", JSON.stringify(people));

    try {

        const response = await fetch(`${CONFIG.BACKEND_URL}/analyze`, {
            method: "POST",
            body: formData
        });

        if (!response.ok) {
            throw new Error("Backend request failed");
        }

        const data = await response.json();

        resultScreen.querySelector("h2").textContent = data.resultMessage;

        if (data.foodReduced) {

            suspect.textContent = "Primary Suspect: " + data.suspect;

            suspicion.textContent =
                "Suspicion: " + data.suspicion + "%";

            evidence.textContent =
                "Evidence: " + data.evidence;

        } else {

            suspect.textContent = "🚨 False Alarm!";

            suspicion.textContent =
                "No significant food reduction detected.";

            evidence.textContent =
                "Case closed. Your food may have simply looked suspicious. 😂";

        }

        peopleScreen.style.display = "none";
        resultScreen.style.display = "block";

    } catch (error) {

        console.error(error);

        alert(
            "Could not connect to the food detective backend. Make sure the server is running."
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