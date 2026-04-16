document.addEventListener('DOMContentLoaded', () => {
    const timeElement = document.getElementById('user-time');

    function updateEpochTime() {
        timeElement.textContent = Date.now();
    }

    updateEpochTime();

    setInterval(updateEpochTime, 1000);
});