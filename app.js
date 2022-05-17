function escutaRolagem(){

    let gatilhos = document.querySelectorAll('.gatilhos > div[data-alvo]');
    
    for(let gatilho of gatilhos){   

        let posicao = gatilho.getBoundingClientRect();

        let alvo = gatilho.dataset.alvo;
        let passo = document.querySelector('.'+alvo);
        
        if(posicao.top <= 0 && posicao.top > -  posicao.height) {

            passo.classList.add('passo-ativo');

        }else{
            passo.classList.remove('passo-ativo');       

        }
    

    }

}    

window.addEventListener('scroll', escutaRolagem);