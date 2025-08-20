// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

const form = document.querySelector("form");
const contactPage = document.getElementById("contact-page");
const submitButton = document.getElementById("submit-button");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop the page from refreshing

    // replace contents of the contact page with thank you message
    contactPage.innerHTML = "<p id='thank-you'>Thank you for your message</p>";

    // style the thank you message
    const thankYouMsg = document.getElementById("thank-you");
    thankYouMsg.style.fontSize = "24px";
    thankYouMsg.style.textAlign = "center"; // optional: center it nicely
});