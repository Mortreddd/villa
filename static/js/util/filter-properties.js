

document.addEventListener('DOMContentLoaded', function() {
    let container = document.querySelector('#container');
    let filterButtons = document.querySelectorAll('.filter-button');
    let notAvailableText = document.getElementById('not-available');
    let showAllButton = document.querySelector('#show-all-button');
    let properties = [...container.children];


    filterButtons.forEach( button => {

        button.addEventListener('click', function() {
            filterButtons.forEach( button => {
                button.classList.remove('active-property-type');
                button.classList.add('inactive-property-type');
                showAllButton.classList.remove('active-property-type')
                showAllButton.classList.add('inactive-property-type')
            })
            this.classList.add('active-property-type');
            this.classList.remove('inactive-property-type');

            Array.from(container.children).forEach( property => {
                container.removeChild(property)
            })
            properties.forEach( (property, index) => {
                if(!property.classList.contains(`category-${this.id}`)){
                    property.classList.remove('active-property');
                    property.classList.add('inactive-property');
                } else {
                    property.classList.remove('inactive-property');
                    property.classList.add('active-property');
                    container.appendChild(property)
                }
            })
            notAvailableText.classList.toggle('hidden', 
                Array.from(container.children).length > 0
            )

        })
    })

    showAllButton.addEventListener('click', function() {
        filterButtons.forEach( button => {
            button.classList.remove('active-property-type');
            button.classList.add('inactive-property-type');
        })
        Array.from(container.children).forEach( property => {
            container.removeChild(property)
        })
        properties.forEach( property => {
            property.classList.remove('inactive-property')
            property.classList.add('active-property');
            container.appendChild(property)
        })

        this.classList.add('active-property-type');
        this.classList.remove('inactive-property-type');

        notAvailableText.classList.toggle('hidden', 
            Array.from(container.children).length > 0
        )
        
        

    })

})