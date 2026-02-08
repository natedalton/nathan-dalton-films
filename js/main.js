// ============================================
// HERO SLIDESHOW
// ============================================
function initHeroSlideshow() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    // Extract poster URLs from films
    const slideshowImages = films.filter(f => f.poster).map(f => f.poster);

    if (slideshowImages.length === 0) return;

    // Create slideshow container
    const slideshow = document.createElement('div');
    slideshow.className = 'hero-slideshow';
    slideshow.innerHTML = slideshowImages.map(url => `
        <div class="slide" style="background-image: url('${url}')"></div>
    `).join('');

    // Insert slideshow at the beginning of hero
    hero.insertBefore(slideshow, hero.firstChild);

    // Start slideshow
    let currentSlide = 0;
    const slides = slideshow.querySelectorAll('.slide');

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Show first slide
    slides[0]?.classList.add('active');

    // Change slide every 10 seconds
    setInterval(nextSlide, 10000);
}

// ============================================
// EXTRACT YOUTUBE VIDEO ID
// ============================================
function getYouTubeId(url) {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

// ============================================
// GET YOUTUBE THUMBNAIL URL
// ============================================
function getYouTubeThumbnail(videoId) {
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

// ============================================
// RENDER FILMS
// ============================================
function renderFilms() {
    const filmsGrid = document.getElementById('films-grid');

    if (!filmsGrid) return;

    filmsGrid.innerHTML = films.map(film => {
        const trailerId = film.trailer ? getYouTubeId(film.trailer) : null;
        const trailerThumbnail = trailerId ? getYouTubeThumbnail(trailerId) : null;

        return `
        <article class="film-card">
            <div class="film-poster">
                ${film.poster
                    ? `<img src="${film.poster}" alt="${film.title} poster" loading="lazy">`
                    : `<div class="film-poster-placeholder">${film.title.charAt(0)}</div>`
                }
            </div>
            <div class="film-info">
                <h3 class="film-title">${film.title}</h3>
                <div class="film-meta">
                    <span class="film-year">${film.year}</span>
                    ${film.trailer ? `
                        <a href="${film.trailer}" target="_blank" rel="noopener" class="film-trailer-link">
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                            Watch Trailer
                        </a>
                    ` : ''}
                </div>

                ${trailerThumbnail ? `
                    <div class="film-thumbnail" onclick="window.open('${film.trailer}', '_blank')">
                        <img src="${trailerThumbnail}" alt="${film.title} trailer thumbnail" loading="lazy">
                        <div class="thumbnail-overlay">
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                        </div>
                    </div>
                ` : ''}

                <p class="film-description">${film.description}</p>

                ${film.streaming.length > 0 ? `
                    <div class="film-links">
                        ${film.streaming.map(link => `
                            ${link.disabled
                                ? `<span class="film-link film-link-disabled">${link.name}</span>`
                                : `<a href="${link.url}" target="_blank" rel="noopener" class="film-link">${link.name}</a>`
                            }
                        `).join('')}
                    </div>
                ` : ''}

                <div class="film-imdb">
                    <a href="${film.imdb}" target="_blank" rel="noopener" class="imdb-link">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM8.5 15H6.75V9h1.75v6zm4.25 0h-1.75V9h1.75v6zm4.25 0h-1.75V9h1.75v6z"/></svg>
                        View on IMDb
                    </a>
                </div>
            </div>
        </article>
    `}).join('');
}

// ============================================
// RENDER NEWS
// ============================================
function renderNews() {
    const newsGrid = document.getElementById('news-grid');

    if (!newsGrid) return;

    newsGrid.innerHTML = news.map(item => `
        <article class="news-card">
            <p class="news-date">${item.date}</p>
            <h3 class="news-title">${item.title}</h3>
            <p class="news-content">${item.content}</p>
        </article>
    `).join('');
}

// ============================================
// MOBILE MENU TOGGLE
// ============================================
function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (!menuToggle || !navLinks) return;

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// ============================================
// SMOOTH SCROLL FOR NAVIGATION
// ============================================
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// INITIALIZE
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initHeroSlideshow();
    renderFilms();
    renderNews();
    setupMobileMenu();
    setupSmoothScroll();
});
