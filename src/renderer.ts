document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    const statusDisplay = document.querySelector('.status') as HTMLElement | null;
    const restartButton = document.getElementById('restartButton') as HTMLButtonElement | null;
    let currentPlayer = 'X';
    let gameActive = true;
    const gameState = ['', '', '', '', '', '', '', '', ''];

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function handleCellClick(clickedCell: HTMLElement, clickedCellIndex: number) {
        if (gameState[clickedCellIndex] !== '' || !gameActive) {
            return;
        }
        gameState[clickedCellIndex] = currentPlayer;
        clickedCell.textContent = currentPlayer;
        clickedCell.classList.add(currentPlayer.toLowerCase());
        handleResultValidation();
    }

    function handleResultValidation() {
        let roundWon = false;
        for (let i = 0; i < winningConditions.length; i++) {
            const [a, b, c] = winningConditions[i];
            if (gameState[a] === '' || gameState[b] === '' || gameState[c] === '') {
                continue;
            }
            if (gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                roundWon = true;
                break;
            }
        }
        if (roundWon) {
            alert(`Player ${currentPlayer} has won!`);
            gameActive = false;
            return;
        }
        if (!gameState.includes('')) {
            alert('Game ended in a draw!');
            gameActive = false;
            return;
        }
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        if (statusDisplay) statusDisplay.textContent = `It's ${currentPlayer}'s turn`;
    }

    function restartGame() {
        gameActive = true;
        currentPlayer = 'X';
        gameState.fill('');
        cells.forEach(cell => {
            cell.textContent = '';
            cell.classList.remove('x', 'o');
        });
        if (statusDisplay) statusDisplay.textContent = `It's ${currentPlayer}'s turn`;
    }

    cells.forEach((cell, index) => {
        cell.addEventListener('click', () => handleCellClick(cell as HTMLElement, index));
    });

    if (restartButton) {
        restartButton.addEventListener('click', restartGame);
    }

    if (statusDisplay) {
        statusDisplay.textContent = `It's ${currentPlayer}'s turn`;
    }
});