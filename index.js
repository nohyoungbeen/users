const users = [
    {
        id:1,
        name:'a',
        username:'b',
        email:'c',
        phone:"010-01010-1111"
    }
]

//1.인풋
const putUser = document.querySelector('#putNumber')
const putName = document.querySelector('#putName')
const putPart = document.querySelector('#putPart')
const putPhone = document.querySelector('#putPhone')
//2.버튼
const addBtn = document.querySelector('#addBtn')
const resetBtn = document.querySelector('button[type=reset]')
//.3테이블의 추가될 부분
const tableBody = document.querySelector('#tableBody')

printList()

let id = 1

addBtn.addEventListener('click',function(e) {
    e.preventDefault()
    resetBtn.click()
    users.push({
        id: users[0] ? id : id + 1,
        name: putName.value ,
        part: putPart.value ,
        phone: putPhone.value
    })
    printList();
});

function printList(){
    tableBody.innerHTML = users
    .map(
        (info) => `
        <tr>
            <td>${info.id}</td>
            <td>${info.name}</td>
            <td>${info.part}</td>
            <td>${info.phone}</td>
        <tr>
        `
    ).join("");
}