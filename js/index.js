// Your code goes here
const pageTitle = document.querySelector('#titleP')
const headerP = document.querySelector('header')
const logoP = document.querySelector('.logo-heading')
const funPic = document.querySelector('#funPic')
const adventurePic = document.querySelector('#adventurePic')
const modal = document.querySelector('.modal')
const confirmButton = document.querySelector('#confirmButton')
const cancelButton = document.querySelector('#cancelButton')
const location2 = 'https://state.gov'
const lightSwitch = document.querySelector('#lightsOut')
const lightSwitch2 = document.querySelector('#lightsOn')
const bodyP = document.querySelector('#bodyAll')
const destinationPic = document.querySelector('#destinationPic')

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

function destiPicDisappear(event){
    destinationPic.style.display = 'none'
    setTimeout(() => {
        destinationPic.style.display = 'block'
    }, 2000)
}
destinationPic.addEventListener('click', destiPicDisappear)

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
    window.open(location2, '_blank')
}
confirmButton.addEventListener('click', yesEscape)

function lightsOut(event){
    bodyP.style.backgroundColor = 'black'
    bodyP.style.color = 'white'
    lightSwitch2.classList.remove('off')
    lightSwitch.classList.add('off')
    logoP.style.color = 'red'
}
lightSwitch.addEventListener('click', lightsOut)

function lightsOn(event){
    bodyP.style.backgroundColor = ''
    bodyP.style.color = ''
    lightSwitch.classList.remove('off')
    lightSwitch2.classList.add('off')
    logoP.style.color = ''
}
lightSwitch2.addEventListener('click', lightsOn)

function openModal() {
    modal.classList.remove('off')
  }

function closeModal() {
    modal.classList.add('off')
  }

  document.querySelector('.nav').addEventListener('click', function(event){
      event.preventDefault()
  })