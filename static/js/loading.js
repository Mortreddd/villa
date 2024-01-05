const loading = document.getElementById("loading-animation");
const content = document.getElementById('content');

if(document.readyState === "loading"){
    console.log(document.readyState)
} 

document.addEventListener('DOMContentLoaded', function (){

    loading.classList.replace('flex', 'hidden');
    content.classList.remove('hidden');
    
})