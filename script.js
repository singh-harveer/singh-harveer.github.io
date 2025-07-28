// Global variables
let isLoading = true;

// Embedded Portfolio Data
const portfolioData = {
  "personal": {
    "name": "Harveer Singh",
    "title": "Senior Software Engineer",
    "summary": "Forward-thinking Software Engineer with 9+ years of experience in software development and 4 years of experience in managing an backend engineering team. Proud team player focused on achieving project objectives with speed and accuracy.",
    "contact": {
      "address": "Gurgaon, HR, 122001",
      "phone": "094-566-32816",
      "email": "harveersingh93@outlook.com"
    },
    "stats": {
      "experience": "9+",
      "management": "4+"
    }
  },
  "education": {
    "degree": "B.Tech: ECE",
    "institution": "Apollo Institute of Technology",
    "location": "Kanpur",
    "duration": "2010-2014"
  },
  "experience": [
    {
      "position": "Senior Software Engineer",
      "company": "AGORA",
      "location": "Gurgaon, Haryana",
      "duration": "Apr 2022 - Present",
      "achievements": [
        "Involved in code review to reduce technical debt and producing maintainable code",
        "Implemented RAG service which provides runtime query specific context to convoAI agents",
        "Working closely with development teams and DevOps to design and build no-code solutions for agora",
        "Implemented application monitoring using OTEL for system observability",
        "Work with the business team to gather requirements and collaborate with the engineering team to design and build distributed scalable solutions to fulfill business requirements",
        "Responsible for designing and managing backend infra",
        "Optimized AWS infra and reduced 20% of infra cost monthly",
        "Implemented best practice and coding guidelines"
      ]
    },
    {
      "position": "Senior Software Engineer",
      "company": "GMO Globalsign",
      "location": "Delhi, Delhi",
      "duration": "Sep 2020 - Apr 2022",
      "achievements": [
        "Designing and building fully tested microservices using AWS Lambda for CLM",
        "Managed team of backend engineers for CLM",
        "Involved in code review to reduce technical debt",
        "Working closely with other development teams to deliver highly availability solutions"
      ]
    },
    {
      "position": "Senior Software Engineer",
      "company": "Reliance Jio",
      "location": "Gurgaon, Haryana",
      "duration": "Mar 2020 - Sep 2020",
      "achievements": [
        "Suggested improvements to team and project workflow",
        "Designed and developed fully tested microservices for subscriptions engine",
        "Reviewed Golang code and worked with development teams to correct problems, run test scenarios and prepare for deployment",
        "Managed team of backend engineers"
      ]
    },
    {
      "position": "Software Engineer",
      "company": "Noon",
      "location": "Gurgaon, Haryana",
      "duration": "Nov 2017 - Jul 2019",
      "achievements": [
        "Designed and developed web crawler to scrape price details from competitor platforms and perform price comparison of products",
        "Designed and developed microservices for logistics systems using Flask and deployed containerized applications using GKE"
      ]
    },
    {
      "position": "Software Engineer",
      "company": "Aspire System Pvt. Ltd.",
      "location": "Gurgaon, Haryana",
      "duration": "Feb 2016 - Oct 2017",
      "achievements": [
        "Worked closely with QA and fixed critical bugs",
        "Developed automation framework for QA team"
      ]
    }
  ],
  "skills": {
    "programming": [
      { "name": "Golang", "level": 95 },
      { "name": "Python", "level": 90 },
      { "name": "SQL", "level": 85 }
    ],
    "databases": [
      { "name": "PostgreSQL", "level": 90 },
      { "name": "Redis", "level": 85 }
    ],
    "devops": [
      { "name": "Kubernetes", "level": 88 },
      { "name": "AWS Services", "level": 92 },
      { "name": "Terraform", "level": 80 }
    ],
    "architecture": [
      { "name": "GRPC", "level": 85 },
      { "name": "API Design", "level": 90 },
      { "name": "SOLID Principles", "level": 88 },
      { "name": "Application Containerization", "level": 85 },
      { "name": "OOPS", "level": 88 },
      { "name": "API Documentation", "level": 90 }
    ],
    "management": [
      { "name": "Team Management", "level": 85 },
      { "name": "Code Review", "level": 90 },
      { "name": "Project Planning", "level": 85 }
    ]
  },
  "highlights": [
    {
      "icon": "fas fa-server",
      "title": "System Architecture",
      "description": "Expert in microservices, distributed systems, and scalable backend infrastructure"
    },
    {
      "icon": "fas fa-chart-line",
      "title": "Performance Optimization",
      "description": "Achieved 20% AWS infrastructure cost reduction and improved system observability"
    },
    {
      "icon": "fas fa-robot",
      "title": "AI Integration",
      "description": "Implemented RAG services and AI agents for intelligent automation solutions"
    }
  ]
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Populate the website with embedded data
    populateWebsite();
    initializeApp();
    
    // Try to load updated data from JSON if available (for server environments)
    loadPortfolioDataFromJSON();
});

