/*--------
    Make the Options Button 
    . on click
    . show or hide the `.sides` div
---------*/
let options = document.querySelector('#options h2')

let optionShow = true

options.onclick = function(e)
{
    if(optionShow == true)
    {
        document.querySelector('.sides').style.display = 'none';
        optionShow = false

    }
    else if(optionShow == false)
    {
        document.querySelector('.sides').style.display = 'block';
        optionShow = true
    }
}
/*---------
    Program the two fill inputs to do the following:
    . Display the correct colors on the inputs and outputs and paddles    
    . using an `input` event
        . Change the player's fill property to the value of the input
        . Change the pad's fill property  to the player's fill property
        . Show the fill's hex code in the output div 

-----------*/
/*
let fillInput = document.querySelectorAll('.fill')
let strokeInput = document.querySelectorAll('.stroke')

fillInput.forEach((input,i) => {

    input.value = player[i].fill
    input.nextElementSibling.innerHTML = player[i].fill

    input.addEventListener('input',(e)=> {

        let newColor = e.target.value

        player[i].fill = newColor
        player[i].pad.fill = newColor

        input.nextElementSibling.innerHTML =newColor

    })
});

strokeInput.forEach((input,i) => {

    input.value = player[i].stroke
    input.nextElementSibling.innerHTML = player[i].stroke

    input.addEventListener('input',(e)=> {

        let newColor = e.target.value

        player[i].stroke = newColor
        player[i].pad.stroke = newColor

        input.nextElementSibling.innerHTML =newColor

    })
});
*/
option(`fill`)
option(`stroke`)
function option(choice)
{
    let fillInput = document.querySelectorAll(`.${choice}`)
    fillInput.forEach((input,i) => {

    input.value = player[i][choice]
    input.nextElementSibling.innerHTML = player[i][choice]

    input.addEventListener('input',(e)=> {

        let newColor = e.target.value

        player[i][choice] = newColor
        player[i].pad[choice] = newColor

        input.nextElementSibling.innerHTML =newColor

    })
});
}


/*---------
    Program the six key inputs to do the following:
    . Display the correct key names for each player   
    . using a `keydown` event
        .Display the correct key name in the input
        .Change the player's key to the value of the input
        .Show the player's key in the output div 
-----------*/



keyChoice("u")
keyChoice("s")
keyChoice("d")
function keyChoice(key)
{
let keyInput = document.querySelectorAll(`.${key}`)

keyInput.forEach((input,i) => {

    input.value = player[i].keys[key]
    input.nextElementSibling.innerHTML = player[i].keys[key]

    input.addEventListener('focus',(e)=> {

            currentState = `pause`
    })


    input.addEventListener('keydown',(e)=> {

        let newkey = e.key
        console.log(e)
        player[i].keys[key] = newkey

        e.target.nextElementSibling.innerHTML = newkey
    })
})
}

let specChoice = document.querySelector('#options h3')

let specViz = false

specChoice.onclick = function(e)
{
    if(specViz == true)
    {
        document.getElementById('spec').style.display = 'none';
        specChoice.nextElementSibling.innerHTML = "OFF"
        specViz = false

    }
    else if(specViz == false)
    {
        document.getElementById('spec').style.display = 'block';
        specChoice.nextElementSibling.innerHTML = "ON"
        specViz = true
    }
}