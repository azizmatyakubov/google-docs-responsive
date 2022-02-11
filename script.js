const updateText = () => {
    let yourText = document.querySelector('#exampleFormControlTextarea1').value   
    document.querySelector('#text-output').innerText = yourText
}


const makeBold = () => {
    let textBold = document.querySelector('#text-output')
    textBold.classList.add("bold");
}

const makeAlign = (alignType) => {
    document.getElementById('text-output').style.textAlign = alignType  
    let buttonList = document.getElementsByClassName('align')
}
