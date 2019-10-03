var dice, scores, roundScores, activePlayer,gamePlaying;

init();
document.querySelector('.rollbutton').addEventListener('click', function(){

	if(gamePlaying){
	dice = Math.floor(Math.random()*6) + 1;
	document.querySelector('.dice').style.display = 'none';

	var numDice = document.querySelector('.dice');
	numDice.style.display ='block';
	numDice.src = 'dice-' + dice + '.png';
	if(dice !== 1){
		roundScores += dice;
		document.querySelector('#current-' + activePlayer).textContent = roundScores;
	}
	else{
			nextPlayer();
		}
	}});
	
document.querySelector('.holdbutton').addEventListener('click', function(){

	if(gamePlaying){

		scores[activePlayer] += roundScores;
	document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]; 
	if(scores[activePlayer] >= 100){
		document.querySelector('#name' + activePlayer).textContent = 'Winner';
		document.querySelector('.dice').style.display = 'none';
		document.querySelector('.inner-div' + activePlayer).classList.add('winner');
		document.querySelector('.inner-div' + activePlayer).classList.remove('active');
		gamePlaying = false;
	}
	nextPlayer();

	}
	
	})

function nextPlayer(){

			activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;
			roundScores = 0;
			document.getElementById('current-1').textContent ='0';
			document.getElementById('current-2').textContent ='0';

			document.querySelector('.inner-div1').classList.toggle('active');
			document.querySelector('.inner-div2').classList.toggle('active');

			document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.newbutton').addEventListener('click', init);

function init() {
    scores = [0, 0, 0];
    activePlayer = 1;
    roundScores = 0;
    gamePlaying = true;
    
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-1').textContent = '0';
    document.getElementById('score-2').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('current-2').textContent = '0';
    document.getElementById('name1').textContent = 'Player 1';
    document.getElementById('name2').textContent = 'Player 2';
    document.querySelector('.inner-div1').classList.remove('winner');
    document.querySelector('.inner-div2').classList.remove('winner');
    document.querySelector('.inner-div1').classList.remove('active');
    document.querySelector('.inner-div2').classList.remove('active');
    document.querySelector('.inner-div1').classList.add('active');
}






