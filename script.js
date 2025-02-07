const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');

const ROWS = 20;
const COLUMNS = 10;
const BLOCK_SIZE = 30;
const colors = ['#FF0D72', '#0DC2FF', '#0DFF72', '#F538FF', '#FF8E0D', '#FFE138', '#3877FF'];

const tetrominoes = [
    [[1, 1, 1, 1]], // I
    [[1, 1], [1, 1]], // O
    [[1, 1, 0], [0, 1, 1]], // S
    [[0, 1, 1], [1, 1, 0]], // Z
    [[1, 0, 0], [1, 1, 1]], // L
    [[0, 0, 1], [1, 1, 1]], // J
    [[0, 1, 0], [1, 1, 1]], // T
];

function drawBoard() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw grid (optional)
    context.strokeStyle = '#DDD';
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLUMNS; col++) {
            context.strokeRect(col * BLOCK_SIZE, row * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
        }
    }
}

function drawTetromino(tetromino, x, y, color) {
    context.fillStyle = color;
    for (let row = 0; row < tetromino.length; row++) {
        for (let col = 0; col < tetromino[row].length; col++) {
            if (tetromino[row][col]) {
                context.fillRect((x + col) * BLOCK_SIZE, (y + row) * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
            }
        }
    }
}

function newTetromino() {
    const randomIndex = Math.floor(Math.random() * tetrominoes.length);
    return tetrominoes[randomIndex];
}

function gameLoop() {
    drawBoard();

    // Example: Randomly spawn a tetromino for demonstration
    const currentTetromino = newTetromino();
    const color = colors[Math.floor(Math.random() * colors.length)];
    drawTetromino(currentTetromino, 3, 0, color);
    
    requestAnimationFrame(gameLoop);
}

gameLoop();
