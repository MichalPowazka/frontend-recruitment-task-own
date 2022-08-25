const btn = document.querySelector('.section__content-btn')
const popup = document.querySelector('.popup')
const cancelBtn = document.querySelector('.fas')
const alertMsg = document.querySelector('.msg')
const storage = window.localStorage

//working 
let counter = localStorage.getItem("counter") || 0;




const openPopup = () => {
    popup.style.display ='flex'
    counter++
    alertMsg.textContent = `${counter} times`
    localStorage.setItem("counter", counter)
    console.log(counter);

    if(counter>5){
        //display here button
    }

}

const closePopup = () => {
    popup.style.display ='none'
}

const click = (e) => {
    if(e.target == popup ) {
        closePopup();
    }
}




btn.addEventListener('click', openPopup)
cancelBtn.addEventListener('click', closePopup)
popup.addEventListener('click', click)
