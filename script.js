function deroulant(){
    const b = document.querySelector(".deroulant");
    const a = document.querySelector(".navbar");
    const d = document.querySelector(".main");
    a.classList.toggle('mobile-menu');
    b.classList.toggle('animation');
    d.classList.toggle('cacher');
}

function afficherProfil(){
    const profil = document.querySelector(".profil");
    const competence = document.querySelector(".competence");
    const projets = document.querySelector(".projets");
    const main = document.querySelector(".main");
    const deroulant = document.querySelector(".mobile-menu");
    if (main.classList.contains('cacher')){
        deroulant.classList.toggle('mobile-menu');
        main.classList.toggle('cacher');
    }
    profil.classList.toggle('afficher');
    if (projets.classList.contains('afficher')){
        projets.classList.toggle('afficher');
    }
    if (competence.classList.contains('afficher')){
        competence.classList.toggle('afficher');
    }
}

function afficherCompetence(){
    const profil = document.querySelector(".profil");
    const competence = document.querySelector(".competence");
    const projets = document.querySelector(".projets");
    const main = document.querySelector(".main");
    const deroulant = document.querySelector(".mobile-menu");
    if (main.classList.contains('cacher')){
        deroulant.classList.toggle('mobile-menu');
        main.classList.toggle('cacher');
    }
    competence.classList.toggle('afficher');
    if (profil.classList.contains('afficher')){
        profil.classList.toggle('afficher');
    }
    if (projets.classList.contains('afficher')){
        projets.classList.toggle('afficher');
    }
}

function afficherProjet(){
    const profil = document.querySelector(".profil");
    const competence = document.querySelector(".competence");
    const projets = document.querySelector(".projets");
    const main = document.querySelector(".main");
    const deroulant = document.querySelector(".mobile-menu");
    if (main.classList.contains('cacher')){
        deroulant.classList.toggle('mobile-menu');
        main.classList.toggle('cacher');
    }
    projets.classList.toggle('afficher');
    if (profil.classList.contains('afficher')){
        profil.classList.toggle('afficher');
    }
    if (competence.classList.contains('afficher')){
        competence.classList.toggle('afficher');
    }
}


// Fonction pour animer le défilement
function smoothScroll(target) {
    const targetElement = document.querySelector(target);
    if (!targetElement) return;
    const targetPosition = targetElement.offsetTop;
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth' // Utilisez 'smooth' pour obtenir une animation fluide
    });
}

// Attachez un gestionnaire d'événements à vos liens de navbar
const navbarLinks = document.querySelectorAll('a'); // Remplacez '.navbar a' par votre sélecteur de lien de navbar
navbarLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        // Empêchez le comportement par défaut du lien
        event.preventDefault();
        // Obtenez l'ancre cible à partir de l'attribut href du lien
        const target = link.getAttribute('href');
        // Appelez la fonction d'animation de défilement
        smoothScroll(target); // Remplacez '1000' par la durée d'animation souhaitée en millisecondes
    });
});