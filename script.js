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

        hero_greeting: "Assalamu Alaikum (Greetings)!",
        hero_iam: 'I\'m <span class="hero-name">Humayoun Kobir</span>',
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
        proj1_title: "SnapSignFit",
        proj2_title: "HK-Tool",
        proj3_title: "SthapattoShoili",
        proj4_title: "DUET C & C++ Programs",
        proj5_title: "DUET Admission Timer",
        proj6_title: "Sadia Variety Store",
        proj7_title: "Mobile Express",
        proj8_title: "Tadrib Academy",
        proj9_title: "Fuad Mobile Point",
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
        contact_section_title: "Contact",
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

        hero_greeting: "আসসালামু আলাইকুম!",
        hero_iam: 'আমি <span class="hero-name">হুমায়ুন কবির</span>',
        hero_about_text: "কম্পিউটার সায়েন্সে ডিপ্লোমা ইঞ্জিনিয়ার, এবং স্মার্ট স্ট্র্যাটেজি ও দক্ষ সমাধান সৃষ্টিতে নিবেদিত। ৩ডি মডেলিং, ব্র্যান্ডিং এবং ডাটা অপ্টিমাইজেশনের মাধ্যমে টেকনিক্যাল ইঞ্জিনিয়ারিং ও ক্রিয়েটিভ ডিজাইনের মেলবন্ধন ঘটাই।",
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
        proj1_title: "স্ন্যাপসাইনফিট",
        proj2_title: "এইচকে-টুল",
        proj3_title: "স্থাপত্যশৈলী",
        proj4_title: "ডুয়েট সি ও সি++ প্রোগ্রামসমূহ",
        proj5_title: "ডুয়েট অ্যাডমিশন টাইমার",
        proj6_title: "সাদিয়া ভ্যারাইটি স্টোর",
        proj7_title: "মোবাইল এক্সপ্রেস",
        proj8_title: "তাদরিব একাডেমি",
        proj9_title: "ফুয়াদ মোবাইল পয়েন্ট",
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
        contact_section_title: "যোগাযোগ",
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

    const setTheme = (theme) => {
        if (root.getAttribute('data-theme') === theme && localStorage.getItem('portfolio-theme') === theme) return;
        applyTheme(theme);
    };

    [themeToggle, themeToggleMobile].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const newTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
                setTheme(newTheme);
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
            t.setAttribute('aria-label', isBn ? 'Switch to English (EN)' : 'Switch to Bangla (বাং)');
            t.setAttribute('title', isBn ? 'Switch to English (EN)' : 'Switch to Bangla (বাং)');
            t.setAttribute('aria-checked', isBn ? 'false' : 'true');

            const optLeft = t.querySelector('.opt-left');
            const optRight = t.querySelector('.opt-right');
            const leftText = isBn ? 'বাং' : 'BN';
            const rightText = isBn ? 'ইং' : 'EN';
            if (optLeft && optLeft.textContent !== leftText) optLeft.textContent = leftText;
            if (optRight && optRight.textContent !== rightText) optRight.textContent = rightText;
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
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                toggleLanguage();
            });
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
            }, 200);
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
        try { document.execCommand('copy'); } catch (e) { }
        document.body.removeChild(ta);
    }

    // =========================================================================
    // 10. Photo Viewer / Lightbox: Top-Tier 60fps 3-Slide Engine (Task 3.1 - 3.5)
    // =========================================================================
    const modal = document.getElementById('photoViewerModal');
    if (modal) {
        const backdrop = document.getElementById('photoViewerBackdrop');
        const stage = document.getElementById('photoViewerStage');
        const viewport = document.getElementById('photoViewerViewport');
        const track = document.getElementById('photoViewerTrack');
        const titleEl = document.getElementById('photoViewerTitle');
        const subtitleEl = document.getElementById('photoViewerSubtitle');
        const counterEl = document.getElementById('photoViewerCounter');
        const zoomText = document.getElementById('photoViewerZoomText');
        const closeBtn = document.getElementById('photoViewerClose');
        const prevBtn = document.getElementById('photoViewerPrev');
        const nextBtn = document.getElementById('photoViewerNext');
        const zoomInBtn = document.getElementById('photoViewerZoomIn');
        const zoomOutBtn = document.getElementById('photoViewerZoomOut');
        const zoomResetBtn = document.getElementById('photoViewerZoomReset');
        const downloadBtn = document.getElementById('photoViewerDownload');

        // Embedded image metadata for instant zero-latency blur-up (<6KB payload)
        const PROJECTS_IMAGE_META = {"sadia-variety-store-poster.webp": {"old_name": "Artboard_1logo_name_choto.png", "new_name": "sadia-variety-store-poster.webp", "path": "assets/site-images/sadia-variety-store-poster.webp", "width": 1280, "height": 640, "aspect_ratio": 2.0, "srcset": "assets/site-images/sadia-variety-store-poster-480w.webp 480w, assets/site-images/sadia-variety-store-poster-800w.webp 800w, assets/site-images/sadia-variety-store-poster-1200w.webp 1200w, assets/site-images/sadia-variety-store-poster.webp 1280w", "lqip": "data:image/webp;base64,UklGRsoAAABXRUJQVlA4WAoAAAAQAAAAFwAACwAAQUxQSBkAAAABF9D/iAgoaNuGMbRBK/o9BBH9D5CXarMBAFZQOCCKAAAA0AMAnQEqGAAMAD7tZqpOKaWjojAIATAdiUAToAQ72ts3Ln7EpPoAAPlYCLInntbcYKBjINmvgbAGgxjo+LvrKoyheOZ5tIL0bR8sPHU9+9mBuZNnddI120D1fxl2A71Uik2hN5S68pjJXsY+4hM/Sx8o8zIeaz7pUf1NdGc9qC/f+5x9xxSWgAAA", "title": "Sadia Variety Store", "subtitle": "Poster Design", "orig_size_kb": 984.5, "webp_size_kb": 125.1, "savings_pct": 87.3}, "mobile-express-logo.webp": {"old_name": "Mobile Express Logo.png", "new_name": "mobile-express-logo.webp", "path": "assets/site-images/mobile-express-logo.webp", "width": 1080, "height": 1080, "aspect_ratio": 1.0, "srcset": "assets/site-images/mobile-express-logo-480w.webp 480w, assets/site-images/mobile-express-logo-800w.webp 800w, assets/site-images/mobile-express-logo.webp 1080w", "lqip": "data:image/webp;base64,UklGRpQBAABXRUJQVlA4WAoAAAAQAAAAFwAAFwAAQUxQSIYAAAABgCoAoMHozbb3B27LrtYvqK4yL+5P1tfdbONsGw/nqxExAeBTWUoVtpKFkBSabexmQQJzXTwTXrhgvjuSO99/x31LcuuG6WckazOMnjjGu84xYYAV3cO5zAsBmhGZoPaTPIBLtTae3j31QwyAT9EV75+f70sWKiBWZmrllBZ8JE0ipoIvCFZQOCDoAAAAkAUAnQEqGAAYAD7tZqpPKaWjoigNUTAdiWwAtPQT0iJwv9r6oLpXUWbQTv0/hHyot0PnIAAA/q/YGfDTkOrK2LujO+fMyBrSjeYzZOUfL/RbUCyyG0iXEBp03eC6FEj85gEoQEN6cD16WcJU+87l3toYajzPU9wFro7/HYB7ejDC+n19MrjxupEjXKT0QfsU+J8vLuxSiKtbo0ayEPlCBchb85jJjdomm50Qw54FfP2wBGZc4uh/PacCKurI3jBG90YNBKSneVzsCGXlRPGuxNLy8+N9AZEuZFZRdv0tXNiHSS0MUAAAAA==", "title": "Mobile Express", "subtitle": "Logo Design", "orig_size_kb": 71.9, "webp_size_kb": 34.0, "savings_pct": 52.7}, "mobile-express-business-card.webp": {"old_name": "Mobile_Express_Business_Card.png", "new_name": "mobile-express-business-card.webp", "path": "assets/site-images/mobile-express-business-card.webp", "width": 1152, "height": 720, "aspect_ratio": 1.6, "srcset": "assets/site-images/mobile-express-business-card-480w.webp 480w, assets/site-images/mobile-express-business-card-800w.webp 800w, assets/site-images/mobile-express-business-card.webp 1152w", "lqip": "data:image/webp;base64,UklGRiwBAABXRUJQVlA4WAoAAAAQAAAAFwAADgAAQUxQSHEAAAANcFtr29J8H+4OQ1AzDQuyQOrUqXQO9/z6VfGkj4gJMLNcnAQ8GoZasj3L+w4vnB4wfI+IjUfQFlYT4gMAYNrJbXJjKbzSU6TNlyDB/8ZXmfarIudFWi2vLqrr8cDueKljKadYDVNNhmnbxh3JFJm5CQBWUDgglAAAANADAJ0BKhgADwA+7WKqTamlpCIwCAEwHYlAAAtQ16WRsqKscj6gAAD+8x1gOpaqrp61HPCDs+91LrnSU07Y8BTXlZoKpJFLZQjx9njuf7I1f89Ye+B+e0BQsdEUcPtR3M3Vl3KUMuzNNz/VIr3AK2QiGR1oMF+7j+OywSN71Ryt1I1m70WzRgNb/C6lU+c+1ZTEkAA=", "title": "Mobile Express", "subtitle": "Business Card", "orig_size_kb": 190.5, "webp_size_kb": 77.1, "savings_pct": 59.5}, "mobile-express-cash-memo.webp": {"old_name": "Mobile_Express_Cash_Memo.png", "new_name": "mobile-express-cash-memo.webp", "path": "assets/site-images/mobile-express-cash-memo.webp", "width": 1280, "height": 905, "aspect_ratio": 1.4144, "srcset": "assets/site-images/mobile-express-cash-memo-480w.webp 480w, assets/site-images/mobile-express-cash-memo-800w.webp 800w, assets/site-images/mobile-express-cash-memo-1200w.webp 1200w, assets/site-images/mobile-express-cash-memo.webp 1280w", "lqip": "data:image/webp;base64,UklGRsIAAABXRUJQVlA4WAoAAAAQAAAAFwAADwAAQUxQSEIAAAABX6AokqQ2ejl8EwL44oyIiI9SQXYe5QWr2rYBhRBBAcsJI4IClhNGBAWsuR3nO6L/sVTnVh0vSe6XJOffGkDtAAVWUDggWgAAAHADAJ0BKhgAEAA+7WKpTamlpCIwCAEwHYllALDsIcMjiM6jAAD+k2gzVs4phoirN115ZceFTj4VWBHbrL1sxQ+9N0Pa1h0t9HDplZep6/B+jROrXzOegt2AAA==", "title": "Mobile Express", "subtitle": "Cash Memo Design", "orig_size_kb": 309.2, "webp_size_kb": 87.2, "savings_pct": 71.8}, "mobile-express-facebook-ad.webp": {"old_name": "Mobile express facebook ad.png", "new_name": "mobile-express-facebook-ad.webp", "path": "assets/site-images/mobile-express-facebook-ad.webp", "width": 1000, "height": 1000, "aspect_ratio": 1.0, "srcset": "assets/site-images/mobile-express-facebook-ad-480w.webp 480w, assets/site-images/mobile-express-facebook-ad-800w.webp 800w, assets/site-images/mobile-express-facebook-ad.webp 1000w", "lqip": "data:image/webp;base64,UklGRgQBAABXRUJQVlA4IPgAAAAQBgCdASoYABgAPu1wsFIppiSiqAgBMB2JagC26O6qQApTiP5bWCp9bvTNW3FMaxPlmdhqpP7VZwAA/sJPu8MwLNWs6lqeYmJwBIyKEmpLxLevvxyDutH8zEDPJasUqBQgF88yywDvqLW2Iw3puAaxybqRU/cwO/J5eSM98qIUfzvQOzSoRNqqsguMCtgz8tr/AaS+Uyz8N7ah0sb+ppn0K+dY3LRvGYRUiInLtwL8emRL/fJK/c9ez4x30WvbjknOCQtoxd3expmItNn8U9ZFBkaqXpE4XO/Lv92I5+kF3pMogW4UwPw/C+H/03AEKb0KLMJj+TJAAA==", "title": "Mobile Express", "subtitle": "Facebook Ads", "orig_size_kb": 481.0, "webp_size_kb": 97.1, "savings_pct": 79.8}, "tadrib-academy-logo.webp": {"old_name": "415043082_122093206244186305_1002341150726708714_n.jpg", "new_name": "tadrib-academy-logo.webp", "path": "assets/site-images/tadrib-academy-logo.webp", "width": 800, "height": 800, "aspect_ratio": 1.0, "srcset": "assets/site-images/tadrib-academy-logo-480w.webp 480w, assets/site-images/tadrib-academy-logo.webp 800w", "lqip": "data:image/webp;base64,UklGRoIAAABXRUJQVlA4IHYAAAAwBACdASoYABgAPu1opU2ppiMiMBgMATAdiUAZVoId+2FLEOOXE6REK4AA/vQZ6LtJTIbtlj9auf0PCGzzxWnlnJ6BxMhB107GWVAhUWGjIJSQSq1VvqNT/ISGmqsgyWrX7tKScgj40DWPNzwWpkhZ8SRjoQAA", "title": "Tadrib Academy", "subtitle": "Logo Design", "orig_size_kb": 33.9, "webp_size_kb": 8.8, "savings_pct": 73.9}, "tadrib-academy-facebook-ad.webp": {"old_name": "Artboard_1.png", "new_name": "tadrib-academy-facebook-ad.webp", "path": "assets/site-images/tadrib-academy-facebook-ad.webp", "width": 800, "height": 800, "aspect_ratio": 1.0, "srcset": "assets/site-images/tadrib-academy-facebook-ad-480w.webp 480w, assets/site-images/tadrib-academy-facebook-ad.webp 800w", "lqip": "data:image/webp;base64,UklGRtYAAABXRUJQVlA4IMoAAAAQBQCdASoYABgAPu1sq1EppaOiqAqpMB2JZgC2yA/RX6AFblot6aDDkYwmXkPrDdqAAP5rSpQ7l9pG0PtVxS417C5FqNeEolwSi/DLWjLCSc9sf81q1Muv/rxzdI+3SGWuZ3pSv0qn7kfAFvX+AQTpkHjczMeknNgFT/Znp0XSfZa5NERMHOK6njFaWJ6RIaTlkCSXOsDqp+V77ytoYdpo4h2d2IsgQEisy/tHds3T30jhuHLmAzhUNBN0GfOpM2kqdrSsH9/OkAAA", "title": "Tadrib Academy", "subtitle": "Facebook Ads Poster", "orig_size_kb": 610.3, "webp_size_kb": 112.6, "savings_pct": 81.5}, "tadrib-academy-marketplace-ad.webp": {"old_name": "Artboard_1_4x.png", "new_name": "tadrib-academy-marketplace-ad.webp", "path": "assets/site-images/tadrib-academy-marketplace-ad.webp", "width": 800, "height": 800, "aspect_ratio": 1.0, "srcset": "assets/site-images/tadrib-academy-marketplace-ad-480w.webp 480w, assets/site-images/tadrib-academy-marketplace-ad.webp 800w", "lqip": "data:image/webp;base64,UklGRvAAAABXRUJQVlA4IOQAAACQBgCdASoYABgAPu1qrFEppaQiqAqpMB2JagCdMoR1B7pTS/+IBHPa6sYF8Xq0kC9hs0gDeDXyBf3dAFBgAP7sV9uYCE4tXnzNrYz2bDlGyZFYKb6KCWBeWBnuwmPxh7I9ib62DU2J7O/bkok7nA2X4fN85sJF0xVNQGYrtjxkVeEJSE9g3Y9ON0dOVA8hmcVXoPZo+EfR92sQrfouNIUoTGeAoG6mxndHu560oNnyRJaiZbvYmL2x/P+SFo25AMubiMQ9W6ycGPlSlhUazfrF95OpL4KfgxuVJTLWJD8BSmAcAAA=", "title": "Tadrib Academy", "subtitle": "Marketplace Ads Run", "orig_size_kb": 455.5, "webp_size_kb": 102.3, "savings_pct": 77.5}, "fuad-mobile-point-logo.webp": {"old_name": "Artboard_1logo_wng_bn_Card.png", "new_name": "fuad-mobile-point-logo.webp", "path": "assets/site-images/fuad-mobile-point-logo.webp", "width": 800, "height": 800, "aspect_ratio": 1.0, "srcset": "assets/site-images/fuad-mobile-point-logo-480w.webp 480w, assets/site-images/fuad-mobile-point-logo.webp 800w", "lqip": "data:image/webp;base64,UklGRhABAABXRUJQVlA4IAQBAADwBQCdASoYABgAPu1qrVCppaQiqAqpMB2JbAC09iM1ABYAe94eAoegnJKeXENW31rBU7ac+B/TQAD+8d3QuQ2IFhg5bc+boJYpiCZoetnzbnzOAzCaR7Bu+7JpOQEdfvXjHMN0L+Jan+v9Ibp1BlOeAD8zU0bBrVuEyqwRCFEq+hfq95F66sBIfS7Jbgag+WrcxxfcD7RKA+SihM9XHyVIXOa9MjEcvPT1paoWTEWv+DuLv7ZBeiUnZM25BJtM3nrxynVo8WY/FW3IfONIoyO4Z6os+3a11yZFbMtKAat5w2gn/FpUaTnLYeLV0zBz2/oFALU3JBvEeyLHVPPvER27c4AAAA==", "title": "Fuad Mobile Point", "subtitle": "Logo Design", "orig_size_kb": 93.8, "webp_size_kb": 20.0, "savings_pct": 78.7}, "fuad-mobile-point-banner.webp": {"old_name": "Fuad_Mobile_Point_Banner.png", "new_name": "fuad-mobile-point-banner.webp", "path": "assets/site-images/fuad-mobile-point-banner.webp", "width": 1280, "height": 576, "aspect_ratio": 2.2222, "srcset": "assets/site-images/fuad-mobile-point-banner-480w.webp 480w, assets/site-images/fuad-mobile-point-banner-800w.webp 800w, assets/site-images/fuad-mobile-point-banner-1200w.webp 1200w, assets/site-images/fuad-mobile-point-banner.webp 1280w", "lqip": "data:image/webp;base64,UklGRgABAABXRUJQVlA4WAoAAAAQAAAAFwAACQAAQUxQSFYAAAABcBsAANkEs23jb2vLC95Q8xa7PSAiJgBWPVW85dhLTpLvmjLElcfV4nYcLqfl6nK5XG4LXBpOb+0opn9PS+LVv0P85fVierxY3sYYSEvXIvdYupU5CFZQOCCEAAAA0AMAnQEqGAAKAD7tYqlNqaWjojAIATAdiUAVgAPx7+rPqzmTgJ8AAP6tPAoAG3xhUzB5uoICcayClz6KcnLmZjD3wEBjBSbNm3p57MYG/N/kozWzoDATpHI8+Z3g+jDAv4s9fwlF47ZbrzZh+rqcOsPLNZB6Bpn6XLPO3OtEmo8BQAAA", "title": "Fuad Mobile Point", "subtitle": "Banner Design", "orig_size_kb": 731.0, "webp_size_kb": 91.3, "savings_pct": 87.5}, "fuad-mobile-point-business-card.webp": {"old_name": "Artboard_1B_Card.png", "new_name": "fuad-mobile-point-business-card.webp", "path": "assets/site-images/fuad-mobile-point-business-card.webp", "width": 1008, "height": 576, "aspect_ratio": 1.75, "srcset": "assets/site-images/fuad-mobile-point-business-card-480w.webp 480w, assets/site-images/fuad-mobile-point-business-card-800w.webp 800w, assets/site-images/fuad-mobile-point-business-card.webp 1008w", "lqip": "data:image/webp;base64,UklGRowAAABXRUJQVlA4IIAAAABQAwCdASoYAA0ALrV2u12jqampiYC0SzAAA2T+H1pbFkxCqAD+7uWlg+iM/mNg4ojpXumQan5MLWBk8zAKlMfFb02FJGS9FBAFAP58GnM0+bNtk2BNgGj2il5/KlLRCN7J86UEKRQMK8EBmGGtVpMXqH5VcNFbLR0wc+N4nEAAAA==", "title": "Fuad Mobile Point", "subtitle": "Business Card Design", "orig_size_kb": 179.7, "webp_size_kb": 58.5, "savings_pct": 67.4}, "fuad-mobile-point-cash-memo.webp": {"old_name": "Screenshot_2026_03_25_172443.png", "new_name": "fuad-mobile-point-cash-memo.webp", "path": "assets/site-images/fuad-mobile-point-cash-memo.webp", "width": 1192, "height": 840, "aspect_ratio": 1.419, "srcset": "assets/site-images/fuad-mobile-point-cash-memo-480w.webp 480w, assets/site-images/fuad-mobile-point-cash-memo-800w.webp 800w, assets/site-images/fuad-mobile-point-cash-memo.webp 1192w", "lqip": "data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAADQAwCdASoYABAAPu1iqU2ppaOiMAgBMB2JaQAAW9x2EYigRT6w9sAA/tXc5aRDcrDYh8cD/t/FtfEFaiKO2X9iJJa0BItAPtJ9Z2BqbRRFmOWoKmd89RG+AKnCgAAA", "title": "Fuad Mobile Point", "subtitle": "Cash Memo Design", "orig_size_kb": 126.8, "webp_size_kb": 92.0, "savings_pct": 27.5}};

        let gallery = [];
        let currentIndex = 0;
        let scale = 1;
        let panX = 0;
        let panY = 0;
        let isPanning = false;
        let isSwiping = false;
        let isMouseSwiping = false;
        let isMousePanning = false;
        let panStartX = 0;
        let panStartY = 0;
        let prevPanX = 0;
        let prevPanY = 0;
        let swipeStartX = 0;
        let swipeStartY = 0;
        let swipeStartTime = 0;
        let swipeDeltaX = 0;
        let lastFocusedEl = null;
        let isTransitioning = false;
        const activeControllers = new Map();

        const prefersReducedMotion = () => window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const isSlowConnection = () => {
            const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            if (!conn) return false;
            if (conn.saveData) return true;
            return ['slow-2g', '2g', '3g'].includes(conn.effectiveType);
        };

        const isImageHref = (url) => /\.(png|jpe?g|webp|svg|gif)(\?.*)?$/i.test(url);

        const getMeta = (href) => {
            if (!href) return null;
            const filename = href.split('/').pop().split('?')[0];
            return PROJECTS_IMAGE_META[filename] || null;
        };

        // Cache of preloaded URLs to avoid duplicate fetches
        const preloadedUrls = new Set();
        const preloadImage = (item, highRes = false) => {
            if (!item || !item.href || preloadedUrls.has(item.href)) return;
            const meta = getMeta(item.href);
            const img = new Image();
            if (meta && meta.srcset && (highRes || !isSlowConnection())) {
                img.srcset = meta.srcset;
                img.sizes = '(max-width: 768px) 100vw, 1200px';
            }
            img.src = item.href;
            img.onload = () => preloadedUrls.add(item.href);
        };

        // Idle-time preloading of adjacent images (Task 3.1 & 3.3)
        const scheduleIdlePreload = () => {
            const runner = () => {
                if (!gallery.length) return;
                const slow = isSlowConnection();
                const nextIdx = (currentIndex + 1) % gallery.length;
                preloadImage(gallery[nextIdx], !slow);

                // On fast connection, also preload previous slide
                if (!slow && gallery.length > 2) {
                    const prevIdx = (currentIndex - 1 + gallery.length) % gallery.length;
                    preloadImage(gallery[prevIdx], false);
                }
            };
            if (typeof requestIdleCallback === 'function') {
                requestIdleCallback(runner, { timeout: 1200 });
            } else {
                setTimeout(runner, 200);
            }
        };

        // Aspect-ratio aware dimension fitting with zero layout shift (Task 3.2)
        const computeFitDimensions = (meta) => {
            if (!viewport) return { width: 'auto', height: 'auto', ratio: 'auto' };
            const vpW = Math.max(viewport.clientWidth - (window.innerWidth <= 768 ? 16 : 48), 260);
            const vpH = Math.max(viewport.clientHeight - (window.innerWidth <= 768 ? 16 : 48), 260);
            const ratio = (meta && meta.width && meta.height) ? (meta.width / meta.height) : (vpW / vpH);
            let w = vpW;
            let h = w / ratio;
            if (h > vpH) {
                h = vpH;
                w = h * ratio;
            }
            return {
                width: Math.round(w) + 'px',
                height: Math.round(h) + 'px',
                ratio: ratio
            };
        };

        // Create individual slide element (prev, curr, or next)
        const createSlideElement = (itemIndex, slot) => {
            const item = gallery[itemIndex];
            if (!item) return null;

            const meta = getMeta(item.href);
            const slide = document.createElement('div');
            slide.className = 'photo-viewer-slide';
            slide.setAttribute('data-slot', slot);
            slide.setAttribute('data-index', itemIndex);

            const fit = computeFitDimensions(meta);

            const frame = document.createElement('div');
            frame.className = 'photo-viewer-frame';
            frame.style.width = fit.width;
            frame.style.height = fit.height;
            if (fit.ratio !== 'auto') frame.style.aspectRatio = fit.ratio;

            // LQIP Blur placeholder (<1KB inlined base64, Task 3.2)
            if (meta && meta.lqip) {
                const lqip = document.createElement('img');
                lqip.className = 'pv-lqip';
                lqip.src = meta.lqip;
                lqip.alt = '';
                lqip.setAttribute('aria-hidden', 'true');
                lqip.setAttribute('draggable', 'false');
                frame.appendChild(lqip);
            }

            // Skeleton Shimmer Background
            const skeleton = document.createElement('div');
            skeleton.className = 'pv-skeleton';
            skeleton.setAttribute('aria-hidden', 'true');
            frame.appendChild(skeleton);

            // Subtle loading indicator (>300ms load time)
            const spinner = document.createElement('div');
            spinner.className = 'pv-spinner';
            spinner.setAttribute('aria-hidden', 'true');
            frame.appendChild(spinner);

            // Error state fallback with 'Tap to retry'
            const errorBox = document.createElement('div');
            errorBox.className = 'pv-error';
            errorBox.innerHTML = `
                <i class="fa-solid fa-triangle-exclamation" aria-hidden="true"></i>
                <span>Failed to load image</span>
                <button type="button" class="pv-retry-btn">Tap to retry</button>
            `;
            frame.appendChild(errorBox);

            // High-res Image
            const img = document.createElement('img');
            img.className = 'pv-img';
            img.alt = item.card?.querySelector('h3')?.textContent?.trim() || 'Project Graphic';
            img.setAttribute('draggable', 'false');
            frame.appendChild(img);

            slide.appendChild(frame);

            // Trigger decode() loading
            loadSlideImage(frame, img, item, meta, errorBox);

            return slide;
        };

        const loadSlideImage = (frame, img, item, meta, errorBox) => {
            const controller = new AbortController();
            activeControllers.set(frame, controller);

            // Show spinner only if load takes longer than 300ms
            const slowTimer = setTimeout(() => {
                if (!frame.classList.contains('is-loaded')) {
                    frame.classList.add('is-slow');
                }
            }, 300);

            const loader = new Image();
            const slowNet = isSlowConnection();

            if (meta && meta.srcset) {
                loader.srcset = meta.srcset;
                loader.sizes = slowNet
                    ? '(max-width: 768px) 480px, 800px'
                    : '(max-width: 768px) 100vw, 1200px';
            }
            loader.src = item.href;

            loader.decode().then(() => {
                clearTimeout(slowTimer);
                if (controller.signal.aborted) return;
                img.src = loader.currentSrc || item.href;
                if (loader.srcset) {
                    img.srcset = loader.srcset;
                    img.sizes = loader.sizes;
                }
                frame.classList.remove('is-slow', 'has-error');
                frame.classList.add('is-loaded');
            }).catch(() => {
                clearTimeout(slowTimer);
                if (controller.signal.aborted) return;
                // Direct fallback
                img.src = item.href;
                img.onload = () => {
                    frame.classList.remove('is-slow', 'has-error');
                    frame.classList.add('is-loaded');
                };
                img.onerror = () => {
                    frame.classList.remove('is-slow', 'is-loaded');
                    frame.classList.add('has-error');
                };
            });

            const retryBtn = errorBox.querySelector('.pv-retry-btn');
            if (retryBtn) {
                retryBtn.onclick = (e) => {
                    e.stopPropagation();
                    frame.classList.remove('has-error');
                    loadSlideImage(frame, img, item, meta, errorBox);
                };
            }
        };

        // Render exactly 3 slides (prev, curr, next) into DOM (Task 3.1 & 3.4)
        const renderSlides = () => {
            if (!track || !gallery.length) return;

            // Release memory of off-screen slides
            track.querySelectorAll('.photo-viewer-frame').forEach(f => {
                const ctrl = activeControllers.get(f);
                if (ctrl) ctrl.abort();
                activeControllers.delete(f);
                const i = f.querySelector('.pv-img');
                if (i) { i.src = ''; i.srcset = ''; }
            });
            track.innerHTML = '';

            const n = gallery.length;
            const prevIdx = (currentIndex - 1 + n) % n;
            const currIdx = currentIndex;
            const nextIdx = (currentIndex + 1) % n;

            if (n > 1) {
                const prevSlide = createSlideElement(prevIdx, 'prev');
                if (prevSlide) track.appendChild(prevSlide);
            }

            const currSlide = createSlideElement(currIdx, 'curr');
            if (currSlide) track.appendChild(currSlide);

            if (n > 1) {
                const nextSlide = createSlideElement(nextIdx, 'next');
                if (nextSlide) track.appendChild(nextSlide);
            }

            updateHeaderInfo();
            resetZoom(false);
            scheduleIdlePreload();
        };

        const getCurrentFrame = () => {
            return track ? track.querySelector('.photo-viewer-slide[data-slot="curr"] .photo-viewer-frame') : null;
        };

        const updateHeaderInfo = () => {
            const item = gallery[currentIndex];
            if (!item) return;

            const cardTitle = item.card?.querySelector('h3')?.textContent?.trim() || 'Project Graphic';
            const linkText = item.link?.querySelector('span')?.textContent?.trim() || item.link?.textContent?.trim() || 'Design';

            if (titleEl) titleEl.textContent = cardTitle;
            if (subtitleEl) subtitleEl.textContent = linkText;
            if (counterEl) counterEl.textContent = `${currentIndex + 1} / ${gallery.length}`;
            if (downloadBtn) {
                downloadBtn.href = item.href;
                const filename = item.href.split('/').pop() || 'project-graphic.webp';
                downloadBtn.setAttribute('download', filename);
            }
        };

        const updateTransform = (smooth = true) => {
            const frame = getCurrentFrame();
            if (!frame) return;

            frame.style.transition = smooth ? 'transform 0.18s cubic-bezier(0.2, 0.8, 0.2, 1)' : 'none';
            frame.style.transform = `translate3d(${panX}px, ${panY}px, 0) scale(${scale})`;

            if (scale > 1.05) {
                frame.classList.add('is-zoomed');
            } else {
                frame.classList.remove('is-zoomed');
            }
            if (zoomText) {
                zoomText.textContent = `${Math.round(scale * 100)}%`;
            }

            // High-res upgrade on zoom (Task 3.3)
            if (scale > 1.2) {
                const currImg = frame.querySelector('.pv-img');
                if (currImg && currImg.sizes && currImg.sizes !== '100vw') {
                    currImg.sizes = '100vw';
                }
            }
        };

        const setZoom = (newScale, smooth = true) => {
            scale = Math.min(Math.max(newScale, 0.5), 4.5);
            if (scale <= 1) {
                panX = 0;
                panY = 0;
            }
            updateTransform(smooth);
        };

        const resetZoom = (smooth = true) => {
            scale = 1;
            panX = 0;
            panY = 0;
            updateTransform(smooth);
        };

        // Navigation between slides with GPU acceleration (Task 3.1)
        const navigateTo = (direction) => {
            if (isTransitioning || gallery.length <= 1 || !track) return;
            isTransitioning = true;

            const offset = direction === 'next' ? -100 : 100;
            const reduced = prefersReducedMotion();

            track.style.willChange = 'transform';
            track.style.transition = reduced ? 'none' : 'transform 0.24s cubic-bezier(0.25, 1, 0.5, 1)';
            track.style.transform = `translate3d(${offset}%, 0, 0)`;

            const finalize = () => {
                track.removeEventListener('transitionend', finalize);
                if (direction === 'next') {
                    currentIndex = (currentIndex + 1) % gallery.length;
                } else {
                    currentIndex = (currentIndex - 1 + gallery.length) % gallery.length;
                }
                track.style.transition = 'none';
                track.style.transform = 'translate3d(0, 0, 0)';
                track.style.willChange = 'auto';
                renderSlides();
                isTransitioning = false;
            };

            if (reduced) {
                finalize();
            } else {
                track.addEventListener('transitionend', finalize, { once: true });
                setTimeout(finalize, 300); // Safety fallback
            }
        };

        const prevImage = () => navigateTo('prev');
        const nextImage = () => navigateTo('next');

        const openViewer = (index) => {
            if (index < 0 || index >= gallery.length) return;
            currentIndex = index;
            modal.hidden = false;
            document.body.style.overflow = 'hidden';
            requestAnimationFrame(() => {
                modal.classList.add('is-open');
                renderSlides();
                if (closeBtn) closeBtn.focus();
            });
        };

        const closeViewer = () => {
            modal.classList.remove('is-open');
            document.body.style.overflow = '';
            setTimeout(() => {
                modal.hidden = true;
                if (track) {
                    track.querySelectorAll('.photo-viewer-frame').forEach(f => {
                        const ctrl = activeControllers.get(f);
                        if (ctrl) ctrl.abort();
                        activeControllers.delete(f);
                        const i = f.querySelector('.pv-img');
                        if (i) { i.src = ''; i.srcset = ''; }
                    });
                    track.innerHTML = '';
                }
                resetZoom(false);
                if (lastFocusedEl) lastFocusedEl.focus();
            }, 300);
        };

        // Discover all project graphic links
        const setupGallery = () => {
            const projectSec = document.getElementById('projects');
            if (!projectSec) return;

            const links = projectSec.querySelectorAll('a.project-link');
            gallery = [];

            links.forEach(link => {
                const href = link.getAttribute('href');
                if (href && isImageHref(href)) {
                    const card = link.closest('.project-card');
                    const idx = gallery.length;
                    gallery.push({ href, link, card });

                    // Expand icon for image links
                    const icon = link.querySelector('i');
                    if (icon) {
                        icon.className = 'fa-solid fa-expand';
                    }

                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        lastFocusedEl = link;
                        openViewer(idx);
                    });
                }
            });
        };

        // Button Click Listeners
        if (closeBtn) closeBtn.addEventListener('click', closeViewer);
        if (backdrop) backdrop.addEventListener('click', closeViewer);
        if (prevBtn) prevBtn.addEventListener('click', prevImage);
        if (nextBtn) nextBtn.addEventListener('click', nextImage);

        if (zoomInBtn) zoomInBtn.addEventListener('click', () => setZoom(scale + 0.35));
        if (zoomOutBtn) zoomOutBtn.addEventListener('click', () => setZoom(scale - 0.35));
        if (zoomResetBtn) zoomResetBtn.addEventListener('click', () => resetZoom(true));

        // Desktop Double Click to toggle zoom
        if (stage) {
            stage.addEventListener('dblclick', (e) => {
                if (e.target.closest('.photo-viewer-nav-btn') || e.target.closest('.photo-viewer-header') || e.target.closest('.photo-viewer-footer')) return;
                if (scale > 1.05) {
                    resetZoom(true);
                } else {
                    setZoom(2.2, true);
                }
            });

            // Desktop Mouse Wheel Zoom
            stage.addEventListener('wheel', (e) => {
                if (!modal.classList.contains('is-open')) return;
                e.preventDefault();
                const delta = e.deltaY < 0 ? 0.25 : -0.25;
                setZoom(scale + delta, true);
            }, { passive: false });

            // Desktop Click & Drag (Pan when zoomed, Swipe when unzoomed)
            stage.addEventListener('mousedown', (e) => {
                if (e.button !== 0 || isTransitioning) return;
                if (e.target.closest('.photo-viewer-nav-btn') || e.target.closest('.photo-viewer-header') || e.target.closest('.photo-viewer-footer')) return;

                if (scale > 1.05) {
                    isMousePanning = true;
                    panStartX = e.clientX;
                    panStartY = e.clientY;
                    prevPanX = panX;
                    prevPanY = panY;
                    const frame = getCurrentFrame();
                    if (frame) frame.classList.add('is-dragging');
                } else {
                    isMouseSwiping = true;
                    swipeStartX = e.clientX;
                    swipeStartTime = Date.now();
                    swipeDeltaX = 0;
                    if (track) {
                        track.style.transition = 'none';
                        track.style.willChange = 'transform';
                    }
                }
            });

            window.addEventListener('mousemove', (e) => {
                if (isMousePanning && scale > 1.05) {
                    panX = prevPanX + (e.clientX - panStartX);
                    panY = prevPanY + (e.clientY - panStartY);
                    updateTransform(false);
                } else if (isMouseSwiping && scale <= 1.05 && track) {
                    swipeDeltaX = e.clientX - swipeStartX;
                    track.style.transform = `translate3d(${swipeDeltaX}px, 0, 0)`;
                }
            });

            window.addEventListener('mouseup', () => {
                if (isMousePanning) {
                    isMousePanning = false;
                    const frame = getCurrentFrame();
                    if (frame) frame.classList.remove('is-dragging');
                }
                if (isMouseSwiping && track) {
                    isMouseSwiping = false;
                    const duration = Math.max(Date.now() - swipeStartTime, 1);
                    const velocity = Math.abs(swipeDeltaX) / duration;
                    const threshold = Math.min(window.innerWidth * 0.2, 80);

                    if (gallery.length > 1 && (swipeDeltaX < -threshold || (swipeDeltaX < -25 && velocity > 0.45))) {
                        nextImage();
                    } else if (gallery.length > 1 && (swipeDeltaX > threshold || (swipeDeltaX > 25 && velocity > 0.45))) {
                        prevImage();
                    } else {
                        track.style.transition = 'transform 0.2s ease-out';
                        track.style.transform = 'translate3d(0, 0, 0)';
                        setTimeout(() => { if (track) track.style.willChange = 'auto'; }, 200);
                    }
                }
            });
        }

        // =========================================================================
        // Mobile Touch Gestures: 2-finger & 3-finger pinch zoom, pan & swipe (Task 3.1)
        // =========================================================================
        const computeTouchMetrics = (touches) => {
            const count = touches.length;
            if (count === 0) return { count: 0, centroid: { x: 0, y: 0 }, spread: 0 };
            let sumX = 0, sumY = 0;
            for (let i = 0; i < count; i++) {
                sumX += touches[i].clientX;
                sumY += touches[i].clientY;
            }
            const centroid = { x: sumX / count, y: sumY / count };
            let sumDist = 0;
            for (let i = 0; i < count; i++) {
                sumDist += Math.hypot(touches[i].clientX - centroid.x, touches[i].clientY - centroid.y);
            }
            return { count, centroid, spread: count > 1 ? sumDist / count : 0 };
        };

        let initialSpread = 0;
        let initialScale = 1;
        let initialPanX = 0;
        let initialPanY = 0;
        let initialCentroid = { x: 0, y: 0 };
        let activeTouchCount = 0;
        let lastTapTime = 0;

        if (stage) {
            stage.addEventListener('touchstart', (e) => {
                if (isTransitioning) return;
                const metrics = computeTouchMetrics(e.touches);
                activeTouchCount = metrics.count;

                if (metrics.count >= 2) {
                    // 2 or 3-finger pinch zoom
                    isSwiping = false;
                    isPanning = false;
                    initialSpread = metrics.spread;
                    initialScale = scale;
                    initialPanX = panX;
                    initialPanY = panY;
                    initialCentroid = metrics.centroid;
                } else if (metrics.count === 1) {
                    const touch = e.touches[0];
                    if (scale > 1.05) {
                        isPanning = true;
                        isSwiping = false;
                        panStartX = touch.clientX;
                        panStartY = touch.clientY;
                        prevPanX = panX;
                        prevPanY = panY;
                    } else {
                        isSwiping = true;
                        isPanning = false;
                        swipeStartX = touch.clientX;
                        swipeStartY = touch.clientY;
                        swipeDeltaX = 0;
                        swipeStartTime = Date.now();
                        if (track) {
                            track.style.transition = 'none';
                            track.style.willChange = 'transform';
                        }
                    }
                }
            }, { passive: true });

            stage.addEventListener('touchmove', (e) => {
                if (!modal.classList.contains('is-open') || isTransitioning) return;
                const metrics = computeTouchMetrics(e.touches);

                if (metrics.count >= 2 && initialSpread > 0) {
                    if (e.cancelable) e.preventDefault();
                    const factor = metrics.spread / initialSpread;
                    scale = Math.min(Math.max(initialScale * factor, 0.5), 4.5);
                    const deltaX = metrics.centroid.x - initialCentroid.x;
                    const deltaY = metrics.centroid.y - initialCentroid.y;
                    panX = initialPanX + deltaX;
                    panY = initialPanY + deltaY;
                    updateTransform(false);
                } else if (metrics.count === 1) {
                    const touch = e.touches[0];
                    if (isPanning && scale > 1.05) {
                        if (e.cancelable) e.preventDefault();
                        panX = prevPanX + (touch.clientX - panStartX);
                        panY = prevPanY + (touch.clientY - panStartY);
                        updateTransform(false);
                    } else if (isSwiping && scale <= 1.05 && track) {
                        const dx = touch.clientX - swipeStartX;
                        const dy = touch.clientY - swipeStartY;
                        if (Math.abs(dx) > Math.abs(dy) * 1.2 && Math.abs(dx) > 6) {
                            if (e.cancelable) e.preventDefault();
                        }
                        swipeDeltaX = dx;
                        track.style.transform = `translate3d(${dx}px, 0, 0)`;
                    }
                }
            }, { passive: false });

            stage.addEventListener('touchend', (e) => {
                const remaining = e.touches.length;
                if (remaining >= 2) {
                    const metrics = computeTouchMetrics(e.touches);
                    initialSpread = metrics.spread;
                    initialScale = scale;
                    initialPanX = panX;
                    initialPanY = panY;
                    initialCentroid = metrics.centroid;
                } else if (remaining === 0) {
                    if (scale < 1) resetZoom(true);

                    // Double-tap toggle (mobile)
                    if (e.changedTouches.length === 1 && activeTouchCount === 1) {
                        const endTouch = e.changedTouches[0];
                        const moveDist = Math.hypot(endTouch.clientX - swipeStartX, endTouch.clientY - swipeStartY);
                        const now = Date.now();
                        if (moveDist < 15) {
                            if (now - lastTapTime < 320) {
                                if (scale > 1.05) resetZoom(true);
                                else setZoom(2.2, true);
                                lastTapTime = 0;
                                return;
                            }
                            lastTapTime = now;
                        }
                    }

                    // Complete mobile swipe gesture
                    if (isSwiping && track) {
                        isSwiping = false;
                        const duration = Math.max(Date.now() - swipeStartTime, 1);
                        const velocity = Math.abs(swipeDeltaX) / duration;
                        const threshold = Math.min(window.innerWidth * 0.2, 80);

                        if (gallery.length > 1 && (swipeDeltaX < -threshold || (swipeDeltaX < -25 && velocity > 0.45))) {
                            nextImage();
                        } else if (gallery.length > 1 && (swipeDeltaX > threshold || (swipeDeltaX > 25 && velocity > 0.45))) {
                            prevImage();
                        } else {
                            track.style.transition = 'transform 0.2s ease-out';
                            track.style.transform = 'translate3d(0, 0, 0)';
                            setTimeout(() => { if (track) track.style.willChange = 'auto'; }, 200);
                        }
                    }

                    isPanning = false;
                    activeTouchCount = 0;
                }
            });
        }

        // Global Keyboard Controls (Esc to close, Arrows to navigate, +/- to zoom)
        window.addEventListener('keydown', (e) => {
            if (!modal.classList.contains('is-open')) return;

            if (e.key === 'Escape') {
                e.preventDefault();
                closeViewer();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                prevImage();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                nextImage();
            } else if (e.key === '+' || e.key === '=') {
                e.preventDefault();
                setZoom(scale + 0.35);
            } else if (e.key === '-' || e.key === '_') {
                e.preventDefault();
                setZoom(scale - 0.35);
            } else if (e.key === '0' || e.key.toLowerCase() === 'r') {
                e.preventDefault();
                resetZoom(true);
            }
        });

        // Debounced resize & orientation handler (Task 3.4)
        let resizeTimer = null;
        window.addEventListener('resize', () => {
            if (!modal.classList.contains('is-open')) return;
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                if (!track) return;
                track.querySelectorAll('.photo-viewer-slide').forEach(slide => {
                    const idx = parseInt(slide.getAttribute('data-index'), 10);
                    const item = gallery[idx];
                    const frame = slide.querySelector('.photo-viewer-frame');
                    if (item && frame) {
                        const fit = computeFitDimensions(getMeta(item.href));
                        frame.style.width = fit.width;
                        frame.style.height = fit.height;
                    }
                });
            }, 100);
        });

        // Initialize gallery links
        setupGallery();
    }


    // 11. Register PWA Service Worker & Idle Optimizations
    // =========================================================================
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js').catch(() => { });
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
