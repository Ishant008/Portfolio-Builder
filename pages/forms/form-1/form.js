document.getElementById("user-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get user input values
    const name = document.getElementById("name").value;
    const profession = document.getElementById("profession").value;
    const about = document.getElementById("about").value;
    const skills = document.getElementById("skills").value;
    const skill1 = document.querySelector('input[name="skill1"]').value;
    const skill2 = document.querySelector('input[name="skill2"]').value;
    const skill3 = document.querySelector('input[name="skill3"]').value;
    const skill4 = document.querySelector('input[name="skill4"]').value;

    // Define the portfolio HTML template
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
        <!-- HEADER -->
        <header class="l-header">
            <nav class="nav bd-grid">
                <div>
                    <a href="#" class="nav__logo">${name}</a>
                </div>
                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav__item"><a href="#home" class="nav__link active-link">Home</a></li>
                        <li class="nav__item"><a href="#about" class="nav__link">About</a></li>
                        <li class="nav__item"><a href="#skills" class="nav__link">Skills</a></li>
                        <li class="nav__item"><a href="#work" class="nav__link">Work</a></li>
                        <li class="nav__item"><a href="#contact" class="nav__link">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>

        <main class="l-main">
            <section class="home bd-grid" id="home">
                <div class="home__data">
                    <h1 class="home__title">Hi, I'm <span class="home__title-color">${name}</span><br>${profession}</h1>
                    <a href="#contact" class="button">Contact Me</a>
                </div>

                <div class="home__social">
                    <a href="" class="home__social-icon"><i class='bx bxl-linkedin'></i></a>
                    <a href="" class="home__social-icon"><i class='bx bxl-behance' ></i></a>
                    <a href="" class="home__social-icon"><i class='bx bxl-github' ></i></a>
                </div>

                <div class="home__img">
                    <svg class="home__blob" viewBox="0 0 479 467" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <mask id="mask0" mask-type="alpha">
                            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
                        </mask>
                        <g mask="url(#mask0)">
                            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
                            <image class="home__blob-img" x="50" y="60" href="assets/img/me.jpg"/>
                        </g>
                    </svg>
                </div>
            </section>

            <section class="about section" id="about">
                <h2 class="section-title">About Me</h2>
                <div class="about__container bd-grid">
                    <div class="about__img">
                        <img src="assets/img/me.jpg" alt="">
                    </div>
                    <div>
                        <h2 class="about__subtitle">I'm ${name}</h2>
                        <p class="about__text">${about}</p>
                    </div>                                   
                </div>
            </section>

            <section class="skills section" id="skills">
                <h2 class="section-title">Skills</h2>
                <div class="skills__container bd-grid">
                    <div>
                        <h2 class="skills__subtitle">Professional Skills</h2>
                        <p class="skills__text">${skills}</p>
                        <div class="skills__data">
                            <div class="skills__names">
                                <span class="skills__name">${skill1}</span>
                            </div>
                            <div class="skills__bar skills__html"></div>
                            <div><span class="skills__percentage">95%</span></div>
                        </div>
                        <div class="skills__data">
                            <div class="skills__names">
                                <span class="skills__name">${skill2}</span>
                            </div>
                            <div class="skills__bar skills__css"></div>
                            <div><span class="skills__percentage">85%</span></div>
                        </div>
                        <div class="skills__data">
                            <div class="skills__names">
                                <span class="skills__name">${skill3}</span>
                            </div>
                            <div class="skills__bar skills__js"></div>
                            <div><span class="skills__percentage">65%</span></div>
                        </div>
                        <div class="skills__data">
                            <div class="skills__names">
                                <span class="skills__name">${skill4}</span>
                            </div>
                            <div class="skills__bar skills__ux"></div>
                            <div><span class="skills__percentage">80%</span></div>
                        </div>
                    </div>
                    <div>              
                        <img src="assets/img/work3.jpg" alt="" class="skills__img">
                    </div>
                </div>
            </section>

            <!-- Work Section -->
            <section class="work section" id="work">
                <h2 class="section-title">Work</h2>

                <div class="work__container bd-grid">
                    <a href="" class="work__img">
                        <img src="assets/img/work1.jpg" alt="">
                    </a>
                    <a href="" class="work__img">
                        <img src="assets/img/work2.jpg" alt="">
                    </a>
                    <a href="" class="work__img">
                        <img src="assets/img/work3.jpg" alt="">
                    </a>
                    <a href="" class="work__img">
                        <img src="assets/img/work4.jpg" alt="">
                    </a>
                    <a href="" class="work__img">
                        <img src="assets/img/work5.jpg" alt="">
                    </a>
                    <a href="" class="work__img">
                        <img src="assets/img/work6.jpg" alt="">
                    </a>
                </div>
            </section>


            <section class="contact section" id="contact">
                <h2 class="section-title">Contact</h2>

                <div class="contact__container bd-grid">
                    <form action="" class="contact__form">
                        <input type="text" placeholder="Name" class="contact__input">
                        <input type="mail" placeholder="Email" class="contact__input">
                        <textarea name="" id="" cols="0" rows="10" class="contact__input"></textarea>
                        <input type="button" value="Enter" class="contact__button button">
                    </form>
                </div>
            </section>
        </main>
        <footer class="footer">
            <p class="footer__title">${name}</p>
            <div class="footer__social">
                <a href="#" class="footer__icon"><i class='bx bxl-facebook' ></i></a>
                <a href="#" class="footer__icon"><i class='bx bxl-instagram' ></i></a>
                <a href="#" class="footer__icon"><i class='bx bxl-twitter' ></i></a>
            </div>
        </footer>
        <!--===== SCROLL REVEAL =====-->
        <script src="https://unpkg.com/scrollreveal"></script>
        <script src="assets/js/main.js"></script>
    </body>
</html>
    `;

    // Create a zip file using JSZip
    var zip = new JSZip();

    // Add the portfolio HTML file
    zip.file(`${name}-portfolio.html`, portfolioHTML);

    // Create folders inside 'assets'
const assetsFolder = zip.folder("assets");

// Add 'css' folder with 'styles.css' (relative path to Templates/temp-1)
assetsFolder.folder("css").file("styles.css", fetch('/pages/Templates/temp-1/assets/css/styles.css').then(res => res.text()));

// Add 'js' folder with 'main.js' (relative path to Templates/temp-1)
assetsFolder.folder("js").file("main.js", fetch('/pages/Templates/temp-1/assets/js/main.js').then(res => res.text()));

// Add 'img' folder with multiple image files (relative path to Templates/temp-1)
const imgFolder = assetsFolder.folder("img");
imgFolder.file("me.jpg", fetch('/pages/Templates/temp-1/assets/img/me.jpg').then(res => res.blob()));
imgFolder.file("work1.jpg", fetch('/pages/Templates/temp-1/assets/img/work1.jpg').then(res => res.blob()));
imgFolder.file("work2.jpg", fetch('/pages/Templates/temp-1/assets/img/work2.jpg').then(res => res.blob()));
imgFolder.file("work3.jpg", fetch('/pages/Templates/temp-1/assets/img/work3.jpg').then(res => res.blob()));
imgFolder.file("work4.jpg", fetch('/pages/Templates/temp-1/assets/img/work4.jpg').then(res => res.blob()));
imgFolder.file("work5.jpg", fetch('/pages/Templates/temp-1/assets/img/work5.jpg').then(res => res.blob()));
imgFolder.file("work6.jpg", fetch('/pages/Templates/temp-1/assets/img/work6.jpg').then(res => res.blob()));

    // Generate and download the zip file
    zip.generateAsync({ type: "blob" })
       .then(function (content) {
           saveAs(content, `${name}-portfolio.zip`);
           window.location.href = "/index.html";
       });
});