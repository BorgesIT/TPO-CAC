// Esta es una función  que genera una animación de slider dinámico, es decir, se pueden agregar tantos elementos como quieras.

(function() {

    const sliders = [...document.querySelectorAll('.frases__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    console.log(sliders)
    let value;

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentFrases = document.querySelector('.frases__body--show').dataset.id;
        value = Number(currentFrases);
        value+= add;

        sliders[Number(currentFrases)-1].classList.remove('frases__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[value-1].classList.add('frases__body--show');
    }

})();