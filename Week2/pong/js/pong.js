//canvas and context
var c = document.querySelector(`#pong`)
var ctx = c.getContext(`2d`)


//timer to make the game run at 60fps
var timer = setInterval(main, 1000/60)

//global friction variable
var fy = .97

//Player array set up
const player = []
player1 = new Player
player1.pad = new Box
player2 = new Player
player2.pad = new Box
player.push(player1,player2)

//Pad Array set up
const pad = []
pad[0] = player[0].pad
pad[1] = player[1].pad

//p1 setup
var p1 = new Box();
pad[0].w = 20
pad[0].h = 150
pad[0].x = 0 + pad[0].w/2

//p2 setup
var p2 = new Box();
pad[1].w = 20
pad[1].h = 150
pad[1].x = 800 - pad[1].w/2

//ball setup
var ball = new Box();
ball.w = 20
ball.h = 20
ball.vx = -2
ball.vy = -2
ball.color = `black`

// Sb set up
let sb = document.querySelectorAll("#score div");


function main()
{
    //erases the canvas
    ctx.clearRect(0,0,c.width,c.height)
    
    //p1 accelerates when key is pressed 
    if(keys[`w`])
    {
       pad[0].vy += -pad[0].force
    }

    if(keys[`s`])
    {
        pad[0].vy += pad[0].force
    }

    //p2 accelerates when key is pressed 
    if(keys[`ArrowUp`])
    {
       pad[1].vy += -pad[1].force
    }

    if(keys[`ArrowDown`])
    {
        pad[1].vy += pad[1].force
    }

    //applies friction and movement for paddles
    for (let i = 0; i < pad.length; i++) 
    {
        pad[i].vy *= fy
        pad[i].move()
    }

    
    //ball movement
    ball.move()

    for (let i = 0; i < pad.length; i++) 
    {
        if(pad[i].y < 0 + pad[i].h / 2) 
        {
            pad[i].y = 0 + pad[i].h / 2
        }
        if(pad[i].y > c.height - pad[i].h / 2) 
        {
            pad[i].y = c.height - pad[i].h / 2
        }
    }

    //ball collision 
    if(ball.x < 0)
    {
        ball.x = c.width/2
        ball.y  =c.height/2

        player[1].score+=1
        console.log(player[1].score)
    }

    if(ball.x > 800)
    {
        ball.x = c.width/2
        ball.y  =c.height/2

        player[0].score+=1
        console.log(player[0].score)
    }
    
    if(ball.x > c.width)
    {
        ball.x = c.width
        ball.vx = -ball.vx
    }
    
    if(ball.y < 0)
    {
        ball.y = 0
        ball.vy = -ball.vy
    }
    if(ball.y > c.height)
    {
        ball.y = c.height
        ball.vy = -ball.vy
       
    }

    //paddle with ball collision
    for (let i = 0; i < pad.length; i++) 
    {
        if(ball.collide(pad[i])) 
        {
            if (i === 0) 
            {
                ball.x = pad[i].x + pad[i].w / 2 + ball.w / 2
            } else 
            {
                ball.x = pad[i].x - pad[i].w / 2 - ball.w / 2
            }
            ball.vx = -ball.vx;
        }
    }

    
    //draw the objects
    for (let i = 0; i < pad.length; i++)
    {
        pad[i].draw()
    }
    ball.draw()


     //update score display
    for (let i = 0; i < sb.length; i++) 
    {
        sb[i].innerText = `Player ${i + 1}: ${player[i].score}`;
    }
    
}
