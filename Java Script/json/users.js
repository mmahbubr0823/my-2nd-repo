function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then (res => res.json())
    .then (data => displayUser(data))
}

function displayUser(data){
    const userList = document.getElementById('usersList');
    for(const user of data){
       const li = document.createElement('li');
       li.innerHTML = user.email;
       userList.appendChild(li);
    }
}
