const $loginForm = document.querySelector(".login-form");

const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = $loginForm.querySelector("#login-email").value;
  const password = $loginForm.querySelector("#login-password").value;

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

$loginForm.addEventListener("submit", loginFormHandler);
