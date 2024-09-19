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
    displayProducts(products, lang);
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

// products data array
const products =[
    {
        en:{
            name: 'Rose Gold Bracelet  ',
            price: '59.990DT',
            description: 'This delicate rose gold bridal bracelet features sparkling cubic zirconia stones. Made with rose gold-plated brass and nickel-free.'
        },
        fr:{
            name: 'Bracelet en Or Rose',
            price: '59.990DT',
            description: 'Ce délicat bracelet de mariage en or rose présente des pierres scintillantes en zircon cubique. Fabriqué en laiton plaqué or rose et sans nickel.'
        },
        image: './images/clothes/bracelet.jpg',
        rating: 9,
        nbrstars:100
    },
    {
        en:{
            name: 'Tulip Opal Earrings ',
            price: '29.990DT',
            description: 'Elegant earrings with natural opal and AAA-grade zircon. Size: 4.0 cm x 1.2 cm, weight: 8.8 g/pair. Hypoallergenic, lead, and nickel-free.'
        },
        fr:{
            name: 'Boucles d\'Oreilles Tulipe Opale',
            price: '29.990DT',
            description: 'Boucles d\'oreilles élégantes avec opale naturelle et zircon de qualité AAA. Taille : 4,0 cm x 1,2 cm, poids : 8,8 g/pair. Hypoallergénique, sans plomb et sans nickel.'
        },
        image: './images/clothes/earrings.jpg',
        rating: 2,
        nbrstars:100
    },
    {
        en:{
            name: 'FLYING BIRDS brands Women Handbag ',
            price: '77.1DT',
            description: 'This stylish handbag is both easy to carry and made from high-quality, durable material. It features an adjustable shoulder strap and a thick chain strap, making it suitable for most arm sizes.'
        },
        fr:{
            name: 'Sac à Main FLYING BIRDS pour Femme',
            price: '77.1DT',
            description: 'Ce sac à main élégant est à la fois facile à transporter et fabriqué à partir de matériaux durables de haute qualité. Il dispose d’une bandoulière réglable et d’une chaîne épaisse, ce qui le rend adapté à la plupart des tailles de bras.'
        },
        image: './images/clothes/handbag.jpg',
        rating: 6,
        nbrstars:100
    },
    {
        en:{
            name: 'Perfect Petal Ring',
            price: '39.990DT',
            description: 'This ring features radiant blue crystals, an adjustable band, and elegant details like a string of leaves and a cute butterfly. The Perfect Petal Ring adds a touch of charm to your collection.'
        },
        fr:{
            name: 'Bague Perfect Petal',
            price: '39.990DT',
            description: 'Cette bague présente des cristaux bleus scintillants, une bande ajustable et des détails élégants tels qu’une rangée de feuilles et un joli papillon. La Bague Perfect Petal ajoute une touche de charme à votre collection.'
        },
        image: './images/clothes/ring.jpg',
        rating: 4,
        nbrstars:80
    },
    {
        en:{
            name: 'Men’s Ratchet Belt ',
            price: '23.040DT',
            description: 'This Johnston & Murphy belt features a convenient automatic buckle and 100% genuine cowskin leather. Its versatile style suits any outfit, with a sleek geometric pattern adding sophistication.'
        },
        fr:{
            name: 'Ceinture à Cliquet pour Homme',
            price: '23.040DT',
             description: 'Cette ceinture Johnston & Murphy dispose d’une boucle automatique pratique et est fabriquée en cuir de vache 100% véritable. Son style polyvalent convient à toutes les tenues, avec un motif géométrique élégant ajoutant une touche de sophistication.'
        },
        image: './images/clothes/belt men.jpg',
        rating: 9,
        nbrstars:80
    },
    {
        en:{
            name: 'New York Yankees Baseball Cap ',
            price: '12.4DT',
            description:'The 9Twenty Cap offers a comfortable fit that easily adjusts to different head sizes. The strapback closure on the back allows you to adjust the size individually for a perfect fit.'
        },
        fr:{
            name: 'Casquette New York Yankees',
            price: '12.4DT',
            description: 'La Casquette 9Twenty offre un ajustement confortable qui s’adapte facilement à différentes tailles de tête. La fermeture strapback à l’arrière permet d’ajuster la taille individuellement pour un ajustement parfait.'
        },
        image: './images/clothes/hats men.jpg',
        rating: 3,
        nbrstars:80
    },
    {
        en:{
            name: 'Vintage Trifold Leather Wallet ',
            price: '33.690DT',
            description: 'Crafted with durable polyurethane leather, it features a classic solid pattern and a polyester interior. Easily store cards, cash, and more in this timeless wallet for a look that never goes out of style.'
        },
        fr:{
            name: 'Portefeuille Trifold en Cuir Vintage',
            price: '33.690DT',
            description: 'Fabriqué en cuir polyuréthane durable, il présente un motif classique uni et un intérieur en polyester. Rangez facilement cartes, espèces et plus encore dans ce portefeuille intemporel pour un look qui ne se démode jamais.'
        },
        image: './images/clothes/wallet men.jpg',
        rating: 1,
        nbrstars:20
    }

];

// select the product list container
const accessoryCateg= document.getElementById('accessory_list');

// Function to generate popular product HTML based on language
function generateProductHTML(product, lang) {
    let buttonLabel = lang === 'en' ? 'Add to Cart' : 'Ajouter au Panier';
    return `
        <div class="swiper-slide">
            <div class="cards">
                <div class="card_top">
                    <img src="${product.image}" alt="${product[lang].name}" class="card_img">
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
                    <h3 class="card_title">${product[lang].name}</h3>
                    <p class="description">${product[lang].description}</p>
                    <p class="card_price">${product[lang].price}</p>
                    <div class="card_rating">
                        <div class="card_stars">${generateStars(product.nbrstars)}</div>
                        <p class="numbers">(${product.rating})</p>
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
function displayProducts(products, lang) {
    let accessoryHTML = '';

    // Loop through products and use the selected language
    products.forEach(product => {
        accessoryHTML+= generateProductHTML(product, lang);
    });

    // Insert the generated HTML
    accessoryCateg.innerHTML = accessoryHTML;

    // Update Swiper after adding new slides
    swiper.update();
}

// Initial call to display products in default language
displayProducts(products, 'en');

// likes
document.addEventListener('DOMContentLoaded', function() {
    const heartIcons = document.querySelectorAll('.heart_icon');
    heartIcons.forEach(heartIcon => {
      heartIcon.addEventListener('click', function() {
        heartIcon.classList.toggle('liked');
      });
    });
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


    





