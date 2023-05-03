function displayPost(){
    fetch ('https://jsonplaceholder.typicode.com/posts')
    .then (res => res.json())
    .then (data =>loadPost(data))
}

function loadPost(posts){
    const postList = document.getElementById('post-container');
    for(const post of posts){
        const element = document.createElement('div');
        element.classList.add('post');
        element.innerHTML =    `
        <p> UserId: ${post.userId} </p>
        <p> Id: ${post.id} </p>
        <h3> Description: ${post.title} </h3>
        <h5> Details: ${post.body} </h5>

        `
        postList.appendChild(element);
    }
}