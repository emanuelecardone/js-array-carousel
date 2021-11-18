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

// Creo le variabili per gli oggetti attivi e le freccette
const selectedWrapper = document.querySelector('.selected_img_box');
const thumbsWrapper = document.querySelector('.thumbs_wrapper');
const upArrow = `<i class="fas fa-chevron-up position-absolute bg-light p-1 rounded-circle"></i>`;
const downArrow = `<i class="fas fa-chevron-down position-absolute bg-light p-1 rounded-circle"></i>`;

// Aggiungo le freccette
thumbsWrapper.innerHTML += upArrow + downArrow;

for(i = 0; i < items.length; i++){

    // Aggiungo le immagini e i testi a sinistra (avranno display none di default che cambierò dopo con la classe active)
    const currentImageLeft = `<img class="left_img w-100 h-100" src="${items[i]}" alt="Immagine ${i+1}"></img>`;
    const currentParagraph = `
        <div class="paragraph_container position-absolute flex-column align-items-end">
            <h4 class="fs-4">${title[i]}</h4>
            <p class="fs-6 text-end">${text[i]}</p>
        </div>    
    `;
    selectedWrapper.innerHTML += currentImageLeft + currentParagraph;

    const currentImage = `
    <div class="thumbs_box w-100 h_20">
        <img class="w-100 h-100" src="${items[i]}" alt="Immagine ${i+1}"> 
    </div>
    `; // Messo il +1 per far si che la prima immagine cioè la numero 0 risulti come numero 1 etc
    
    // Riempio le thumbnails a destra (dichiarato la thumbsWrapper prima del for per riempirla con le freccette)
    thumbsWrapper.innerHTML += currentImage;   

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

// Devo creare 2 nuove variabili in quanto quando ho dichiarato upArrow e downArrow esse non erano presenti in html (sono state pushate dopo)
const upArrowClick = document.querySelector('.fa-chevron-up');
const downArrowClick = document.querySelector('.fa-chevron-down');

// Up click 
upArrowClick.addEventListener('click', function(){

    console.log(activeItem);

    imageBoxes[activeItem].classList.remove('active');
    leftImages[activeItem].classList.remove('active');
    leftParagraphes[activeItem].classList.remove('active'); 


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
downArrowClick.addEventListener('click', function(){

    console.log(activeItem);

    imageBoxes[activeItem].classList.remove('active');
    leftImages[activeItem].classList.remove('active');
    leftParagraphes[activeItem].classList.remove('active'); 


    if(activeItem < items.length - 1){
        activeItem++;
    } else{
        activeItem = 0;
    }

    imageBoxes[activeItem].classList.add('active');
    leftImages[activeItem].classList.add('active');
    leftParagraphes[activeItem].classList.add('active');
});
