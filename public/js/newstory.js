const postStory = async () => {
    const user_id = document.querySelector("#user_id").textContent;
    const description = document.querySelector("#storyDescription").value;
    const category = document.querySelector("#inputCategory");
    const storyname = document.querySelector("#storyName").value;
    const categoryId = category.options[category.selectedIndex].id;
    const mapping = {
        "author_id":parseInt(user_id),
        "game_name":storyname,
        "description":description,
        "category_id":parseInt(categoryId),
    }
    const response = await fetch("/api/games",{
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify(mapping),
    });
        if(response.ok){
            document.location.replace('/profile');
        }
}

document.querySelector("#newStoryForm").addEventListener("submit",postStory);