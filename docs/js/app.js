// ==========================================
// CONFIGURAÇÃO
// ==========================================


let animais = [];





// ==========================================
// CARREGAR DADOS
// ==========================================


async function carregarAnimais(){


    try{


        const resposta = await fetch("dados.json");


        animais = await resposta.json();
        carregarPagina();



    }catch(error){


        console.error("Erro ao carregar animais:", error);


    }


}







// ==========================================
// DETETAR PÁGINA
// ==========================================

function carregarPagina(){

    const pagina = window.location.pathname.split("/").pop();

    if(pagina === "adocao.html"){

        criarAnimaisAdocao();
        iniciarFiltros();

    }

    if(pagina === "memorial.html"){

        criarAnimaisAdotados();

    }

    if(pagina === "index.html" || pagina === ""){

        criarAnimaisDestaque();
        carregarHeroGallery();

    }

}



function criarAnimaisDestaque(){

    const slider = document.getElementById("featuredSlider");

    if(!slider) return;

    slider.innerHTML = "";

    const disponiveis = animais.filter(animal =>
        animal.estado === "disponivel"
    );

    disponiveis.forEach(animal => {

        slider.appendChild(
    criarCard(animal,false,true)
);

    });

}

function carregarHeroGallery(){


    const gallery = document.querySelector(".hero-gallery");


    if(!gallery) return;



    gallery.innerHTML = "";



    let animaisHero = [];



    // Primeiro carregar animais disponíveis

    const disponiveis = animais.filter(animal =>
        animal.estado === "disponivel"
    );



    animaisHero = [...disponiveis];



    // Se não houver 4, completar com adotados

    if(animaisHero.length < 4){


        const adotados = animais.filter(animal =>
            animal.estado === "adotado"
        );


        const restantes = 4 - animaisHero.length;



        animaisHero.push(
            ...adotados.slice(0, restantes)
        );


    }



    // Garantir máximo de 4 imagens

    animaisHero = animaisHero.slice(0,4);



    animaisHero.forEach(animal=>{


        const imagem = document.createElement("img");


        imagem.src = animal.imagens[0];

        imagem.alt = animal.nome;



        gallery.appendChild(imagem);


    });


}

// ==========================================
// CARTÃO DO ANIMAL
// ==========================================


function criarCard(animal, memorial=false, destaque=false){


    const card = document.createElement("div");


    card.classList.add("animal-card");



    card.dataset.nome = animal.nome.toLowerCase();




    let dataAdocao = "";



    if(memorial && animal.adocao){


        dataAdocao = `

            <span class="species">
                ${animal.adocao.data}
            </span>

        `;


    }



    card.innerHTML = `


        <div class="animal-image">


            <img 
            src="${animal.imagens[0]}"
            alt="${animal.nome}">


        </div>




        <div class="animal-content">


            <div class="animal-top">


                <h3 class="animal-name">

                    ${animal.nome}

                </h3>



                ${
                    memorial 
                    ? dataAdocao
                    :
                    `<span class="species">
                        ${animal.especie === "cao" ? "Cão" : "Gato"}
                    </span>`
                }


            </div>






            ${
                memorial
                ?

                `

                <p class="description">

                    ${animal.descricao}

                </p>


                <p>

                    Adotado por ${animal.adocao.familia}

                </p>

                `

                :

                `

                <p class="age">

                    ${animal.idade}

                </p>



                <p class="description">

                    ${animal.descricao}

                </p>



                <button class="card-button">

                        Saber Mais

                </button>

                `

            }



        </div>


    `;



   card.addEventListener("click",()=>{

    if(destaque){

        window.location.href = "adocao.html";

    }else{

        abrirModal(animal);

    }

});


    return card;


}









// ==========================================
// PÁGINA PARA ADOÇÃO
// ==========================================


function criarAnimaisAdocao(){


    const grid = document.getElementById("animalsGrid");


    if(!grid) return;



    grid.innerHTML = "";



    const disponiveis = animais.filter(animal => 
        animal.estado === "disponivel"
    );



    disponiveis.forEach(animal=>{


        grid.appendChild(
            criarCard(animal)
        );


    });


}









// ==========================================
// PÁGINA ADOTADOS
// ==========================================


function criarAnimaisAdotados(){


    const grid = document.getElementById("memorialGrid");



    if(!grid) return;



    grid.innerHTML = "";



    const adotados = animais.filter(animal => 
        animal.estado === "adotado"
    );



    adotados.forEach(animal=>{


        grid.appendChild(
            criarCard(animal,true)
        );


    });


}









// ==========================================
// FILTROS
// ==========================================


function iniciarFiltros(){



    const botoes = document.querySelectorAll(".filter");


    const pesquisa = document.getElementById("searchInput");



    let filtroAtual = "todos";




    botoes.forEach(botao=>{


        botao.addEventListener("click",()=>{


            botoes.forEach(b=>b.classList.remove("active"));



            botao.classList.add("active");



            filtroAtual = botao.dataset.filter;



            aplicarFiltros();


        });


    });






    pesquisa.addEventListener("input",()=>{


        aplicarFiltros();


    });






    function aplicarFiltros(){


        const texto = pesquisa.value.toLowerCase();



        const cards = document.querySelectorAll(".animal-card");



        cards.forEach(card=>{


            const nome = card.dataset.nome;



            const animal = animais.find(a =>
                a.nome.toLowerCase() === nome
            );



            const correspondeNome =
                animal.nome.toLowerCase().includes(texto);



            const correspondeFiltro =
                filtroAtual === "todos" ||
                animal.especie === filtroAtual;



            if(
                correspondeNome &&
                correspondeFiltro
            ){

                card.style.display="block";

            }else{

                card.style.display="none";

            }


        });


    }


}








