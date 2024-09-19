// javascript for the responsive design 

const hamburger = document.querySelector('.hamburger');
const Nav = document.querySelector('.mobile_nav');
hamburger.addEventListener('click', () => {
  Nav.classList.toggle("mobile_nav_hide");
});

// JavaScript to toggle the dropdown menu
function toggleDropdown() {
    const dropdown = document.getElementById('language-dropdown');
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}
// JavaScript function to change language
function changeLanguage(lang) {
    // Get all language sections
    const languageContents = document.querySelectorAll('.language-content');

    // Hide all language contents
    languageContents.forEach(content => {
        content.classList.remove('show');
    });

    // Show the selected language
    document.querySelectorAll(`.${lang}-content`).forEach(content => {
        content.classList.add('show');
    });
    
    // Close the dropdown after selecting a language
    document.getElementById('language-dropdown').style.display = 'none';

    // Update product display to the selected language
    displayProducts(lang);
    liking();
}
// Set default language on page load
document.addEventListener('DOMContentLoaded', () => {
    changeLanguage('en'); 
});

// slides
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        1024:{
            slidesPerView:3,
            spaceBetween:30
        },
        1000: {
          slidesPerView: 3, 
          spaceBetween: 20
        },
        768: {
            slidesPerView: 2, 
            spaceBetween: 10
        },
        700:{
            slidesPerView: 2, 
            spaceBetween: 10
        },
        425:{
            slidesPerView: 1, 
            spaceBetween: 10
        },
        375:{
            slidesPerView: 1, 
            spaceBetween: 10
        },
        320:{
            slidesPerView: 1, 
            spaceBetween: 10
        },
        310:{
            slidesPerView: 1, 
            spaceBetween: 10
        }
    }
});


