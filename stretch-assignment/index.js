const redBlock = document.querySelector('.block--red')
const blueBlock = document.querySelector('.block--blue')
const greenBlock = document.querySelector('.block--green')
const pinkBlock = document.querySelector('.block--pink')
const grayBlock = document.querySelector('.block--gray')
let rocketship

function redOne(event){
    redBlock.style.order = -1
    blueBlock.style.order = 0
    greenBlock.style.order = 0
    pinkBlock.style.order = 0
    grayBlock.style.order = 0
}
redBlock.addEventListener('click', redOne)

function blueOne(event){
    blueBlock.style.order = -1
    redBlock.style.order = 0
    greenBlock.style.order = 0
    pinkBlock.style.order = 0
    grayBlock.style.order = 0
}
blueBlock.addEventListener('click', blueOne)

function greenOne(event){
    greenBlock.style.order = -1
    blueBlock.style.order = 0
    redBlock.style.order = 0
    pinkBlock.style.order = 0
    grayBlock.style.order = 0
}
greenBlock.addEventListener('click', greenOne)

function pinkOne(event){
    pinkBlock.style.order = -1
    blueBlock.style.order = 0
    greenBlock.style.order = 0
    redBlock.style.order = 0
    grayBlock.style.order = 0
}
pinkBlock.addEventListener('click', pinkOne)

function greyOne(event){
    grayBlock.style.order = -1
    blueBlock.style.order = 0
    greenBlock.style.order = 0
    pinkBlock.style.order = 0
    redBlock.style.order = 0
}
grayBlock.addEventListener('click', greyOne)

redBlock.addEventListener('mousedown', redRocketLiftoff)

function redRocketLiftoff(event){
    rocketship = true

    let marginStart = 10

    moveMore()

    function moveMore(){
        i = setTimeout(moving, 10)
    }

    function moveLess(){
        i = setTimeout(returning, 10)
    }

    function moving(){
        if (rocketship){
            marginStart++           
            event.target.style.marginLeft = `${marginStart}px`
            moveMore()
        } else {
            returning()
        }
    }
    function returning(){
        if (marginStart > 10){
        marginStart--
        event.target.style.marginLeft = `${marginStart}px`
        moveLess()
        }
    }
}

redBlock.addEventListener('mouseup', (event) => {
    rocketship = false
})