// ==========================================
// MODAL
// ==========================================
function abrirModal(animal){


    const modal = document.getElementById("animalModal");

    const content = document.getElementById("modalContent");


    if(!modal || !content) return;




    const isAdotado = animal.estado === "adotado";



    content.innerHTML = `


        <div class="modal-gallery">


            ${animal.imagens.map(imagem=>`

                <img 
                src="${imagem}" 
                alt="${animal.nome}"
                class="modal-image">

            `).join("")}



        </div>





        <div class="modal-info">


            <div class="animal-top">


                <h2>
                    ${animal.nome}
                </h2>


                <span class="species">

                    ${animal.especie === "cao" ? "Cão" : "Gato"}

                </span>


            </div>




            <p class="age">

                ${animal.idade} · ${animal.sexo}

            </p>




            <p>

                ${animal.historia}

            </p>




            <div class="characteristics">


                ${animal.caracteristicas.map(item=>`

                    <span>
                        ${item}
                    </span>

                `).join("")}


            </div>




            ${
                !isAdotado

                ?

                `

                <a 
                href="contactos.html"
                class="btn btn-primary modal-adopt">

                    Adotar ${animal.nome}

                </a>

                `

                :

                `

                <p class="adopted-message">

                       ❤️ O ${animal.nome} já foi adotado pela família ${animal.adocao.familia}.

                  </p>

                `

            }


        </div>


    `;


    modal.classList.add("active");





    // ==========================================
    // GALERIA EXPANDIDA
    // ==========================================


        document.querySelectorAll(".modal-image")
            .forEach((imagem,index)=>{


            imagem.addEventListener("click",()=>{


            abrirGaleria(
                animal.imagens,
                index
            );


        });
    

    });



}


function fecharModal(){


    const modal = document.getElementById("animalModal");


    if(modal){

        modal.classList.remove("active");

    }


}








document.addEventListener("click",(e)=>{


    if(
        e.target.id === "closeModal" ||
        e.target.classList.contains("modal")
    ){

        fecharModal();

    }


});







// ==========================================
// START
// ==========================================
let galeriaAtual = [];
let imagemAtual = 0;



function abrirGaleria(imagens,index){


    galeriaAtual = imagens;

    imagemAtual = index;



    const galeria = document.createElement("div");


    galeria.className="image-modal";


    galeria.innerHTML = `


        <div class="image-modal-content">


            <button class="image-close">

                ×

            </button>



            ${
                imagens.length > 1

                ?

                `

                <button class="gallery-prev">
                    ❮
                </button>


                `

                :

                ""

            }



            <img 
            class="gallery-image"
            src="${imagens[imagemAtual]}">





            ${
                imagens.length > 1

                ?

                `

                <button class="gallery-next">
                    ❯
                </button>


                `

                :

                ""

            }



        </div>


    `;



      document.body.appendChild(galeria);



        atualizarImagemGaleria(galeria);



    galeria.querySelector(".image-close")
    .onclick = ()=>{

        galeria.remove();

    };



    if(imagens.length > 1){


        galeria.querySelector(".gallery-prev")
        .onclick = imagemAnterior;



        galeria.querySelector(".gallery-next")
        .onclick = imagemSeguinte;


    }



    document.addEventListener(
        "keydown",
        controlarTeclado
    );



    galeria.addEventListener("click",(e)=>{


        if(e.target === galeria){

            fecharGaleria(galeria);

        }


    });



}




function atualizarImagemGaleria(galeria){


    const imagem =
    galeria.querySelector(".gallery-image");


    if(!imagem) return;



    imagem.style.opacity="0";


    setTimeout(()=>{


        imagem.src =
        galeriaAtual[imagemAtual];


        imagem.style.opacity="1";


    },150);


}




function imagemSeguinte(){


    imagemAtual++;


    if(imagemAtual >= galeriaAtual.length){

        imagemAtual=0;

    }


    atualizarImagemGaleria(
    document.querySelector(".image-modal")
);


}




function imagemAnterior(){


    imagemAtual--;


    if(imagemAtual < 0){

        imagemAtual =
        galeriaAtual.length-1;

    }


    atualizarImagemGaleria(
    document.querySelector(".image-modal")
);


}




function controlarTeclado(e){


    if(e.key==="Escape"){

        const modal =
        document.querySelector(".image-modal");


        if(modal){

            fecharGaleria(modal);

        }

    }



    if(e.key==="ArrowRight"){

        imagemSeguinte();

    }



    if(e.key==="ArrowLeft"){

        imagemAnterior();

    }


}




function fecharGaleria(galeria){


    document.removeEventListener(
        "keydown",
        controlarTeclado
    );


    galeria.remove();


}


// ==========================================
// INICIAR APLICAÇÃO
// ==========================================

document.addEventListener("DOMContentLoaded",()=>{

    carregarAnimais();

});