// shirt data array
const shirts =[
    {
        en:{
            nameSh: 'Men\'s Plaid Long Sleeves Shirts ',
            priceSh: '35.9DT',
            descriptionSh: 'The mens long sleeve button down shirt is made with high quality polyester, which is soft, lightweight, durable, comfortable to wear and care for.'
        },
        fr:{
            nameSh: 'Chemises à Manches Longues à Carreaux pour Homme',
            priceSh: '35.9DT',
            descriptionSh: 'La chemise à manches longues pour homme est fabriquée en polyester de haute qualité, offrant douceur, légèreté, durabilité et confort.'
        },
        imageSh: './images/clothes/chemise homme.jpg',
        ratingSh: 59,
        nbrstars:100
    },
    {
        en:{
            nameSh: 'Average Joe Striped Color Block Tee - Black ',
            priceSh: '30.5DT',
            descriptionSh: 'Try our Men\'s Color Block Print Tee! With a trendy color block design and a flattering fit, it\'s perfect for any casual day. Made from soft, breathable material, it keeps you cool and comfortable all day.'
        },
        fr:{
            nameSh: 'Tee-Shirt à Rayures et Color Block - Noir ',
            priceSh: '30.5DT',
            descriptionSh: 'Essayez notre tee-shirt pour homme à design color block ! Avec son design tendance et sa coupe flatteuse, il est parfait pour une journée décontractée. Fabriqué en matériau doux et respirant, il vous garde frais et confortable toute la journée.'
        },
        imageSh: './images/clothes/t shirt men.jpg',
        ratingSh: 83,
        nbrstars:100
    },
    {
        en:{
            nameSh: 'Men’s casual formal shirt',
            priceSh: '55.190DT',
            descriptionSh: 'Men’s casual formal shirt with square print, long sleeves, lapel collar. Lightweight, breathable, and fitted.'
        },
        fr:{
            nameSh: 'Chemise Formelle pour Homme',
            priceSh: '55.190DT',
            descriptionSh: 'Chemise formelle pour homme avec imprimé carré, manches longues, col à revers. Légère, respirante et ajustée.'
        },
        imageSh: './images/clothes/FormalShirt.jpg',
        ratingSh: 5,
        nbrstars:60
    },
    {
        en:{
            nameSh: 'Stylish Men\'s Sweater',
            priceSh: '45DT',
            descriptionSh: 'Made from durable polyester, this garment offers long-lasting comfort and easy maintenance. Thoughtful details and modern accents enhance your winter style, combining functionality with a contemporary look.'
        },
        fr:{
            nameSh: 'Pull Stylé pour Homme',
            priceSh: '45DT',
            descriptionSh: 'Fabriqué en polyester durable, ce vêtement offre un confort de longue durée et un entretien facile. Des détails réfléchis et des accents modernes améliorent votre style hivernal, alliant fonctionnalité et look contemporain.'
        },
        imageSh: './images/clothes/sweater men.jpg',
        ratingSh: 75,
        nbrstars:90
    },
    {
        en:{
            nameSh: 'Mens Classic Dress Shirt White',
            priceSh: '66.150DT',
            descriptionSh: 'This classic-fit dress shirt in white is made from 100% cotton for comfort and durability. It features long sleeves, a point (straight) collar, and standard cuffs. The solid pattern and regular size make it a versatile choice for any wardrobe.'
        },
        fr:{
            nameSh: 'Chemise de Costume Classique Blanche pour Homme',
            priceSh: '66.150DT',
            descriptionSh: 'Cette chemise de costume classique blanche est fabriquée en 100 % coton pour le confort et la durabilité. Elle dispose de manches longues, d\'un col pointu et de poignets standards. Le motif uni et la taille régulière en font un choix polyvalent pour toute garde-robe.'
        },
        imageSh: './images/clothes/dress shirt men.jpg',
        ratingSh: 5,
        nbrstars:60
    }
];
// short data array
const shorts =[
    {
        en:{
            nameP: 'Formal Dark Grey Premium Pant Suiting Stuff',
            priceP: '100DT',
            descriptionP: 'Made with high-quality material, this suit exudes a sleek and classic look. Perfect for any formal occasion, its premium fabric offers comfort and durability. Elevate your style with this must-have suiting stuff.'
        },
        fr:{
            nameP: 'Pantalon de Costume Premium Gris Foncé',
            priceP: '100DT',
            descriptionP: 'Fabriqué avec un matériel de haute qualité, ce costume dégage un look élégant et classique. Parfait pour toute occasion formelle, son tissu premium offre confort et durabilité. Élevez votre style avec ce vêtement incontournable.'
        },
        imageP: './images/clothes/dress pants mens.jpg',
        ratingP: 15,
        nbrstars:80
    },
    {
        en:{
            nameP: 'Protego Denim Jeans',
            priceP: '25.990DT',
            descriptionP: 'Crafted from stretchy denim, these jeans provide a perfect fit and unmatched comfort. The vintage wash adds timeless charm, making them a must-have for any wardrobe.'
        },
        fr:{
            nameP: 'Jean Denim Protego',
            priceP: '25.990DT',
            descriptionP: 'Fabriqués en denim extensible, ces jeans offrent un ajustement parfait et un confort inégalé. Le lavage vintage ajoute un charme intemporel, les rendant indispensables pour toute garde-robe.'
        },
        imageP: './images/clothes/jeans men.jpg',
        ratingP: 25,
        nbrstars:80
    },
    {
        en:{
            nameP: 'Summer men\'s Solid Shorts ',
            priceP: '18.290DT',
            descriptionP: 'These shorts are durable, made from high-quality materials with reinforced stitching. Designed with comfort in mind, they feature adjustable straps and ergonomic designs.'
        },
        fr:{
            nameP: 'Shorts Solides d’Été pour Homme',
            priceP: '18.290DT',
            descriptionP: 'Ces shorts sont durables, fabriqués avec des matériaux de haute qualité et une couture renforcée. Conçus pour le confort, ils sont équipés de sangles réglables et d’un design ergonomique.'
        },
        imageP: './images/clothes/shorts men.jpg',
        ratingP: 15,
        nbrstars:60
    },
    {
        en:{
            nameP: 'Men\'s Grey Loose Sports Shorts',
            priceP: '15.990DT',
            descriptionP: 'These shorts feature a natural waistline and a normal shape. In light gray, they are made from slightly stretched knitted fabric, consisting of 95% polyester and 5% elastane. Designed for easy care, they can be machine washed or professionally dry cleaned.'
        },
        fr:{
            nameP: 'Shorts Sportifs Amples Gris pour Homme',
            priceP: '15.990DT',
            descriptionP: 'Ces shorts présentent une taille naturelle et une forme normale. En gris clair, ils sont fabriqués en tissu tricoté légèrement extensible, composé de 95 % polyester et 5 % élasthanne. Faciles à entretenir, ils peuvent être lavés en machine ou nettoyés à sec.'
        },
        imageP: './images/clothes/short sport.jpg',
        ratingP: 10,
        nbrstars:80
    }
];
// outwear data array
const outwear =[
    {
        en:{
            nameO: 'Mens Letter Print Contrast Patchwork Baseball Collar Warm Jacket',
            priceO: '88.990DT',
            descriptionO: 'This regular-fit polyester jacket features a patchwork pattern and pockets. It has long sleeves and a sporty, casual style with regular thickness.'
        },
        fr:{
            nameO: 'Veste Chaude avec Imprimé Lettres pour Homme - Col Baseball Contrasté',
            priceO: '88.990DT',
            descriptionO: 'Cette veste en polyester à coupe régulière présente un motif patchwork et des poches. Elle est dotée de manches longues et d’un style sportif et décontracté avec une épaisseur normale.'
        },
        imageO: './images/clothes/jacket men.jpg',
        ratingO: 30,
        nbrstars:90
    },
    {
        en:{
            nameO: 'Casual Jacket ',
            priceO: '99.950T',
            descriptionO: 'Made from Soft Fleece and lined with polyester, this jacket ensures you stay cozy without sacrificing comfort. Its versatile design and functional features make it an ideal choice for various casual occasions.'
        },
        fr:{
            nameO: 'Veste Décontracté',
            priceO: '99.950DT',
             descriptionO: 'Fabriquée en polaire douce et doublée de polyester, cette veste vous garde au chaud sans sacrifier le confort. Son design polyvalent et ses caractéristiques fonctionnelles en font un choix idéal pour diverses occasions décontractées.'
        },
        imageO: './images/clothes/jacket mens.jpg',
        ratingO: 50,
        nbrstars:80
    },
    {
        en:{
            nameO: 'Trenchcoat',
            priceO: '350.950DT',
            descriptionO: 'This men’s trench coat blends classic style with modern durability. It features a double-breasted front, epaulets, and a belted waist. The long length and adjustable cuffs offer great coverage and protection for various occasions.'
        },
        fr:{
            nameO: 'Trench Coat',
            priceO: '350.950DT',
            descriptionO: 'Ce trench coat pour homme allie style classique et durabilité moderne. Il présente un devant à double boutonnage, des épaulettes et une taille ceinturée. Sa longueur longue et ses poignets ajustables offrent une excellente couverture et protection pour diverses occasions.'
        },
        imageO: './images/clothes/Men-Trenchcoat.jpg',
        ratingO: 1,
        nbrstars:100
    },
    {
        en:{
            nameO: 'Casual Sleeveless Sweater Jacket Vests',
            priceO: '54.120DT',
            descriptionO: 'This 100% polyester down vest features high-loft baffles, a zipper, and drawstring closure. Designed for cold-weather activities, it offers premium warmth and is machine washable.'
        },
        fr:{
            nameO: 'Gilet Sans Manches Décontracté',
            priceO: '54.120DT',
            descriptionO: 'Ce gilet en polyester 100 % présente des boudins haute-loft, une fermeture éclair et un cordon de serrage. Conçu pour les activités par temps froid, il offre une chaleur premium et est lavable en machine.'
        },
        imageO: './images/clothes/sleevless coat men.jpg',
        ratingO: 10,
        nbrstars:80
    }
];
// short data array
const shoes =[
    {
        en:{
            nameB: 'Caterpillar Excavator S3 safety boots',
            priceB: '70.120DT',
            descriptionB: 'Water-resistant leather upper, breathable Nylex lining, shock-absorbing midsole, SRA rubber sole, iTechnology, composite toecap, and anti-puncture insert.'
        },
        fr:{
            nameB: 'Bottes de Sécurité Caterpillar Excavator S3',
            priceB: '70.120DT',
            descriptionB: 'Tige en cuir résistant à l\'eau, doublure en Nylex respirante, semelle intermédiaire absorbante des chocs, semelle en caoutchouc SRA, iTechnology, embout en composite et insert anti-perforation.'
        },
        imageB: './images/clothes/boot men.jpg',
        ratingB: 15,
        nbrstars:60
    },
    {
        en:{
            nameB: 'Rucci Plain Toe Oxford Men\'s Shoes',
            priceB: '65.890DT',
            descriptionB: 'Durable and long-lasting with a breathable upper and cushioned lining. Features pull-on closure, cone heel, leather sole, and slip-on style.'
        },
        fr:{
            nameB: 'Chaussures Oxford Plain Toe Rucci pour Homme',
            priceB: '65.890DT',
            descriptionB: 'Durables et résistantes avec une tige respirante et une doublure rembourrée. Présente une fermeture à enfilage, un talon conique, une semelle en cuir et un style slip-on.'
        },
        imageB: './images/clothes/men shoes formal.jpg',
        ratingB: 15,
        nbrstars:80
    },
    {
        en:{
            nameB: 'Trainers Puma Puma-180 grey white black',
            priceB: '95.9DT',
            descriptionB: 'The Puma Puma-180 sneakers draw on the 90s skate aesthetic and redesign it for the current generation of skaters. These sneakers feature a sturdy design, thick padding, and technical exterior.'
        },
        fr:{
            nameB: 'Baskets Puma Puma-180 gris blanc noir',
            priceB: '95.9DT',
            descriptionB: 'Les baskets Puma Puma-180 s\'inspirent de l\'esthétique du skate des années 90 et la réinventent pour la génération actuelle de skateurs. Ces baskets présentent un design robuste, un rembourrage épais et un extérieur technique.'
        },
        imageB: './images/clothes/sneakers men.jpg',
        ratingB: 23,
        nbrstars:100
    }
];

