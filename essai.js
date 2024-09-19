// javascript for the responsive design 

const hamburger = document.querySelector('.hamburger');
const Nav = document.querySelector('.mobile_nav');
hamburger.addEventListener('click', () => {
  Nav.classList.toggle("mobile_nav_hide");
});

// javascript for the language part

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
    // Reset productIndex for new language
    productIndex[lang] = 0; 
    // Update product display to the selected language
    displayProducts(products, lang);
    liking();
    attachAddToCartListeners();
    updateCartDisplay();
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

// product data array
const products =[
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
            name: 'Average Joe Striped Color Block Tee - Black ',
            price: '30.5DT',
            description: 'Try our Men\'s Color Block Print Tee! With a trendy color block design and a flattering fit, it\'s perfect for any casual day. Made from soft, breathable material, it keeps you cool and comfortable all day.'
        },
        fr: {
            name: 'T-shirt Color Block à Rayures- Noir',
            price: '30.5DT',
            description: 'Essayez notre t-shirt à imprimé Color Block pour hommes ! Avec un design tendance et une coupe flatteuse, il est parfait pour une journée décontractée. Fabriqué dans un matériau doux et respirant, il vous garde au frais et à l\'aise toute la journée.'
        },
        image: './images/clothes/t shirt men.jpg',
        rating: 83,
        nbrstars:100
    },
    {
        en:{
            name: 'Spooky Season Graphic Tee',
            price: '45.9DT',
            description: 'Our shirts are authentically designed and hand screen printed for top quality. The ink is dyed into the fabric, ensuring graphics won’t peel. They feature 30 singles of 100% washed cotton for a soft, comfortable feel.'
        },
        fr:{
            name: 'T-shirt Graphique Saison Effrayante',
            price: '45.9DT',
            description: 'Nos chemises, imprimées à la main avec de l\'encre teintée, offrent des graphiques durables. Elles sont en coton lavé à 100% avec 30 fils pour une douceur optimale.'
        },
        image: './images/clothes/graphic tee.jpg',
        rating: 79,
        nbrstars:100
    },
    {
        en:{
            name: 'Men\'s Plaid Long Sleeves Shirts ',
            price: '35.9DT',
            description: 'The mens long sleeve button down shirt is made with high quality polyester, which is soft, lightweight, durable, comfortable to wear and care for.'
        },
        fr:{
            name: 'Chemise à Carreaux Homme à Manches Longues',
            price: '35.9DT',
            description: 'La chemise pour homme à manches longues est fabriquée en polyester de haute qualité, doux, léger, durable et confortable à porter et à entretenir.'
        },
        image: './images/clothes/chemise homme.jpg',
        rating: 59,
        nbrstars:100
    },
    {
        en:{
            name: 'Trainers Puma Puma-180 grey white black',
            price: '95.9DT',
            description: 'The Puma Puma-180 sneakers draw on the 90s skate aesthetic and redesign it for the current generation of skaters. These sneakers feature a sturdy design, thick padding, and technical exterior.'
        },
        fr:{
            name: 'Baskets Puma Puma-180 gris blanc noir',
            price: '95.9DT',
            description: 'Les baskets Puma Puma-180 s\'inspirent de l\'esthétique du skate des années 90 et la réinventent pour la génération actuelle de skateurs. Ces baskets présentent un design robuste, un rembourrage épais et un extérieur technique.'
        },
        image: './images/clothes/sneakers men.jpg',
        rating: 23,
        nbrstars:100
    },
    {
        en:{
            name: 'FLYING BIRDS brands Women Handbag ',
            price: '77.1DT',
            description: 'This stylish handbag is both easy to carry and made from high-quality, durable material. It features an adjustable shoulder strap and a thick chain strap, making it suitable for most arm sizes.'
        },
        fr:{
            name: 'Sac à Main Femme FLYING BIRDS',
            price: '77.1DT',
            description: 'Ce sac à main élégant est à la fois facile à porter et fabriqué à partir de matériaux de haute qualité et durables. Il dispose d\'une bandoulière réglable et d\'une épaisse sangle en chaîne, le rendant adapté à la plupart des tailles de bras.'
        },
        image: './images/clothes/handbag.jpg',
        rating: 6,
        nbrstars:100
    }
];
// all products array
const all=[
    {
        en:{
            nameA: 'Clay Denim Midi Dress',
            priceA: '50DT',
            descriptionA: 'This women\'s midi dress has an A-line silhouette, non-adjustable straps, a sweetheart neckline, and a front placket with metal buttons.'    
        },
        fr: {
            nameA: 'Robe Midi en Denim Argile',
            priceA: '50DT',
            descriptionA: 'Cette robe midi pour femme a une silhouette en A, des bretelles non réglables, un décolleté en cœur et une patte de boutonnage avec des boutons métalliques.'
        },
        imageA: './images/clothes/denim dress.jpg',
        ratingA: 120,
        nbrstars: 100  
    },
    {
        en:{
            nameA: 'A Line Green Long Prom Dress with Criss Cross Back',
            priceA: '1500.99DT',
            descriptionA: 'This prom dress features a plunging V neckline with sheer mesh, spaghetti straps that lace up in the back, and a corset bodice adorned with beaded floral appliqués.'
        },
        fr:{
            nameA: 'Robe de Bal Verte à Dos Croisé',
            priceA: '1500.99DT',
            descriptionA: 'Cette robe de bal comporte un décolleté en V plongeant avec un filet transparent, des bretelles spaghetti qui se nouent dans le dos et un corsage en corset orné d’appliqués floraux perlés.'
        },
        imageA: './images/clothes/formal dress.jpg',
        ratingA: 2,
        nbrstars:80
    },
    {
        en:{
             nameA: 'Hydrangea Tender floral maxi tie-strap dress',
             priceA: '559.2DT',
             descriptionA: 'This dress is made of organza. The gown has a tiered full skirt.  The bodice of the dress has a lace-up corset with straps. The gown is created in blush blue and pastel green floral prints.'
        },
        fr:{
             nameA: 'Robe Maxi à Bretelles à Fleurs Tendres Hortensia',
             priceA: '559.2DT',
             descriptionA: 'Cette robe en organza présente une jupe pleine en étages, un corset avec laçage et des bretelles. Elle est ornée d\'imprimés floraux en bleu pastel et vert tendre.'
        },
         imageA: './images/clothes/maxi dress.jpg',
         ratingA: 9,
         nbrstars:90
     },
     {
         en:{
             nameA: 'Leaf Print Cotton Mini Dress',
             priceA: '800.2DT',
             descriptionA: 'Fits to all sizes.Sleeveless, zip fastening, fitted bodice, leaf print, gathered waist, mini length, concealed zip fastening, padded cups, underwired.'
         },
         fr:{
             nameA: 'Robe Mini en Coton à Imprimé Feuille',
             priceA: '800.2DT',
             descriptionA: 'S’adapte à toutes les tailles. Sans manches, fermeture zippée, corsage ajusté, imprimé feuille, taille froncée, longueur mini, fermeture éclair dissimulée, bonnets rembourrés, avec armature.'
         },
         imageA: './images/clothes/leaf dress.jpg',
         ratingA: 3,
         nbrstars:50
     },
     {
         en:{
             nameA: 'Convertible Striped Foldover Elegant Off-Shoulder Knitted Dresses - Green  ',
             priceA: '210.6DT',
             descriptionA: 'The off-the-shoulder design highlights the collarbones, adding charm to your look. Long sleeves with plaid print details create a simple yet elegant style. Made from a soft cotton blend, it\'s perfect for autumn and winter.'
         },
         fr:{
             nameA: 'Robe Élégante à Épaules Dénudées en Maille Rayée Convertible',
             priceA: '210.6DT',
             descriptionA: 'Le design à épaules dénudées met en valeur les clavicules, ajoutant du charme à votre look. Les manches longues avec détails à carreaux créent un style simple mais élégant. Fabriquée à partir d’un mélange doux de coton, parfaite pour l’automne et l’hiver.'
         },
         imageA: './images/clothes/longsleeve dress.jpg',
         ratingA: 25,
         nbrstars:60
     },
     {
        en:{
            nameA: 'Men\'s Plaid Long Sleeves Shirts ',
            priceA: '35.9DT',
            descriptionA: 'The mens long sleeve button down shirt is made with high quality polyester, which is soft, lightweight, durable, comfortable to wear and care for.'
        },
        fr:{
            nameA: 'Chemises à Manches Longues à Carreaux pour Homme',
            priceA: '35.9DT',
            descriptionA: 'La chemise à manches longues pour homme est fabriquée en polyester de haute qualité, offrant douceur, légèreté, durabilité et confort.'
        },
        imageA: './images/clothes/chemise homme.jpg',
        ratingA: 59,
        nbrstars:100
    },
    {
        en:{
            nameA: 'Average Joe Striped Color Block Tee - Black ',
            priceA: '30.5DT',
            descriptionA: 'Try our Men\'s Color Block Print Tee! With a trendy color block design and a flattering fit, it\'s perfect for any casual day. Made from soft, breathable material, it keeps you cool and comfortable all day.'
        },
        fr:{
            nameA: 'Tee-Shirt à Rayures et Color Block - Noir ',
            priceA: '30.5DT',
            descriptionA: 'Essayez notre tee-shirt pour homme à design color block ! Avec son design tendance et sa coupe flatteuse, il est parfait pour une journée décontractée. Fabriqué en matériau doux et respirant, il vous garde frais et confortable toute la journée.'
        },
        imageA: './images/clothes/t shirt men.jpg',
        ratingA: 83,
        nbrstars:100
    },
    {
        en:{
            nameA: 'Men’s casual formal shirt',
            priceA: '55.190DT',
            descriptionA: 'Men’s casual formal shirt with square print, long sleeves, lapel collar. Lightweight, breathable, and fitted.'
        },
        fr:{
            nameA: 'Chemise Formelle pour Homme',
            priceA: '55.190DT',
            descriptionA: 'Chemise formelle pour homme avec imprimé carré, manches longues, col à revers. Légère, respirante et ajustée.'
        },
        imageA: './images/clothes/FormalShirt.jpg',
        ratingA: 5,
        nbrstars:60
    },
    {
        en:{
            nameA: 'Stylish Men\'s Sweater',
            priceA: '45DT',
            descriptionA: 'Made from durable polyester, this garment offers long-lasting comfort and easy maintenance. Thoughtful details and modern accents enhance your winter style, combining functionality with a contemporary look.'
        },
        fr:{
            nameA: 'Pull Stylé pour Homme',
            priceA: '45DT',
            descriptionA: 'Fabriqué en polyester durable, ce vêtement offre un confort de longue durée et un entretien facile. Des détails réfléchis et des accents modernes améliorent votre style hivernal, alliant fonctionnalité et look contemporain.'
        },
        imageA: './images/clothes/sweater men.jpg',
        ratingA: 75,
        nbrstars:90
    },
    {
        en:{
            nameA: 'Mens Classic Dress Shirt White',
            priceA: '66.150DT',
            descriptionA: 'This classic-fit dress shirt in white is made from 100% cotton for comfort and durability. It features long sleeves, a point (straight) collar, and standard cuffs. The solid pattern and regular size make it a versatile choice for any wardrobe.'
        },
        fr:{
            nameA: 'Chemise de Costume Classique Blanche pour Homme',
            priceA: '66.150DT',
            descriptionA: 'Cette chemise de costume classique blanche est fabriquée en 100 % coton pour le confort et la durabilité. Elle dispose de manches longues, d\'un col pointu et de poignets standards. Le motif uni et la taille régulière en font un choix polyvalent pour toute garde-robe.'
        },
        imageA: './images/clothes/dress shirt men.jpg',
        ratingA: 5,
        nbrstars:60
    },
    {
        en:{
            nameA: 'Spooky Season Graphic Tee',
            priceA: '45.9DT',
            descriptionA: 'Our shirts are authentically designed and hand screen printed for top quality. The ink is dyed into the fabric, ensuring graphics won’t peel. They feature 30 singles of 100% washed cotton for a soft, comfortable feel.'
        },
        fr:{
            nameA: 'T-shirt Graphique Saison Effrayante',
            priceA: '45.9DT',
            descriptionA: 'Nos chemises, imprimées à la main avec de l\'encre teintée, offrent des graphiques durables. Elles sont en coton lavé à 100% avec 30 fils pour une douceur optimale.'
        },
        imageA: './images/clothes/graphic tee.jpg',
        ratingA: 79,
        nbrstars:100
    },
    {
        en:{
            nameA: 'Off shoulder blouse in cross fit',
            priceA: '75DT',
            descriptionA: 'This tailored cut top features an off-shoulder neckline, short sleeves, and side gathers for a flattering fit. Made from stretch fine rib fabric, it’s composed of 94% cotton and 6% elastane, ensuring comfort and flexibility.'
        },
        fr:{
            nameA: 'Blouse à Épaules Dénudées avec Coupe Croisée',
            priceA: '75DT',
             descriptionA: 'Ce haut coupé sur mesure présente un décolleté à épaules dénudées, des manches courtes et des fronces latérales pour une coupe flatteuse. Fabriqué en tissu côtelé extensible de 94 % coton et 6 % élasthanne, il garantit confort et flexibilité.'
        },
        imageA: './images/clothes/sleevless top.jpg',
        ratingA: 1,
        nbrstars:100
    },
    {
        en:{
            nameA: 'Heart Pattern Drop Shoulder Sweater',
            priceA: '43.190DT',
            descriptionA: 'This casual pullover features a stand collar, drop shoulders, and a heart pattern in beige. With long sleeves and a regular length, it’s ideal for late fall temperatures. Made from 100% polyester with slight stretch, it offers a regular fit. Hand wash or dry clean only.'
        },
        fr:{
            nameA: 'Pull à Motif Cœur et Épaules Tombantes',
            priceA: '43.190DT',
            descriptionA: 'Ce pull décontracté en polyester 100% a un col montant, des épaules tombantes, et un motif cœur beige. Avec ses manches longues et sa coupe régulière, il est parfait pour la fin d’automne. Légèrement extensible. Lavage à la main ou nettoyage à sec uniquement. '
        },
        imageA: './images/clothes/sweater.jpg',
        ratingA: 170,
        nbrstars:90
    },
    {
        en:{
            nameA: 'No Boundaries Women’s V-Neck Sweater Vest',
            priceA: '25.590DT',
            descriptionA: 'This high-quality sleeveless knitted vest is made from lightweight, breathable fabric. It features a stylish houndstooth pattern, ribbed texture, and v-neck with pearl buttons. Suitable for all seasons, it pairs well with jeans, leggings, or boots.'
        },
        fr:{
            nameA: 'Gilet Pull à Col V pour Femmes No Boundaries',
            priceA: '25.590DT',
            descriptionA: 'Ce gilet tricoté sans manches est fabriqué à partir d’un tissu léger et respirant de haute qualité. Il présente un motif pied-de-poule élégant, une texture côtelée et un col en V avec des boutons de perle. Convient à toutes les saisons, il se marie bien avec des jeans, leggings ou bottes.'
        },
        imageA: './images/clothes/images.jpg',
        ratingA: 5,
        nbrstars:60
    },
    {
        en:{
            nameA: 'Floral Print Elastic Waist Layered Holiday Skirt',
            priceA: '31.990DT',
            descriptionA: 'This floral ruffle skirt features a drawstring, layered hem, and ankle length. Made from blended polyester with a non-stretch, A-line silhouette, it has a natural waistline and vibrant print, ideal for spring and summer.'
        },
        fr:{
            nameA: 'Jupe de Vacances à Imprimé Floral avec Taille Élastique',
            priceA: '31.990DT',
            descriptionA: 'Cette jupe à volants florale présente un ourlet superposé, une longueur cheville, et une taille élastique. Conçue en polyester mélangé non extensible, elle a une silhouette trapèze et un imprimé vif, parfaite pour le printemps et l’été.'
        },
        imageA: './images/clothes/layered skirt.jpg',
        ratingA: 100,
        nbrstars: 100
    },
    {
        en:{
            nameA: 'Ponte Pencil Skirt - RED ',
            priceA: '47.450DT',
            descriptionA: 'Our Premium Nylon Ponte Pencil Skirt is perfect for any occasion. Its iconic, form-fitting silhouette transitions seamlessly from office to date night. Made from premium fabric, it sits below the knee and offers a flattering fit.'
        },
        fr:{
            nameA: 'Jupe Crayon Ponte - Rouge',
            priceA: '47.450DT',
            descriptionA: 'Notre jupe crayon Ponte en nylon premium est parfaite pour toutes les occasions. Sa silhouette emblématique et ajustée passe sans effort du bureau au rendez-vous. Fabriquée en tissu de qualité, elle arrive sous les genoux et offre une coupe flatteuse.'
        },
        imageA: './images/clothes/pencil skirt.jpg',
        ratingA: 5,
        nbrstars: 20
    },
    {
        en:{
            nameA: 'Dark In Love Leah Tartan Mini Skirt ',
            priceA: '33.510DT',
            descriptionA: 'This skirt features a stunning black and white tartan with a contrasting black panel. It fastens with a hidden side zip and includes faux leather straps and a large safety pin detail. '
        },
        fr:{
            nameA: 'Mini Jupe Tartan Dark In Love Leah',
            priceA: '33.510DT',
            descriptionA: 'Cette jupe présente un superbe tartan noir et blanc avec un panneau noir contrastant. Elle se ferme avec une fermeture éclair latérale cachée et comprend des sangles en faux cuir et une grande épingle à nourrice.'
        },
        imageA: './images/clothes/plaid skirt.jpg',
        ratingA: 12,
        nbrstars: 40
    },
    {
        en:{
            nameA: 'Formal Dark Grey Premium Pant Suiting Stuff',
            priceA: '100DT',
            descriptionA: 'Made with high-quality material, this suit exudes a sleek and classic look. Perfect for any formal occasion, its premium fabric offers comfort and durability. Elevate your style with this must-have suiting stuff.'
        },
        fr:{
            nameA: 'Pantalon de Costume Premium Gris Foncé',
            priceA: '100DT',
            descriptionA: 'Fabriqué avec un matériel de haute qualité, ce costume dégage un look élégant et classique. Parfait pour toute occasion formelle, son tissu premium offre confort et durabilité. Élevez votre style avec ce vêtement incontournable.'
        },
        imageA: './images/clothes/dress pants mens.jpg',
        ratingA: 15,
        nbrstars:80
    },
    {
        en:{
            nameA: 'Protego Denim Jeans',
            priceA: '25.990DT',
            descriptionA: 'Crafted from stretchy denim, these jeans provide a perfect fit and unmatched comfort. The vintage wash adds timeless charm, making them a must-have for any wardrobe.'
        },
        fr:{
            nameA: 'Jean Denim Protego',
            priceA: '25.990DT',
            descriptionA: 'Fabriqués en denim extensible, ces jeans offrent un ajustement parfait et un confort inégalé. Le lavage vintage ajoute un charme intemporel, les rendant indispensables pour toute garde-robe.'
        },
        imageA: './images/clothes/jeans men.jpg',
        ratingA: 25,
        nbrstars:80
    },
    {
        en:{
            nameA: 'Summer men\'s Solid Shorts ',
            priceA: '18.290DT',
            descriptionA: 'These shorts are durable, made from high-quality materials with reinforced stitching. Designed with comfort in mind, they feature adjustable straps and ergonomic designs.'
        },
        fr:{
            nameA: 'Shorts Solides d’Été pour Homme',
            priceA: '18.290DT',
            descriptionA: 'Ces shorts sont durables, fabriqués avec des matériaux de haute qualité et une couture renforcée. Conçus pour le confort, ils sont équipés de sangles réglables et d’un design ergonomique.'
        },
        imageA: './images/clothes/shorts men.jpg',
        ratingA: 15,
        nbrstars:60
    },
    {
        en:{
            nameA: 'Men\'s Grey Loose Sports Shorts',
            priceA: '15.990DT',
            descriptionA: 'These shorts feature a natural waistline and a normal shape. In light gray, they are made from slightly stretched knitted fabric, consisting of 95% polyester and 5% elastane. Designed for easy care, they can be machine washed or professionally dry cleaned.'
        },
        fr:{
            nameA: 'Shorts Sportifs Amples Gris pour Homme',
            priceA: '15.990DT',
            descriptionA: 'Ces shorts présentent une taille naturelle et une forme normale. En gris clair, ils sont fabriqués en tissu tricoté légèrement extensible, composé de 95 % polyester et 5 % élasthanne. Faciles à entretenir, ils peuvent être lavés en machine ou nettoyés à sec.'
        },
        imageA: './images/clothes/short sport.jpg',
        ratingA: 10,
        nbrstars:80
    },
    {
        en:{
         nameA: 'Flap Pocket Cargo Denim Jeans',
         priceA: '110DT',
         descriptionA: 'These light wash straight-leg jeans feature a zipper fly with button and pocket details. Made from non-stretch denim, they have a natural waistline and long length. Machine washable and unlined, they are not sheer.'
        },
        fr:{
         nameA: 'Jeans Cargo à Poches à Rabat',
         priceA: '110DT',
         descriptionA: 'Ces jeans à coupe droite délavée claire présentent une fermeture zippée avec un bouton et des poches. Fabriqués en denim non extensible, ils ont une taille naturelle et une longueur longue. Lavables en machine et non doublés, ils ne sont pas transparents.'
        },
         imageA: './images/clothes/cargo jeans.jpg',
         ratingA: 45,
         nbrstars:80
     },
     {
         en:{
             nameA: 'High Waist Wide Leg Cargo Women\'s Shorts',
             priceA: '78.990DT',
             descriptionA: 'These breathable polyester shorts feature an adjustable high elastic waist. Ideal for running, fitness, and casual wear. Lightweight, quick-drying, and perfect for various activities.'
         },
         fr:{
             nameA: 'Shorts Cargo Taille Haute à Jambes Larges pour Femmes',
             priceA: '78.990DT',
             descriptionA: 'Ces shorts en polyester respirant présentent une taille haute élastique ajustable. Idéal pour la course, le fitness et les tenues décontractées. Légers, à séchage rapide, ils sont parfaits pour diverses activités.'
         },
         imageA: './images/clothes/cargo shorts.jpg',
         ratingA: 25,
         nbrstars:80
     },
     {
         en:{
             nameA: 'Distressed Denim Shorts',
             priceA: '27.290DT',
             descriptionA: 'These shorts feature a five-pocket design, mid-rise waist, button closure, and concealed fly. With ripped details and frayed hems, they’re a standout addition to any wardrobe. Made from 100% cotton. Machine washable.'
         },
         fr:{
             nameA: 'Shorts en Jean Déchiré',
             priceA: '27.290DT',
             descriptionA: 'Ces shorts présentent une conception à cinq poches, une taille mi-haute, une fermeture boutonnée et un zip dissimulé. Avec des détails déchirés et des ourlets effilochés, ils sont un ajout incontournable à toute garde-robe. Fabriqués en 100 % coton. Lavables en machine.'
         },
         imageA: './images/clothes/denim shorts.jpg',
         ratingA: 15,
         nbrstars:60
     },
     {
         en:{
             nameA: 'High Waist Strappy Solid Color Shorts - Brick red ',
             priceA: '44.990DT',
             descriptionA: 'High-waisted shorts in 95% polyester and 5% elastane. Solid color, simple design, lightweight (210g), no back pocket. Ideal for spring and summer.'
         },
         fr:{
             nameA: 'Shorts Taille Haute Unis - Rouge Brique',
             priceA: '44.990DT',
             descriptionA: 'Shorts taille haute en 95 % polyester et 5 % élasthanne. Couleur unie, design simple, léger (210g), sans poche arrière. Idéal pour le printemps et l’été.'
         },
         imageA: './images/clothes/high waist shorts.jpg',
         ratingA: 45,
         nbrstars:80
     },
     {
         en:{
             nameA: 'Women\'s wide-leg jeans',
             priceA: '88.990DT',
             descriptionA: 'These high-waisted denim pants feature a wide leg silhouette and long length. Made with a Water Neutral process to reduce water use, they include a button and zipper closure, front and back pockets.'
         },
         fr:{
             nameA: 'Jeans Évasés à Taille Haute pour Femmes',
             priceA: '88.990DT',
             descriptionA: 'Ces jeans taille haute, évasés et longs, sont fabriqués avec un procédé Water Neutral pour économiser l\'eau. Ils ont une fermeture à bouton et glissière, avec des poches avant et arrière.'
         },
         imageA: './images/clothes/jeans high waist.jpg',
         ratingA: 9,
         nbrstars:100
     },
     {
         en:{
             nameA: 'Skinny Mid-Rise Slim Illusion Crystal Jeans',
             priceA: '25DT',
             descriptionA: 'These mid-rise skinny jeans feature Slim Illusion technology, belt loops, fading details, and button and zip fastening. Made from 94% cotton, 4% polyester, and 2% elastane. Machine wash at 30°C.'
         },
         fr:{
             nameA: 'Jeans Skinny Taille Mi-Haute Slim Illusion Cristal',
             priceA: '25DT',
             descriptionA: 'Ces jeans skinny taille mi-haute présentent la technologie Slim Illusion, des passants de ceinture, des détails décolorés, ainsi qu’une fermeture par bouton et zip. Composés de 94 % coton, 4 % polyester et 2 % élasthanne. Lavage en machine à 30°C.'
         },
         imageA: './images/clothes/skinny jeans.jpg',
         ratingA: 5,
         nbrstars:20
     },
     {
        en:{
            nameA: 'Mens Letter Print Contrast Patchwork Baseball Collar Warm Jacket',
            priceA: '88.990DT',
            descriptionA: 'This regular-fit polyester jacket features a patchwork pattern and pockets. It has long sleeves and a sporty, casual style with regular thickness.'
        },
        fr:{
            nameA: 'Veste Chaude avec Imprimé Lettres pour Homme - Col Baseball Contrasté',
            priceA: '88.990DT',
            descriptionA: 'Cette veste en polyester à coupe régulière présente un motif patchwork et des poches. Elle est dotée de manches longues et d’un style sportif et décontracté avec une épaisseur normale.'
        },
        imageA: './images/clothes/jacket men.jpg',
        ratingA: 30,
        nbrstars:90
    },
    {
        en:{
            nameA: 'Casual Jacket ',
            priceA: '99.950T',
            descriptionA: 'Made from Soft Fleece and lined with polyester, this jacket ensures you stay cozy without sacrificing comfort. Its versatile design and functional features make it an ideal choice for various casual occasions.'
        },
        fr:{
            nameA: 'Veste Décontracté',
            priceA: '99.950DT',
             descriptionA: 'Fabriquée en polaire douce et doublée de polyester, cette veste vous garde au chaud sans sacrifier le confort. Son design polyvalent et ses caractéristiques fonctionnelles en font un choix idéal pour diverses occasions décontractées.'
        },
        imageA: './images/clothes/jacket mens.jpg',
        ratingA: 50,
        nbrstars:80
    },
    {
        en:{
            nameA: 'Trenchcoat',
            priceA: '350.950DT',
            descriptionA: 'This men’s trench coat blends classic style with modern durability. It features a double-breasted front, epaulets, and a belted waist. The long length and adjustable cuffs offer great coverage and protection for various occasions.'
        },
        fr:{
            nameA: 'Trench Coat',
            priceA: '350.950DT',
            descriptionA: 'Ce trench coat pour homme allie style classique et durabilité moderne. Il présente un devant à double boutonnage, des épaulettes et une taille ceinturée. Sa longueur longue et ses poignets ajustables offrent une excellente couverture et protection pour diverses occasions.'
        },
        imageA: './images/clothes/Men-Trenchcoat.jpg',
        ratingA: 1,
        nbrstars:100
    },
    {
        en:{
            nameA: 'Casual Sleeveless Sweater Jacket Vests',
            priceA: '54.120DT',
            descriptionA: 'This 100% polyester down vest features high-loft baffles, a zipper, and drawstring closure. Designed for cold-weather activities, it offers premium warmth and is machine washable.'
        },
        fr:{
            nameA: 'Gilet Sans Manches Décontracté',
            priceA: '54.120DT',
            descriptionA: 'Ce gilet en polyester 100 % présente des boudins haute-loft, une fermeture éclair et un cordon de serrage. Conçu pour les activités par temps froid, il offre une chaleur premium et est lavable en machine.'
        },
        imageA: './images/clothes/sleevless coat men.jpg',
        ratingA: 10,
        nbrstars:80
    },
    {
        en:{
            nameA: 'Fully Lined Tuxedo Blazer',
            priceA: '68.990DT',
            descriptionA: 'This long sleeve, fully lined tuxedo blazer features a slim fit and asymmetrical hem for a modern touch. Its sleek profile balances sophistication and style, making it perfect for both casual and office wear.'
        },
        fr:{
            nameA: 'Blazer Tuxedo Entièrement Doublé',
            priceA: '68.990DT',
            descriptionA: 'Ce blazer tuxedo à manches longues et entièrement doublé présente une coupe ajustée et un ourlet asymétrique pour une touche moderne. Son profil élégant allie sophistication et style, idéal pour les tenues décontractées comme pour le bureau.'
        },
        imageA: './images/clothes/blazer jacket.jpg',
        ratingA: 30,
        nbrstars:90
    },
    {
        en:{
            nameA: 'Mid-length Cotton Coat ',
            priceA: '180.750T',
            descriptionA: 'This women\'s pike coat is made of cotton with lamb\'s fleece for warmth and comfort, ideal for cold winter days. It’s durable and pairs well with various outfits, from boots to sneakers.'
        },
        fr:{
            nameA: 'Manteau en Coton Mi-Long',
            priceA: '180.750DT',
            descriptionA: 'Ce manteau pour femmes est en coton avec de la laine d\'agneau pour la chaleur et le confort, parfait pour les jours froids d’hiver. Il est durable et se marie bien avec divers vêtements, des bottes aux sneakers.'
        },
        imageA: './images/clothes/coat.jpg',
        ratingA: 50,
        nbrstars:90
    },
    {
        en:{
            nameA: 'Autumn Casual Fashion Denim Coat ',
            priceA: '45.990DT',
            descriptionA: 'This women’s casual cotton top is perfect for autumn and winter. Available in blue, it features a solid pattern with long sleeves and a true-to-size fit.'
        },
        fr:{
            nameA: 'Manteau en Jean Casual Automne',
            priceA: '45.990DT',
            descriptionA: 'Ce manteau en coton casual pour femmes est idéal pour l’automne et l’hiver. Disponible en bleu, il présente un motif uni avec des manches longues et une coupe conforme à la taille.'
        },
        imageA: './images/clothes/denim jacket.jpg',
        ratingA: 2,
        nbrstars:20
    },
    {
        en:{
            nameA: 'The North Face Sherpa Nuptse Jacket',
            priceA: '112.950DT',
            descriptionA: 'This White Jacket offers cozy Sherpa fleece warmth and a stylish white exterior. With convenient pockets and a zippered front, it’s perfect for staying warm and fashionable during winter.'
        },
        fr:{
            nameA: 'Veste Sherpa Nuptse The North Face',
            priceA: '112.950DT',
            descriptionA: 'Cette veste blanche offre la chaleur du Sherpa et un extérieur stylé. Avec des poches pratiques et une fermeture éclair, elle est parfaite pour rester au chaud et à la mode pendant l’hiver.'
        },
        imageA: './images/clothes/fleece jacket.jpg',
        ratingA: 100,
        nbrstars:100
    },
    {
        en:{
            nameA: 'Grey Long Wool Coat,',
            priceA: '447.120DT',
            descriptionA: 'This long wool coat is 50% wool and 50% wool blend, fully lined with polyester. It features a versatile collar, double-breasted button closure, and two pockets. Ideal for winter and autumn. Dry clean only.'
        },
        fr:{
            nameA: 'Manteau Long en Laine Gris',
            priceA: '447.120DT',
            descriptionA: 'Ce manteau long en laine est composé à 50 % de laine et à 50 % d’un mélange de laine, entièrement doublé en polyester. Il présente un col polyvalent, une fermeture double boutonnage et deux poches. Idéal pour l’hiver et l’automne. Nettoyage à sec uniquement.'
        },
        imageA: './images/clothes/wool coat.jpg',
        ratingA: 10,
        nbrstars:80
    },
    {
        en:{
            nameA: 'Caterpillar Excavator S3 safety boots',
            priceA: '70.120DT',
            descriptionA: 'Water-resistant leather upper, breathable Nylex lining, shock-absorbing midsole, SRA rubber sole, iTechnology, composite toecap, and anti-puncture insert.'
        },
        fr:{
            nameA: 'Bottes de Sécurité Caterpillar Excavator S3',
            priceA: '70.120DT',
            descriptionA: 'Tige en cuir résistant à l\'eau, doublure en Nylex respirante, semelle intermédiaire absorbante des chocs, semelle en caoutchouc SRA, iTechnology, embout en composite et insert anti-perforation.'
        },
        imageA: './images/clothes/boot men.jpg',
        ratingA: 15,
        nbrstars:60
    },
    {
        en:{
            nameA: 'Rucci Plain Toe Oxford Men\'s Shoes',
            priceA: '65.890DT',
            descriptionA: 'Durable and long-lasting with a breathable upper and cushioned lining. Features pull-on closure, cone heel, leather sole, and slip-on style.'
        },
        fr:{
            nameA: 'Chaussures Oxford Plain Toe Rucci pour Homme',
            priceA: '65.890DT',
            descriptionA: 'Durables et résistantes avec une tige respirante et une doublure rembourrée. Présente une fermeture à enfilage, un talon conique, une semelle en cuir et un style slip-on.'
        },
        imageA: './images/clothes/men shoes formal.jpg',
        ratingA: 15,
        nbrstars:80
    },
    {
        en:{
            nameA: 'Trainers Puma Puma-180 grey white black',
            priceA: '95.9DT',
            descriptionA: 'The Puma Puma-180 sneakers draw on the 90s skate aesthetic and redesign it for the current generation of skaters. These sneakers feature a sturdy design, thick padding, and technical exterior.'
        },
        fr:{
            nameA: 'Baskets Puma Puma-180 gris blanc noir',
            priceA: '95.9DT',
            descriptionA: 'Les baskets Puma Puma-180 s\'inspirent de l\'esthétique du skate des années 90 et la réinventent pour la génération actuelle de skateurs. Ces baskets présentent un design robuste, un rembourrage épais et un extérieur technique.'
        },
        imageA: './images/clothes/sneakers men.jpg',
        ratingA: 23,
        nbrstars:100
    },
    {
        en:{
            nameA: 'Women Basic Ankle Boots Lace Up Boots Chunky Heel',
            priceA: '78.320DT',
            descriptionA: 'These shoes have a synthetic sole and outer material, an ankle-high shaft, and a 3 cm platform for comfort and durability.'
        },
        fr:{
            nameA: 'Bottes Cheville Basic pour Femmes à Lacets avec Talon Épais',
            priceA: '78.320DT',
            descriptionA: 'Ces chaussures ont une semelle et un matériau extérieur synthétiques, une tige haute jusqu’à la cheville, et une plateforme de 3 cm pour le confort et la durabilité.'
        },
        imageA: './images/clothes/boots.jpg',
        ratingA: 55,
        nbrstars:100
    },
    {
        en:{
            nameA: 'Fashion Summer Platform Sandals',
            priceA: '41.890DT',
            descriptionA: 'These espadrille wedge sandals have a 3 cm platform and 10 cm wedge. With a metal adjustable ankle buckle and jute-rope platform, they’re stylish and versatile for any occasion.'
        },
        fr:{
            nameA: 'Sandales à Plateforme Mode Été',
            priceA: '41.890DT',
            descriptionA: 'Ces sandales à plateforme espadrille ont une plateforme de 3 cm et un talon de 10 cm. Avec une boucle de cheville ajustable en métal et une plateforme en jute, elles sont élégantes et polyvalentes pour toutes les occasions.'
        },
        imageA: './images/clothes/platforms sandals.jpg',
        ratingA: 15,
        nbrstars:90
    },
    {
        en:{
            nameA: 'Sneakers Casual Athletic Shoes Lace-up',
            priceA: '28.520DT',
            descriptionA: 'These colour-matching pumps feature a low-top design with a mid heel (3-5 cm) and a round toe. The shoes are made from artificial PU and have a shallow cut (less than 7 cm). They can be worn with sleeves or shoe covers.'
        },
        fr:{
            nameA: 'Baskets Athlétiques à Lacets',
            priceA: '28.520DT',
            descriptionA: 'Ces baskets assorties de couleurs présentent un design bas avec un talon moyen (3-5 cm) et une pointe arrondie. Les chaussures sont en PU artificiel et ont une coupe peu profonde (moins de 7 cm). Elles peuvent être portées avec des manches ou des couvre-chaussures.'
        },
        imageA: './images/clothes/sneakers.jpg',
        ratingA: 55,
        nbrstars:100
    },
    {
        en:{
            nameA: 'Rose Gold Bracelet  ',
            priceA: '59.990DT',
            descriptionA: 'This delicate rose gold bridal bracelet features sparkling cubic zirconia stones. Made with rose gold-plated brass and nickel-free.'
        },
        fr:{
            nameA: 'Bracelet en Or Rose',
            priceA: '59.990DT',
            descriptionA: 'Ce délicat bracelet de mariage en or rose présente des pierres scintillantes en zircon cubique. Fabriqué en laiton plaqué or rose et sans nickel.'
        },
        imageA: './images/clothes/bracelet.jpg',
        ratingA: 9,
        nbrstars:100
    },
    {
        en:{
            nameA: 'Tulip Opal Earrings ',
            priceA: '29.990DT',
            descriptionA: 'Elegant earrings with natural opal and AAA-grade zircon. Size: 4.0 cm x 1.2 cm, weight: 8.8 g/pair. Hypoallergenic, lead, and nickel-free.'
        },
        fr:{
            nameA: 'Boucles d\'Oreilles Tulipe Opale',
            priceA: '29.990DT',
            descriptionA: 'Boucles d\'oreilles élégantes avec opale naturelle et zircon de qualité AAA. Taille : 4,0 cm x 1,2 cm, poids : 8,8 g/pair. Hypoallergénique, sans plomb et sans nickel.'
        },
        imageA: './images/clothes/earrings.jpg',
        ratingA: 2,
        nbrstars:100
    },
    {
        en:{
            nameA: 'FLYING BIRDS brands Women Handbag ',
            priceA: '77.1DT',
            descriptionA: 'This stylish handbag is both easy to carry and made from high-quality, durable material. It features an adjustable shoulder strap and a thick chain strap, making it suitable for most arm sizes.'
        },
        fr:{
            nameA: 'Sac à Main FLYING BIRDS pour Femme',
            priceA: '77.1DT',
            descriptionA: 'Ce sac à main élégant est à la fois facile à transporter et fabriqué à partir de matériaux durables de haute qualité. Il dispose d’une bandoulière réglable et d’une chaîne épaisse, ce qui le rend adapté à la plupart des tailles de bras.'
        },
        imageA: './images/clothes/handbag.jpg',
        ratingA: 6,
        nbrstars:100
    },
    {
        en:{
            nameA: 'Perfect Petal Ring',
            priceA: '39.990DT',
            descriptionA: 'This ring features radiant blue crystals, an adjustable band, and elegant details like a string of leaves and a cute butterfly. The Perfect Petal Ring adds a touch of charm to your collection.'
        },
        fr:{
            nameA: 'Bague Perfect Petal',
            priceA: '39.990DT',
            descriptionA: 'Cette bague présente des cristaux bleus scintillants, une bande ajustable et des détails élégants tels qu’une rangée de feuilles et un joli papillon. La Bague Perfect Petal ajoute une touche de charme à votre collection.'
        },
        imageA: './images/clothes/ring.jpg',
        ratingA: 4,
        nbrstars:80
    },
    {
        en:{
            nameA: 'Men’s Ratchet Belt ',
            priceA: '23.040DT',
            descriptionA: 'This Johnston & Murphy belt features a convenient automatic buckle and 100% genuine cowskin leather. Its versatile style suits any outfit, with a sleek geometric pattern adding sophistication.'
        },
        fr:{
            nameA: 'Ceinture à Cliquet pour Homme',
            priceA: '23.040DT',
            descriptionA: 'Cette ceinture Johnston & Murphy dispose d’une boucle automatique pratique et est fabriquée en cuir de vache 100% véritable. Son style polyvalent convient à toutes les tenues, avec un motif géométrique élégant ajoutant une touche de sophistication.'
        },
        imageA: './images/clothes/belt men.jpg',
        ratingA: 9,
        nbrstars:80
    },
    {
        en:{
            nameA: 'New York Yankees Baseball Cap ',
            priceA: '12.4DT',
            descriptionA:'The 9Twenty Cap offers a comfortable fit that easily adjusts to different head sizes. The strapback closure on the back allows you to adjust the size individually for a perfect fit.'
        },
        fr:{
            nameA: 'Casquette New York Yankees',
            priceA: '12.4DT',
            descriptionA: 'La Casquette 9Twenty offre un ajustement confortable qui s’adapte facilement à différentes tailles de tête. La fermeture strapback à l’arrière permet d’ajuster la taille individuellement pour un ajustement parfait.'
        },
        imageA: './images/clothes/hats men.jpg',
        ratingA: 3,
        nbrstars:80
    },
    {
        en:{
            nameA: 'Vintage Trifold Leather Wallet ',
            priceA: '33.690DT',
            descriptionA: 'Crafted with durable polyurethane leather, it features a classic solid pattern and a polyester interior. Easily store cards, cash, and more in this timeless wallet for a look that never goes out of style.'
        },
        fr:{
            nameA: 'Portefeuille Trifold en Cuir Vintage',
            priceA: '33.690DT',
            descriptionA: 'Fabriqué en cuir polyuréthane durable, il présente un motif classique uni et un intérieur en polyester. Rangez facilement cartes, espèces et plus encore dans ce portefeuille intemporel pour un look qui ne se démode jamais.'
        },
        imageA: './images/clothes/wallet men.jpg',
        ratingA: 1,
        nbrstars:20
    }

];

