
const user = (name ="", age) => {
    let userName = name;
    let userAge = age;

    function message() {
        console.log(`Hello ${userName}, ${userAge >=18? "You are adult" : "You are underage"}`);
    }
    return message;
}

const properMessage = user("Hikari", 17);
properMessage();