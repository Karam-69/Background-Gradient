let body = document.body;
let pickerOne = document.querySelector(".picker-right");
let pickerTwo = document.querySelector(".picker-left");
let cssCode = document.querySelector(".css");
let copybtn = document.querySelector(".copybtn")
let copyalert = document.querySelector(".copyalert")

function setGradient() {
    body.style.background = `linear-gradient(to right, ${pickerOne.value} , ${pickerTwo.value})`;
    cssCode.textContent = `background: linear-gradient(to right, ${pickerOne.value} , ${pickerTwo.value});`;
}

pickerOne.addEventListener("input", setGradient);
pickerTwo.addEventListener("input", setGradient);


copybtn.addEventListener("click", function() {
     navigator.clipboard.writeText(cssCode.innerHTML);
     copyalert.style.display = "block";
     copybtn.style.color = "#4d6bc3";
     setTimeout(() => {
        copyalert.style.display = "none";
        copybtn.style.color = "#000000";
     }, 1500);
});
