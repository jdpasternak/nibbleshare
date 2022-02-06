const $logoutButton = document.querySelectorAll(".logoutButton");

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

$logoutButton.forEach((lob) =>
  lob.addEventListener("click", logoutButtonHandler)
);
