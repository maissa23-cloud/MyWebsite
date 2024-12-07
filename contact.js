function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const formMessage = document.getElementById("formMessage");

    if (name && email && message) {
        formMessage.textContent = "Thank you for reaching out!";
    } else {
        formMessage.textContent = "Please fill out all fields.";
    }
}
