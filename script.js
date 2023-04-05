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
    projets.classList.toggle('afficher');
    if (profil.classList.contains('afficher')){
        profil.classList.toggle('afficher');
    }
    if (competence.classList.contains('afficher')){
        competence.classList.toggle('afficher');
    }
}
