const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSection = document.querySelector('.main-content');
const button = document.querySelector('.main-btn');
const buttonText = document.querySelector('.btn-text');
const buttonIcon = document.querySelector('.btn-icon');


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

}

PageTransition();
