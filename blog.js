function postComment() {
    let commentText = document.getElementById("commentText").value;
    if (commentText.trim() !== "") {
        let commentList = document.getElementById("commentList");
        let newComment = document.createElement("p");
        newComment.textContent = commentText;
        commentList.appendChild(newComment);
        document.getElementById("commentText").value = ""; // Clear textarea
    }
}

function searchBlog() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let posts = document.getElementsByClassName("post");

    for (let i = 0; i < posts.length; i++) {
        let title = posts[i].getElementsByTagName("h2")[0].textContent.toLowerCase();
        if (title.includes(input)) {
            posts[i].style.display = "block";
        } else {
            posts[i].style.display = "none";
        }
    }
}