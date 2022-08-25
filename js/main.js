const btn = document.querySelector('.section__content-btn')
const popup = document.querySelector('.popup')
const cancelBtn = document.querySelector('.fas')
const alertMsg = document.querySelector('.msg')
const storage = window.localStorage

// read and try more about local storage , now doesn't work but It's good solution
let counter = 0
let counterValue


console.log(alertMsg);

const openPopup = () => {
    popup.style.display ='flex'
    counter++
    alertMsg.textContent = `${counter} times`
    localStorage.setItem("counterValue", counter)
}

const closePopup = () => {
    popup.style.display ='none'
}

const click = (e) => {
    if(e.target == popup ) {
        closePopup();
    }
}

//testing data saving


btn.addEventListener('click', openPopup)
cancelBtn.addEventListener('click', closePopup)
popup.addEventListener('click', click)
