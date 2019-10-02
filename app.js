var dice, scores, roundScores, activePlayer;

scores =[0,0];
roundScores = 0;
activePlayer = 1;

document.getElementById('score1').textContent = '0';
document.getElementById('score2').textContent = '0';
document.getElementById('current1').textContent = '0';
document.getElementById('current2').textContent = '0';

dice = Math.floor(Math.random()*6) + 1;

document.querySelector('.dice').style.display = 'none';

document.querySelector('.rollbutton').addEventListener('click', function(){

	dice = Math.floor(Math.random()*6) + 1;

	var numDice = document.querySelector('.dice');
	numDice.style.display ='block';
	numDice.src = 'dice-' + dice + '.png';

	if(dice !== 1){
		roundScores += dice;
		document.querySelector('#current' + activePlayer).textContent = roundScores;
	}

	else{
			activePlayer === 1 ? activePlayer === 2 : activePlayer === 1;
			roundScores = 0;
			document.getElementById('current1').textContent ='0';
			document.getElementById('current2').textContent ='0';

			document.querySelector('.inner-div1').classList.toggle('active');
			document.querySelector('.inner-div2').classList.toggle('active');

			document.querySelector('.dice').style.display = 'none';

		}
	})

document.querySelector('.holdbutton').addEventListener('click', function(){

	document.querySelector('#score1').textContent = roundScores;
	document.querySelector('#score1').style.display = roundScores;
	document.getElementById('current' + activePlayer).textContent = 0;

})







