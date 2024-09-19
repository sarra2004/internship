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


// dress data array
const dresses =[
    {
        en:{
            name: 'Clay Denim Midi Dress',
            price: '50DT',
            description: 'This women\'s midi dress has an A-line silhouette, non-adjustable straps, a sweetheart neckline, and a front placket with metal buttons.'    
        },
        fr: {
            name: 'Robe Midi en Denim Argile',
            price: '50DT',
            description: 'Cette robe midi pour femme a une silhouette en A, des bretelles non réglables, un décolleté en cœur et une patte de boutonnage avec des boutons métalliques.'
        },
        image: './images/clothes/denim dress.jpg',
        rating: 120,
        nbrstars: 100   
    },
    {
        en:{
            name: 'A Line Green Long Prom Dress with Criss Cross Back',
            price: '1500.99DT',
            description: 'This prom dress features a plunging V neckline with sheer mesh, spaghetti straps that lace up in the back, and a corset bodice adorned with beaded floral appliqués.'
        },
        fr:{
            name: 'Robe de Bal Verte à Dos Croisé',
            price: '1500.99DT',
            description: 'Cette robe de bal comporte un décolleté en V plongeant avec un filet transparent, des bretelles spaghetti qui se nouent dans le dos et un corsage en corset orné d’appliqués floraux perlés.'
        },
        image: './images/clothes/formal dress.jpg',
        rating: 2,
        nbrstars:80
    },
    {
       en:{
            name: 'Hydrangea Tender floral maxi tie-strap dress',
            price: '559.2DT',
            description: 'This dress is made of organza. The gown has a tiered full skirt.  The bodice of the dress has a lace-up corset with straps. The gown is created in blush blue and pastel green floral prints.'
       },
       fr:{
            name: 'Robe Maxi à Bretelles à Fleurs Tendres Hortensia',
            price: '559.2DT',
            description: 'Cette robe en organza présente une jupe pleine en étages, un corset avec laçage et des bretelles. Elle est ornée d\'imprimés floraux en bleu pastel et vert tendre.'
       },
        image: './images/clothes/maxi dress.jpg',
        rating: 9,
        nbrstars:90
    },
    {
        en:{
            name: 'Leaf Print Cotton Mini Dress',
            price: '800.2DT',
            description: 'Fits to all sizes.Sleeveless, zip fastening, fitted bodice, leaf print, gathered waist, mini length, concealed zip fastening, padded cups, underwired.'
        },
        fr:{
            name: 'Robe Mini en Coton à Imprimé Feuille',
            price: '800.2DT',
            description: 'S’adapte à toutes les tailles. Sans manches, fermeture zippée, corsage ajusté, imprimé feuille, taille froncée, longueur mini, fermeture éclair dissimulée, bonnets rembourrés, avec armature.'
        },
        image: './images/clothes/leaf dress.jpg',
        rating: 3,
        nbrstars:50
    },
    {
        en:{
            name: 'Convertible Striped Foldover Elegant Off-Shoulder Knitted Dresses - Green  ',
            price: '210.6DT',
            description: 'The off-the-shoulder design highlights the collarbones, adding charm to your look. Long sleeves with plaid print details create a simple yet elegant style. Made from a soft cotton blend, it\'s perfect for autumn and winter.'
        },
        fr:{
            name: 'Robe Élégante à Épaules Dénudées en Maille Rayée Convertible',
            price: '210.6DT',
            description: 'Le design à épaules dénudées met en valeur les clavicules, ajoutant du charme à votre look. Les manches longues avec détails à carreaux créent un style simple mais élégant. Fabriquée à partir d’un mélange doux de coton, parfaite pour l’automne et l’hiver.'
        },
        image: './images/clothes/longsleeve dress.jpg',
        rating: 25,
        nbrstars:60
    }
];
// skirt data array
const skirts =[
    {
        en:{
            nameS: 'Floral Print Elastic Waist Layered Holiday Skirt',
            priceS: '31.990DT',
            descriptionS: 'This floral ruffle skirt features a drawstring, layered hem, and ankle length. Made from blended polyester with a non-stretch, A-line silhouette, it has a natural waistline and vibrant print, ideal for spring and summer.'
        },
        fr:{
            nameS: 'Jupe de Vacances à Imprimé Floral avec Taille Élastique',
            priceS: '31.990DT',
            descriptionS: 'Cette jupe à volants florale présente un ourlet superposé, une longueur cheville, et une taille élastique. Conçue en polyester mélangé non extensible, elle a une silhouette trapèze et un imprimé vif, parfaite pour le printemps et l’été.'
        },
        imageS: './images/clothes/layered skirt.jpg',
        ratingS: 100,
        nbrstars: 100
    },
    {
        en:{
            nameS: 'Ponte Pencil Skirt - RED ',
            priceS: '47.450DT',
            descriptionS: 'Our Premium Nylon Ponte Pencil Skirt is perfect for any occasion. Its iconic, form-fitting silhouette transitions seamlessly from office to date night. Made from premium fabric, it sits below the knee and offers a flattering fit.'
        },
        fr:{
            nameS: 'Jupe Crayon Ponte - Rouge',
            priceS: '47.450DT',
            descriptionS: 'Notre jupe crayon Ponte en nylon premium est parfaite pour toutes les occasions. Sa silhouette emblématique et ajustée passe sans effort du bureau au rendez-vous. Fabriquée en tissu de qualité, elle arrive sous les genoux et offre une coupe flatteuse.'
        },
        imageS: './images/clothes/pencil skirt.jpg',
        ratingS: 5,
        nbrstars: 20
    },
    {
        en:{
            nameS: 'Dark In Love Leah Tartan Mini Skirt ',
            priceS: '33.510DT',
            descriptionS: 'This skirt features a stunning black and white tartan with a contrasting black panel. It fastens with a hidden side zip and includes faux leather straps and a large safety pin detail. '
        },
        fr:{
            nameS: 'Mini Jupe Tartan Dark In Love Leah',
            priceS: '33.510DT',
            descriptionS: 'Cette jupe présente un superbe tartan noir et blanc avec un panneau noir contrastant. Elle se ferme avec une fermeture éclair latérale cachée et comprend des sangles en faux cuir et une grande épingle à nourrice.'
        },
        imageS: './images/clothes/plaid skirt.jpg',
        ratingS: 12,
        nbrstars: 40
    }
];
// shirt data array
const shirts =[
    {
        en:{
            nameSh: 'Spooky Season Graphic Tee',
            priceSh: '45.9DT',
            descriptionSh: 'Our shirts are authentically designed and hand screen printed for top quality. The ink is dyed into the fabric, ensuring graphics won’t peel. They feature 30 singles of 100% washed cotton for a soft, comfortable feel.'
        },
        fr:{
            nameSh: 'T-shirt Graphique Saison Effrayante',
            priceSh: '45.9DT',
            descriptionSh: 'Nos chemises, imprimées à la main avec de l\'encre teintée, offrent des graphiques durables. Elles sont en coton lavé à 100% avec 30 fils pour une douceur optimale.'
        },
        imageSh: './images/clothes/graphic tee.jpg',
        ratingSh: 79,
        nbrstars:100
    },
    {
        en:{
            nameSh: 'Off shoulder blouse in cross fit',
            priceSh: '75DT',
            descriptionSh: 'This tailored cut top features an off-shoulder neckline, short sleeves, and side gathers for a flattering fit. Made from stretch fine rib fabric, it’s composed of 94% cotton and 6% elastane, ensuring comfort and flexibility.'
        },
        fr:{
            nameSh: 'Blouse à Épaules Dénudées avec Coupe Croisée',
            priceSh: '75DT',
             descriptionSh: 'Ce haut coupé sur mesure présente un décolleté à épaules dénudées, des manches courtes et des fronces latérales pour une coupe flatteuse. Fabriqué en tissu côtelé extensible de 94 % coton et 6 % élasthanne, il garantit confort et flexibilité.'
        },
        imageSh: './images/clothes/sleevless top.jpg',
        ratingSh: 1,
        nbrstars:100
    },
    {
        en:{
            nameSh: 'Heart Pattern Drop Shoulder Sweater',
            priceSh: '43.190DT',
            descriptionSh: 'This casual pullover features a stand collar, drop shoulders, and a heart pattern in beige. With long sleeves and a regular length, it’s ideal for late fall temperatures. Made from 100% polyester with slight stretch, it offers a regular fit. Hand wash or dry clean only.'
        },
        fr:{
            nameSh: 'Pull à Motif Cœur et Épaules Tombantes',
            priceSh: '43.190DT',
            descriptionSh: 'Ce pull décontracté en polyester 100% a un col montant, des épaules tombantes, et un motif cœur beige. Avec ses manches longues et sa coupe régulière, il est parfait pour la fin d’automne. Légèrement extensible. Lavage à la main ou nettoyage à sec uniquement. '
        },
        imageSh: './images/clothes/sweater.jpg',
        ratingSh: 170,
        nbrstars:90
    },
    {
        en:{
            nameSh: 'No Boundaries Women’s V-Neck Sweater Vest',
            priceSh: '25.590DT',
            descriptionSh: 'This high-quality sleeveless knitted vest is made from lightweight, breathable fabric. It features a stylish houndstooth pattern, ribbed texture, and v-neck with pearl buttons. Suitable for all seasons, it pairs well with jeans, leggings, or boots.'
        },
        fr:{
            nameSh: 'Gilet Pull à Col V pour Femmes No Boundaries',
            priceSh: '25.590DT',
            descriptionSh: 'Ce gilet tricoté sans manches est fabriqué à partir d’un tissu léger et respirant de haute qualité. Il présente un motif pied-de-poule élégant, une texture côtelée et un col en V avec des boutons de perle. Convient à toutes les saisons, il se marie bien avec des jeans, leggings ou bottes.'
        },
        imageSh: './images/clothes/images.jpg',
        ratingSh: 5,
        nbrstars:60
    }
];
// short data array
const shorts =[
    {
       en:{
        nameP: 'Flap Pocket Cargo Denim Jeans',
        priceP: '110DT',
        descriptionP: 'These light wash straight-leg jeans feature a zipper fly with button and pocket details. Made from non-stretch denim, they have a natural waistline and long length. Machine washable and unlined, they are not sheer.'
       },
       fr:{
        nameP: 'Jeans Cargo à Poches à Rabat',
        priceP: '110DT',
        descriptionP: 'Ces jeans à coupe droite délavée claire présentent une fermeture zippée avec un bouton et des poches. Fabriqués en denim non extensible, ils ont une taille naturelle et une longueur longue. Lavables en machine et non doublés, ils ne sont pas transparents.'
       },
        imageP: './images/clothes/cargo jeans.jpg',
        ratingP: 45,
        nbrstars:80
    },
    {
        en:{
            nameP: 'High Waist Wide Leg Cargo Women\'s Shorts',
            priceP: '78.990DT',
            descriptionP: 'These breathable polyester shorts feature an adjustable high elastic waist. Ideal for running, fitness, and casual wear. Lightweight, quick-drying, and perfect for various activities.'
        },
        fr:{
            nameP: 'Shorts Cargo Taille Haute à Jambes Larges pour Femmes',
            priceP: '78.990DT',
            descriptionP: 'Ces shorts en polyester respirant présentent une taille haute élastique ajustable. Idéal pour la course, le fitness et les tenues décontractées. Légers, à séchage rapide, ils sont parfaits pour diverses activités.'
        },
        imageP: './images/clothes/cargo shorts.jpg',
        ratingP: 25,
        nbrstars:80
    },
    {
        en:{
            nameP: 'Distressed Denim Shorts',
            priceP: '27.290DT',
            descriptionP: 'These shorts feature a five-pocket design, mid-rise waist, button closure, and concealed fly. With ripped details and frayed hems, they’re a standout addition to any wardrobe. Made from 100% cotton. Machine washable.'
        },
        fr:{
            nameP: 'Shorts en Jean Déchiré',
            priceP: '27.290DT',
            descriptionP: 'Ces shorts présentent une conception à cinq poches, une taille mi-haute, une fermeture boutonnée et un zip dissimulé. Avec des détails déchirés et des ourlets effilochés, ils sont un ajout incontournable à toute garde-robe. Fabriqués en 100 % coton. Lavables en machine.'
        },
        imageP: './images/clothes/denim shorts.jpg',
        ratingP: 15,
        nbrstars:60
    },
    {
        en:{
            nameP: 'High Waist Strappy Solid Color Shorts - Brick red ',
            priceP: '44.990DT',
            descriptionP: 'High-waisted shorts in 95% polyester and 5% elastane. Solid color, simple design, lightweight (210g), no back pocket. Ideal for spring and summer.'
        },
        fr:{
            nameP: 'Shorts Taille Haute Unis - Rouge Brique',
            priceP: '44.990DT',
            descriptionP: 'Shorts taille haute en 95 % polyester et 5 % élasthanne. Couleur unie, design simple, léger (210g), sans poche arrière. Idéal pour le printemps et l’été.'
        },
        imageP: './images/clothes/high waist shorts.jpg',
        ratingP: 45,
        nbrstars:80
    },
    {
        en:{
            nameP: 'Women\'s wide-leg jeans',
            priceP: '88.990DT',
            descriptionP: 'These high-waisted denim pants feature a wide leg silhouette and long length. Made with a Water Neutral process to reduce water use, they include a button and zipper closure, front and back pockets.'
        },
        fr:{
            nameP: 'Jeans Évasés à Taille Haute pour Femmes',
            priceP: '88.990DT',
            descriptionP: 'Ces jeans taille haute, évasés et longs, sont fabriqués avec un procédé Water Neutral pour économiser l\'eau. Ils ont une fermeture à bouton et glissière, avec des poches avant et arrière.'
        },
        imageP: './images/clothes/jeans high waist.jpg',
        ratingP: 9,
        nbrstars:100
    },
    {
        en:{
            nameP: 'Skinny Mid-Rise Slim Illusion Crystal Jeans',
            priceP: '25DT',
            descriptionP: 'These mid-rise skinny jeans feature Slim Illusion technology, belt loops, fading details, and button and zip fastening. Made from 94% cotton, 4% polyester, and 2% elastane. Machine wash at 30°C.'
        },
        fr:{
            nameP: 'Jeans Skinny Taille Mi-Haute Slim Illusion Cristal',
            priceP: '25DT',
            descriptionP: 'Ces jeans skinny taille mi-haute présentent la technologie Slim Illusion, des passants de ceinture, des détails décolorés, ainsi qu’une fermeture par bouton et zip. Composés de 94 % coton, 4 % polyester et 2 % élasthanne. Lavage en machine à 30°C.'
        },
        imageP: './images/clothes/skinny jeans.jpg',
        ratingP: 5,
        nbrstars:20
    }
];
// outwear data array
const outwear =[
    {
        en:{
            nameO: 'Fully Lined Tuxedo Blazer',
            priceO: '68.990DT',
            descriptionO: 'This long sleeve, fully lined tuxedo blazer features a slim fit and asymmetrical hem for a modern touch. Its sleek profile balances sophistication and style, making it perfect for both casual and office wear.'
        },
        fr:{
            nameO: 'Blazer Tuxedo Entièrement Doublé',
            priceO: '68.990DT',
            descriptionO: 'Ce blazer tuxedo à manches longues et entièrement doublé présente une coupe ajustée et un ourlet asymétrique pour une touche moderne. Son profil élégant allie sophistication et style, idéal pour les tenues décontractées comme pour le bureau.'
        },
        imageO: './images/clothes/blazer jacket.jpg',
        ratingO: 30,
        nbrstars:90
    },
    {
        en:{
            nameO: 'Mid-length Cotton Coat ',
            priceO: '180.750T',
            descriptionO: 'This women\'s pike coat is made of cotton with lamb\'s fleece for warmth and comfort, ideal for cold winter days. It’s durable and pairs well with various outfits, from boots to sneakers.'
        },
        fr:{
            nameO: 'Manteau en Coton Mi-Long',
            priceO: '180.750DT',
            descriptionO: 'Ce manteau pour femmes est en coton avec de la laine d\'agneau pour la chaleur et le confort, parfait pour les jours froids d’hiver. Il est durable et se marie bien avec divers vêtements, des bottes aux sneakers.'
        },
        imageO: './images/clothes/coat.jpg',
        ratingO: 50,
        nbrstars:90
    },
    {
        en:{
            nameO: 'Autumn Casual Fashion Denim Coat ',
            priceO: '45.990DT',
            descriptionO: 'This women’s casual cotton top is perfect for autumn and winter. Available in blue, it features a solid pattern with long sleeves and a true-to-size fit.'
        },
        fr:{
            nameO: 'Manteau en Jean Casual Automne',
            priceO: '45.990DT',
            descriptionO: 'Ce manteau en coton casual pour femmes est idéal pour l’automne et l’hiver. Disponible en bleu, il présente un motif uni avec des manches longues et une coupe conforme à la taille.'
        },
        imageO: './images/clothes/denim jacket.jpg',
        ratingO: 2,
        nbrstars:20
    },
    {
        en:{
            nameO: 'The North Face Sherpa Nuptse Jacket',
            priceO: '112.950DT',
            descriptionO: 'This White Jacket offers cozy Sherpa fleece warmth and a stylish white exterior. With convenient pockets and a zippered front, it’s perfect for staying warm and fashionable during winter.'
        },
        fr:{
            nameO: 'Veste Sherpa Nuptse The North Face',
            priceO: '112.950DT',
            descriptionO: 'Cette veste blanche offre la chaleur du Sherpa et un extérieur stylé. Avec des poches pratiques et une fermeture éclair, elle est parfaite pour rester au chaud et à la mode pendant l’hiver.'
        },
        imageO: './images/clothes/fleece jacket.jpg',
        ratingO: 100,
        nbrstars:100
    },
    {
        en:{
            nameO: 'Grey Long Wool Coat,',
            priceO: '447.120DT',
            descriptionO: 'This long wool coat is 50% wool and 50% wool blend, fully lined with polyester. It features a versatile collar, double-breasted button closure, and two pockets. Ideal for winter and autumn. Dry clean only.'
        },
        fr:{
            nameO: 'Manteau Long en Laine Gris',
            priceO: '447.120DT',
            descriptionO: 'Ce manteau long en laine est composé à 50 % de laine et à 50 % d’un mélange de laine, entièrement doublé en polyester. Il présente un col polyvalent, une fermeture double boutonnage et deux poches. Idéal pour l’hiver et l’automne. Nettoyage à sec uniquement.'
        },
        imageO: './images/clothes/wool coat.jpg',
        ratingO: 10,
        nbrstars:80
    }
];
// shoes data array
const shoes =[
    {
        en:{
            nameB: 'Women Basic Ankle Boots Lace Up Boots Chunky Heel',
            priceB: '78.320DT',
            descriptionB: 'These shoes have a synthetic sole and outer material, an ankle-high shaft, and a 3 cm platform for comfort and durability.'
        },
        fr:{
            nameB: 'Bottes Cheville Basic pour Femmes à Lacets avec Talon Épais',
            priceB: '78.320DT',
            descriptionB: 'Ces chaussures ont une semelle et un matériau extérieur synthétiques, une tige haute jusqu’à la cheville, et une plateforme de 3 cm pour le confort et la durabilité.'
        },
        imageB: './images/clothes/boots.jpg',
        ratingB: 55,
        nbrstars:100
    },
    {
        en:{
            nameB: 'Fashion Summer Platform Sandals',
            priceB: '41.890DT',
            descriptionB: 'These espadrille wedge sandals have a 3 cm platform and 10 cm wedge. With a metal adjustable ankle buckle and jute-rope platform, they’re stylish and versatile for any occasion.'
        },
        fr:{
            nameB: 'Sandales à Plateforme Mode Été',
            priceB: '41.890DT',
            descriptionB: 'Ces sandales à plateforme espadrille ont une plateforme de 3 cm et un talon de 10 cm. Avec une boucle de cheville ajustable en métal et une plateforme en jute, elles sont élégantes et polyvalentes pour toutes les occasions.'
        },
        imageB: './images/clothes/platforms sandals.jpg',
        ratingB: 15,
        nbrstars:90
    },
    {
        en:{
            nameB: 'Sneakers Casual Athletic Shoes Lace-up',
            priceB: '28.520DT',
            descriptionB: 'These colour-matching pumps feature a low-top design with a mid heel (3-5 cm) and a round toe. The shoes are made from artificial PU and have a shallow cut (less than 7 cm). They can be worn with sleeves or shoe covers.'
        },
        fr:{
            nameB: 'Baskets Athlétiques à Lacets',
            priceB: '28.520DT',
            descriptionB: 'Ces baskets assorties de couleurs présentent un design bas avec un talon moyen (3-5 cm) et une pointe arrondie. Les chaussures sont en PU artificiel et ont une coupe peu profonde (moins de 7 cm). Elles peuvent être portées avec des manches ou des couvre-chaussures.'
        },
        imageB: './images/clothes/sneakers.jpg',
        ratingB: 55,
        nbrstars:100
    }
];


