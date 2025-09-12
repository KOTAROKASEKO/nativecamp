document.addEventListener('DOMContentLoaded', () => {
    const checkAnswersBtn = document.getElementById('check-answers-btn');
    const answersSection = document.getElementById('answers-section');

    checkAnswersBtn.addEventListener('click', () => {
        // スムーズにスクロールしながら答えを表示
        if (answersSection.style.display === 'none') {
            answersSection.style.display = 'block';
            answersSection.scrollIntoView({ behavior: 'smooth' });
            checkAnswersBtn.textContent = "レポートを隠す";
        } else {
            answersSection.style.display = 'none';
            checkAnswersBtn.textContent = "答え合わせ";
            // ページ上部へスクロール
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
});