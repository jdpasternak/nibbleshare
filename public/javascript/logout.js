const $logoutButton = document.querySelector("#logoutButton");

const logoutButtonHandler = async (event) => {
  event.preventDefault();

  const response = await fetch("/api/users/logout", {
    method: "POST",
  });

  if (response.ok) {
    location.reload();
  } else {
    alert(response.statusText);
  }
};

$logoutButton.addEventListener("click", logoutButtonHandler);
