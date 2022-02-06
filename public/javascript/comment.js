const $commentForm = document.querySelector(".comment-form");

const commentFormHandler = async (event) => {
  const comment_text = $commentForm.querySelector("#comment-text").value;
  const post_id = location.toString().split("/")[
    location.toString().split("/").length - 1
  ];

  const response = await fetch("/api/comments", {
    method: "POST",
    body: JSON.stringify({ comment_text, post_id }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    location.reload();
  } else {
    alert(response.statusText);
  }
};

$commentForm.addEventListener("submit", commentFormHandler);
