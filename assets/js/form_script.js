document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Reset previous error messages
  document.querySelectorAll(".error-message").forEach(function (el) {
    el.textContent = "";
  });

  // Get form field values
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const id = document.getElementById("id").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document
    .getElementById("confirmPassword")
    .value.trim();

  let isValid = true;

  // First Name validation
  if (firstName === "") {
    document.getElementById("firstNameError").textContent =
      "First Name is Required.";
    isValid = false;
  }

  // Last Name validation
  if (lastName === "") {
    document.getElementById("lastNameError").textContent =
      "Last Name is Required.";
    isValid = false;
  }

  // ID validation
  if (id === "") {
    document.getElementById("idError").textContent = "ID is Required.";
    isValid = false;
  }

  // Email validation
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is Required.";
    isValid = false;
  }

  // Password validation
  if (password === "") {
    document.getElementById("passwordError").textContent =
      "Password is Required.";
    isValid = false;
  }

  // Confirm Password validation
  if (confirmPassword === "") {
    document.getElementById("confirmPasswordError").textContent =
      "Confirm Password is Required.";
    isValid = false;
  } else if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").textContent =
      "Passwords do not match.";
    isValid = false;
  }

  // If all fields are valid, submit the form or show success message
  if (isValid) {
    alert("Form submitted successfully!");
  }
});
