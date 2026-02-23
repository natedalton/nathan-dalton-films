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

    // Create slides using DOM methods (XSS prevention)
    slideshowImages.forEach(url => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        // Use CSS.escape to prevent XSS from URL injection
        slide.style.backgroundImage = `url('${CSS.escape(url)}')`;
        slideshow.appendChild(slide);
    });

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

    films.forEach(film => {
        const trailerId = film.trailer ? getYouTubeId(film.trailer) : null;
        const trailerThumbnail = trailerId ? getYouTubeThumbnail(trailerId) : null;

        // Create film card using DOM methods (XSS prevention)
        const article = document.createElement('article');
        article.className = 'film-card';

        // Poster container
        const posterDiv = document.createElement('div');
        posterDiv.className = 'film-poster';

        if (film.poster) {
            const img = document.createElement('img');
            img.src = film.poster;
            img.alt = `${film.title} poster`;
            img.loading = 'lazy';
            posterDiv.appendChild(img);
        } else {
            const placeholder = document.createElement('div');
            placeholder.className = 'film-poster-placeholder';
            placeholder.textContent = film.title.charAt(0);
            posterDiv.appendChild(placeholder);
        }

        // Info container
        const infoDiv = document.createElement('div');
        infoDiv.className = 'film-info';

        // Title
        const title = document.createElement('h3');
        title.className = 'film-title';
        title.textContent = film.title;
        infoDiv.appendChild(title);

        // Meta (year + trailer link)
        const metaDiv = document.createElement('div');
        metaDiv.className = 'film-meta';

        const yearSpan = document.createElement('span');
        yearSpan.className = 'film-year';
        yearSpan.textContent = film.year;
        metaDiv.appendChild(yearSpan);

        if (film.trailer) {
            const trailerLink = document.createElement('a');
            trailerLink.href = film.trailer;
            trailerLink.target = '_blank';
            trailerLink.rel = 'noopener';
            trailerLink.className = 'film-trailer-link';
            trailerLink.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg> Watch Trailer';
            metaDiv.appendChild(trailerLink);
        }

        infoDiv.appendChild(metaDiv);

        // Trailer thumbnail
        if (trailerThumbnail) {
            const thumbnailDiv = document.createElement('div');
            thumbnailDiv.className = 'film-thumbnail';

            const thumbImg = document.createElement('img');
            thumbImg.src = trailerThumbnail;
            thumbImg.alt = `${film.title} trailer thumbnail`;
            thumbImg.loading = 'lazy';
            thumbnailDiv.appendChild(thumbImg);

            const overlay = document.createElement('div');
            overlay.className = 'thumbnail-overlay';
            overlay.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
            thumbnailDiv.appendChild(overlay);

            thumbnailDiv.addEventListener('click', () => window.open(film.trailer, '_blank'));

            infoDiv.appendChild(thumbnailDiv);
        }

        // Description
        const desc = document.createElement('p');
        desc.className = 'film-description';
        desc.textContent = film.description;
        infoDiv.appendChild(desc);

        // Streaming links
        if (film.streaming.length > 0) {
            const linksDiv = document.createElement('div');
            linksDiv.className = 'film-links';

            film.streaming.forEach(link => {
                if (link.disabled) {
                    const span = document.createElement('span');
                    span.className = 'film-link film-link-disabled';
                    span.textContent = link.name;
                    linksDiv.appendChild(span);
                } else {
                    const a = document.createElement('a');
                    a.href = link.url;
                    a.target = '_blank';
                    a.rel = 'noopener';
                    a.className = 'film-link';
                    a.textContent = link.name;
                    linksDiv.appendChild(a);
                }
            });

            infoDiv.appendChild(linksDiv);
        }

        // IMDb link
        const imdbDiv = document.createElement('div');
        imdbDiv.className = 'film-imdb';

        const imdbLink = document.createElement('a');
        imdbLink.href = film.imdb;
        imdbLink.target = '_blank';
        imdbLink.rel = 'noopener';
        imdbLink.className = 'imdb-link';
        imdbLink.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM8.5 15H6.75V9h1.75v6zm4.25 0h-1.75V9h1.75v6zm4.25 0h-1.75V9h1.75v6z"/></svg> View on IMDb';

        imdbDiv.appendChild(imdbLink);
        infoDiv.appendChild(imdbDiv);

        article.appendChild(posterDiv);
        article.appendChild(infoDiv);
        filmsGrid.appendChild(article);
    });
}

// ============================================
// RENDER NEWS
// ============================================
function renderNews() {
    const newsGrid = document.getElementById('news-grid');

    if (!newsGrid) return;

    news.forEach(item => {
        // Create news card using DOM methods (XSS prevention)
        const article = document.createElement('article');
        article.className = 'news-card';

        const date = document.createElement('p');
        date.className = 'news-date';
        date.textContent = item.date;
        article.appendChild(date);

        const title = document.createElement('h3');
        title.className = 'news-title';
        title.textContent = item.title;
        article.appendChild(title);

        const content = document.createElement('p');
        content.className = 'news-content';
        content.textContent = item.content;
        article.appendChild(content);

        newsGrid.appendChild(article);
    });
}

// ============================================
// MOBILE MENU TOGGLE & DROPDOWN
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

    // Nav dropdown toggle (works on both desktop and mobile)
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const navItemDropdown = document.querySelector('.nav-item-dropdown');

    if (dropdownToggle && dropdownMenu && navItemDropdown) {
        dropdownToggle.addEventListener('click', (e) => {
            e.preventDefault();
            navItemDropdown.classList.toggle('dropdown-active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!navItemDropdown.contains(e.target)) {
                navItemDropdown.classList.remove('dropdown-active');
            }
        });

        // Close dropdown when clicking a dropdown link
        dropdownMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navItemDropdown.classList.remove('dropdown-active');
            });
        });
    }

    // Hero merch dropdown toggle
    const heroMerchDropdown = document.querySelector('.hero-merch-dropdown');
    const heroMerchToggle = document.querySelector('.merch-dropdown-toggle');
    const heroDropdownMenu = document.querySelector('.hero-dropdown-menu');

    if (heroMerchDropdown && heroMerchToggle && heroDropdownMenu) {
        heroMerchToggle.addEventListener('click', (e) => {
            e.preventDefault();
            heroMerchDropdown.classList.toggle('dropdown-active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!heroMerchDropdown.contains(e.target)) {
                heroMerchDropdown.classList.remove('dropdown-active');
            }
        });

        // Close dropdown when clicking a dropdown link
        heroDropdownMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                heroMerchDropdown.classList.remove('dropdown-active');
            });
        });
    }
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
