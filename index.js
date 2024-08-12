let clickCount = 0;
document.querySelector('.mpboost__button').addEventListener('click', function() {
    clickCount++;
    document.querySelector('.mpboost__content').classList.toggle('mpboost__content_reverse');
    this.textContent = `Поменять местами (${clickCount})`;
});