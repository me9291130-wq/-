// متغيرات اللعبة الأساسية
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X'; // اللاعب الأول X
let isGameActive = 'true'; // حالة اللعبة نشطة

const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // صفوف
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // أعمدة
    [0, 4, 8], [2, 4, 6]            // أقطار متقاطعة
];

// دالة التعامل مع نقرة المربع
function handleCellClick(clickedCellEvent, index) {
    const clickedCell = clickedCellEvent.target;

    // التحقق هل المربع ممتلئ أو اللعبة انتهت
    if (board[index] !== '' || !isGameActive) {
        return;
    }

    board[index] = currentPlayer;
    clickedCell.innerText = currentPlayer;
    
    // إضافة لون مميز لكل لاعب
    if(currentPlayer === 'X') {
        clickedCell.style.color = '#ff4757';
    } else {
        clickedCell.style.color = '#2ed573';
    }

    handleResultValidation();
}
// دالة التحقق من الفوز أو التعادل
function handleResultValidation() {
    let roundWon = false;

    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (board[a] === '' || board[b] === '' || board[c] === '') {
            continue;
        }
        if (board[a] === board[b] && board[b] === board[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        alert(`🎉 مبروك! اللاعب (${currentPlayer}) هو الفائز!`);
        isGameActive = false;
        return;
    }

    let roundDraw = !board.includes('');
    if (roundDraw) {
        alert('🤝 تعادل! انتهت اللعبة.');
        isGameActive = false;
        return;
    }

    // تبديل الدور بين اللاعبين
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// دالة إعادة تعيين اللعبة (Restart)
function restartGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    isGameActive = true;
    currentPlayer = 'X';

    document.querySelectorAll('.cell').forEach(cell => {
        cell.innerText = '';
    });
}