// Fallback function to try loading from JSON (for server environments)
async function loadPortfolioDataFromJSON() {
    try {
        const response = await fetch('data.json');
        const jsonData = await response.json();
        // Merge or replace with JSON data if available
        Object.assign(portfolioData, jsonData);
        populateWebsite();
    } catch (error) {
        // Silently fail and use embedded data
        console.log('Using embedded portfolio data (offline mode)');
    }
}

// Populate Website with Data
function populateWebsite() {
    if (!portfolioData) return;
    
    // Populate hero section
    populateHeroSection();
    
    // Populate experience section
    populateExperienceSection();
    
    // Populate skills section
    populateSkillsSection();
    
    // Update navigation logo
    const logoText = document.querySelector('.logo-text');
    if (logoText) {
        logoText.textContent = portfolioData.personal.name;
    }
}

// Populate Hero Section
function populateHeroSection() {
    const { personal } = portfolioData;
    
    document.getElementById('hero-name').textContent = personal.name;
    document.getElementById('hero-title').textContent = personal.title;
    document.getElementById('hero-summary').textContent = personal.summary;
    document.getElementById('profile-name').textContent = personal.name;
    document.getElementById('profile-title').textContent = personal.title;
    document.getElementById('experience-years').textContent = personal.stats.experience;
    document.getElementById('management-years').textContent = personal.stats.management;
}



// Populate Experience Section
function populateExperienceSection() {
    const { experience } = portfolioData;
    const timeline = document.getElementById('experience-timeline');
    
    timeline.innerHTML = experience.map(exp => `
        <div class="timeline-item" data-aos="fade-up">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="timeline-header">
                    <h3>${exp.position}</h3>
                    <span class="company">${exp.company}</span>
                    <span class="duration">${exp.duration}</span>
                    <span class="location">${exp.location}</span>
                </div>
                <ul class="timeline-achievements">
                    ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

// Populate Skills Section
function populateSkillsSection() {
    const { skills } = portfolioData;
    const skillsContainer = document.getElementById('skills-categories');
    
    const skillIcons = {
        programming: 'fas fa-code',
        databases: 'fas fa-database',
        devops: 'fas fa-cloud',
        architecture: 'fas fa-cogs',
        management: 'fas fa-users-cog'
    };
    
    const skillTitles = {
        programming: 'Programming Languages',
        databases: 'Databases & Storage',
        devops: 'DevOps & Infrastructure',
        architecture: 'Architecture & Design',
        management: 'Leadership & Management'
    };
    
    skillsContainer.innerHTML = Object.entries(skills).map(([category, skillList]) => `
        <div class="skill-category" data-aos="fade-up">
            <h3><i class="${skillIcons[category]}"></i> ${skillTitles[category]}</h3>
            <div class="skills-list">
                ${skillList.map(skill => `
                    <div class="skill-item">
                        <div class="skill-name">${skill.name}</div>
                        <div class="skill-bar">
                            <div class="skill-progress" data-width="${skill.level}%"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Initialize Application
function initializeApp() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });

    // Hide loading screen
    setTimeout(() => {
        hideLoadingScreen();
    }, 1500);

    // Initialize navigation
    initializeNavigation();
    
    // Initialize scroll effects
    initializeScrollEffects();
    
    // Initialize skill bars animation
    initializeSkillBars();
    
    // Initialize contact form
    initializeContactForm();
    
    // Initialize smooth scrolling
    initializeSmoothScrolling();
    
    // Initialize parallax effects
    initializeParallaxEffects();
    
    // Initialize theme toggle
    initializeThemeToggle();
    
    // Initialize typing animation after data is loaded
    setTimeout(initializeTypingAnimation, 2000);
}

// Hide Loading Screen
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.add('hidden');
    isLoading = false;
    
    // Remove loading screen from DOM after animation
    setTimeout(() => {
        loadingScreen.remove();
    }, 500);
}

// Navigation Functions
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Update active navigation link based on scroll position
    window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Scroll Effects
function initializeScrollEffects() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Initialize fade-in animations for elements without AOS
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

// Skill Bars Animation
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.getAttribute('data-width');
                
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 200);
                
                skillObserver.unobserve(progressBar);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

// Contact Form
function initializeContactForm() {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
        
        // Add floating label effect
        const formGroups = document.querySelectorAll('.form-group');
        formGroups.forEach(group => {
            const input = group.querySelector('input, textarea');
            const label = group.querySelector('label');
            
            if (input && label) {
                input.addEventListener('focus', () => {
                    label.classList.add('focused');
                });
                
                input.addEventListener('blur', () => {
                    if (!input.value) {
                        label.classList.remove('focused');
                    }
                });
                
                // Check if input has value on load
                if (input.value) {
                    label.classList.add('focused');
                }
            }
        });
    }
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Create mailto link with form data
    const mailtoLink = `mailto:harveersingh93@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    showNotification('Your email client should open with the message ready to send!', 'success');
    
    // Reset form
    e.target.reset();
    
    // Remove focused class from labels
    const labels = e.target.querySelectorAll('label');
    labels.forEach(label => label.classList.remove('focused'));
}

// Smooth Scrolling
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Parallax Effects
function initializeParallaxEffects() {
    const shapes = document.querySelectorAll('.shape');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.1;
            shape.style.transform = `translateY(${rate * speed}px) rotate(${scrolled * speed * 0.1}deg)`;
        });
    });
}

