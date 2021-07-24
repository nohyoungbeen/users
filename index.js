const users = [
    {
        id:1,
        name:'a',
        part:'b',
        phone:'c'
    }
]

//1.인풋
const putUser = document.querySelector('#putNumber')
const putName = document.querySelector('#putName')
const putPart = document.querySelector('#putPart')
const putPhone = document.querySelector('#putPhone')
//2.버튼
const addBtn = document.querySelector('#addBtn')
//.3테이블의 추가될 부분
const tableBody = document.querySelector('#tableBody')

printList()

addBtn.addEventListener('click',function() {
    users.push({
        id: users[0] ? users[users.length - 1].id : 1,
        name : putName.value ,
        part: putPart.value ,
        phone: putPhone.value
    })
    putUser.value=""
    putName.value=""
    putPart.value=""
    putPhone.value=""
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