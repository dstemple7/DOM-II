const redBlock = document.querySelector('.block--red')
const blueBlock = document.querySelector('.block--blue')
const greenBlock = document.querySelector('.block--green')
const pinkBlock = document.querySelector('.block--pink')
const grayBlock = document.querySelector('.block--gray')
let rocketship
let marginStart = 1

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

function redRocketLiftoff(event){
    rocketship = true
    moveMore()
    function moveMore(){
        i = setTimeout(moving, 1)}
    function moveLess(){
        i = setTimeout(returning, 1)}
    function moving(){
        if (rocketship){
            marginStart++           
            event.target.style.marginLeft = `${marginStart}px`
            moveMore()
        } else {
            returning()
        }}
    function returning(){
        if (marginStart > 10){
        marginStart--
        event.target.style.marginLeft = `${marginStart}px`
        moveLess()
        }}}

redBlock.addEventListener('mousedown', redRocketLiftoff)

redBlock.addEventListener('mouseup', (event) => {
    rocketship = false
})

function blueRocketLiftoff(event){
    rocketship = true
    moveMore()
    function moveMore(){
        i = setTimeout(moving, 1)}
    function moveLess(){
        i = setTimeout(returning, 1)}
    function moving(){
        if (rocketship){
            marginStart++           
            event.target.style.marginLeft = `${marginStart}px`
            moveMore()
        } else {
            returning()
        }}
    function returning(){
        if (marginStart > 10){
        marginStart--
        event.target.style.marginLeft = `${marginStart}px`
        moveLess()
        }}}

blueBlock.addEventListener('mousedown', blueRocketLiftoff)

blueBlock.addEventListener('mouseup', (event) => {
    rocketship = false
})

function greenRocketLiftoff(event){
    rocketship = true
    moveMore()
    function moveMore(){
        i = setTimeout(moving, 1)}
    function moveLess(){
        i = setTimeout(returning, 1)}
    function moving(){
        if (rocketship){
            marginStart++           
            event.target.style.marginLeft = `${marginStart}px`
            moveMore()
        } else {
            returning()
        }}
    function returning(){
        if (marginStart > 10){
        marginStart--
        event.target.style.marginLeft = `${marginStart}px`
        moveLess()
        }}}

greenBlock.addEventListener('mousedown', greenRocketLiftoff)

greenBlock.addEventListener('mouseup', (event) => {
    rocketship = false
})

function pinkRocketLiftoff(event){
    rocketship = true
    moveMore()
    function moveMore(){
        i = setTimeout(moving, 1)}
    function moveLess(){
        i = setTimeout(returning, 1)}
    function moving(){
        if (rocketship){
            marginStart++           
            event.target.style.marginLeft = `${marginStart}px`
            moveMore()
        } else {
            returning()
        }}
    function returning(){
        if (marginStart > 10){
        marginStart--
        event.target.style.marginLeft = `${marginStart}px`
        moveLess()
        }}}

pinkBlock.addEventListener('mousedown', pinkRocketLiftoff)

pinkBlock.addEventListener('mouseup', (event) => {
    rocketship = false
})

function grayRocketLiftoff(event){
    rocketship = true
    moveMore()
    function moveMore(){
        i = setTimeout(moving, 1)}
    function moveLess(){
        i = setTimeout(returning, 1)}
    function moving(){
        if (rocketship){
            marginStart++           
            event.target.style.marginLeft = `${marginStart}px`
            moveMore()
        } else {
            returning()
        }}
    function returning(){
        if (marginStart > 10){
        marginStart--
        event.target.style.marginLeft = `${marginStart}px`
        moveLess()
        }}}

grayBlock.addEventListener('mousedown', grayRocketLiftoff)

grayBlock.addEventListener('mouseup', (event) => {
    rocketship = false
})