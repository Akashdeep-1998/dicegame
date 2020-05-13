var score1, score2, roundScore, activePlayer, gamePlaying;

init();

function nextPlayer() {
    if (activePlayer == 1) {
        activePlayer = 2;
        roundScore = 0;
        document.querySelector('#current-1').textContent = 0;
        document.querySelector('#current-2').textContent = 0;
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.player-2-panel').classList.toggle('active');
    }
    else {
        activePlayer = 1;
        roundScore = 0;
        document.querySelector('#current-1').textContent = 0;
        document.querySelector('#current-2').textContent = 0;
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.player-2-panel').classList.toggle('active');
    }
    document.querySelector('.dice').style.display = 'none';
}


function btn_roll() {
    if (gamePlaying) {
        var dice = Math.floor(Math.random() * 6) + 1;
        var dice_pic = document.querySelector('.dice');
        dice_pic.style.display = 'block';
        dice_pic.src = 'Resources/img/dice-' + dice + '.png';
        if (dice > 1) {
            roundScore = roundScore + dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
        else {
            nextPlayer();
        }
    }
}

document.querySelector('.btn-roll').addEventListener('click', btn_roll);

function btn_hold() {
    if (gamePlaying) {
        if (activePlayer == 1) {
            score1 = score1 + roundScore;
            document.querySelector('#score-1').textContent = score1;
            if (score1 >= 100) {
                gamePlaying = false;
                document.querySelector('#name-1').textContent = "WINNER!";
                document.querySelector('.player-1-panel').classList.add('winner');
                document.querySelector('.player-1-panel').classList.remove('active')
                document.querySelector('.dice').style.display = 'none';
            }
            else {
                nextPlayer();
            }
        }
        else {
            score2 = score2 + roundScore;
            document.querySelector('#score-2').textContent = score2;
            if (score2 >= 100) {
                gamePlaying = false;
                document.querySelector('#name-2').textContent = "WINNER!";
                document.querySelector('.player-2-panel').classList.add('winner');
                document.querySelector('.player-2-panel').classList.remove('active');
                document.querySelector('.dice').style.display = 'none';

            }
            else {
                nextPlayer();
            }
        }
    }
}

function btn_help()
{
    document.querySelector('.main').style.display='none';
    document.querySelector('.help').style.display='inline-block';
}
function btn_back()
{
    document.querySelector('.help').style.display='none';
    document.querySelector('.main').style.display='initial';
}
document.querySelector('.btn-help').addEventListener('click', btn_help);
document.querySelector('.btn-back').addEventListener('click', btn_back)
document.querySelector('.btn-hold').addEventListener('click', btn_hold);
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    score1 = 0;
    score2 = 0;
    roundScore = 0;
    activePlayer = 1;
    gamePlaying = true;
    document.getElementById('name-1').textContent = 'Player 1';
    document.getElementById('name-2').textContent = 'Player 2';
    document.querySelector('#score-1').textContent = 0;
    document.querySelector('#score-2').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    document.querySelector('#current-2').textContent = 0;
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-2-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-2-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.add('active');
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.help').style.display='none';
}

