// Esta función se refleja en la parte de preguntas, mostrando los textos ocultos y rotando las flechas (arrows)

(function(){
    const titleExtra = [...document.querySelectorAll(`.extra__title`)];
    // console.log(titleExtra)

    titleExtra.forEach(extra =>{
        extra.addEventListener('click', ()=>{
            let height = 0;
            let answer = extra.nextElementSibling;
            let addPadding = extra.parentElement.parentElement;

            addPadding.classList.toggle('estra__padding--add');
            extra.children[0].classList.toggle('extra__arrow--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            };

            answer.style.height = `${height}px`;
        })
    })

})();