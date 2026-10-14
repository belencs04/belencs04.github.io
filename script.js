/**
 * Belén Cereijo Silva — Personal Portfolio Script
 * Features:
 * - Dynamic i18n Translation Engine (EN default, ES) with localStorage persistence
 * - Context-aware CV download targets (general portfolio vs. Roland Berger rb.html)
 * - Video player optimization
 * - Smooth scroll & active navigation spy (desktop + mobile drawer)
 * - Viewport scroll animations
 */

let currentLang = 'en';

// Helper to determine if current page is the tailored Roland Berger page
function isRbPage() {
  return document.body.dataset.page === 'rb' || window.location.pathname.toLowerCase().endsWith('rb.html');
}

// Helper to resolve nested keys like "hero.headline" from translations object
function getNestedTranslation(obj, path) {
  return path.split('.').reduce((prev, curr) => (prev ? prev[curr] : null), obj);
}

// Update all text and attributes according to selected language
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('belen_portfolio_lang', lang);

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Update toggle button states
  const btnEn = document.getElementById('langEnBtn');
  const btnEs = document.getElementById('langEsBtn');
  if (btnEn && btnEs) {
    if (lang === 'en') {
      btnEn.classList.add('active');
      btnEs.classList.remove('active');
    } else {
      btnEs.classList.add('active');
      btnEn.classList.remove('active');
    }
  }

  // Update elements with data-i18n (innerHTML to preserve bold/strong tags)
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const val = getNestedTranslation(translations[lang], key);
    if (val !== undefined && val !== null) {
      el.innerHTML = val;
    }
  });

  // Update attributes like title, content, aria-label
  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    const attrRule = el.getAttribute('data-i18n-attr');
    // Rule format: "attrName:key"
    const [attrName, key] = attrRule.split(':');
    const val = getNestedTranslation(translations[lang], key);
    if (val !== undefined && val !== null) {
      el.setAttribute(attrName, val);
    }
  });

  // Dynamically render skills chips
  renderSkills(lang);

  // Update CV download buttons href and filenames
  updateCvLinks(lang);
}

// Render skill chips dynamically for the active language
function renderSkills(lang) {
  const t = translations[lang].skills;
  const groups = [
    { id: 'skillsGroupFinance', items: t.groupFinanceItems },
    { id: 'skillsGroup1', items: t.group1Items },
    { id: 'skillsGroup2', items: t.group2Items },
    { id: 'skillsGroup3', items: t.group3Items },
    { id: 'skillsGroupTools', items: t.groupToolsItems },
    { id: 'skillsGroup5', items: t.group5Items },
    { id: 'skillsGroup6', items: t.group6Items }
  ];

  groups.forEach((group) => {
    const container = document.getElementById(group.id);
    if (container && group.items) {
      container.innerHTML = group.items
        .map((item) => `<span class="skill-chip">${item}</span>`)
        .join('');
    }
  });
}

// Update CV download targets according to active language and page context
function updateCvLinks(lang) {
  const isRb = isRbPage();
  const cvPath = isRb
    ? (lang === 'es' ? 'assets/CV_Belen_Cereijo_ES.pdf' : 'assets/CV_Belen_Cereijo_RB.pdf')
    : (lang === 'es' ? 'assets/CV_Belen_Cereijo_ES.pdf' : 'assets/CV_Belen_Cereijo_EN.pdf');

  const cvButtons = ['navCvBtn', 'heroCvBtn', 'contactCvBtn'];
  cvButtons.forEach((id) => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.setAttribute('href', cvPath);
    }
  });
}

// Mobile menu toggle
function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('navMenu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', isOpen);
  });

  // Close when clicking nav links
  menu.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}

// Active navigation spy with IntersectionObserver
function initActiveNavSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -65% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
}

// Subtle scroll reveal animations
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in-element');

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  elements.forEach((el) => observer.observe(el));
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  // Check persisted language preference or default to 'en'
  const savedLang = localStorage.getItem('belen_portfolio_lang') || 'en';
  setLanguage(savedLang);

  // Setup UI components
  initMobileMenu();
  initActiveNavSpy();
  initScrollAnimations();
});
