const randomUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => loadUser(data))
}
const loadUser = user =>{
    const Name = user.results[0].name.title + ' ' + user.results[0].name.first + ' ' + user.results[0].name.last;
    document.getElementById('name').innerHTML = Name;
    document.getElementById('gender').innerHTML = user.results[0].gender;
}
randomUser();