// select the product list container
const shirtCateg= document.getElementById('shirt_list');
const shortCateg= document.getElementById('short_list');
const outCateg= document.getElementById('out_list');
const shoesCateg= document.getElementById('shoes_list');

// function to generate shirt product html
function generateShirtHTML(productSh, lang){
    let buttonLabel = lang === 'en' ? 'Add to Cart' : 'Ajouter au Panier';
    return`
        <div class="swiper-slide">
            <div class="cards">
                <div class="card_top">
                    <img src="${productSh.imageSh}" alt="${productSh[lang].nameSh}" class="card_img">
                    <div class="card_icons">
                        <!-- heart icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="card_icon heart_icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                        <!-- eye icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="card_icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </div>
                </div>
                <div class="card_bottom">
                    <h3 class="card_title">${productSh[lang].nameSh}</h3>
                    <p class="description">${productSh[lang].descriptionSh}</p>
                    <p class="card_price">${productSh[lang].priceSh}</p>
                    <div class="card_rating">
                        <div class="card_stars">${generateStars(productSh.nbrstars)}</div>
                        <p class="numbers">(${productSh.ratingSh})</p>
                    </div>
                    <button class="add">${buttonLabel}</button>
                </div>
            </div>
        </div>
    `;
}

// function to generate short product html
function generateShortHTML(productP, lang){
    let buttonLabel = lang === 'en' ? 'Add to Cart' : 'Ajouter au Panier';
    return`
        <div class="swiper-slide">
            <div class="cards">
                <div class="card_top">
                    <img src="${productP.imageP}" alt="${productP[lang].nameP}" class="card_img">
                    <div class="card_icons">
                        <!-- heart icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="card_icon heart_icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                        <!-- eye icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="card_icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </div>
                </div>
                <div class="card_bottom">
                    <h3 class="card_title">${productP[lang].nameP}</h3>
                    <p class="description">${productP[lang].descriptionP}</p>
                    <p class="card_price">${productP[lang].priceP}</p>
                    <div class="card_rating">
                        <div class="card_stars">${generateStars(productP.nbrstars)}</div>
                        <p class="numbers">(${productP.ratingP})</p>
                    </div>
                    <button class="add">${buttonLabel}</button>
                </div>
            </div>
        </div>
    `;
}

