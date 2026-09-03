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

startButton.addEventListener("click", function() {
    welcomeScreen.style.display = "none";
    foodScreen.style.display = "block";
});

beforeImageButton.addEventListener("click", function() {
    foodScreen.style.display = "none";
    suspicionScreen.style.display = "block";
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
    afterPhotoScreen.style.display ="none";
    peopleScreen.style.display ="block";
});

addPeopleButton.addEventListener("click", function() {
    /*const count = Number(numberOfPeople.value);
    peopleInputs.innerHTML = "";
    for(let i=0; i<count; i++)
    { 
    const input = document.createElement("input");
    input.placeholder = "Enter person's name";
    peopleInputs.appendChild(input);
    }*/
    const input = document.createElement("input");

    input.placeholder = "Enter here";

    peopleInputs.appendChild(input);
});

continueButton.addEventListener("click", function() {
    peopleScreen.style.display ="none";
    resultScreen.style.display ="block";
    const nameInputs = peopleInputs.querySelectorAll("input");
    
    const people = [];
    nameInputs.forEach(function(input) {
        const name = input.value;
        people.push(name);

});
     console.log(people);

});