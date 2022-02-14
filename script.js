const updateText = () => {
    let yourText = document.querySelector('#exampleFormControlTextarea1').value   
    document.querySelector('#text-output').innerText = yourText
}


const makeBold = () => {
    let textBold = document.querySelector('#text-output')
    textBold.classList.toggle("bold");
}    


const makeItalic = () => {
    let textBold = document.querySelector('#text-output')
    textBold.classList.toggle("italic");
}  

const makeUnderline = () => {
    let textBold = document.querySelector('#text-output')
    textBold.classList.toggle("underline");
}  

const makeAlign = (alignType) => {
    document.getElementById('text-output').style.textAlign = alignType // Left or Center or Right 
}