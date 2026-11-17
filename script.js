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

// Helper to determine if current page is the tailored Roland Berger page (legacy fallback)
function isRbPage() {
  return false;
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

// Tab definitions and section alias mapping
const TAB_DEFINITIONS = ['about', 'experience', 'education', 'projects', 'beyond', 'contact'];

const SECTION_TO_TAB_MAP = {
  // About tab
  'hero': { tab: 'about', section: 'hero' },
  'about': { tab: 'about', section: 'about' },
  'values': { tab: 'about', section: 'values' },

  // Experience tab
  'experience': { tab: 'experience', section: 'experience' },
  'recommendation': { tab: 'experience', section: 'recommendation' },

  // Education tab
  'education': { tab: 'education', section: 'education' },

  // Projects & Skills tab
  'projects': { tab: 'projects', section: 'projects' },
  'skills': { tab: 'projects', section: 'skills' },

  // Beyond tab (4 subsections + Outside Work)
  'beyond': { tab: 'beyond', section: 'beyond' },
  'beyond-initiative': { tab: 'beyond', section: 'beyond-initiative' },
  'beyond-ai': { tab: 'beyond', section: 'beyond-ai' },
  'beyond-other': { tab: 'beyond', section: 'beyond-other' },
  'beyond-social': { tab: 'beyond', section: 'beyond-social' },
  'volunteering': { tab: 'beyond', section: 'beyond-social' },
  'social-commitment': { tab: 'beyond', section: 'beyond-social' },
  'outside-work': { tab: 'beyond', section: 'outside-work' },

  // Contact tab
  'contact': { tab: 'contact', section: 'contact' }
};

// Switch active tab and optionally scroll to specific section
function switchTab(tabId, targetSectionId = null, shouldScroll = true) {
  if (!TAB_DEFINITIONS.includes(tabId)) {
    tabId = 'about';
  }

  // Pause any currently playing videos across all tabs
  document.querySelectorAll('video').forEach((v) => {
    try {
      if (!v.paused) {
        v.pause();
      }
    } catch (_) {}
  });

  // Update tab panels
  TAB_DEFINITIONS.forEach((t) => {
    const panel = document.getElementById(`tabpanel-${t}`);
    const tabLink = document.getElementById(`tab-${t}`);
    const isActive = t === tabId;

    if (panel) {
      if (isActive) {
        panel.removeAttribute('hidden');
        panel.classList.add('is-active');
        // Ensure fade-in elements within the active tab are immediately visible
        panel.querySelectorAll('.fade-in-element').forEach((el) => {
          el.classList.add('is-visible');
        });
      } else {
        panel.setAttribute('hidden', '');
        panel.classList.remove('is-active');
      }
    }

    if (tabLink) {
      tabLink.classList.toggle('active', isActive);
      tabLink.setAttribute('aria-selected', isActive ? 'true' : 'false');
      tabLink.setAttribute('tabindex', isActive ? '0' : '-1');
    }
  });

  // Close mobile menu if open
  const menu = document.getElementById('navMenu');
  const mobileBtn = document.getElementById('mobileMenuBtn');
  if (menu && menu.classList.contains('is-open')) {
    menu.classList.remove('is-open');
    if (mobileBtn) mobileBtn.setAttribute('aria-expanded', 'false');
  }

  // Handle scrolling with a brief, smooth transition
  if (shouldScroll) {
    if (targetSectionId && targetSectionId !== tabId && targetSectionId !== 'hero') {
      setTimeout(() => {
        const targetEl = document.getElementById(targetSectionId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}

// Handle routing from URL hash
function handleHash(hashString, shouldScroll = true) {
  const cleanHash = (hashString || '').replace(/^#/, '').trim().toLowerCase();

  if (!cleanHash) {
    switchTab('about', null, false);
    return;
  }

  if (SECTION_TO_TAB_MAP[cleanHash]) {
    const { tab, section } = SECTION_TO_TAB_MAP[cleanHash];
    switchTab(tab, section, shouldScroll);
  } else if (TAB_DEFINITIONS.includes(cleanHash)) {
    switchTab(cleanHash, null, shouldScroll);
  } else {
    switchTab('about', null, false);
  }
}

// Initialize tab click and keyboard navigation (Accessible Tablist)
function initTabNavigation() {
  const tablist = document.getElementById('navMenu');
  if (!tablist) return;

  const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));

  // Click on tabs
  tabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
      const href = tab.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const tabName = tab.getAttribute('data-tab') || href.substring(1);
        if (window.location.hash !== `#${tabName}`) {
          window.location.hash = `#${tabName}`;
        } else {
          handleHash(tabName, true);
        }
      }
    });
  });

  // Keyboard navigation for tablist (WAI-ARIA Pattern)
  tablist.addEventListener('keydown', (e) => {
    const currentTab = document.activeElement;
    const currentIndex = tabs.indexOf(currentTab);
    if (currentIndex === -1) return;

    let targetIndex = null;

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      targetIndex = (currentIndex + 1) % tabs.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      targetIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      targetIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      targetIndex = tabs.length - 1;
    }

    if (targetIndex !== null) {
      const targetTab = tabs[targetIndex];
      targetTab.focus();
      const tabName = targetTab.getAttribute('data-tab');
      if (tabName) {
        window.location.hash = `#${tabName}`;
      }
    }
  });

  // Listen to browser Back / Forward buttons
  window.addEventListener('hashchange', () => {
    handleHash(window.location.hash, true);
  });
}

