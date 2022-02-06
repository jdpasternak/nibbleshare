const $newPostForm = document.querySelector(".new-post-form");

const newPostFormHandler = async (event) => {
  event.preventDefault();

  const title = $newPostForm.querySelector("#new-post-title").value;
  const content = $newPostForm.querySelector("#new-post-content").value;

  const response = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({ title, content }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    location.replace(`/dashboard`);
  } else {
    alert(response.statusText);
  }
};

$newPostForm.addEventListener("submit", newPostFormHandler);
