document.addEventListener('DOMContentLoaded', () => {
    const apparmentButton = document.getElementById("appartment");
    const villaHouseButton = document.getElementById('villa-house');
    const penthouseButton = document.getElementById('penthouse');
    const windows = [document.getElementById('appartment-window'), document.getElementById('villa-house-window'), document.getElementById('penthouse-window')]

    const buttons = [apparmentButton, villaHouseButton, penthouseButton];

    apparmentButton.addEventListener('click', () => {
        windows.forEach( element => {
            if(element.classList.contains('flex')){
                element.classList.replace('flex', 'hidden');
            } else {
                element.classList.add('hidden')
            }
        })
        windows[0].classList.replace('hidden', 'flex');

        buttons.forEach( button => {
            if(button.classList.contains('bg-amber-600')){
                button.classList.replace('bg-amber-600', 'bg-black');
            } else {
                button.classList.add('bg-black');
            }
        });
        apparmentButton.classList.replace('bg-black', 'bg-amber-600');
    });
    
    villaHouseButton.addEventListener('click', () => {
        windows.forEach( element => {
            if(element.classList.contains('flex')){
                element.classList.replace('flex', 'hidden');
            } else {
                element.classList.add('hidden')
            }
        })
        windows[1].classList.replace('hidden', 'flex');

        buttons.forEach( button => {
            if(button.classList.contains('bg-amber-600')){
                button.classList.replace('bg-amber-600', 'bg-black');
            } else {
                button.classList.add('bg-black');
            }
        });


        villaHouseButton.classList.replace('bg-black', 'bg-amber-600');
    })

    
    penthouseButton.addEventListener('click', () => {
        windows.forEach( element => {
            if(element.classList.contains('flex')){
                element.classList.replace('flex', 'hidden');
            } else {
                element.classList.add('hidden')
            }
        })
        windows[2].classList.replace('hidden', 'flex');

        buttons.forEach( button => {
            if(button.classList.contains('bg-amber-600')){
                button.classList.replace('bg-amber-600', 'bg-black');
            } else {
                button.classList.add('bg-black');
            }
        })

        penthouseButton.classList.replace('bg-black', 'bg-amber-600');
    })
});