// Array immagini
const items = [
    '../img/01.jpg',
    '../img/02.jpg',
    '../img/03.jpg',
    '../img/04.jpg',
    '../img/05.jpg'
];

// Array titoli
const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

// Array paragrafi
const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

// Creo le variabili per i contenitori
const selectedWrapper = document.querySelector('.selected_img_box');
const thumbsWrapper = document.querySelector('.thumbs_wrapper');

// Aggiungo le freccette
thumbsWrapper.innerHTML += `
<i class="fas fa-chevron-up position-absolute bg-light p-1 rounded-circle"></i>
` + `
<i class="fas fa-chevron-down position-absolute bg-light p-1 rounded-circle"></i>
`;

for(let i = 0; i < items.length; i++){

    // Creo le variabili per i vari contenuti da aggiungere

    // Left
    const currentImageLeft = `<img class="left_img w-100 h-100" src="${items[i]}" alt="Immagine ${i+1}"></img>`;
    const currentParagraph = `
        <div class="paragraph_container position-absolute flex-column align-items-end">
            <h4 class="fs_25">${title[i]}</h4>
            <p class="fs_15 text-end">${text[i]}</p>
        </div>    
    `;
    // Right
    const currentThumb = `
    <div class="thumbs_box w-100 h_20">
        <img class="w-100 h-100" src="${items[i]}" alt="Immagine ${i+1}"> 
    </div>
    `; // Messo il +1 per far si che la prima immagine cioè la numero 0 risulti come numero 1 etc

    // Riempio i contenitori
    selectedWrapper.innerHTML += currentImageLeft + currentParagraph;
    thumbsWrapper.innerHTML += currentThumb;   

}

// Do l'active alle immagini attive
let activeItem = 1;
const imageBoxes = document.getElementsByClassName('thumbs_box');
const leftImages = document.getElementsByClassName('left_img');
const leftParagraphes = document.getElementsByClassName('paragraph_container');

imageBoxes[activeItem].classList.add('active');
leftImages[activeItem].classList.add('active');
leftParagraphes[activeItem].classList.add('active'); 


// SEZIONE CLICK

// Creo le variabili per le arrows inserite prima
const upArrow = document.querySelector('.fa-chevron-up');
const downArrow = document.querySelector('.fa-chevron-down');

// Up click 
upArrow.addEventListener('click', function(){

    imageBoxes[activeItem].classList.remove('active');
    leftImages[activeItem].classList.remove('active');
    leftParagraphes[activeItem].classList.remove('active'); 

    // Se non si trova alla prima immagine, si muove scendendo di 1, altrimenti torna all'ultima immagine ricominciando il giro
    if(activeItem > 0){
        activeItem--;
    } else{
        activeItem = items.length - 1;
    }

    imageBoxes[activeItem].classList.add('active');
    leftImages[activeItem].classList.add('active');
    leftParagraphes[activeItem].classList.add('active'); 
});

// Down click
downArrow.addEventListener('click', function(){

    imageBoxes[activeItem].classList.remove('active');
    leftImages[activeItem].classList.remove('active');
    leftParagraphes[activeItem].classList.remove('active'); 

    // Se non si trova all'ultima'immagine, si muove salendo di 1, altrimenti torna alla prima immagine ricominciando il giro
    if(activeItem < items.length - 1){
        activeItem++;
    } else{
        activeItem = 0;
    }

    imageBoxes[activeItem].classList.add('active');
    leftImages[activeItem].classList.add('active');
    leftParagraphes[activeItem].classList.add('active');
});
