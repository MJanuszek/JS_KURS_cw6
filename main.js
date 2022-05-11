// Closures: dostęp w jednym zakresie/funkcji z innego zakresu/fukcji:

// Zmienna number w zakresie globalnym (nieizolowana):
let number = 0;
const countNumbersOfClicks = function(){
    number++;
    document.body.textContent = `Stan licznika ${number}`;
}
document.addEventListener("click", countNumbersOfClicks );

// Opcja z Closures::::::::