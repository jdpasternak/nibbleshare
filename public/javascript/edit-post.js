async function editPostFormHandler(event) {
  event.preventDefault();

  const content = document.querySelector(`textarea[name="content"]`).value;
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  console.log(JSON.stringify({ content }));

  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({ content }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    location.replace(`/post/${id}`);
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".edit-post-form")
  .addEventListener("submit", editPostFormHandler);
