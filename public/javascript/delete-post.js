const $deletePostButton = document.querySelector(".delete-button");

const deletePostButtonHandler = async (event) => {
  event.preventDefault();
  const post_id = location.toString().split("/")[
    location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/posts/${post_id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
};

$deletePostButton.addEventListener("click", deletePostButtonHandler);