// function to generate outerwear product html
function generateOutHTML(productO, lang){
    let buttonLabel = lang === 'en' ? 'Add to Cart' : 'Ajouter au Panier';
    return`
        <div class="swiper-slide">
            <div class="cards">
                <div class="card_top">
                    <img src="${productO.imageO}" alt="${productO[lang].nameO}" class="card_img">
                    <div class="card_icons">
                        <!-- heart icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="card_icon heart_icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                        <!-- eye icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="card_icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </div>
                </div>
                <div class="card_bottom">
                    <h3 class="card_title">${productO[lang].nameO}</h3>
                    <p class="description">${productO[lang].descriptionO}</p>
                    <p class="card_price">${productO[lang].priceO}</p>
                    <div class="card_rating">
                        <div class="card_stars">${generateStars(productO.nbrstars)}</div>
                        <p class="numbers">(${productO.ratingO})</p>
                    </div>
                    <button class="add">${buttonLabel}</button>
                </div>
            </div>
        </div>
    `;
}

// function to generate shoes product html
function generateShoeHTML(productB, lang){
    let buttonLabel = lang === 'en' ? 'Add to Cart' : 'Ajouter au Panier';
    return`
        <div class="swiper-slide">
            <div class="cards">
                <div class="card_top">
                    <img src="${productB.imageB}" alt="${productB[lang].nameB}" class="card_img">
                    <div class="card_icons">
                        <!-- heart icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="card_icon heart_icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                        <!-- eye icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="card_icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </div>
                </div>
                <div class="card_bottom">
                    <h3 class="card_title">${productB[lang].nameB}</h3>
                    <p class="description">${productB[lang].descriptionB}</p>
                    <p class="card_price">${productB[lang].priceB}</p>
                    <div class="card_rating">
                        <div class="card_stars">${generateStars(productB.nbrstars)}</div>
                        <p class="numbers">(${productB.ratingB})</p>
                    </div>
                    <button class="add">${buttonLabel}</button>
                </div>
            </div>
        </div>
    `;
}

