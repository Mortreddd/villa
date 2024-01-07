

const fullName = document.getElementById('full_name').value;
const email = document.getElementById('email').value;
const subject = document.getElementById('subject').value;
const message = document.getElementById('message').value;

const fields = [fullName, email, subject, message];


const contactForm = document.getElementById('contact-form');

console.log('')

contactForm.addEventListener('submit', function(e){
    e.preventDefault();

    
    if(fields.every( field => field.trim === '')){
        alert('Please fill up all fields')
    } else {
        contactForm.setAttribute('action', '{% clients:contact %}')
        alert('Your message has been sent!');
    }
})