// select the product list container
const bestSellers= document.getElementById('best_selling');
const allProducts = document.getElementById('product_list');

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
                    <button class="add add-cart-btn" data-index="${products.indexOf(product)}" data-array="products">${buttonLabel}</button>
                </div>
            </div>
        </div>
    `;
}

// Function to generate all products HTML based on language
function generateAllProductHTML(product, lang) {
    let buttonLabel = lang === 'en' ? 'Add to Cart' : 'Ajouter au Panier';
    return `
        <div class="cards">
            <div class="card_top">
                <img src="${product.imageA}" alt="${product[lang].nameA}" class="card_img">
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
                <h3 class="card_title">${product[lang].nameA}</h3>
                <p class="description">${product[lang].descriptionA}</p>
                <p class="card_price">${product[lang].priceA}</p>
                <div class="card_rating">
                    <div class="card_stars">${generateStars(product.nbrstars)}</div>
                    <p class="numbers">(${product.ratingA})</p>
                </div>
                <button class="add add-cart-btn"  data-index="${all.indexOf(product)}" data-array="all">${buttonLabel}</button>
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

// Function to display products initially and add more on button click
let productIndex = {
    en: 0,
    fr: 0
};
const productsPerPage = 3;

// Function to display products based on language
function displayProducts(products, lang) {
    let bestSellersHTML = '';
    let allProductsHTML = '';

    // Loop through products and use the selected language
    products.forEach(product => {
        bestSellersHTML += generateProductHTML(product, lang);
    });
    // Insert the generated HTML
    bestSellers.innerHTML = bestSellersHTML;
    // Update Swiper after adding new slides
    swiper.update();

    // Clear the allProducts container
    allProducts.innerHTML = '';

    // Get the next set of products to display
    for (let i = 0; i < productsPerPage && i < all.length; i++) {
        const Everything = all[i];
        // Generate product HTML based on language
        allProductsHTML+= generateAllProductHTML(Everything, lang);
    }
    // Insert the generated HTML
    allProducts.innerHTML += allProductsHTML;
    // Update the index to reflect the number of products displayed
    productIndex[lang] = productsPerPage;
    // If all products are displayed, hide the button
    if (productIndex[lang] >= all.length) {
        document.getElementById('view_more_btn').style.display = 'none';
        document.getElementById('view_more_btn_fr').style.display = 'none';
    }
    
    
}