// function to generate star rating based on nbrstars
function generateStars(nbrstars) {
    const fullStars = Math.floor(nbrstars / 20); 
    let stars = '';
    for (let i = 0; i < fullStars; i++) {
        stars += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="star">
                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                 </svg>`;
    }
    return stars;
}

// Function to display products based on language
function displayProducts(lang) {
    let ShirtHTML = '';
    let OutHTML = '';
    let ShoesHTML = '';
    let ShortHTML = '';

    // Loop through products and use the selected language
    shirts.forEach(product => {
        ShirtHTML += generateShirtHTML(product, lang);
    });
    shorts.forEach(product => {
        ShortHTML += generateShortHTML(product, lang);
    });
    shoes.forEach(product => {
        ShoesHTML += generateShoeHTML(product, lang);
    });
    outwear.forEach(product => {
        OutHTML += generateOutHTML(product, lang);
    });

    // Insert the generated HTML
    shirtCateg.innerHTML = ShirtHTML;
    shortCateg.innerHTML = ShortHTML;
    shoesCateg.innerHTML = ShoesHTML;
    outCateg.innerHTML = OutHTML;

    swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
            1024:{
                slidesPerView:3,
                spaceBetween:30
            },
            1000: {
              slidesPerView: 3, 
              spaceBetween: 20
            },
            768: {
                slidesPerView: 2, 
                spaceBetween: 10
            },
            700:{
                slidesPerView: 2, 
                spaceBetween: 10
            },
            425:{
                slidesPerView: 1, 
                spaceBetween: 10
            },
            375:{
                slidesPerView: 1, 
                spaceBetween: 10
            },
            320:{
                slidesPerView: 1, 
                spaceBetween: 10
            },
            310:{
                slidesPerView: 1, 
                spaceBetween: 10
            }
        }
    });

    liking();
    liking();  
}

// Initial call to display products in default language
displayProducts('en');

// likes
function liking(){
    const heartIcons = document.querySelectorAll('.heart_icon');
    heartIcons.forEach(heartIcon => {
      heartIcon.addEventListener('click', function() {
        heartIcon.classList.toggle('liked');
      });
    });
}

document.addEventListener('DOMContentLoaded', () =>{
    liking();
});


// animations
ScrollReveal().reveal(".navigation",{
    origin: "bottom",
    distance: "20px",
    opacity: 0,
    delay:10,
});

ScrollReveal().reveal(".background",{
    origin: "bottom",
    distance: "20px",
    opacity: 0,
    delay:50,
});

ScrollReveal().reveal(".containerone",{
    origin: "bottom",
    distance: "20px",
    opacity: 0,
    delay:50,
    duration:1000,
});

ScrollReveal().reveal(".section",{
    origin: "bottom",
    distance: "20px",
    opacity: 0,
    delay:50,
    duration:1000,
});

ScrollReveal().reveal(".footer",{
    origin: "bottom",
    distance: "20px",
    opacity: 0,
    delay:100,
    duration:1000,
});


    