// select the product list container
const dressCateg= document.getElementById('dress_list');
const skirtCateg= document.getElementById('skirt_list');
const shirtCateg= document.getElementById('shirt_list');
const shortCateg= document.getElementById('short_list');
const outCateg= document.getElementById('out_list');
const shoesCateg= document.getElementById('shoes_list');

// function to generate dress product html
function generateDressHTML(product, lang){
    let buttonLabel = lang === 'en' ? 'Add to Cart' : 'Ajouter au Panier';
    return`
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

// function to generate skirt product html
function generateSkirtHTML(productS, lang){
    let buttonLabel = lang === 'en' ? 'Add to Cart' : 'Ajouter au Panier';
    return`
        <div class="swiper-slide">
            <div class="cards">
                <div class="card_top">
                    <img src="${productS.imageS}" alt="${productS[lang].nameS}" class="card_img">
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
                    <h3 class="card_title">${productS[lang].nameS}</h3>
                    <p class="description">${productS[lang].descriptionS}</p>
                    <p class="card_price">${productS[lang].priceS}</p>
                    <div class="card_rating">
                        <div class="card_stars">${generateStars(productS.nbrstars)}</div>
                        <p class="numbers">(${productS.ratingS})</p>
                    </div>
                    <button class="add">${buttonLabel}</button>
                </div>
            </div>
        </div>
    `;
}

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

//  Function to display products based on language
function displayProducts(lang) {
    let ShirtHTML = '';
    let OutHTML = '';
    let ShoesHTML = '';
    let ShortHTML = '';
    let DressHTML = '';
    let SkirtHTML = '';

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
    skirts.forEach(product => {
        SkirtHTML += generateSkirtHTML(product, lang);
    });
    dresses.forEach(product => {
        DressHTML += generateDressHTML(product, lang);
    });

    // Insert the generated HTML
    shirtCateg.innerHTML = ShirtHTML;
    shortCateg.innerHTML = ShortHTML;
    shoesCateg.innerHTML = ShoesHTML;
    outCateg.innerHTML = OutHTML;
    skirtCateg.innerHTML = SkirtHTML;
    dressCateg.innerHTML = DressHTML;

    swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            425: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });

    liking();  
    liking();  
}

// Initial call to display products in default language
displayProducts( 'en');

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


    