// Event listener for the "View More" button (English)
document.getElementById('view_more_btn').addEventListener('click', function() {
    let nextProductsHTML = '';
    // Get the next set of products to display
    for (let i = productIndex['en']; i < productIndex['en'] + productsPerPage && i < all.length; i++) {
        const Everything = all[i];
        // Generate product HTML based on language
        nextProductsHTML += generateAllProductHTML(Everything, 'en'); 
    }
    // Append the new batch of products
    allProducts.innerHTML += nextProductsHTML;
    // Update the index to reflect the number of products displayed
    productIndex['en'] += productsPerPage;
    // If all products are displayed, hide the button
    if (productIndex['en'] >= all.length) {
        document.getElementById('view_more_btn').style.display = 'none';
    }
    attachAddToCartListeners()
    liking()
});

// Event listener for the "View More" button (French)
document.getElementById('view_more_btn_fr').addEventListener('click', function() {
    let nextProductsHTML = '';
    // Get the next set of products to display
    for (let i = productIndex['fr']; i < productIndex['fr'] + productsPerPage && i < all.length; i++) {
        const Everything = all[i];
        // Generate product HTML based on language
        nextProductsHTML += generateAllProductHTML(Everything, 'fr');
    }
    // Append the new batch of products
    allProducts.innerHTML += nextProductsHTML;
    // Update the index to reflect the number of products displayed
    productIndex['fr']+= productsPerPage;
    // If all products are displayed, hide the button
    if (productIndex['fr'] >= all.length) {
        document.getElementById('view_more_btn_fr').style.display = 'none';
    }
    attachAddToCartListeners()
    liking()
});

