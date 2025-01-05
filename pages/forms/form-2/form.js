document.getElementById("user-form").addEventListener("submit", function(event) {
    event.preventDefault();

        // Fetch all form input values
        const name = document.querySelector("#name").value;
        const profession = document.querySelector("#profession").value;
        const aboutYou = document.querySelector("#description").value;

        // Skills
        const skill1 = document.querySelector("#skill1").value;
        const skill2 = document.querySelector("#skill2").value;
        const skill3 = document.querySelector("#skill3").value;
        const skill4 = document.querySelector("#skill4").value;
        const skill5 = document.querySelector("#skill5").value;

        // Projects
        const project1 = document.querySelector("#project1").value;
        const project2 = document.querySelector("#project2").value;
        const project3 = document.querySelector("#project3").value;
        const project4 = document.querySelector("#project4").value;
        const project5 = document.querySelector("#project5").value;
        const project6 = document.querySelector("#project6").value;

        const email = document.querySelector("#email").value;
        const phone = document.querySelector("#phone").value;

        // Create the new HTML with user data
        let portfolioHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="assets/css/styles.css">
            <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'>
            <title>${name}'s Portfolio</title>
        </head>
        <body>
            <header class="l-header">
                <nav class="nav bd-grid">
                    <div>
                        <a href="#" class="nav__logo">${name}</a>
                    </div>
                    <div class="nav__menu" id="nav-menu">
                        <ul class="nav__list">
                            <li class="nav__item"><a href="#home" class="nav__link active">Home</a></li>
                            <li class="nav__item"><a href="#about" class="nav__link">About</a></li>
                            <li class="nav__item"><a href="#skills" class="nav__link">Skills</a></li>
                            <li class="nav__item"><a href="#portfolio" class="nav__link">Portfolio</a></li>
                            <li class="nav__item"><a href="#contact" class="nav__link">Contact</a></li>
                        </ul>
                    </div>
                    <div class="nav__toggle" id="nav-toggle">
                        <i class='bx bx-menu'></i>
                    </div>
                </nav>
            </header>

            <main class="l-main">
                <section class="home" id="home">
                    <div class="home__container bd-grid">
                        <h1 class="home__title"><span>HE</span><br>LLO.</h1>
                        <div class="home__scroll">
                            <a href="#about" class="home__scroll-link"><i class='bx bx-up-arrow-alt'></i>Scroll down</a>
                        </div>
                        <img src="assets/img/logo.avif" alt="" class="home__img">
                    </div>
                </section>
                
                <section class="about section" id="about">
                    <h2 class="section-title">About</h2>
                    <div class="about__container bd-grid">
                        <div class="about__img">
                            <img src="assets/img/about.jpg" alt="">
                        </div>
                        <div>
                            <h2 class="about__subtitle">I'am ${name}</h2>
                            <span class="about__profession">${profession}</span>
                            <p class="about__text">${aboutYou}</p>
                            <div class="about__social">
                                <a href="#" class="about__social-icon"><i class='bx bxl-linkedin'></i></a>
                                <a href="#" class="about__social-icon"><i class='bx bxl-github'></i></a>
                                <a href="#" class="about__social-icon"><i class='bx bxl-dribbble'></i></a>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="skills section" id="skills">
                    <h2 class="section-title">Skills</h2>
                    <div class="skills__container bd-grid">
                        <div class="skills__box">
                            <h3 class="skills__subtitle">I have Many Skills which are mentioned below</h3>
                            <span class="skills__name">${skill1}</span>
                            <span class="skills__name">${skill2}</span>
                            <span class="skills__name">${skill3}</span>
                            <span class="skills__name">${skill4}</span>
                            <span class="skills__name">${skill5}</span>
                        </div>
                        <div class="skills__img">
                            <img src="assets/img/skill.jpg" alt="">
                        </div>
                    </div>
                </section>

                <section class="portfolio section" id="portfolio">
                    <h2 class="section-title">Projects</h2>
                    <div class="portfolio__container bd-grid">
                        <div class="portfolio__img">
                            <img src="assets/img/work1.jpg" alt="">
                            <div class="portfolio__link">
                                <a href="#" class="portfolio__link-name">${project1}</a>
                            </div>
                        </div>
                        <div class="portfolio__img">
                            <img src="assets/img/work2.jpg" alt="">
                            <div class="portfolio__link">
                                <a href="#" class="portfolio__link-name">${project2}</a>
                            </div>
                        </div>
                        <div class="portfolio__img">
                            <img src="assets/img/work3.jpg" alt="">
                            <div class="portfolio__link">
                                <a href="#" class="portfolio__link-name">${project3}</a>
                            </div>
                        </div>
                        <div class="portfolio__img">
                            <img src="assets/img/work4.jpg" alt="">
                            <div class="portfolio__link">
                                <a href="#" class="portfolio__link-name">${project4}</a>
                            </div>
                        </div>
                        <div class="portfolio__img">
                            <img src="assets/img/work5.jpg" alt="">
                            <div class="portfolio__link">
                                <a href="#" class="portfolio__link-name">${project5}</a>
                            </div>
                        </div>
                        <div class="portfolio__img">
                            <img src="assets/img/work6.jpg" alt="">
                            <div class="portfolio__link">
                                <a href="#" class="portfolio__link-name">${project6}</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="contact section" id="contact">
                    <h2 class="section-title">Contact</h2>
                    <div class="contact__container bd-grid">
                        <div class="contact__info">
                            <h3 class="contact__subtitle">EMAIL</h3>
                            <span class="contact__text">${email}</span>
                            <h3 class="contact__subtitle">PHONE</h3>
                            <span class="contact__text">${phone}</span>
                        </div>
                        <form action="" class="contact__form">
                        <div class="contact__inputs">
                            <input type="text" placeholder="Name" class="contact__input">
                            <input type="mail" placeholder="Email" class="contact__input">
                        </div>

                        <textarea name="" id="" cols="0" rows="10" class="contact__input"></textarea>

                        <input type="submit" value="Enter" class="contact__button">
                    </form>
                    </div>
                </section>
            </main>

            <footer class="footer section">
                <div class="footer__container bd-grid">
                    <div class="footer__data">
                        <h2 class="footer__title">${name}</h2>
                        <p class="footer__text">I'm ${name} and this is my personal website</p>
                    </div>
                    <div class="footer__data">
                    <h2 class="footer__title">EXPLORE</h2>
                    <ul>
                        <li><a href="#home" class="footer__link">Home</a></li>
                        <li><a href="#about" class="footer__link">About</a></li>
                        <li><a href="#skills" class="footer__link">Skills</a></li>
                        <li><a href="#portfolio" class="footer__link">Projects</a></li>
                        <li><a href="#Contact" class="footer__link">Contact</a></li>
                    </ul>
                </div>
                
                <div class="footer__data">
                    <h2 class="footer__title">FOLLOW</h2>
                    <a href="#" class="footer__social"><i class='bx bxl-facebook' ></i></a>
                    <a href="#" class="footer__social"><i class='bx bxl-instagram' ></i></a>
                    <a href="#" class="footer__social"><i class='bx bxl-twitter' ></i></a>
                </div>

                </div>
            </footer>
            <script src="https://unpkg.com/scrollreveal"></script>
            <script src="assets/js/main.js"></script>
        </body>
        </html>`;

        // Create a zip file using JSZip
    var zip = new JSZip();

    // Add the portfolio HTML file
    zip.file(`${name}-portfolio.html`, portfolioHTML);

    // Create folders inside 'assets'
const assetsFolder = zip.folder("assets");

// Add 'css' folder with 'styles.css' (relative path to Templates/temp-2)
assetsFolder.folder("css").file("styles.css", fetch('/pages/Templates/temp-2/assets/css/styles.css').then(res => res.text()));

// Add 'js' folder with 'main.js' (relative path to Templates/temp-1)
assetsFolder.folder("js").file("main.js", fetch('/pages/Templates/temp-2/assets/js/main.js').then(res => res.text()));

// Add 'img' folder with multiple image files (relative path to Templates/temp-2)
const imgFolder = assetsFolder.folder("img");
imgFolder.file("logo.avif", fetch('/pages/Templates/temp-2/assets/img/logo.avif').then(res => res.blob()));
imgFolder.file("work1.jpg", fetch('/pages/Templates/temp-2/assets/img/work1.jpg').then(res => res.blob()));
imgFolder.file("work2.jpg", fetch('/pages/Templates/temp-2/assets/img/work2.jpg').then(res => res.blob()));
imgFolder.file("work3.jpg", fetch('/pages/Templates/temp-2/assets/img/work3.jpg').then(res => res.blob()));
imgFolder.file("work4.jpg", fetch('/pages/Templates/temp-2/assets/img/work4.jpg').then(res => res.blob()));
imgFolder.file("work5.jpg", fetch('/pages/Templates/temp-2/assets/img/work5.jpg').then(res => res.blob()));
imgFolder.file("work6.jpg", fetch('/pages/Templates/temp-2/assets/img/work6.jpg').then(res => res.blob()));
imgFolder.file("skill.jpg", fetch('/pages/Templates/temp-2/assets/img/skill.jpg').then(res => res.blob()));
imgFolder.file("about.jpg", fetch('/pages/Templates/temp-2/assets/img/about.jpg').then(res => res.blob()));

    // Generate and download the zip file
    zip.generateAsync({ type: "blob" })
       .then(function (content) {
           saveAs(content, `${name}-portfolio.zip`);
           window.location.href = "/index.html";
       });
});