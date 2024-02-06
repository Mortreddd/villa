

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page');
    let pagination = document.querySelectorAll('.pagination');

    pagination.forEach( paginate => {
        if(paginate.value == page){
            paginate.classList.replace('inactive-paginate', 'current-paginate');
        } else {
            paginate.classList.replace('current-paginate', 'inactive-paginate');
        }
    })
    
});