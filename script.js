function deroulant(){
    const b = document.querySelector(".deroulant");
    const a = document.querySelector(".navbar");
    const d = document.querySelector(".main");
    a.classList.toggle('mobile-menu');
    b.classList.toggle('animation');
    d.classList.toggle('cacher');
}
