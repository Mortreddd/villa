
document.addEventListener('DOMContentLoaded', () => {

    const loadingBalls = document.querySelectorAll(".loading-ball");
    console.log(loadingBalls);
    while (true) {
        if(document.readyState !== 'complete'){

            document.getElementById('loading-animation').classList.remove('hidden');
            document.getElementById('content').classList.add('hidden');
            loadingBalls.forEach(ball => {
                setTimeout(() => {
                    ball.classList.add('animate-bounce');
                }, 200)
            });
            break;
        }
    }
    document.getElementById('loading-animation').classList.add('hidden');
    document.getElementById('content').classList.remove('hidden');
    
});