// Utility Functions
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles for notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
        word-wrap: break-word;
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Throttle function for performance
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Theme Toggle Functionality
function initializeThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme preference or default to dark mode for demo
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Update icon based on current theme
    updateThemeIcon(currentTheme, themeIcon);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme, themeIcon);
        
        // Add a smooth transition effect
        document.body.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    });
}

function updateThemeIcon(theme, iconElement) {
    if (theme === 'dark') {
        iconElement.className = 'fas fa-sun';
    } else {
        iconElement.className = 'fas fa-moon';
    }
}

// Add typing animation to hero title
function initializeTypingAnimation() {
    const titleName = document.querySelector('.title-name');
    if (titleName && portfolioData) {
        const text = portfolioData.personal.name;
        titleName.textContent = '';
        titleName.style.borderRight = '2px solid rgba(255, 255, 255, 0.8)';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                titleName.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                // Remove cursor after typing is complete
                setTimeout(() => {
                    titleName.style.borderRight = 'none';
                }, 1000);
            }
        };
        
        // Start typing animation after page load
        setTimeout(typeWriter, 500);
    }
}

// Typing animation will be called from initializeApp after data loads

// Add scroll progress indicator
function initializeScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0;
        height: 3px;
        background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
        z-index: 10000;
        transition: width 0.1s ease;
    `;
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', throttle(() => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    }, 10));
}

// Initialize scroll progress
initializeScrollProgress();

// Handle window resize
window.addEventListener('resize', debounce(() => {
    // Reinitialize AOS on resize
    AOS.refresh();
}, 250));

// Add smooth reveal animation for timeline items
function initializeTimelineAnimation() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });
    
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        item.style.transition = `all 0.6s ease ${index * 0.1}s`;
        timelineObserver.observe(item);
    });
}

// Initialize timeline animation
setTimeout(initializeTimelineAnimation, 500);

// Add interactive background particles
function initializeBackgroundParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3 + 1}px;
            height: ${Math.random() * 3 + 1}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 6 + 4}s linear infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        
        hero.querySelector('.hero-background').appendChild(particle);
    }
}

// Initialize background particles
initializeBackgroundParticles();

// Console message for developers
console.log(`
🚀 Welcome to Harveer Singh's Portfolio!
💼 Built with modern web technologies
🎨 Designed with attention to detail
📱 Fully responsive and accessible
⚡ Optimized for performance

If you're interested in collaborating, feel free to reach out!
📧 harveersingh93@outlook.com
`);
