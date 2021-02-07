(() => {
  const aiBlocks = document.querySelectorAll('#ai div'),
        playerBlocks = document.querySelectorAll('#player div'),
        scoreboard = document.querySelector('#scoreboard');

  let score = 0;

  playerBlocks.forEach(block => {
    block.addEventListener('click', e => {
      // Player choice
      const playerBlock = document.querySelector(`#${e.target.id}`);
      let playerChoice = playerBlock.innerText;
      playerBlock.style.backgroundColor = '#c5dde5';

      // Block all buttons so player can't interact with them until round is over
      playerBlocks.forEach(block => {
        block.style.pointerEvents = 'none';
      });

      // AI choice
      const aiBlock = aiBlocks[Math.floor(Math.random() * 3)];
      let aiChoice = aiBlock.innerText;
      aiBlock.style.backgroundColor = '#c5dde5';

      if (playerChoice === aiChoice) {
        // Do nothing
      } else if (playerChoice === 'Rock') {
        score = aiChoice === 'Paper' ? --score : ++score;
      } else if (playerChoice === 'Paper') {
        score = aiChoice === 'Scissors' ? --score : ++score;
      } else if (playerChoice === 'Scissors') {
        score = aiChoice === 'Rock' ? --score : ++score;
      }

      // Pause so player can see result, unblock all buttons and update score
      setTimeout(() => {
        playerBlock.style.backgroundColor = '#e2e2e2';
        aiBlock.style.backgroundColor = '#e2e2e2';

        playerBlocks.forEach(block => {
          block.style.pointerEvents = 'auto';
        });
        
        scoreboard.innerText = score < 0 ? `Score: ${score = 0}` : `Score: ${score}`;
      }, 1500);
    });
  });
})();
