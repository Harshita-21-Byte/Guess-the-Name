let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;



const Check = document.querySelector('.check');

Check.addEventListener('click', function() {
    const Guess = Number(document.querySelector('.guess').value);
    //console.log(typeof Guess, Guess);

    // When there is no Input
    if(!Guess) {
        document.querySelector('.message').textContent = 'No Number!!';
        
    }

    // When guessed it right
    else if(Guess === number){
        document.querySelector('.number').textContent = number;
        document.querySelector('.message').textContent = 'Correct Number!!'
        
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.fontSize = '7rem';
        document.querySelector('.number').style.width = '30rem';

        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }

    // When guess is too high
    else if(Guess > number){
         if(score > 1){
            document.querySelector('.message').textContent = 'Too High!!'
            score--;
            document.querySelector('.score').textContent = score;
         }
         else{
             document.querySelector('.message').textContent = 'Out of the Guesses!!'
             document.querySelector('.score').textContent = 0;
         }
    }

    // When guess is too low
    else if(Guess < number){
        if(score > 1){
            document.querySelector('.message').textContent = 'Too Low!!'
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = 'Out of the Guesses!!'
            document.querySelector('.score').textContent = 0;
        } 
    }
    
} );

const Again = document.querySelector('.again');

Again.addEventListener('click', function(){
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing!!'
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = ' ';

    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').style.fontSize = '6rem';

});