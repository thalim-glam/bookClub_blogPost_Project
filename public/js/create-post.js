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
        localStorage.setItem("blog-post", JSON.stringify({postTitle: title, postBody: body}));
        var blogPost = JSON.parse(localStorage.getItem("blog-post"));
        console.log("Testinghere");
 
        renderMessage();
        
      } else {
        alert(response.statusText); // find better way to do this
    }
  }
}
document
  .querySelector(".create-post-btn")
  .addEventListener("click", createPostHandler);


function renderMessage() {
  var lastpost = JSON.parse(localStorage.getItem("blog-post"));
  console.log(lastpost);
  if (lastpost !== null) {
    document.location.replace("/dashboard");
    //document.querySelector(".message").textContent = lastPost.postTitle + " received post " + lastPost.postBody
  }
}
