const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const btnSubmit = document.getElementById("btnSubmit");
const errorFirstName = document.getElementById("errorFirstName");
const errorLastaName = document.getElementById("errorLastaName");
const errorEmail = document.getElementById("errorEmail");
const errorPassword = document.getElementById("errorPassword");

btnSubmit.addEventListener("click", () => {
  if (!isValidEmail(email.value)) {
    errorEmail.textContent = "Invalid email!";
  } else {
    errorEmail.textContent = "";
  }

  if (firstName.value === "") {
    errorFirstName.textContent = "First Name cannot be empty";

    firstName.style.borderColor = "red";

    firstName.placeholder = "";

    const img = document.createElement("img");
    img.src = "./icon-error.svg";
    img.classList = "errorImg";

    errorFirstName.appendChild(img);
  }

  if (lastName.value === "") {
    errorLastaName.textContent = "Last Name cannot be empty";

    lastName.style.borderColor = "red";

    lastName.placeholder = "";

    const img = document.createElement("img");
    img.src = "./icon-error.svg";
    img.classList = "errorImg";

    errorLastaName.appendChild(img);
  }

  if (email.value === "") {
    errorEmail.textContent = "Email cannot be empty";

    email.style.borderColor = "red";

    email.placeholder = "email@example/com";

    const img = document.createElement("img");
    img.src = "./icon-error.svg";
    img.classList = "errorImg";

    errorEmail.appendChild(img);
  }

  if (password.value === "") {
    errorPassword.textContent = "Password cannot be empty";

    password.style.borderColor = "red";

    password.placeholder = "";

    const img = document.createElement("img");
    img.src = "./icon-error.svg";
    img.classList = "errorImg";

    errorPassword.appendChild(img);
  }
});

function isValidEmail(e) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(e);
}
