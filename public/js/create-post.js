async function createPostHandler(event) {
    event.preventDefault();
    //get info we need
    const title = document.querySelector("#new-post-title").value.trim();
    const body = document.querySelector("#new-post-body").value.trim();
    // const user_id = 1 //TODO set to session auth
    console.log(title, body)

    if (title && body) {
      //make sure we have comment text
      const response = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          body,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      //check if all good
      if (response.ok) {
        // document.location.replace("/homepage"); //replace with post id
        localStorage.setItem("blog-post", JSON.stringify({postTitle: title, postBody: body}));
        renderMessage();
      } else {
        alert(response.statusText); // find better way to do this
    }
  }
}
document
  .querySelector("#create-post-btn")
  .addEventListener("click", createPostHandler);


function renderMessage() {
  var lastPost = JSON.parse(localStorage.getItem("blog-post"));
  if (lastPost !== null) {
    document.querySelector(".message").textContent = lastPost.postTitle + 
    " received post " + lastPost.postContent
  }
}
