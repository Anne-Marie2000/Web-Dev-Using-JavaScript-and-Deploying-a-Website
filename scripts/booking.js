/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let dailyRate = 35; // default = full day
let selectedDays = new Set(); // store unique days
const costDisplay = document.getElementById("calculated-cost");

const days = document.querySelectorAll(".day-selector li");
const fullBtn = document.getElementById("full");
const halfBtn = document.getElementById("half");
const clearBtn = document.getElementById("clear-button");


/********* helper: calculate cost *********/

function calculateCost() {
    const totalCost = selectedDays.size * dailyRate;
    costDisplay.textContent = totalCost;
}

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

days.forEach(day => {
    day.addEventListener("click", () => {
        if (!day.classList.contains("clicked")) {
            day.classList.add("clicked");
            selectedDays.add(day.id); // use id so no duplicates
        } else {
            day.classList.remove("clicked");
            selectedDays.delete(day.id);
        }
        calculateCost();
    });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearBtn.addEventListener("click", () => {
    days.forEach(day => day.classList.remove("clicked"));
    selectedDays.clear();
    costDisplay.textContent = 0;
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfBtn.addEventListener("click", () => {
    dailyRate = 20;
    halfBtn.classList.add("clicked");
    fullBtn.classList.remove("clicked");
    calculateCost();
});


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullBtn.addEventListener("click", () => {
    dailyRate = 35;
    fullBtn.classList.add("clicked");
    halfBtn.classList.remove("clicked");
    calculateCost();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

fullBtn.classList.add("clicked");
halfBtn.classList.remove("clicked");
calculateCost();