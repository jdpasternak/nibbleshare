const $loginForm = document.querySelector(".login-form");
const $signupForm = document.querySelector(".signup-form");

const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = $loginForm.querySelector("#login-email").value.trim();
  const password = $loginForm.querySelector("#login-password").value.trim();

  if (!email && !password) {
    if (!document.querySelector("#emptyLoginAlert")) {
      const emptyAlert = document.createElement("span");
      emptyAlert.classList = "alert alert-error";
      emptyAlert.id = "emptyLoginAlert";
      emptyAlert.innerText = "Email or password missing";
      $loginForm.appendChild(emptyAlert);
    }
  }
  const response = await fetch("/api/users/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = $signupForm.querySelector("#signup-username").value.trim();
  const email = $signupForm.querySelector("#signup-email").value.trim();
  const password = $signupForm.querySelector("#signup-password").value.trim();

  const response = await fetch("/api/users", {
    method: "POST",
    body: JSON.stringify({ username, email, password }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
};

$loginForm.addEventListener("submit", loginFormHandler);
$signupForm.addEventListener("submit", signupFormHandler);
