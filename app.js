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

})





