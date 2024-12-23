"use strict";
document.addEventListener('DOMContentLoaded', function () {
    var cells = document.querySelectorAll('.cell');
    var statusDisplay = document.querySelector('.status');
    var restartButton = document.getElementById('restartButton');
    var currentPlayer = 'X';
    var gameActive = true;
    var gameState = ['', '', '', '', '', '', '', '', ''];
    var winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    function handleCellClick(clickedCell, clickedCellIndex) {
        if (gameState[clickedCellIndex] !== '' || !gameActive) {
            return;
        }
        gameState[clickedCellIndex] = currentPlayer;
        clickedCell.textContent = currentPlayer;
        clickedCell.classList.add(currentPlayer.toLowerCase());
        handleResultValidation();
    }
    function handleResultValidation() {
        var roundWon = false;
        for (var i = 0; i < winningConditions.length; i++) {
            var _a = winningConditions[i], a = _a[0], b = _a[1], c = _a[2];
            if (gameState[a] === '' || gameState[b] === '' || gameState[c] === '') {
                continue;
            }
            if (gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                roundWon = true;
                break;
            }
        }
        if (roundWon) {
            alert("Player ".concat(currentPlayer, " has won!"));
            gameActive = false;
            return;
        }
        if (!gameState.includes('')) {
            alert('Game ended in a draw!');
            gameActive = false;
            return;
        }
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        if (statusDisplay)
            statusDisplay.textContent = "It's ".concat(currentPlayer, "'s turn");
    }
    function restartGame() {
        gameActive = true;
        currentPlayer = 'X';
        gameState.fill('');
        cells.forEach(function (cell) {
            cell.textContent = '';
            cell.classList.remove('x', 'o');
        });
        if (statusDisplay)
            statusDisplay.textContent = "It's ".concat(currentPlayer, "'s turn");
    }
    cells.forEach(function (cell, index) {
        cell.addEventListener('click', function () { return handleCellClick(cell, index); });
    });
    if (restartButton) {
        restartButton.addEventListener('click', restartGame);
    }
    if (statusDisplay) {
        statusDisplay.textContent = "It's ".concat(currentPlayer, "'s turn");
    }
});
