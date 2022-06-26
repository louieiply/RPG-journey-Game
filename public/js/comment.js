const postComment = async (event) => {
    event.preventDefault();
    const user_id = document.querySelector("#user_id").textContent;
    const comment_text = document.querySelector("#comment_text").value;
    const game_id = document.querySelector("#game_id").textContent;
    if(comment_text.trim().length === 0){
        alert("return");
        return;
    }
    const mapping = {
        "comment_text": comment_text,
        "game_id": parseInt(game_id),
    }
    const response = await fetch("../api/comments",{
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mapping),
    });
    
    alert(response.ok);
    if(response.ok) {
        window.location.reload();
    }
    else{
        alert(response.statusText);
        alert('Input Failed');
    }
}
const sendbutton = document.querySelector("#sendCommentButton");
sendbutton.addEventListener("click",postComment);