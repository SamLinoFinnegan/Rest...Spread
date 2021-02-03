const searchBtn = document.getElementById("srcBtn")
const header = document.getElementsByClassName("demo")
const searchBarValue = document.getElementById("link_id").value.parseInt()


const sumAll = function (...num) {
    const result = num.reduce((a, b) => {
        return a + b;
    });
    console.log(result)
    console.log(header)
    const newH1 = document.createElement('h1')
    header.appendChild(newH1);
    newH1.innerHTML = result;

};

searchBtn.addEventListener('click', function () { sumAll(1, 5, 7) })

// -------- i cant figure out why i cant write the result on to my page ------ //
// -------- and why even though i put the value of my search bar to parseInt(), it still comes null ------ //

const sumAgain = function (num1, num2, num3) {
    return num1 + num2 + num3;
}

const numbers = [1, 2, 3];

console.log(sumAgain(...numbers));
