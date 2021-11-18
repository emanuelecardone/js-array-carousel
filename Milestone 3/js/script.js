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
let activeItem = 1;
const upArrow = `<i class="fas fa-chevron-up position-absolute bg-light p-1 rounded-circle"></i>`;
const downArrow = `<i class="fas fa-chevron-down position-absolute bg-light p-1 rounded-circle"></i>`;

// Aggiungo le freccette
thumbsWrapper.innerHTML += upArrow + downArrow;

for(i = 0; i < items.length; i++){

    // Aggiungo le immagini e i testi a sinistra (avranno display none di default che cambierò dopo con la classe active)
    const currentImageLeft = `<img class="left_img w-100 h-100" src="${items[activeItem]}" alt="Immagine ${activeItem}"></img>`;
    const currentParagraph = `
        <div class="paragraph_container position-absolute d-flex flex-column align-items-end">
            <h4 class="fs-4">${title[activeItem]}</h4>
            <p class="fs-6 text-end">${text[activeItem]}</p>
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
const imageBoxes = document.getElementsByClassName('thumbs_box');
const leftImages = document.getElementsByClassName('left_img');
const leftParagraphes = document.getElementsByClassName('paragraph_container');
const activeImageBox = imageBoxes[activeItem];
const activeLeftImage = leftImages[activeItem];
const activeLeftParagraph = leftParagraphes[activeItem]; 
activeImageBox.classList.add('active');
activeLeftImage.classList.add('active');
activeLeftParagraph.classList.add('active'); 


// SEZIONE CLICK

// Devo creare 2 nuove variabili in quanto quando ho dichiarato upArrow e downArrow esse non erano presenti in html (sono state pushate dopo)
const upArrowClick = document.querySelector('.fa-chevron-up');
const downArrowClick = document.querySelector('.fa-chevron-down');

// Up click 
upArrowClick.addEventListener('click', function(){
    
});

// Down click
downArrowClick.addEventListener('click', function(){

});
