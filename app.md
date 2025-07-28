# Harveer Singh - Senior Software Engineer Portfolio

## Overview

This is a personal portfolio website for Harveer Singh, a Senior Software Engineer. The project is a static website built with vanilla HTML, CSS, and JavaScript, featuring a modern, responsive design with smooth animations and interactive elements.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a simple client-side static website architecture:

- **Frontend Only**: Pure HTML/CSS/JavaScript without any backend services
- **Static Hosting**: Designed to be hosted on static file servers or CDNs like GitHub Pages
- **No Database Required**: All content is stored in a JSON file for easy updates
- **No Server Dependencies**: Completely client-side with no backend requirements
- **Third-party Libraries**: Minimal external dependencies for animations and icons

## Key Components

### 1. HTML Structure (index.html)
- Semantic HTML5 structure with proper accessibility considerations
- Organized into distinct sections: navigation, hero, about, experience, skills, contact
- Meta tags for SEO and responsive design
- External font and icon library integrations

### 2. Styling System (style.css)
- **CSS Custom Properties**: Comprehensive design system with color palette, shadows, and gradients
- **Responsive Design**: Mobile-first approach with flexible layouts
- **Animation Ready**: Structured for smooth transitions and effects
- **Modern CSS**: Uses modern CSS features like CSS Grid, Flexbox, and custom properties

### 3. Interactive Features (script.js)
- **Data Management**: Asynchronous loading and dynamic population of content from JSON
- **Loading Screen**: Initial loading animation for better user experience
- **Smooth Navigation**: Animated scrolling between sections
- **Scroll Effects**: Dynamic navbar behavior and parallax effects
- **Form Handling**: Contact form validation and submission
- **Animation Integration**: AOS (Animate On Scroll) library integration

### 4. Data Layer (data.json)
- **Centralized Content**: All portfolio content stored in structured JSON format
- **Easy Updates**: Simple editing of personal information, experience, skills, and education
- **Maintainable Structure**: Organized sections for different content types
- **Version Control Friendly**: Text-based format that works well with Git

## Data Flow

The portfolio website uses a JSON-driven architecture for easy content management:

1. **Page Load**: HTML loads with CSS and JavaScript assets
2. **Data Loading**: JavaScript fetches portfolio data from `data.json`
3. **Dynamic Population**: Content is dynamically inserted into HTML elements using DOM manipulation
4. **Initialization**: JavaScript initializes animations, navigation, and interactive features
5. **User Interaction**: Navigation clicks trigger smooth scrolling, form submissions are handled client-side
6. **Visual Feedback**: Animations and transitions provide immediate visual feedback

## External Dependencies

### CDN Libraries
- **Google Fonts**: Inter font family for typography
- **Font Awesome**: Icon library for social media and UI icons
- **AOS Library**: Animate On Scroll for scroll-triggered animations

### No Backend Dependencies
- No server-side processing required
- No database or server infrastructure needed
- No API integrations (beyond static CDN resources)
- Perfect for GitHub Pages, Netlify, or any static hosting

## Deployment Strategy

### Static Hosting Options
- **GitHub Pages**: Direct deployment from repository
- **Netlify/Vercel**: Automatic deployment with form handling capabilities
- **Traditional Web Hosting**: Any static file hosting service
- **CDN Deployment**: Can be served entirely from a CDN

### Build Process
- No build process required - files can be served directly
- Optional optimization: minification of CSS/JS for production
- Image optimization recommended for better performance

### Performance Considerations
- Minimal external dependencies reduce load times
- CSS custom properties enable efficient theming
- Lazy loading implemented for animations
- Responsive images and proper caching headers recommended

## Development Notes

The codebase is structured for easy maintenance and extension:

- **Modular CSS**: Well-organized stylesheets with clear component separation
- **Progressive Enhancement**: Core functionality works without JavaScript
- **Accessibility**: Semantic HTML structure with proper ARIA considerations
- **Cross-browser Compatibility**: Uses standard web technologies for broad support

This architecture prioritizes simplicity, performance, and maintainability while providing a professional presentation suitable for a software engineer's portfolio.

## Recent Changes (Latest Session)

### January 26, 2025
- **Removed About Section**: Eliminated duplicate content by removing the About section entirely
- **Sequential Timeline Layout**: Redesigned experience section from alternating left-right to sequential left-aligned layout for better readability and reduced scrolling
- **Optimized Spacing**: Reduced section padding from 5rem to 3rem and optimized component spacing throughout
- **Fixed Skills Categorization**: Moved OOPs and API Documentation from Management to Architecture & Design category
- **Offline Compatibility**: Embedded portfolio data directly in JavaScript for offline functionality when downloaded
- **Resume Download**: Fixed download link to point to correct file in attached_assets folder
- **Layout Centering**: Improved container centering and width constraints for better display on Mac 14.5" screens

### Deployment Ready
- Portfolio is now ready for GitHub Pages deployment
- Created comprehensive deployment guide (DEPLOYMENT.md)
- Added .gitignore for version control
- Embedded data ensures offline functionality after download