// Intercept internal page anchor links to switch to the corresponding tab
function initInternalLinks() {
  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;

    // Skip tab items (handled in initTabNavigation)
    if (anchor.getAttribute('role') === 'tab') return;

    const href = anchor.getAttribute('href');
    if (!href || href === '#' || href === '#!') return;

    const targetId = href.substring(1).toLowerCase();

    if (SECTION_TO_TAB_MAP[targetId] || TAB_DEFINITIONS.includes(targetId)) {
      e.preventDefault();
      if (window.location.hash !== href) {
        window.location.hash = href;
      } else {
        handleHash(targetId, true);
      }
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
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
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

// Image Lightbox Viewer
function initLightbox() {
  const modal = document.getElementById('imageLightbox');
  if (!modal) return;
  const imgEl = document.getElementById('lightboxImg');
  const capEl = document.getElementById('lightboxCaption');
  const closeBtn = document.getElementById('lightboxCloseBtn');
  const backdrop = document.getElementById('lightboxBackdrop');

  function openLightbox(src, alt, caption) {
    if (!imgEl) return;
    imgEl.src = src;
    imgEl.alt = alt || '';
    if (capEl) capEl.textContent = caption || alt || '';
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn?.focus();
  }

  function closeLightbox() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (imgEl) imgEl.src = '';
  }

  document.querySelectorAll('.photo-clickable').forEach((wrapper) => {
    wrapper.addEventListener('click', (e) => {
      if (e.target.tagName === 'A' || e.target.closest('a')) return;
      const img = wrapper.querySelector('img');
      if (!img) return;
      const caption = wrapper.querySelector('.card-photo-caption span')?.textContent || img.alt;
      const fullSrc = wrapper.dataset.fullSrc || img.src;
      openLightbox(fullSrc, img.alt, caption);
    });

    wrapper.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const img = wrapper.querySelector('img');
        if (!img) return;
        const caption = wrapper.querySelector('.card-photo-caption span')?.textContent || img.alt;
        const fullSrc = wrapper.dataset.fullSrc || img.src;
        openLightbox(fullSrc, img.alt, caption);
      }
    });
  });

  closeBtn?.addEventListener('click', closeLightbox);
  backdrop?.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeLightbox();
    }
  });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  // Check persisted language preference or default to 'en'
  const savedLang = localStorage.getItem('belen_portfolio_lang') || 'en';
  setLanguage(savedLang);

  // Setup UI components
  initMobileMenu();
  initTabNavigation();
  initInternalLinks();
  initScrollAnimations();
  initLightbox();

  // Initial tab resolution based on URL hash or default to 'about'
  handleHash(window.location.hash, false);
});
