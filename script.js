/**
 * Humayoun Kobir | Portfolio Logic
 * Optimized for maximum performance, bilingual support (EN/BN), and smooth transitions.
 */

// Translation Dictionary for Full Bilingual Support
const translations = {
    en: {
        brand_name: "Humayoun Kobir",
        brand_title: "Engineer & Designer",
        brand_repo: "Repository",
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_contact: "Contact",
        nav_softwarehq: "Software HQ",
        drawer_nav_title: "Navigation",
        drawer_contact_title: "Direct Contact",
        drawer_preferences_title: "Preferences",
        contact_email_title: "Email Address",
        contact_wa_title: "WhatsApp / Phone",
        toggle_language_label: "Language",
        toggle_theme_label: "Theme",
        
        // Hero Section
        hero_greeting: "Assalamu Alaikum (Greetings)!",
        hero_iam: "I'm Humayoun Kobir",
        hero_about_text: "A Diploma Engineer in Computer Science with a focus on smart strategies and efficient solutions. Bridging the gap between technical engineering and creative design through 3D modeling, branding, and data optimization.",
        btn_skills: "Skills",
        btn_projects: "Projects",
        btn_connect: "Connect",
        chip_gd: "Graphic Design",
        chip_3d: "3D Modeling & Blender",
        chip_excel: "Excel & Data Specialists",
        chip_hw: "Hardware Solutions",
        available_badge: "Available for Hire",

        // Skills Section
        skills_title: "Skills",
        svc1_title: "Graphic Design",
        svc1_desc: "Visual assets built for promotion, branding, and polished communication.",
        svc1_c1: "Logo design",
        svc1_c2: "Banner design",
        svc1_c3: "Business cards",
        svc1_c4: "Social ads",

        svc2_title: "Programming & Web Basics",
        svc2_desc: "Comfortable with core languages and practical scripting for small projects.",
        svc2_c1: "C and C++",
        svc2_c2: "Python",
        svc2_c3: "HTML, CSS, JavaScript",
        svc2_c4: "VBS for Windows",

        svc3_title: "Data & Office Work",
        svc3_desc: "Spreadsheet-heavy tasks delivered with accuracy, structure, and clean formatting.",
        svc3_c1: "Microsoft Excel",
        svc3_c2: "Google Sheets",
        svc3_c3: "Data entry",
        svc3_c4: "Lead generation",

        svc4_title: "3D & Blender",
        svc4_desc: "Entry-level 3D work with attention to form, scene lighting, and presentation.",
        svc4_c1: "3D modeling",
        svc4_c2: "Rendering",
        svc4_c3: "Lighting",
        svc4_c4: "Architectural visuals",

        svc5_title: "PC Software & Hardware",
        svc5_desc: "Hands-on setup, diagnostics, optimization, and maintenance across devices.",
        svc5_c1: "Hardware diagnostics",
        svc5_c2: "BIOS and thermals",
        svc5_c3: "OS installs",
        svc5_c4: "Custom ROM flashing",

        svc6_title: "Electronics & DIY",
        svc6_desc: "Practical builds using core electronics knowledge and reliable component testing.",
        svc6_c1: "Breadboard prototyping",
        svc6_c2: "DC-DC systems",
        svc6_c3: "Charging modules",
        svc6_c4: "Basic soldering",

        // Projects Section
        projects_title: "Projects",
        lnk_live_website: "Live Website",
        lnk_live_webapp: "Live Web App",
        lnk_github_repo: "GitHub Repository",
        lnk_ps_script: "PowerShell Script",
        lnk_download_pdf: "Download PDF",
        lnk_banner_design: "Banner Design",
        lnk_poster_design: "Poster Design",
        lnk_logo_design: "Logo Design",
        lnk_business_card: "Business Card",
        lnk_fb_ads: "Facebook Ads Poster",
        lnk_mkt_ads: "Marketplace Ads Run",
        lnk_card_design: "Business Card Design",
        lnk_cash_memo: "Cash Memo Design",


        // Social Media Grid
        social_github: "GitHub",
        social_linkedin: "LinkedIn",
        social_behance: "Behance",
        social_dribbble: "Dribbble",
        social_upwork: "Upwork",
        social_reddit: "Reddit",
        social_discord: "Discord",
        social_stackoverflow: "Stack Overflow",
        social_softwarehq: "Software HQ",
        social_quran: "Read Quran",
        social_dawah: "Dawah Files",
        social_app_dl: "App Download",

        // Project Tags (Engla / English)
        tag_webapp: "Web App",
        tag_wasm: "WASM",
        tag_clientside: "Client-Side",
        tag_powershell: "PowerShell",
        tag_hardware: "Hardware",
        tag_3d_webgl: "3D WebGL",
        tag_threejs: "Three.js",
        tag_react: "React",
        tag_cpp: "C / C++",
        tag_algorithms: "Algorithms",
        tag_bentoui: "Bento UI",
        tag_countdown: "Countdown",
        tag_banner: "Banner",
        tag_poster: "Poster",
        tag_logo: "Logo",
        tag_corporate: "Corporate",
        tag_ads: "Ads",
        tag_bcard: "Business Card",

        // Contact Section
        contact_title: "Let's build<br>something great.",
        contact_text: "Open for collaborations, freelance projects, or just a coffee chat about tech and design.",
        contact_email_btn: "Click here to Email",
        contact_wa_btn: "Click here to WhatsApp",

        // Footer
        footer_copyright: "© 2026 Humayoun Kobir. All rights reserved.",
        footer_back_top: "Back to top"
    },
    bn: {
        brand_name: "হুমায়ূন কবির",
        brand_title: "প্রকৌশলী ও ডিজাইনার",
        brand_repo: "সফটওয়্যার ভান্ডার",
        nav_about: "পরিচিতি",
        nav_skills: "দক্ষতা",
        nav_projects: "প্রকল্প",
        nav_contact: "যোগাযোগ",
        nav_softwarehq: "সফটওয়্যার HQ",
        drawer_nav_title: "নেভিগেশন মেনু",
        drawer_contact_title: "সরাসরি যোগাযোগ",
        drawer_preferences_title: "পছন্দসমূহ",
        contact_email_title: "ইমেইল ঠিকানা",
        contact_wa_title: "হোয়াটসঅ্যাপ / ফোন",
        toggle_language_label: "ভাষা",
        toggle_theme_label: "থিম",

        // Hero Section
        hero_greeting: "আসসালামু আলাইকুম!",
        hero_iam: "আমি হুমায়ূন কবির",
        hero_about_text: "কম্পিউটার সায়েন্সে ডিপ্লোমা ইঞ্জিনিয়ার, যিনি স্মার্ট স্ট্র্যাটেজি ও দক্ষ সমাধান সৃষ্টিতে নিবেদিত। ৩ডি মডেলিং, ব্র্যান্ডিং এবং ডাটা অপ্টিমাইজেশনের মাধ্যমে টেকনিক্যাল ইঞ্জিনিয়ারিং ও ক্রিয়েটিভ ডিজাইনের মেলবন্ধন ঘটাই।",
        btn_skills: "দক্ষতা",
        btn_projects: "প্রকল্পসমূহ",
        btn_connect: "যোগাযোগ",
        chip_gd: "গ্রাফিক ডিজাইন",
        chip_3d: "৩ডি মডেলিং ও ব্লেন্ডার",
        chip_excel: "এক্সেল ও ডাটা বিশেষজ্ঞ",
        chip_hw: "হার্ডওয়্যার সমাধান",
        available_badge: "কাজের জন্য প্রস্তুত",

        // Skills Section
        skills_title: "দক্ষতা ও অভিজ্ঞতা",
        svc1_title: "গ্রাফিক ডিজাইন",
        svc1_desc: "প্রচারণা, ব্র্যান্ডিং এবং দৃষ্টিনন্দন যোগাযোগের জন্য নির্মিত মানসম্মত ভিজ্যুয়াল উপাদান।",
        svc1_c1: "লোগো ডিজাইন",
        svc1_c2: "ব্যানার ডিজাইন",
        svc1_c3: "বিজনেস কার্ড",
        svc1_c4: "সোশ্যাল অ্যাডস",

        svc2_title: "প্রোগ্রামিং ও ওয়েব বেসিকস",
        svc2_desc: "কোর ল্যাঙ্গুয়েজ এবং বিভিন্ন প্রজেক্টের প্রয়োজনীয় স্ক্রিপ্টিংয়ে কার্যকর দক্ষতা।",
        svc2_c1: "C ও C++",
        svc2_c2: "পাইথন",
        svc2_c3: "HTML, CSS, জাভাস্ক্রিপ্ট",
        svc2_c4: "উইন্ডোজ VBS",

        svc3_title: "ডাটা ও অফিস ব্যবস্থাপনা",
        svc3_desc: "স্প্রেডশিট ও ডাটাবেজ নির্ভর কাজ নিখুঁত নির্ভুলতা ও সুশৃঙ্খল ফরম্যাটিংয়ে সম্পন্ন।",
        svc3_c1: "মাইক্রোসফট এক্সেল",
        svc3_c2: "গুগল শিটস",
        svc3_c3: "ডাটা এন্ট্রি",
        svc3_c4: "লিড জেনারেশন",

        svc4_title: "৩ডি ও ব্লেন্ডার",
        svc4_desc: "নিখুঁত ফর্ম, সঠিক লাইটিং ও আকর্ষণীয় প্রেজেন্টেশনের ৩ডি ভিজ্যুয়াল মডেলিং।",
        svc4_c1: "৩ডি মডেলিং",
        svc4_c2: "রেন্ডারিং",
        svc4_c3: "লাইটিং",
        svc4_c4: "আর্কিটেকচারাল সিন",

        svc5_title: "পিসি সফটওয়্যার ও হার্ডওয়্যার",
        svc5_desc: "ডিভাইস ডায়াগনস্টিক, সিস্টেম অপ্টিমাইজেশন, রক্ষণাবেক্ষণ ও কারিগরি সমাধান।",
        svc5_c1: "হার্ডওয়্যার ডায়াগনস্টিক",
        svc5_c2: "বায়োস ও থার্মাল টিউনিং",
        svc5_c3: "ওএস ইনস্টলেশন",
        svc5_c4: "কাস্টম রম ফ্ল্যাশিং",

        svc6_title: "ইলেকট্রনিক্স ও DIY",
        svc6_desc: "ইলেকট্রনিক্স নলেজ ও কম্পোনেন্ট টেস্টিং নির্ভর ব্যবহারিক সার্কিট ডেভেলপমেন্ট।",
        svc6_c1: "সার্কিট প্রোটোটাইপিং",
        svc6_c2: "ডিসি-ডিসি সিস্টেম",
        svc6_c3: "চার্জিং মডিউল",
        svc6_c4: "বেসিক সোল্ডারিং",

        // Projects Section
        projects_title: "নির্বাচিত প্রকল্পসমূহ",
        lnk_live_website: "লাইভ ওয়েবসাইট",
        lnk_live_webapp: "লাইভ ওয়েব অ্যাপ",
        lnk_github_repo: "গিটহাব রেপো",
        lnk_ps_script: "পাওয়ারশেল স্ক্রিপ্ট",
        lnk_download_pdf: "ডাউনলোড PDF",
        lnk_banner_design: "ব্যানার ডিজাইন",
        lnk_poster_design: "পোস্টার ডিজাইন",
        lnk_logo_design: "লোগো ডিজাইন",
        lnk_business_card: "বিজনেস কার্ড",
        lnk_fb_ads: "ফেসবুক বিজ্ঞাপন পোস্টার",
        lnk_mkt_ads: "মার্কেটপ্লেস বিজ্ঞাপন",
        lnk_card_design: "বিজনেস কার্ড ডিজাইন",
        lnk_cash_memo: "ক্যাশ মেমো ডিজাইন",

        // Social Media Grid (Engla / Bengali Transliteration)
        social_github: "গিটহাব",
        social_linkedin: "লিঙ্কডইন",
        social_behance: "বিহ্যান্স",
        social_dribbble: "ড্রিবল",
        social_upwork: "আপওয়ার্ক",
        social_reddit: "রেডিট",
        social_discord: "ডিসকর্ড",
        social_stackoverflow: "স্ট্যাক ওভারফ্লো",
        social_softwarehq: "সফটওয়্যার HQ",
        social_quran: "কুরআন পড়ুন",
        social_dawah: "দাওয়াহ ফাইল",
        social_app_dl: "অ্যাপ ডাউনলোড",

        // Project Tags (Engla / Bengali)
        tag_webapp: "ওয়েব অ্যাপ",
        tag_wasm: "WASM",
        tag_clientside: "ক্লায়েন্ট-সাইড",
        tag_powershell: "পাওয়ারশেল",
        tag_hardware: "হার্ডওয়্যার",
        tag_3d_webgl: "৩ডি WebGL",
        tag_threejs: "Three.js",
        tag_react: "রিঅ্যাক্ট",
        tag_cpp: "C / C++",
        tag_algorithms: "অ্যালগরিদম",
        tag_bentoui: "বেন্টো UI",
        tag_countdown: "কাউন্টডাউন",
        tag_banner: "ব্যানার",
        tag_poster: "পোস্টার",
        tag_logo: "লোগো",
        tag_corporate: "কর্পোরেট",
        tag_ads: "বিজ্ঞাপন",
        tag_bcard: "বিজনেস কার্ড",

        // Contact Section
        contact_title: 'চলুন একসাথে<br class="br-desktop"> দারুণ<br class="br-mobile"> কিছু<br class="br-desktop"> তৈরি করি।',
        contact_text: "যেকোনো কোলাবোরেশন, ফ্রিল্যান্স প্রজেক্ট বা প্রযুক্তি ও ডিজাইন নিয়ে আলোচনার জন্য আমি সদা উন্মুক্ত।",
        contact_email_btn: "ইমেইল করতে ক্লিক করুন",
        contact_wa_btn: "হোয়াটসঅ্যাপ করতে ক্লিক করুন",

        // Footer
        footer_copyright: "© ২০২৬ হুমায়ূন কবির। সর্বস্বত্ব সংরক্ষিত।",
        footer_back_top: "উপরে ফিরে যান"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;

    // =========================================================================
    // 1. Theme Management (Light / Dark)
    // =========================================================================
    const themeToggle = document.getElementById('themeToggle');
    const themeToggleMobile = document.getElementById('themeToggleMobile');
    const themeMeta = document.querySelector('meta[name="theme-color"]');

    const isMobile = () => window.matchMedia('(max-width: 1024px)').matches || ('ontouchstart' in window && window.innerWidth <= 1024);

    const updateThemeToggleUi = (theme) => {
        const isDark = theme === 'dark';
        [themeToggle, themeToggleMobile].forEach(t => {
            if (!t) return;
            t.setAttribute('data-state', isDark ? 'right' : 'left');
            t.setAttribute('aria-checked', isDark ? 'true' : 'false');
            t.setAttribute('aria-label', isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');
            t.setAttribute('title', isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');
        });
        if (themeMeta) {
            themeMeta.setAttribute('content', isDark ? '#0b0b0b' : '#ffffff');
        }
    };

    const applyTheme = (theme) => {
        root.setAttribute('data-theme', theme);
        localStorage.setItem('portfolio-theme', theme);
        updateThemeToggleUi(theme);
    };

    const setTheme = (theme, withTransition = true) => {
        if (root.getAttribute('data-theme') === theme && localStorage.getItem('portfolio-theme') === theme) return;

        if (withTransition && !isMobile() && document.startViewTransition) {
            document.startViewTransition(() => {
                applyTheme(theme);
            });
        } else {
            applyTheme(theme);
        }
    };

    [themeToggle, themeToggleMobile].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                const newTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
                setTheme(newTheme, true);
            });
        }
    });

    const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
    applyTheme(savedTheme);

    // =========================================================================
    // 2. Bilingual Language Management (EN / BN - Segmented Slider)
    // =========================================================================
    const langToggle = document.getElementById('langToggle');
    const langToggleMobile = document.getElementById('langToggleMobile');

    const typingWords = {
        en: ["Graphic Designer.", "Beginner 3D Artist.", "Data Entry Specialist.", "Computer Hardware Enthusiast.", "Vibe coder."],
        bn: ["গ্রাফিক ডিজাইনার।", "৩ডি ভিজ্যুয়ালাইজার।", "ডাটা এন্ট্রি স্পেশালিস্ট।", "হার্ডওয়্যার বিশেষজ্ঞ।", "ভাইব কোডার।"]
    };

    let activeLang = localStorage.getItem('portfolio-lang') || 'en';

    const updateLangToggleUi = (lang) => {
        const isBn = lang === 'bn';
        [langToggle, langToggleMobile].forEach(t => {
            if (!t) return;
            t.setAttribute('data-state', isBn ? 'left' : 'right');
            t.setAttribute('aria-label', isBn ? 'Switch to English' : 'Switch to Bangla');
            t.setAttribute('title', isBn ? 'Switch to English' : 'Switch to Bangla');

            const optLeft = t.querySelector('.opt-left');
            const optRight = t.querySelector('.opt-right');
            if (optLeft && optRight) {
                if (isBn) {
                    optLeft.textContent = 'বাং';
                    optRight.textContent = 'ইং';
                } else {
                    optLeft.textContent = 'BN';
                    optRight.textContent = 'EN';
                }
            }
        });
    };

    // Navigation metrics already initialized and synced above

    const syncActiveGlider = () => {
        if (!glider || window.innerWidth < 1024) return;
        const activeLink = document.querySelector('.nav a.active') || navLinks[0];
        if (activeLink) {
            glider.style.transform = `translate3d(${Math.round(activeLink.offsetLeft)}px, 0, 0)`;
            glider.style.width = `${Math.round(activeLink.offsetWidth)}px`;
            glider.classList.add('visible');
        }
    };

    const updateGliderSync = () => {
        if (!glider || window.innerWidth < 1024) return;
        if (softwareHqLink && softwareHqLink.classList.contains('active')) {
            syncActiveGlider();
            return;
        }

        const sy = state ? state.scrollY : (window.scrollY || window.pageYOffset || 0);
        const sMetrics = cachedSectionMetrics;
        const nMetrics = cachedNavMetrics;

        if (!sMetrics.length || !nMetrics.length) return;

        let activeIdx = 0;
        const bodyHeight = (document.body && document.body.offsetHeight) || document.documentElement.scrollHeight || 0;
        const isAtBottom = (window.innerHeight + sy) >= bodyHeight - 80;

        if (isAtBottom) {
            activeIdx = sMetrics.length - 1;
        } else {
            for (let i = sMetrics.length - 1; i >= 0; i--) {
                if (sy >= sMetrics[i].target - 20) {
                    activeIdx = i;
                    break;
                }
            }
        }

        const target = nMetrics[activeIdx];
        if (target) {
            glider.style.transform = `translate3d(${Math.round(target.left)}px, 0, 0)`;
            glider.style.width = `${Math.round(target.width)}px`;
            glider.classList.add('visible');

            navLinks.forEach((link, idx) => {
                link.classList.toggle('active', idx === activeIdx);
            });
        }
    };

    const applyLanguage = (lang) => {
        activeLang = lang;
        root.setAttribute('data-lang', lang);
        root.setAttribute('lang', lang);
        localStorage.setItem('portfolio-lang', lang);

        // Update all data-i18n DOM elements
        const dict = translations[lang] || translations.en;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) {
                if (dict[key].includes('<')) {
                    el.innerHTML = dict[key];
                } else {
                    el.textContent = dict[key];
                }
            }
        });

        updateLangToggleUi(lang);

        // Update Typing animation dataset
        words = typingWords[lang] || typingWords.en;
        wordIndex = 0;
        charIndex = 0;
        isDeleting = false;

        // Recompute navigation glider dimensions immediately to accommodate new text length
        if (typeof computePositions === 'function') computePositions();
        refreshMetrics();
        syncActiveGlider();
        updateGliderSync();

        requestAnimationFrame(() => {
            if (typeof computePositions === 'function') computePositions();
            refreshMetrics();
            syncActiveGlider();
            updateGliderSync();
            requestAnimationFrame(() => {
                refreshMetrics();
                syncActiveGlider();
                updateGliderSync();
            });
        });
        setTimeout(() => {
            refreshMetrics();
            syncActiveGlider();
            updateGliderSync();
        }, 60);
    };

    const toggleLanguage = () => {
        const newLang = activeLang === 'bn' ? 'en' : 'bn';
        applyLanguage(newLang);
    };

    [langToggle, langToggleMobile].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', toggleLanguage);
        }
    });

    // =========================================================================
    // 3. Mobile Navigation Drawer & Backdrop Logic
    // =========================================================================
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const drawerBackdrop = document.getElementById('drawerBackdrop');

    const openDrawer = () => {
        if (mobileDrawer && drawerBackdrop) {
            mobileDrawer.classList.add('active');
            drawerBackdrop.classList.add('active');
            mobileDrawer.setAttribute('aria-hidden', 'false');
            drawerBackdrop.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }
    };

    const closeDrawer = () => {
        if (mobileDrawer && drawerBackdrop) {
            mobileDrawer.classList.remove('active');
            drawerBackdrop.classList.remove('active');
            mobileDrawer.setAttribute('aria-hidden', 'true');
            drawerBackdrop.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    };

    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openDrawer);
    if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeDrawer);
    if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

    // Close drawer when clicking any navigation link
    document.querySelectorAll('.drawer-nav a').forEach(link => {
        link.addEventListener('click', () => {
            closeDrawer();
        });
    });

    // Escape key closes mobile drawer
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('active')) {
            closeDrawer();
        }
    });

    // =========================================================================
    // 4. Typing Animation
    // =========================================================================
    const typingElement = document.getElementById('typing');
    let words = typingWords[activeLang] || typingWords.en;
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const type = () => {
        if (!state.isTypingVisible || !typingElement) return;

        const currentWord = words[wordIndex] || words[0];
        const shouldDelete = isDeleting;
        const currentSlice = currentWord.substring(0, charIndex);

        typingElement.textContent = currentSlice || '\u200B';

        if (!shouldDelete && charIndex < currentWord.length) {
            charIndex++;
            typingSpeed = 120 - Math.random() * 50;
        } else if (shouldDelete && charIndex > 0) {
            charIndex--;
            typingSpeed = 60;
        } else {
            isDeleting = !shouldDelete;
            wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
            typingSpeed = !isDeleting ? 200 : 1500;
        }

        setTimeout(type, typingSpeed);
    };

    if (typingElement) {
        const typeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const wasVisible = state.isTypingVisible;
                state.isTypingVisible = entry.isIntersecting;
                if (entry.isIntersecting && !wasVisible) type();
            });
        }, { threshold: 0.1 });
        typeObserver.observe(typingElement);
    }

    // =========================================================================
    // 5. Scroll Reveal (Desktop vs Mobile Optimized)
    // =========================================================================
    if (window.innerWidth >= 1024) {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    } else {
        document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
    }

    // =========================================================================
    // 6. Ultra-Light Scroll Sync & Position State
    // =========================================================================
    const stickyHeads = document.querySelectorAll('.split-section .section-title');

    const state = {
        animating: false,
        isTypingVisible: false,
        scrollY: window.scrollY || window.pageYOffset || 0,
        lastScrollY: -1,
        titlePositions: [],
        winW: window.innerWidth,
        winH: window.innerHeight
    };

    const computePositions = () => {
        const sy = state.scrollY;
        state.winW = window.innerWidth;
        state.winH = window.innerHeight;
        state.titlePositions = Array.from(stickyHeads).map(head => {
            const rect = head.getBoundingClientRect();
            return {
                el: head,
                top: rect.top + sy,
                height: rect.height
            };
        });
    };

    const updateLoop = () => {
        let needsUpdate = false;
        const sy = state.scrollY;
        if (state.winW >= 1024) {
            const titlePositions = state.titlePositions;
            for (let i = 0; i < titlePositions.length; i++) {
                const pos = titlePositions[i];
                const relativeTop = pos.top - sy;
                if (relativeTop < 400 && relativeTop > -200) {
                    const opacity = Math.max(0, Math.min(1, (relativeTop - 50) / 150)).toFixed(2);
                    if (pos.el.style.opacity !== opacity) pos.el.style.opacity = opacity;
                }
            }
            if (typeof updateGliderSync === "function") updateGliderSync();
        }

        if (needsUpdate || (Math.abs(sy - state.lastScrollY) > 0.5)) {
            state.lastScrollY = sy;
            requestAnimationFrame(updateLoop);
        } else {
            state.animating = false;
        }
    };

    const startLoop = () => {
        if (!state.animating) {
            state.animating = true;
            requestAnimationFrame(updateLoop);
        }
    };

    window.addEventListener('resize', () => {
        computePositions();
        refreshMetrics();
        updateGliderSync();
    }, { passive: true });

    window.addEventListener('scroll', () => {
        state.scrollY = window.scrollY || window.pageYOffset || 0;
        if (window.innerWidth >= 1024) {
            startLoop();
        }
    }, { passive: true });

    // =========================================================================
    // 7. Page Slide Transitions & Navigation Glider Logic
    // =========================================================================
    const pageMain = document.querySelector('.page-main');
    const transitionDir = sessionStorage.getItem('page-transition-dir');
    if (transitionDir === 'to-index' && pageMain) {
        pageMain.classList.add('page-slide-in-left');
        sessionStorage.removeItem('page-transition-dir');
        setTimeout(() => {
            pageMain.classList.remove('page-slide-in-left');
        }, 360);
    }

    const navLinks = document.querySelectorAll('.nav a[href^="#"]');
    const sections = Array.from(navLinks).map(link => document.querySelector(link.getAttribute('href'))).filter(s => s);
    const glider = document.getElementById('navGlider');
    const softwareHqLink = document.querySelector('.nav a[href="files.html"]');

    let cachedNavMetrics = [];
    let cachedSectionMetrics = [];

    const refreshMetrics = () => {
        const scrollMargin = 72;
        cachedNavMetrics = Array.from(navLinks).map(link => ({
            left: link.offsetLeft,
            width: link.offsetWidth
        }));
        cachedSectionMetrics = sections.map(section => ({
            target: Math.max(0, section.offsetTop - scrollMargin)
        }));
    };

    const initGliderTarget = () => {
        if (!glider || window.innerWidth < 1024) return;
        refreshMetrics();
        if (!cachedNavMetrics.length) return;

        let activeIdx = 0;
        const currentHash = window.location.hash;
        if (currentHash) {
            const hashIdx = Array.from(navLinks).findIndex(l => l.getAttribute('href') === currentHash);
            if (hashIdx !== -1) {
                activeIdx = hashIdx;
                const targetSec = document.querySelector(currentHash);
                if (targetSec) {
                    const targetScroll = Math.max(0, targetSec.offsetTop - 72);
                    window.scrollTo({ top: targetScroll, behavior: 'instant' });
                    state.scrollY = targetScroll;
                    state.lastScrollY = targetScroll;
                }
            }
        } else {
            const currentScroll = window.scrollY || window.pageYOffset || 0;
            if (cachedSectionMetrics.length) {
                for (let i = cachedSectionMetrics.length - 1; i >= 0; i--) {
                    if (currentScroll >= cachedSectionMetrics[i].target - 20) {
                        activeIdx = i;
                        break;
                    }
                }
            }
        }

        if (cachedNavMetrics[activeIdx]) {
            const target = cachedNavMetrics[activeIdx];
            glider.style.transition = 'none';
            glider.style.transform = `translate3d(${Math.round(target.left)}px, 0, 0)`;
            glider.style.width = `${Math.round(target.width)}px`;
            glider.classList.add('visible');

            navLinks.forEach((link, idx) => {
                link.classList.toggle('active', idx === activeIdx);
            });

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    if (glider) glider.style.transition = '';
                    document.documentElement.style.scrollBehavior = '';
                });
            });
        }
    };

    // updateGliderSync already defined above

    if (softwareHqLink && !softwareHqLink.classList.contains('active')) {
        softwareHqLink.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            softwareHqLink.classList.add('active');
            if (glider && window.innerWidth >= 1024) {
                glider.style.transform = `translate3d(${Math.round(softwareHqLink.offsetLeft)}px, 0, 0)`;
                glider.style.width = `${Math.round(softwareHqLink.offsetWidth)}px`;
                glider.classList.add('visible');
            }
            sessionStorage.setItem('page-transition-dir', 'to-files');
            if (pageMain) {
                pageMain.classList.add('page-exit-left');
            }
            setTimeout(() => {
                window.location.href = softwareHqLink.href;
            }, 180);
        });
    }

    // Apply saved or initial language
    applyLanguage(activeLang);

    // Initialize metrics and glider immediately
    computePositions();
    initGliderTarget();
    if (window.innerWidth >= 1024) startLoop();

    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
            computePositions();
            refreshMetrics();
            updateGliderSync();
        });
    }
    window.addEventListener('load', () => {
        computePositions();
        refreshMetrics();
        updateGliderSync();
    });

    // =========================================================================
    // 8. Copy to Clipboard Utility with Safe Fallback
    // =========================================================================
    window.copyContact = (text, btn) => {
        const updateBtnUi = () => {
            if (!btn) return;
            const icon = btn.querySelector('i');
            if (!icon) return;
            const originalClass = icon.className;
            btn.classList.add('copied');
            icon.className = 'fa-solid fa-check';
            setTimeout(() => {
                btn.classList.remove('copied');
                icon.className = originalClass;
            }, 2000);
        };

        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text).then(updateBtnUi).catch(() => {
                fallbackCopy(text);
                updateBtnUi();
            });
        } else {
            fallbackCopy(text);
            updateBtnUi();
        }
    };

    function fallbackCopy(text) {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        try { document.execCommand('copy'); } catch (e) {}
        document.body.removeChild(ta);
    }

    // =========================================================================
    // 9. Register PWA Service Worker
    // =========================================================================
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js').catch(() => {});
        });
    }

    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
            computePositions();
            refreshMetrics();
            updateGliderSync();
            if (window.innerWidth >= 1024) startLoop();
        });
    } else {
        setTimeout(() => {
            computePositions();
            refreshMetrics();
            updateGliderSync();
            if (window.innerWidth >= 1024) startLoop();
        }, 100);
    }
});

// Developer Console Welcome Message
console.log(
    "%c Humayoun Kobir %c Engineer & Designer Portfolio \n%c⚡ Welcome! Looking under the hood? Check out the full source code on GitHub:\n👉 https://github.com/humayunk45423/Webpage-2",
    "background: #165844; color: #ffffff; padding: 4px 8px; border-radius: 4px 0 0 4px; font-weight: bold; font-family: sans-serif;",
    "background: #ff6b00; color: #000000; padding: 4px 8px; border-radius: 0 4px 4px 0; font-weight: bold; font-family: sans-serif;",
    "color: #888888; font-size: 11px; margin-top: 6px; font-family: sans-serif;"
);
