'use strict';

let secretNumber = Math.trunc(Math.random()*20) +1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    //When no input
    if(!guess){
        console.log(document.querySelector('.message').textContent = '⛔ No Number!');
    }

    //When player Wins
    else if(guess === secretNumber){
         
        document.querySelector('.number').textContent = secretNumber;


        console.log(document.querySelector('.message').textContent = '🎉 Coreect Number!');

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        if(score>highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    }
    
    //When guess is too high
    else if(secretNumber<guess){

        if(score>1){

        console.log(document.querySelector('.message').textContent = 'Too high!');
        score--;
        console.log(document.querySelector('.score').textContent = score);
        }
        else{
            console.log(document.querySelector('.message').textContent = '😥😥You lost the game')
        }
    }


    //When guess is too low
    else if(secretNumber>guess){
        if(score>1){
        console.log(document.querySelector('.message').textContent = 'Too Low!');
         score--;
        console.log(document.querySelector('.score').textContent = score);
    }
 else{
            console.log(document.querySelector('.message').textContent = '😥😥You lost the game')
        }
    }

})

document.querySelector('.again').addEventListener('click',function(){

   score = 20;
    secretNumber = Math.trunc(Math.random()*20) +1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.guess').value='';

})





