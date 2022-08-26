const btnIcon = document.querySelector('.section__content-btn')
const popup = document.querySelector('.popup')
const cancelBtn = document.querySelector('.fas')
const alertMsg = document.querySelector('.msg')
const body = document.body
const resetBtn = document.querySelector('.alert__content-reset')


let counter = localStorage.getItem("counter") || 0;

const openPopup = () => {
    popup.style.display ='flex'
    counter++
    alertMsg.textContent = `${counter} times`
    localStorage.setItem("counter", counter)
    
    if( counter > 5 ) {
        resetBtn.style.display = 'block'
    } else {
        resetBtn.style.display = 'none'
    }
}

const closePopup = () => {
    popup.style.display ='none'
}

const closeOnClick = (e) => {
    if(e.target == popup || e.target == document.body) {
        closePopup();
    }
}

const counterReset = () => {
    counter = 0 ;
    alertMsg.textContent = `${counter} times ( restarted )`
}


btnIcon.addEventListener('click', openPopup)
cancelBtn.addEventListener('click', closePopup)
popup.addEventListener('click', closeOnClick)
body.addEventListener('click', closeOnClick)
resetBtn.addEventListener('click',counterReset)
