# Harveer Singh - Portfolio Website

A modern, responsive portfolio website for showcasing professional experience, skills, and achievements. Built with pure HTML, CSS, and JavaScript for optimal performance and easy hosting on GitHub Pages.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **JSON-Driven Content**: Easy to update personal information without touching code
- **Interactive Elements**: Animated skill bars, timeline, and scroll effects
- **Performance Optimized**: Fast loading with minimal dependencies
- **GitHub Pages Ready**: Designed for easy deployment on GitHub Pages

## 📁 Project Structure

```
├── index.html          # Main HTML file
├── style.css           # Styling and animations
├── script.js           # Interactive functionality
├── data.json           # Portfolio data (EDIT THIS TO UPDATE CONTENT)
├── assets/
│   └── resume.pdf      # Downloadable resume
└── README.md           # This file
```

## 🔧 How to Update Your Portfolio

### 1. Personal Information
Edit `data.json` to update your personal details:

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Job Title",
    "summary": "Your professional summary...",
    "contact": {
      "address": "Your Location",
      "phone": "Your Phone",
      "email": "your.email@example.com"
    },
    "stats": {
      "experience": "X+",
      "management": "Y+"
    }
  }
}
```

### 2. Work Experience
Add or modify entries in the `experience` array:

```json
{
  "experience": [
    {
      "position": "Job Title",
      "company": "Company Name",
      "location": "City, State",
      "duration": "Start Date - End Date",
      "achievements": [
        "Achievement 1",
        "Achievement 2"
      ]
    }
  ]
}
```

### 3. Skills
Update skills by category with proficiency levels (0-100):

```json
{
  "skills": {
    "programming": [
      { "name": "Skill Name", "level": 95 }
    ],
    "databases": [
      { "name": "Database Name", "level": 90 }
    ]
  }
}
```

### 4. Education
Update educational background:

```json
{
  "education": {
    "degree": "Your Degree",
    "institution": "University Name",
    "location": "City",
    "duration": "Start-End Year"
  }
}
```

### 5. Highlights
Customize the about section highlights:

```json
{
  "highlights": [
    {
      "icon": "fas fa-code",
      "title": "Highlight Title",
      "description": "Description text"
    }
  ]
}
```

## 🎨 Customization

### Colors
The color scheme can be modified in `style.css` by updating the CSS custom properties:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #06b6d4;
    --accent-color: #f59e0b;
    /* ... other colors */
}
```

### Fonts
The website uses the Inter font family from Google Fonts. To change the font, update the link in `index.html` and the font-family in `style.css`.

## 🚀 Deployment

### GitHub Pages
1. Fork or clone this repository
2. Update `data.json` with your information
3. Replace `assets/resume.pdf` with your resume
4. Enable GitHub Pages in repository settings
5. Your portfolio will be available at `https://yourusername.github.io/repository-name`

### Other Static Hosting Services
This portfolio works with any static hosting service:
- Netlify
- Vercel
- Surge.sh
- Traditional web hosting

Simply upload all files to your hosting provider.

## 📱 Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers

## 🛠️ Development

To run locally:
1. Clone the repository
2. Start a local server: `python -m http.server 5000`
3. Open `http://localhost:5000` in your browser

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you need help customizing this portfolio, feel free to:
- Open an issue on GitHub
- Contact the developer

---

**Pro Tip**: After updating `data.json`, clear your browser cache to see changes immediately.