let listCart=document.querySelector('.listCart');
let total=document.querySelector('.total_cart');
let quantity=document.querySelector('.cart_quantity');
let listCarts=[];

// close and open buttons of the cart 
document.addEventListener('DOMContentLoaded', function(){
    
    let body = document.querySelector('body');
    let openShop = document.querySelector('.cart');
  
    openShop.addEventListener('click', () => {
        console.log('Open shop clicked!');
        body.classList.add('active');
    });
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('closing')) {
            console.log('Close shop clicked!');
            body.classList.remove('active');
        }
    });
});


let cartItems = []; 
let cartQuantity = 0; 

// functions of the cart section 
function addToCart(productIndex,array) {
    console.log("addtoCart working");
    const currentLang = document.querySelector('.language-content.show').classList.contains('en-content') ? 'en' : 'fr';
    const product = array[productIndex]; 
    if (!product) {
        console.error("Product not found!");
        return;
    }
    // Check if the product is already in the cart
    const existingItemIndex = cartItems.findIndex(item => 
        (item.image === (array === all ? product.imageA : product.image))
    );
    
    if (existingItemIndex > -1) {
        // If item exists in cart, increase the quantity
        cartItems[existingItemIndex].quantity += 1;
    } else {
        // If item is not in cart, add it
            cartItems.push({
                index: productIndex,
                array: array,
                nameEn: array === all ? product.en.nameA : product.en.name,
                nameFr: array === all ? product.fr.nameA : product.fr.name,
                priceEn: array === all ? parseFloat(product.en.priceA.replace('DT', '')) : parseFloat(product.en.price.replace('DT', '')),
                priceFr: array === all ? parseFloat(product.fr.priceA.replace('DT', '')) : parseFloat(product.fr.price.replace('DT', '')),
                image: array === all ? product.imageA : product.image,
                quantity: 1
            });
        }   
    // Save the cart to localStorage
    saveCartToLocalStorage();
    // Increase the cart quantity
    cartQuantity += 1;
    updateCartDisplay();
    updateCartQuantityDisplay();
}
function updateCartDisplay() {
    const currentLang = document.querySelector('.language-content.show').classList.contains('en-content') ? 'en' : 'fr';
    const cartList = document.querySelector('.listCart');
    cartList.innerHTML = ''; // Clear existing items

    cartItems.forEach(item => {
        const cartItem = `
            <li>
                <div class="cart-item">
                    <img src="${item.image}" alt="${currentLang === 'en' ? item.nameEn : item.nameFr}" class="cart-item-img">
                    <div class="cart-item-details">
                        <h3>${currentLang === 'en' ? item.nameEn : item.nameFr}</h3>
                        <p>${currentLang === 'en' ? item.priceEn : item.priceFr}  DT</p>
                        <div class="cart-quantity-controls">
                            <button onclick="changeCartQuantity(${item.index}, -1)">-</button>
                            <span class="cart-item-qty">${item.quantity}</span>
                            <button onclick="changeCartQuantity(${item.index}, 1)">+</button>
                        </div>
                        <button class="trash-icon" onclick="removeFromCart(${item.index})">
                            <img src="./images/design/delete_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg" alt="Remove item">
                        </button>
                    </div>
                </div>
            </li>
        `;
        cartList.innerHTML += cartItem;
    });
    updateTotalPrice();
}
function updateCartQuantityDisplay() {
    const cartQuantityElement = document.querySelector('.cart_quantity');
    cartQuantityElement.textContent = Math.max(cartQuantity, 0); 
}
function updateTotalPrice() {
    const currentLang = document.querySelector('.language-content.show').classList.contains('en-content') ? 'en' : 'fr';
    let totalPrice = 0;
    cartItems.forEach(item => {
        const price = currentLang === 'en' ? item.priceEn : item.priceFr;
        totalPrice += price * item.quantity;
    });
    
    const totalElement = document.querySelector('.total_cart');
    totalElement.textContent = totalPrice.toFixed(2) + ' DT';
}
function changeCartQuantity(productIndex, change) {
    const item = cartItems.find(item => item.index === productIndex);

    if (item) {
        // Adjust the item's quantity
        item.quantity += change;
        // If quantity is 0 or below, remove the item from the cart
        if (item.quantity <= 0) {
            cartItems = cartItems.filter(cartItem => cartItem.index !== productIndex);
        }
        // Adjust total cart quantity
        cartQuantity += change;
        // Save the updated cart to localStorage
        saveCartToLocalStorage();
        // Update the cart display
        updateCartDisplay();
        updateCartQuantityDisplay();
    }
}
function removeFromCart(productIndex) {
    const item = cartItems.find(item => item.index === productIndex);
    if (item) {
      cartQuantity -= item.quantity;
      cartItems = cartItems.filter(cartItem => cartItem.index !== productIndex);
      saveCartToLocalStorage();
      updateCartDisplay();
      updateCartQuantityDisplay();
    }
}
function saveCartToLocalStorage() {
    let cartString = cartItems.map(item => 
        `${item.index}:${item.nameEn}:${item.nameFr}:${item.priceEn}:${item.priceFr}:${item.image}:${item.quantity}`
    ).join(';');
    localStorage.setItem('cartItems', cartString);
    localStorage.setItem('cartQuantity', cartQuantity);
}
function loadCartFromLocalStorage() {
    const savedCartString = localStorage.getItem('cartItems');
    const savedCartQuantity = localStorage.getItem('cartQuantity');

    if (savedCartString && savedCartQuantity) {
        cartItems = savedCartString.split(';').map(itemString => {
            const [index, nameEn, nameFr, priceEn, priceFr, image, quantity] = itemString.split(':');
            return {
                index: parseInt(index, 10),
                nameEn: nameEn,
                nameFr: nameFr,
                priceEn: parseFloat(priceEn),
                priceFr: parseFloat(priceFr),
                image: image,
                quantity: parseInt(quantity, 10)
            };
        });
        cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

        updateCartDisplay();
        updateCartQuantityDisplay();
    }
}
function attachAddToCartListeners() {
    const addToCartButtons = document.querySelectorAll('.add-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const array = button.dataset.array === 'products' ? products : all;
            const product = array[parseInt(button.dataset.index)];
            const index = array.indexOf(product);
            console.log('addToCart called with index:', index, 'and array:', array);
            addToCart(index, array);
            showCartNotification()
        });
    });
}


