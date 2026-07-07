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
