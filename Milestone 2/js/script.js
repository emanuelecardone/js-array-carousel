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
const activeImage = `<img class="w-100 h-100" src="${items[activeItem]}" alt="Immagine ${activeItem}"></img>`;
const activeTitle = `<h4 class="position-absolute bottom-0 end-0 mb-5 me-3 fs-4">${title[activeItem]}</h4>`;
const activeParagraph = `<p class="position-absolute bottom-0 end-0 mb-4 me-3 fs-5">${text[activeItem]}</p>`;
const upArrow = `<i class="fas fa-chevron-up position-absolute bg-light p-1 rounded-circle"></i>`;
const downArrow = `<i class="fas fa-chevron-down position-absolute bg-light p-1 rounded-circle"></i>`;

// Aggiungo le freccette e l'immagine a sinistra
selectedWrapper.innerHTML += activeImage + activeTitle + activeParagraph;
thumbsWrapper.innerHTML += upArrow + downArrow;

for(i = 0; i < items.length; i++){

    const currentImage = `
    <div class="thumbs_box w-100 h_20">
        <img class="w-100 h-100" src="${items[i]}" alt="Immagine ${i+1}"> 
    </div>
    `; // Messo il +1 per far si che la prima immagine cioè la numero 0 risulti come numero 1 etc
    
    // Riempio le thumbnails a destra (dichiarato la thumbsWrapper prima del for per riempirla con le freccette)
    thumbsWrapper.innerHTML += currentImage;   

}

// Do l'active all'immagine a destra attiva
const imageBoxes = document.getElementsByClassName('thumbs_box');
const currentImageBox = imageBoxes[activeItem];
currentImageBox.classList.add('active');

