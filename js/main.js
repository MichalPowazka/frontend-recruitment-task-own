const btn = document.querySelector('.section__content-btn')
const popup = document.querySelector('.popup')
const cancelBtn = document.querySelector('.fas')
const alertMsg = document.querySelector('.msg')




console.log(alertMsg);

const openPopup = () => {
    popup.style.display ='flex'
    counter++
    alertMsg.textContent = `${counter} times`
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
localStorage.setItem("cliks", counter)


btn.addEventListener('click', openPopup)
cancelBtn.addEventListener('click', closePopup)
popup.addEventListener('click', click)
