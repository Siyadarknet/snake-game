let motion={x:0, y:0};
const eatFood= new Audio('music/food.mp3');
const endGame= new Audio('music/gameover.mp3');
const motionSong= new Audio('music/move.mp3');
const motionSong2= new Audio('music/music.mp3');

let speed = 1;
let paintTime =0;
let snake =[
    {x:16, y:19}
]
food = {x:6, y:7};

function main(ctime){
//console.log(ctime);
window.requestAnimationFrame(main);
if((ctime-paintTime)/100 < (1/speed)){
    return;
}
paintTime = ctime;

gameStart();
}
//
function collide(snake1){
  
    for(let i =0; i<snake1.length; i++){
     // if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
       //return true;
     // }  
      if(snake1[0].x >=40 || snake1[0].x<=0 || snake1[0].y >=40 || snake1[0].y<=0){
        return true;
      }
      
    }
}
//
function gameStart(){
    motionSong2.play();
if(collide(snake)){
endGame.play();
motionSong2.pause();
 motion={x:0, y:0};
 alert("Game Over.")
 snake =[{x:13, y:14}];
 motionSong.play();
 score=0;
}

if(snake[0].y === food.y && snake[0].x === food.x){
    eatFood.play();
snake.unshift({x:snake[0].x + motion.x, y:snake[0].y + motion.y})
let a =2;
let b =30;
food ={x: Math.round(a+(b-a)*Math.random()), y:Math.round(a+(b-a)*Math.random())}
}

for(let i=snake.length-2; i>=0; i--){
    
    snake[i+1] ={...snake[i]};
}
snake[0].x += motion.x;
snake[0].y += motion.y;
    ground.innerHTML = "";
    snake.forEach((e, index)=>{
       snakeFood = document.createElement('div');
       snakeFood.style.gridRowStart= e.y;
       snakeFood.style.gridColumnStart=e.x;
      
       if(index==0){
       snakeFood.classList.add('head');
       }
       else{
        snakeFood.classList.add('snake');
       }
       ground.appendChild(snakeFood);

    });
    sFood = document.createElement('div');
       sFood.style.gridRowStart= food.y;
       sFood.style.gridColumnStart=food.x;
       sFood.classList.add('food')
       
       ground.appendChild(sFood);
}




window.requestAnimationFrame(main);
window.addEventListener('keydown', e =>{
    motion = {x:0, y:1}
    motionSong.play();
    switch(e.key){
        case "ArrowUp":{
            console.log("arrowUp");
           motion.x=0;
           motion.y=-1;
            break;
           
        }
        case "ArrowDown":{
            console.log("arrowDown");
            motion.x=0;
            motion.y=+1;
            break;
        }
        case "ArrowLeft":{
            console.log("arrowLeft");
            motion.x=-1;
            motion.y=0;
            break;
        }
        case "ArrowRight":{
            console.log("arrowRight");
            motion.x=+1;
            motion.y=0;
            break;
        }
        default: {
            break;
        }
    }
});