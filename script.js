const welcomeScreen = document.getElementById("welcomeScreen");
const startButton = document.getElementById("startButton");

const foodScreen = document.getElementById("foodScreen");
const beforeImage = document.getElementById("beforeImage");
const beforeImageButton = document.getElementById("beforeImageButton");

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
    suspicionScreen.style.display = "block";
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

continueButton.addEventListener("click", function() {

    const nameInputs = peopleInputs.querySelectorAll("input");

    const people = [];

    nameInputs.forEach(function(input) {
        
        const name = input.value.trim();

        if (name !== "") {
        people.push(name);
    }
    });

    if (people.length < 2) {
        alert("Need atleast two people");
    }
    else { 
        peopleScreen.style.display ="none";
        resultScreen.style.display ="block";
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