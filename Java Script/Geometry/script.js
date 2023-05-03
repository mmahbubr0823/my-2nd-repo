function addPara(){
    const myDiv = document.getElementById('div2');
    const createTag = document.createElement('p');
    createTag.innerHTML= document.getElementById('para1').innerText;
    myDiv.appendChild(createTag);

}
document.getElementById('btn-click').addEventListener('click', function(){
    addPara();
})


const array = [12, 22, 55, 65, 44, 50];
const largest = Math.max(...array);
console.log(largest);