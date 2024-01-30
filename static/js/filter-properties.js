

document.addEventListener('DOMContentLoaded', function() {
    let container = document.querySelector('#container');
    let filterButtons = document.querySelectorAll('.filter-button');

    
    filterButtons.forEach( button => {

        button.addEventListener('click', function() {

            if(this.classList.contains('inactive-property-type')){
                this.classList.replace('inactive-property-type', 'active-property-type')
            } else {
                this.classList.replace('active-property-type', 'inactive-property-type')
            }

            container.childNodes.forEach( property => {
                if(!property.classList.)
            })
        })
    })


    // function sortProperties(id){
    //     container.childNodes.forEach( (property) => {
    //         if(!property.classList.){
    //             container.removeChild(property);
    //             console.log(true)
    //         }
    //     })
    // }

})