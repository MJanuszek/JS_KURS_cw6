// Closures: dostęp w jednym zakresie/funkcji z innego zakresu/fukcji:

// Zmienna number w zakresie globalnym (nieizolowana):
let number = 0;
const countNumbersOfClicks = function(){
    number++;
    // document.body.textContent = `Stan licznika ${number}`;
    console.log(number);
}
document.addEventListener("click", countNumbersOfClicks );


// Opcja z Closures::::::::
const add = (start = 0) => {
    let number = start;
    return function() {
        number++;
        document.body.textContent = `Stan licznika ${number}`;
    }

}

const cliksCounter = add(4);
document.addEventListener("click", cliksCounter);