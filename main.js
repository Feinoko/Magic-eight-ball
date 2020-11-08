let launchBox = document.querySelector('p');

launchBox.addEventListener('click', m_e_ball);

function m_e_ball() {
   let userName = prompt(`Tell me your name now don't be shy!`);
   userName ? alert(`Hi there ${userName}!`) : alert('hello there');
   let userQuestion = prompt('Please tell me your question...');
   alert(`Hey ${userName}, so you wish to know "${userQuestion}" ... Valid question !`);
   alert(`hmmmmm let's see...... *spins magic eight ball*`);
   let ballRoll = Math.round(Math.random() * 8);

   switch(ballRoll) {
      case 0 : 
      alert('hum, not gonna happen ever');
      break;
      case 1 : 
      alert('It is decidedly so');
      break;
      case 2 : 
      alert('Reply hazy try again');
      break;
      case 3 : 
      alert('Cannot predict now');
      break;
      case 4 : 
      alert('Do not count on it');
      break;
      case 5 : 
      alert('My sources say no');
      break;
      case 6 : 
      alert('Outlook not so good');
      break;
      case 7 : 
      alert('Signs point to yes');
      break;
   }

   alert(`Hope that helps! See you!`);

}