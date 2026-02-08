# Nathan Dalton - Filmmaker Portfolio

A cinematic, dark-themed portfolio website for showcasing your films, news, and social links.

## Quick Start

1. **Open the site locally**
   - Simply open `index.html` in your browser to preview
   - Or use a local server (see deployment section)

2. **Customize your content**
   - Edit `js/data.js` to add your films and news
   - Update social links in `index.html`
   - Add poster images to `assets/posters/`

3. **Deploy**
   - Netlify: Drag & drop the folder at [netlify.com/drop](https://app.netlify.com/drop)
   - Vercel: Connect your GitHub repo or use CLI
   - GitHub Pages: Push to GitHub and enable Pages in settings

## Customization Guide

### Adding Your Films

Edit `js/data.js` and update the `films` array:

```javascript
{
    id: 1,
    title: "Your Film Title",
    year: "2024",
    description: "A brief description of your film...",
    poster: "assets/posters/film1.jpg", // or null for placeholder
    streaming: [
        { name: "Netflix", url: "https://netflix.com/title/xxx", icon: "netflix" },
        { name: "Amazon Prime", url: "https://amazon.com/dp/xxx", icon: "amazon" }
    ]
}
```

**Available streaming icons:** `netflix`, `amazon`, `hulu`, `apple`, `play`

### Adding News/Updates

Edit `js/data.js` and update the `news` array:

```javascript
{
    id: 1,
    date: "February 2025",
    title: "Your News Title",
    content: "Your news content here..."
}
```

### Adding Poster Images

1. Place your poster images in `assets/posters/`
2. Name them (e.g., `film1.jpg`, `film2.jpg`)
3. Update the `poster` property in your film data:
   ```javascript
   poster: "assets/posters/film1.jpg"
   ```

Supported formats: JPG, PNG, WebP

### Updating Social Links

In `index.html`, find the `#contact` section and update the URLs:

```html
<a href="mailto:your@email.com"> <!-- Update email -->
<a href="https://imdb.com/name/yourID"> <!-- Update IMDb -->
<a href="https://twitter.com/yourhandle"> <!-- Update Twitter -->
<a href="https://instagram.com/yourhandle"> <!-- Update Instagram -->
<a href="https://youtube.com/yourchannel"> <!-- Update YouTube -->
```

### Changing Colors

Edit `css/style.css` and update the CSS variables at the top:

```css
:root {
    --bg-primary: #0a0a0a;      /* Main background */
    --bg-secondary: #111111;    /* Section backgrounds */
    --bg-card: #1a1a1a;         /* Film card backgrounds */
    --text-primary: #ffffff;    /* Main text color */
    --text-secondary: #b3b3b3;  /* Secondary text */
    --accent: #e50914;          /* Accent color (red) */
    --accent-hover: #f40612;    /* Accent on hover */
}
```

## Deployment Options

### Netlify (Easiest - Drag & Drop)

1. Go to [netlify.com/drop](https://app.netlify.com/drop)
2. Drag and drop the entire `nathan-dalton-films` folder
3. Your site will be live instantly with a URL like `random-name.netlify.app`

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. In the project folder, run: `vercel`
3. Follow the prompts

Or connect your GitHub repository to Vercel for auto-deploys.

### GitHub Pages

1. Create a GitHub repository
2. Push all files to the repository
3. Go to Settings > Pages
4. Select the branch (usually `main`) and save
5. Your site will be at `https://yourusername.github.io/repository-name`

### Custom Domain

Once deployed on any platform:
1. Buy a domain (e.g., `nathandalton.com`)
2. In your hosting provider's dashboard, add the custom domain
3. Update DNS settings as instructed by your host

## File Structure

```
nathan-dalton-films/
├── index.html          # Main page
├── merch.html          # Merch page (placeholder)
├── css/
│   └── style.css       # All styles
├── js/
│   ├── data.js         # Your films & news (edit this!)
│   └── main.js         # Site functionality
└── assets/
    └── posters/        # Add your film posters here
```

## Features

- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Cinematic Dark Theme** - Professional, film-industry aesthetic
- **Easy Content Management** - Just edit the data file, no coding needed
- **Streaming Links** - Direct links to where viewers can watch your films
- **News Section** - Keep fans updated on upcoming projects
- **Social Integration** - Links to IMDb, Twitter, Instagram, YouTube
- **Fast Loading** - Static site, no database needed
- **SEO Friendly** - Proper meta tags and semantic HTML

## Future Enhancements

When ready to add merch:

1. Create products in `js/data.js`
2. Update `merch.html` to display products
3. Integrate with:
   - Gumroad
   - Shopify Buy Button
   - Stripe Payment Links
   - Printful/Printify for print-on-demand

## Support

For questions or issues, refer to:
- HTML/CSS: [MDN Web Docs](https://developer.mozilla.org/)
- Deployment: [Netlify Docs](https://docs.netlify.com/)

---

Made with passion for filmmaking 🎬
