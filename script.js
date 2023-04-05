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
    competence.classList.toggle('.cacherautre');
    projets.classList.toggle('.cacherautre');
}

function afficherCompetence(){
    const profil = document.querySelector(".profil");
    const competence = document.querySelector(".competence");
    const projets = document.querySelector(".projets");
    if(profil.classList.contains("afficher")){
        profil.classList.toggle('afficher');
    }
    if (competence.classList.contains("cacherautre")){
        competence.classList.toggle('.cacherautre');
    }
    profil.classList.toggle('cacherautre');
    competence.classList.toggle('.afficher');
    projets.classList.toggle('.cacherautre');
}

function afficherProjets(){
    const profil = document.querySelector(".profil");
    const competence = document.querySelector(".competence");
    const projets = document.querySelector(".projets");
    profil.classList.toggle('cacherautre');
    competence.classList.toggle('.cacherautre');
    projets.classList.toggle('.afficher');
}