let form = document.getElementById('form');
let names = document.getElementById('Uname');
let hobby = document.getElementById('Uemail');
let password = document.getElementById('Upassword');

let result = document.getElementById('result');

const people = new Map();

form.addEventListener('submit', (e) => {
    e.preventDefault();

    createData(people, names.value, hobby.value, password.value);
    showResult(people);

    names.value = '';
    hobby.value = '';
    password.value = '';
});

function createData(map, name, hobby, password) {
    if(name !== '' && hobby !== '' && password !== '') {
        map.set(name, hobby, password);
    }
}

function showResult(obj) {
    let nameText = '';
    let count = 1;
    people.forEach((value, key, password) => {
        nameText += `<tr>
        <th scope="row">` + count++ + `</th>
        <td>` + key + `</td>
        <td>` + value + `</td>
        <td>` + password + `</td>
        </tr>`

    });
    result.innerHTML = nameText;
}