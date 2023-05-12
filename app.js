const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSection = document.querySelector('.main-content');
const button = document.querySelector('.main-btn');
const buttonText = document.querySelector('.btn-text');
const buttonIcon = document.querySelector('.btn-icon');
const contactForm = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const subjectInput = document.querySelector('#subject');
const messageInput = document.querySelector('#message');


function PageTransition(){
    //btn classe attiva
    for(let i=0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //section classi attive 
    allSection.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){

            sectBtns.forEach((btn) =>{
                btn.classList.remove('active');
            })
            e.target.classList.add('active')

            sections.forEach((section) =>{
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');

        }
    }) 
    
    if (button.closest("#home") !== null) {
      buttonText.style.zIndex = '0';
      buttonIcon.style.zIndex = '0';
    }

    // Invio email
  
  function sendEmail(event) {
    event.preventDefault();
    
    // Check if all required fields are filled out
    if (!nameInput.value || !emailInput.value || !subjectInput.value || !messageInput.value) {
      alert('Please fill out all required fields');
      return;
    }
    
    const body = `Name: ${nameInput.value}\nEmail: ${emailInput.value}\n\nMessage:\n${messageInput.value}`;
    
    // Create a mailto: link
    const mailto = `mailto:perta.marco@icloud.com?subject=${encodeURIComponent(subjectInput.value)}&body=${encodeURIComponent(body)}`;
    
    // Open the link in a new tab
    window.open(mailto);
    
    // Clear the form inputs
    nameInput.value = '';
    emailInput.value = '';
    subjectInput.value = '';
    messageInput.value = '';
  }
  
  contactForm.addEventListener('submit', sendEmail);

}

PageTransition();
