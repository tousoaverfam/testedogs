// ========= HEADER =========

function renderHeader() {

    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    const header = `
        <header>
            <div class="container">
                <nav>

                    <a href="index.html" class="logo">
                        🐾 Animais para Adoção
                    </a>

                    <ul class="menu">

                        <li>
                            <a class="${currentPage === "index.html" ? "active" : ""}"
                               href="index.html">
                               Home
                            </a>
                        </li>

                        <li>
                            <a class="${currentPage === "adocao.html" ? "active" : ""}"
                               href="adocao.html">
                               Adoção
                            </a>
                        </li>

                        <li>
                            <a class="${currentPage === "memorial.html" ? "active" : ""}"
                               href="memorial.html">
                               Memorial
                            </a>
                        </li>

                        <li>
                            <a class="${currentPage === "contactos.html" ? "active" : ""}"
                               href="contactos.html">
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

    document.getElementById("header").innerHTML = header;

}


// ========= FOOTER =========

function renderFooter() {

    const year = new Date().getFullYear();

    const footer = `
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

    document.getElementById("footer").innerHTML = footer;

}

document.addEventListener("DOMContentLoaded", () => {

    renderHeader();

    renderFooter();

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }

});
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
                        <a href="index.html"
                        class="${currentPage === "index.html" ? "active" : ""}">
                            Home
                        </a>
                    </li>



                    <li>
                        <a href="adocao.html"
                        class="${currentPage === "adocao.html" ? "active" : ""}">
                            Para Adoção
                        </a>
                    </li>




                    <li>
                        <a href="memorial.html"
                        class="${currentPage === "memorial.html" ? "active" : ""}">
                            Adotados
                        </a>
                    </li>




                    <li>
                        <a href="contactos.html"
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


    document.getElementById("header").innerHTML = headerHTML;

}






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


    document.getElementById("footer").innerHTML = footerHTML;


}






document.addEventListener("DOMContentLoaded",()=>{


    if(document.getElementById("header")){

        renderHeader();

    }



    if(document.getElementById("footer")){

        renderFooter();

    }


});
