let username = prompt("Enter need name: ");
let users = [
    { names: "Ziyodbek", age: 23 },
    { names: "Axmadali", age: 13 },
    { names: "Salimbek", age: 17 },
    { names: "Abduqahhor", age: 23 }
]

let getarray = users;
console.log(getarray);

let count = false;

for (let i = 0; i < users.length; i++) {
    let getName = users[i].names.slice(0, username.length);
    if (getName == username) {
        console.log(users[i].names);
        count = true;
        break;
    }
}

if (count == false) {
    console.log("This name is not founded!");
}