// notifications part
function showCartNotification() {
    const currentLang = document.querySelector('.language-content.show').classList.contains('en-content') ? 'en' : 'fr';
    const notification = document.getElementById('notification');
    const messageEn = notification.querySelector('.en-content');
    const messageFr = notification.querySelector('.fr-content');
    
    if (currentLang === 'en') {
        messageEn.style.display = 'block';
        messageFr.style.display = 'none';
    } else {
        messageEn.style.display = 'none';
        messageFr.style.display = 'block';
    }
    
    notification.style.display = 'block';
    
    // Hide notification after 2 seconds
    setTimeout(() => {
        notification.style.display = 'none';
    }, 2000);
}


// likes
function liking() {
    const heartIcons = document.querySelectorAll('.heart_icon');
    heartIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            // Toggle the 'liked' class which changes the color to red
            icon.classList.toggle('liked');
        });
    });
}


// animations
document.addEventListener('DOMContentLoaded', () => {
    ScrollReveal().reveal(".navigation",{
        origin: "bottom",
        distance: "20px",
        opacity: 0,
        delay:10,
        reset: true
    });

    ScrollReveal().reveal(".background",{
        origin: "bottom",
        distance: "20px",
        opacity: 0,
        delay:50,
        reset: true
    });

    ScrollReveal().reveal(".containerone",{
        origin: "bottom",
        distance: "20px",
        opacity: 0,
        delay:50,
        duration:1000,
        reset: true
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
});

    





