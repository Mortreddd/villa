const loading = document.getElementById("loading-animation");
const content = document.getElementById('content');

document.addEventListener('DOMContentLoaded', function (){

    loading.classList.replace('flex', 'hidden');
    content.classList.remove('hidden');
    
})