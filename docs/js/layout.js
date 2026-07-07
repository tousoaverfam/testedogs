
// ==========================================
// HEADER
// ==========================================


function renderHeader() {


    const currentPage = window.location.pathname.split("/").pop() || "index.html";


    const headerHTML = `

    <header>

        <div class="container">

            <nav>


                <a href="index.html" class="logo">
                    🐾 Animais para Adoção
                </a>




                <ul class="menu">


                    <li>

                        <a 
                        href="index.html"
                        class="${currentPage === "index.html" ? "active" : ""}">

                            Home

                        </a>

                    </li>





                    <li>

                        <a 
                        href="adocao.html"
                        class="${currentPage === "adocao.html" ? "active" : ""}">

                            Para Adoção

                        </a>

                    </li>





                    <li>

                        <a 
                        href="memorial.html"
                        class="${currentPage === "memorial.html" ? "active" : ""}">

                            Adotados

                        </a>

                    </li>





                    <li>

                        <a 
                        href="contactos.html"
                        class="${currentPage === "contactos.html" ? "active" : ""}">

                            Contactos

                        </a>

                    </li>


                </ul>





                <a href="contactos.html" class="nav-button">

                    Fazer uma doação

                </a>



            </nav>


        </div>


    </header>

    `;



    const headerContainer = document.getElementById("header");


    if(headerContainer){

        headerContainer.innerHTML = headerHTML;

    }


}








// ==========================================
// FOOTER
// ==========================================


function renderFooter(){


    const year = new Date().getFullYear();



    const footerHTML = `


    <footer>


        <div class="container">


            <div class="footer-content">


                <p>
                    © ${year} Animais para Adoção
                </p>



                <p>
                    Todos os animais merecem uma segunda oportunidade ❤️
                </p>



            </div>


        </div>


    </footer>


    `;



    const footerContainer = document.getElementById("footer");



    if(footerContainer){

        footerContainer.innerHTML = footerHTML;

    }


}








// ==========================================
// INITIALIZATION
// ==========================================


document.addEventListener("DOMContentLoaded",()=>{


    renderHeader();


    renderFooter();



    if(typeof lucide !== "undefined"){

        lucide.createIcons();

    }


});
