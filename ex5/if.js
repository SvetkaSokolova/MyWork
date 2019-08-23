'use strict'

let surname = prompt('Surname:', '');
let name = prompt('Name:', '');
let patronymic = prompt('Patronymic:', '');
let age = prompt('Your age:', '');
let gender = confirm("Your gender is female?");

alert("Your full name:" + surname + name + patronymic);
alert("Your age:" + age);
alert("Your gender:" + gender);

if (age < 65) {
    alert('you are retired: no'); 
} else {
    ('you are retired: yes');
}

