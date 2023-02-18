function validateForm(event) {
  event.preventDefault();
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  if (!nameInput.checkValidity()) {
    alert("Please enter your name.");
    return;
  }

  if (!emailInput.checkValidity()) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!messageInput.checkValidity()) {
    alert("Please enter a message.");
    return;
  }

  alert("Form submitted successfully!");
}
