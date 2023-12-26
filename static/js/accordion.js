document.addEventListener('DOMContentLoaded', function() {

    const trigger1 = document.getElementById('trigger-accordion-1');
    const trigger2 = document.getElementById('trigger-accordion-2');
    const trigger3 = document.getElementById('trigger-accordion-3');
    const accordions = document.querySelectorAll('.accordion-item');

    activeAccordionAttribute = 'block h-32 active'
    trigger1.addEventListener('click', function(){
        accordions.forEach(function(accordion){
            activeAccordionAttribute.split(' ').forEach((attr) => {
                accordion.classList.remove(attr);
                accordion.classList.add('h-0');
            })
            trigger2.classList.replace('text-amber-600', 'text-black')
            trigger3.classList.replace('text-amber-600', 'text-black')
        });
        activeAccordionAttribute.split(' ').forEach((attr) => {
            
            accordions[0].classList.replace('h-0', 'h-32');
            accordions[0].classList.add(attr);
        });
        trigger1.classList.replace('text-black', 'text-amber-600');
    });

    trigger2.addEventListener('click', function(){
        accordions.forEach(function(accordion){
            activeAccordionAttribute.split(' ').forEach((attr) => {
                accordion.classList.remove(attr);
                accordion.classList.add('h-0');
            })
            trigger1.classList.replace('text-amber-600', 'text-black')
            trigger3.classList.replace('text-amber-600', 'text-black')
        });

        activeAccordionAttribute.split(' ').forEach((attr) => {
            
            accordions[1].classList.replace('h-0', 'h-32');
            accordions[1].classList.add(attr);
        });
        trigger2.classList.replace('text-black', 'text-amber-600');
    });

    trigger3.addEventListener('click', function(){
        accordions.forEach(function(accordion){
            activeAccordionAttribute.split(' ').forEach((attr) => {
                accordion.classList.remove(attr);
                accordion.classList.add('h-0');
            })
            trigger2.classList.replace('text-amber-600', 'text-black')
            trigger1.classList.replace('text-amber-600', 'text-black')
        });

        activeAccordionAttribute.split(' ').forEach((attr) => {
            
            accordions[2].classList.replace('h-0', 'h-32');
            accordions[2].classList.add(attr);
        });
        trigger3.classList.replace('text-black', 'text-amber-600');
    });
});