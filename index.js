const chargeBtn = document.getElementById("chargeBtn");
const divBtns = document.getElementById("divBtns");
const fragment = document.createDocumentFragment();
const buttonNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];



function buttonsCharged(buttonNumbers) {
    buttonNumbers.forEach((buttonNumber) => {
        console.log(`btn ${buttonNumber}`);
    })
}

chargeBtn.addEventListener('click', () => {
    buttonsCharged(buttonNumbers);
})

// function buttonsCharged(buttonNumbers, divBtns) {
//     buttonNumbers.forEach((buttonNumber) => {
//         const btn = document.createElement("button");
//         btn.innerText(buttonNumber);
//         fragment.appendChild(btn);
//     })

//     divBtns.appendChild(fragment)
// }






