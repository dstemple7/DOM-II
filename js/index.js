// Your code goes here
const pageTitle = document.querySelector('#titleP')
const headerP = document.querySelector('header')
const logoP = document.querySelector('.logo-heading')
const funPic = document.querySelector('#funPic')
const adventurePic = document.querySelector('#adventurePic')
const modal = document.querySelector('.modal')
const confirmButton = document.querySelector('#confirmButton')
const cancelButton = document.querySelector('#cancelButton')

function keepScrollin(event){
    pageTitle.textContent = "Keep Scrollin, Scrollin, Scrollin"
}
document.addEventListener('scroll', keepScrollin)

function headerGrey(event){
    headerP.style['background-color'] = 'grey'
}
document.addEventListener('scroll', headerGrey)

function logoWhite(event){
    logoP.style.color = 'white'
}
document.addEventListener('scroll', logoWhite)

function funPicSwitch(event){
    funPic.setAttribute('src',"img/adventure.jpg")
    adventurePic.setAttribute('src',"img/fun.jpg")
}
funPic.addEventListener('click', funPicSwitch)

function adventurePicSwitch(event){
    funPic.setAttribute('src',"img/adventure.jpg")
    adventurePic.setAttribute('src',"img/fun.jpg")
}
adventurePic.addEventListener('click', adventurePicSwitch)

function funPicBack(event){
    funPic.setAttribute('src',"img/fun.jpg")
    adventurePic.setAttribute('src',"img/adventure.jpg")
}
funPic.addEventListener('dblclick', funPicBack)

function adventurePicBack(event){
    funPic.setAttribute('src',"img/fun.jpg")
    adventurePic.setAttribute('src',"img/adventure.jpg")
}
adventurePic.addEventListener('dblclick', adventurePicBack)

function modalOnEsc(event) {
    if (event.key === 'Escape'){
        openModal()
    }
  }
  document.addEventListener('keydown', modalOnEsc)

function noEscape(event){
    closeModal()
}
cancelButton.addEventListener('click', noEscape)

function yesEscape(event){
    window.open(location.href(www.google.com), '_blank')
}
confirmButton.addEventListener('click', yesEscape)

  function openModal() {
    modal.classList.remove('off')
  }

  function closeModal() {
    modal.classList.add('off')
  }