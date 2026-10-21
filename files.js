/**
 * Software HQ | Humayoun Kobir Repository
 * Fast, client-side utility directory with search, dynamic category grouping, and hash routing.
 */


// Pre-warm Hind Siliguri font into browser memory immediately
if (typeof document !== 'undefined' && document.fonts) {
    document.fonts.load('400 1em "Hind Siliguri"');
    document.fonts.load('600 1em "Hind Siliguri"');
    document.fonts.load('700 1em "Hind Siliguri"');
}

// =========================================================================
// Bilingual Translation Dictionary for Software HQ
// =========================================================================
const shqTranslations = {
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
        shq_title: "Software HQ",
        cat_all: "All",
        cat_categories: "Categories",
        cat_select: "Select Category",
        btn_back_explorer: "Back to Explorer",
        btn_download_file: "Download File",
        btn_open_resource: "Open Resource",
        btn_copy_cmd: "Copy Command",
        btn_copy_code: "Copy Code",
        toast_copied: "Copied to clipboard!",
        footer_copyright: "© 2026 Humayoun Kobir. All rights reserved."
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
        shq_title: "সফটওয়্যার HQ",
        cat_all: "সকল",
        cat_categories: "ক্যাটাগরি",
        cat_select: "ক্যাটাগরি বাছাই করুন",
        btn_back_explorer: "ভান্ডারে ফিরে যান",
        btn_download_file: "ফাইল ডাউনলোড",
        btn_open_resource: "রিসোর্স খুলুন",
        btn_copy_cmd: "কমান্ড কপি",
        btn_copy_code: "কোড কপি",
        toast_copied: "ক্লিপবোর্ডে কপি হয়েছে!",
        footer_copyright: "© ২০২৬ হুমায়ূন কবির। সর্বস্বত্ব সংরক্ষিত।"
    }
};

const categoryNames = {
    utilities: { en: "Productivity & Utilities", bn: "প্রোডাক্টিভিটি ও ইউটিলিটি" },
    system: { en: "System & Maintenance", bn: "সিস্টেম ও রক্ষণাবেক্ষণ" },
    storage: { en: "Storage & Recovery", bn: "স্টোরেজ ও রিকভারি" },
    optimization: { en: "Optimization & Gaming", bn: "অপ্টিমাইজেশন ও গেমিং" },
    diagnostics: { en: "Hardware & Diagnostics", bn: "হার্ডওয়্যার ও ডায়াগনস্টিক" },
    creative: { en: "Creative & Design", bn: "ক্রিয়েটিভ ও ডিজাইন" }
};

const categoryList = [
    { id: "utilities", name: "Productivity & Utilities", icon: "fa-solid fa-toolbox" },
    { id: "system", name: "System & Maintenance", icon: "fa-solid fa-sliders" },
    { id: "storage", name: "Storage & Recovery", icon: "fa-solid fa-hard-drive" },
    { id: "optimization", name: "Optimization & Gaming", icon: "fa-solid fa-bolt-lightning" },
    { id: "diagnostics", name: "Hardware & Diagnostics", icon: "fa-solid fa-microchip" },
    { id: "creative", name: "Creative & Design", icon: "fa-solid fa-palette" }
];

// =========================================================================
// Complete Bengali Translations for All Tool Documentations & Commands
// =========================================================================
const documentationTranslations = {
    "avro": {
        "readme_bn": "## ওভারভিউ\nসম্পূর্ণ ইউনিকোড এবং এএনএসআই (ANSI) টাইপিং সমর্থনকারী আদর্শ বাংলা ফোনেটিক কীবোর্ড সফটওয়্যার।"
    },
    "directx": {
        "readme_bn": "## ওভারভিউ\nআধুনিক গেমস এবং হাই-পারফরম্যান্স গ্রাফিক্স অ্যাপ্লিকেশনগুলো সঠিকভাবে চালনার জন্য প্রয়োজনীয় অপরিহার্য DirectX 11 রানটাইম কম্পোনেন্ট।"
    },
    "everything": {
        "readme_bn": "## ওভারভিউ\nএভরিথিং (Everything) হলো একটি অত্যন্ত দ্রুতগতির সার্চ ইঞ্জিন যা উইন্ডোজের NTFS ড্রাইভে চোখের পলকে ফাইল এবং ফোল্ডার নাম দিয়ে খুঁজে বের করে।\n\n## প্রধান সুবিধাসমূহ\n- টাইপ করার সাথে সাথেই রিয়েল-টাইমে তাৎক্ষণিক ফলাফল।\n- অত্যন্ত কম সিস্টেম রিসোর্স ব্যবহার (খুবই কম মেমরি ও সিপিইউ খরচ)।\n- শক্তিশালী সার্চ সিনট্যাক্স, ওয়াইল্ডকার্ড, রেজেক্স এবং ফাইল সাইজ/তারিখ অনুযায়ী ফিল্টার করার সুবিধা।"
    },
    "goodbyedpi": {
        "readme_bn": "## ওভারভিউ\nকোনো প্রকার ধীরগতির প্রক্সি বা ভিপিএন ছাড়াই ডিপ প্যাকেট ইন্সপেকশন (DPI) সেন্সরশিপ এবং আইএসপি থ্রটলিং বাইপাস করার সেরা ইউটিলিটি।"
    },
    "productivity-macro": {
        "readme_bn": "## ওভারভিউ\nদৈনন্দিন উইন্ডোজের কাজ, উইন্ডো ব্যবস্থাপনা এবং দ্রুত টাইপিং গতি বাড়ানোর জন্য হুমায়ূন কবিরের তৈরি একটি বিশেষ অটো-হটকি (AutoHotkey) ম্যাক্রো স্ক্রিপ্ট।\n\n## অন্তর্ভুক্ত শর্টকাটসমূহ\n- `Win + A`: যেকোনো সক্রিয় উইন্ডোকে সবসময় উপরে (Always-on-Top) পিন করে রাখা।\n- `Ctrl + Shift + V`: কোনো ফরম্যাটিং ছাড়া সরাসরি প্লেইন টেক্সট পেস্ট করা।\n- `Ctrl + Alt + Shift + E`: উইন্ডোজ এক্সপ্লোরার (Explorer) এক ক্লিকে রিস্টার্ট করা।\n- `Win + Mouse Scroll`: যেকোনো উইন্ডোর ট্রান্সপারেন্সি (স্বচ্ছতা) তাৎক্ষণিকভাবে কমানো বা বাড়ানো।\n- `;d` / `;dt`: চ্যাট বা ডকুমেন্টে স্বয়ংক্রিয়ভাবে বর্তমান তারিখ ও সময় ইনপুট দেওয়া।"
    },
    "qbittorrent": {
        "readme_bn": "## ওভারভিউ\nবিজ্ঞাপনমুক্ত, ওপেন সোর্স বিটটরেন্ট ক্লায়েন্ট যা মিউটরেন্ট এবং অন্যান্য পেইড সফটওয়্যারের সেরা এবং নিরাপদ বিকল্প।\n\n## মূল সুবিধাসমূহ\n- কোনো প্রকার বিজ্ঞাপন বা অবাঞ্ছিত সফটওয়্যার ছাড়া পরিষ্কার ও পরিচ্ছন্ন ইউজার ইন্টারফেস।\n- সরাসরি ইন্টিগ্রেটেড সার্চ ইঞ্জিন এবং আরএসএস (RSS) ফিড রিডার।\n- সিকোয়েন্সিয়াল ডাউনলোড (ডাউনলোড চলাকালীন অবস্থাতেই ভিডিও দেখার সুবিধা)।\n- উন্নত আইপি ফিল্টারিং এবং ব্যান্ডউইথ শিডিউলিং।"
    },
    "vcredist": {
        "readme_bn": "## ওভারভিউ\n২০০৫ থেকে ২০২২ সাল পর্যন্ত সমস্ত ভিজ্যুয়াল সি++ রিডিস্ট্রিবিউটেবল রানটাইম (উভয় x86 এবং x64) এর অল-ইন-ওয়ান পূর্ণাঙ্গ প্যাকেজ।\n\n## নির্দেশিকা\n১. জিপ (ZIP) ফাইলটি আনজিপ করুন।\n২. অন্তর্ভুক্ত ব্যাচ ইনস্টলারটি রান করে এক ক্লিকেই সবগুলো রানটাইম ইনস্টল করুন।\n\n## কেন এটি প্রয়োজন\nএটি গেমস বা সফটওয়্যার চালু করার সময় আসা সাধারণ 'VCRUNTIME140.dll missing' বা 'MSVCP.dll not found' এর মতো এররগুলো পুরোপুরি সমাধান করে।"
    },
    "win-office-act": {
        "readme_bn": "## নির্দেশিকা\nএই স্ক্রিপ্টটি চালানোর জন্য পাওয়ারশেল (PowerShell) অ্যাডমিনিস্ট্রেটর হিসেবে রান করুন।"
    },
    "winrar": {
        "readme_bn": "## নির্দেশিকা\n১. অফিসিয়াল WinRAR ইনস্টল করুন।\n২. ডাউনলোড করা RAR থেকে 'rarreg.key' ফাইলটি এক্সট্র্যাক্ট করুন।\n৩. 'rarreg.key' ফাইলটি WinRAR ইনস্টলেশন ফোল্ডারে (`C:\\Program Files\\WinRAR`) পেস্ট করুন।\n\n## ৭-জিপ (7-Zip) সুপারিশ\nআপনি যদি সম্পূর্ণ ফ্রি এবং ওপেন সোর্স সফটওয়্যার পছন্দ করেন, তবে 7-Zip হলো WinRAR-এর সেরা হালকা বিকল্প।"
    },
    "bios-button": {
        "readme_bn": "## এটি যা করে\nবারবার কিবোর্ডের বাটন না চেপে সরাসরি এক ক্লিকেই পিসি রিস্টার্ট করে UEFI/BIOS সেটিংসে প্রবেশ করার দ্রুত সমাধান।"
    },
    "bcuninstaller": {
        "readme_bn": "## ওভারভিউ\nবাল্ক ক্র্যাপ আনইনস্টলার হলো উইন্ডোজের জন্য একটি ফ্রি এবং ওপেন-সোর্স (FOSS) আনইনস্টলার। এটি একসাথে একাধিক অ্যাপ্লিকেশন, অবশিষ্ট ফাইল, আবর্জনা এবং রেজিস্ট্রি কি স্বয়ংক্রিয়ভাবে কোনো ঝামেলা ছাড়াই পরিষ্কার করতে সক্ষম।\n\n## প্রধান সুবিধাসমূহ\n- একসাথে শত শত প্রোগ্রাম ব্যাচ আকারে আনইনস্টল করার সুবিধা।\n- স্বয়ংক্রিয়ভাবে অবশিষ্ট ফাইল ও রেজিস্ট্রি এন্ট্রি পরিষ্কার করে।\n- উইন্ডোজ স্টোর অ্যাপস, ওকুলাস, স্টিম গেমস এবং পোর্টেবল অ্যাপস আনইনস্টল করতে পারে।\n- স্বয়ংক্রিয় ব্যাকগ্রাউন্ড সাইলেন্ট আনইনস্টল সুবিধা।"
    },
    "registry-path": {
        "readme_bn": ""
    },
    "clean-purger": {
        "readme_bn": "## ওভারভিউ\nআপনার ব্যক্তিগত ডকুমেন্টে কোনো হাত না দিয়েই উইন্ডোজের অপ্রয়োজনীয় আবর্জনা, টেম্পোরারি ফাইল, শেডার ক্যাশ এবং নষ্ট আপডেট ফাইল এক ক্লিকে সম্পূর্ণ পরিষ্কার করার শক্তিশালী ব্যাচ ইউটিলিটি।\n\n## যে স্থানগুলো পরিষ্কার করে\n- ইউজার ও সিস্টেমের `%temp%` ফোল্ডার।\n- উইন্ডোজ প্রিফেচ (Prefetch) ক্যাশ।\n- ডাইরেক্টএক্স, এনভিডিয়া এবং এএমডি শেডার ক্যাশ (`DXCache`)।\n- উইন্ডোজ ডেলিভারি অপটিমাইজেশন ও সফটওয়্যার ডিস্ট্রিবিউশন ডাউনলোড ক্যাশ।\n- এক্সপ্লোরার থাম্বনেইল ডাটাবেস ও ডিএনএস রিজলভার ক্যাশ।",
        "commands_bn": [
            "ডিএনএস রিজলভার ক্যাশ ফ্লাশ করুন",
            "কম্পোনেন্ট স্টোর ক্লিনআপ (DISM ক্লিনআপ)"
        ]
    },
    "glary": {
        "readme_bn": "## অ্যাক্টিভেশন\nসিস্টেম ক্লিনিং এবং ফুল অপটিমাইজেশন ফিচারের সুবিধা আনলক করতে নিচে দেওয়া সিরিয়াল কি (Serial Key) ব্যবহার করুন।",
        "copyLabel_bn": "লাইসেন্স / সিরিয়াল কি"
    },
    "godmode-creator": {
        "readme_bn": "## ওভারভিউ\nউইন্ডোজের ২০০টিরও বেশি লুকানো কেন্দ্রীয় সিস্টেম অ্যাডমিনিস্ট্রেশন সেটিংস সম্বলিত 'All Tasks' মাস্টার কন্ট্রোল প্যানেলের সরাসরি ডেস্কটপ শর্টকাট তৈরি করে।\n\n## ম্যানুয়াল তৈরির নিয়ম\nযেকোনো জায়গায় একটি নতুন ফোল্ডার তৈরি করুন এবং এর নাম ঠিক এটি দিন:\n`GodMode.{ED7BA470-8E54-465E-825C-99712043E01C}`",
        "commands_bn": [
            "রান ডায়ালগের মাধ্যমে গডমোড খুলুন (Win + R)"
        ]
    },
    "ooshutup10": {
        "readme_bn": "## ওভারভিউ\nও অ্যান্ড ও শাটআপ১০++ উইন্ডোজ ১০ এবং ১১-এর ডেটা ট্র্যাকিং এবং প্রাইভেসি সেটিংসের উপর আপনার পূর্ণ নিয়ন্ত্রণ এনে দেয়, যাতে মাইক্রোসফটের কাছে অপ্রয়োজনীয় ডেটা না যায়।\n\n## মূল সুবিধাসমূহ\n- ১০০% ফ্রি এবং পোর্টেবল (ইনস্টল করার প্রয়োজন নেই)।\n- টেলিমেট্রি, ডায়াগনস্টিক ডেটা কালেকশন এবং ট্র্যাকিং সম্পূর্ণ বন্ধ করে।\n- কর্টানা, এজ ব্যাকগ্রাউন্ড অ্যাক্টিভিটি এবং লক স্ক্রিন ওয়েব সার্চ নিয়ন্ত্রণ করে।\n- ১-ক্লিকে প্রস্তাবিত সুরক্ষিত সেটিংস এবং প্রয়োজনে রিভার্ট করার সুবিধা।"
    },
    "power-context-menu": {
        "readme_bn": "## ওভারভিউ\nএকটি পরিচ্ছন্ন এবং হালকা রেজিস্ট্রি ফাইল যা মাউসের রাইট-ক্লিক মেনুতে অত্যন্ত প্রয়োজনীয় পাওয়ার-ইউজার শর্টকাট যোগ করে।\n\n## যুক্ত হওয়া শর্টকাটসমূহ\n- **টেক ওনারশিপ (Take Ownership)**: লক করা সিস্টেম ফাইল ও ফোল্ডারে তাৎক্ষণিক অ্যাডমিন পারমিশন লাভ।\n- **রিস্টার্ট এক্সপ্লোরার**: উইন্ডোজের টাস্কবার বা আইকন হ্যাং হলে এক ক্লিকেই রিস্টার্ট।\n- **পাওয়ারশেল অ্যাডমিন হিসেবে খুলুন**: বর্তমান ফোল্ডারেই অ্যাডমিন মোডে টার্মিনাল চালু।\n- **গডমোড প্যানেল**: উইন্ডোজের ২০০+ মাস্টার সেটিংসে সরাসরি প্রবেশ।"
    },
    "revo": {
        "readme_bn": "## নির্দেশিকা\nসফটওয়্যারটি ইনস্টল করার পর লাইসেন্স ফাইলটি নির্দিষ্ট ডিরেক্টরিতে কপি করুন।",
        "copyLabel_bn": "লাইসেন্স ফাইলের লোকেশন"
    },
    "right-click-repair": {
        "readme_bn": ""
    },
    "win10-menu": {
        "readme_bn": "## ওভারভিউ\nউইন্ডোজ ১১-এ ক্লাসিক উইন্ডোজ ১০ এর মতো সম্পূর্ণ রাইট-ক্লিক কনটেক্সট মেনু ফিরিয়ে আনে।"
    },
    "cursor": {
        "readme_bn": "## ওভারভিউ\nউইন্ডোজ ডেস্কটপ কাস্টমাইজেশনের জন্য আকর্ষণীয় রাউন্ডেড হাই-ডিপিআই (High-DPI) কার্সর সেট।"
    },
    "win11-debloat-search": {
        "readme_bn": "## ওভারভিউ\nউইন্ডোজ ১১ স্টার্ট মেনু থেকে বিং ওয়েব সার্চ, কর্টানা, সার্চ হাইলাইটস এবং বিজ্ঞাপন বন্ধ করে সম্পূর্ণ অফলাইন ও দ্রুতগতির সার্চ নিশ্চিত করে।\n\n## নির্দেশিকা\n১. `.reg` ফাইলটি ডাউনলোড করুন।\n২. উইন্ডোজ রেজিস্ট্রিতে ইমপোর্ট করতে ডাবল ক্লিক করুন।\n৩. `explorer.exe` রিস্টার্ট করুন অথবা পিসি রিবুট করুন।"
    },
    "cdi": {
        "readme_bn": "## ওভারভিউ\nএকটি পেশাদার এইচডিডি/এসএসডি হেলথ মনিটরিং টুল যা ড্রাইভের বিস্তারিত তথ্য এবং এস.এম.এ.আর.টি. (S.M.A.R.T.) স্ট্যাটাস প্রদর্শন করে ডেটা নষ্ট হওয়া প্রতিরোধ করে।"
    },
    "cdm": {
        "readme_bn": "## ওভারভিউ\nস্টোরেজ ড্রাইভের সিকোয়েন্সিয়াল এবং র‍্যান্ডম রিড/রাইট স্পিড নিখুঁতভাবে মাপার জন্য বিশ্বমানের ডিস্ক বেঞ্চমার্ক ইউটিলিটি।"
    },
    "easeus-recovery": {
        "readme_bn": "## ওভারভিউ\nযেকোনো স্টোরেজ ডিভাইস থেকে হারিয়ে যাওয়া, ভুলবশত মুছে ফেলা বা ফরম্যাট হওয়া ফাইল রিকভার করার উন্নত ডেটা রিকভারি সফটওয়্যার।"
    },
    "easeus-partition": {
        "readme_bn": "## ওভারভিউ\nহার্ড ড্রাইভ ও এসএসডি পার্টিশন তৈরি, মার্জ এবং অপটিমাইজ করার পূর্ণাঙ্গ ডিস্ক ম্যানেজমেন্ট টুল।"
    },
    "google-photos-restorer": {
        "readme_bn": "## ওভারভিউ\nগুগল টেকআউট (Google Takeout) থেকে মিডিয়া ডাউনলোড করলে ফটোর আসল সময় ও জিপিএস কোঅর্ডিনেট আলাদা `.json` ফাইলে চলে যায়। এই টুলটি স্বয়ংক্রিয়ভাবে সেই মেটাডেটা পুনরায় ফটোর ভেতরে যুক্ত করে দেয়।\n\n## নির্দেশিকা\n১. আপনার গুগল টেকআউটের ফোল্ডারটি আনজিপ করুন।\n২. `GooglePhotos-TakeoutRestorer.exe` চালু করুন।\n৩. গুগল টেকআউটের ফোল্ডারটি সিলেক্ট করুন।\n৪. স্টার্ট বাটনে ক্লিক করে সব মেটাডেটা ফটো ও ভিডিওতে ফিরিয়ে আনুন।"
    },
    "pic-recovery": {
        "readme_bn": "## ওভারভিউ\nনষ্ট বা করাপ্ট স্টোরেজ থেকে হারিয়ে যাওয়া ফাইল ও ছবি উদ্ধারের জন্য ওপেন সোর্স ডেটা রিকভারি টুল।"
    },
    "wiztree": {
        "readme_bn": "## ওভারভিউ\nউইজট্রি (WizTree) হলো বিশ্বের দ্রুততম ডিস্ক স্পেস অ্যানালাইজার। সরাসরি NTFS ড্রাইভের মাস্টার ফাইল টেবিল (MFT) পড়ে এটি ২ সেকেন্ডেরও কম সময়ে বিশাল টেরাবাইট ড্রাইভ স্ক্যান করতে পারে।\n\n## টুলস তুলনা\n- **WizTree**: সরাসরি MFT স্ক্যানিংয়ের মাধ্যমে বড় বড় ফাইলের চমৎকার ভিজ্যুয়াল ম্যাপ প্রদর্শন করে।\n- **TreeSize Free**: ক্লাসিক ফোল্ডার-ভিত্তিক ডিস্ক সাইজ বিশ্লেষণ এবং রাইট-ক্লিক মেনু সুবিধা।"
    },
    "cru-esports-pack": {
        "readme_bn": "## ওভারভিউ\nকাস্টম রেজোলিউশন ইউটিলিটি (CRU) এর জন্য সম্পূর্ণ প্রফেশনাল ইস্পোর্টস স্ট্রেচড রেজোলিউশন ম্যাট্রিক্স ও নির্দেশিকা। যার মধ্যে রয়েছে প্রো-পরীক্ষিত অ্যাসপেক্ট রেশিও, মনিটর সমতুল্য প্রোফাইল এবং টাইমিং কনফিগারেশন।\n\n## ১০৮০পি মনিটর প্রোফাইল (১৬:৯ নেটিভ)\n- **১৭২৮ x ১০৮০ (১৬:১০ স্ট্রেচড)**: পাবজি স্টিম প্রো মেটা। কোনো প্রকার ভার্টিক্যাল এফওভি (FOV) ক্ষতি ছাড়াই ক্যারেক্টার হিটবক্স প্রায় ১০% চওড়া করে এবং ক্রসহেয়ার ডট সম্পূর্ণ পরিষ্কার রাখে।\n- **১৪৪০ x ১০৮০ (৪:৩ স্ট্রেচড)**: সিএস২ এবং ভ্যালোরেন্টের ক্লাসিক স্ট্রেচড রেজোলিউশন, যা সর্বোচ্চ টার্গেট সাইজ প্রদান করে।\n- **১৬০০ x ১০৮০ (৪:৩ ওয়াইড)**: নিখুঁত ব্যালেন্সড হাইব্রিড প্রোফাইল।\n- **১২৮০ x ৯৬০ (৪:৩ ক্লাসিক)**: লো-এন্ড পিসিতে সর্বোচ্চ এফপিএস (FPS) বুস্ট পাওয়ার জন্য সেরা।\n\n## ১৪৪০পি (২কে) মনিটর প্রোফাইল (১৬:৯ নেটিভ)\n- **২৩০৪ x ১৪৪০ (১৬:১০ স্ট্রেচড)**: ২কে প্যানেলের জন্য ১৭২৮x১০৮০ এর নিখুঁত গাণিতিক সমতুল্য রেজোলিউশন।\n- **১৯২০ x ১৪৪০ (৪:৩ স্ট্রেচড)**: কিউএইচডি ২কে মনিটরের জন্য আসল ৪:৩ স্ট্রেচড রেজোলিউশন।\n\n## সমর্থিত রিফ্রেশ রেটসমূহ\nপ্রতিটি রেজোলিউশন প্রোফাইল **৬০Hz, ৭৫Hz, ১২০Hz, ১৪৪Hz, ১৬৫Hz, ২৪০Hz, ২৮০Hz এবং ৩৬০Hz** পুরোপুরি সাপোর্ট করে।\n\n## ব্ল্যাক বার দূর করার জিপিইউ স্কেলিং সেটআপ\n১. এনভিডিয়া কন্ট্রোল প্যানেল খুলুন -> **Adjust desktop size and position** এ যান।\n২. Scaling Mode দিন **Full-screen**।\n৩. Perform scaling on নির্ধারণ করুন: **GPU** (অথবা Display)।\n৪. **Override the scaling mode set by games and programs** বক্সে টিক দিন।\n*(AMD ব্যবহারকারীরা: 'GPU Scaling' অন করুন এবং Scaling Mode দিন 'Full panel')*"
    },
    "cru": {
        "readme_bn": "## ওভারভিউ\nমনিটরের কাস্টম রেজোলিউশন কনফিগার করা, ডিসপ্লের রিফ্রেশ রেট ওভারক্লক করা এবং EDID ডিসপ্লে টাইমিং টিউন করার সেরা সফটওয়্যার।"
    },
    "pc-opt": {
        "readme_bn": "## নির্দেশিকা\nপাওয়ারশেল (PowerShell) অ্যাডমিনিস্ট্রেটর হিসেবে চালু করুন এবং নিচের কমান্ডগুলো এক এক করে রান করুন।",
        "commands_bn": [
            "ক্রিস টাইটাস টেক উইন্ডোজ ইউটিলিটি",
            "উইন্ডোজ ও অফিস অ্যাক্টিভেশন (MAS)",
            "ডায়নামিক টিক বন্ধ করুন (স্টাটার ফিক্স)",
            "আলটিমেট পারফরম্যান্স পাওয়ার প্ল্যান তৈরি",
            "সিস্টেম ফাইল চেকার (SFC স্ক্যান)",
            "DISM ইমেজ হেলথ রিস্টোর",
            "ড্রাইভ হেলথ স্ট্যাটাস চেক"
        ]
    },
    "ram-flusher": {
        "readme_bn": "## ওভারভিউ\nআধুনিক গেমগুলোতে উইন্ডোজ যখন স্ট্যান্ডবাই র‍্যাম (Standby RAM) থেকে মেমরি ঠিক সময়ে রিলিজ করতে পারে না, তখন যে ফ্রেম ড্রপ বা স্টাটারিং হয় তা পুরোপুরি সমাধান করে।\n\n## নির্দেশিকা\n১. ভারী গেমস বা ভিডিও এডিটিং শুরু করার আগে `.bat` স্ক্রিপ্টটি অ্যাডমিনিস্ট্রেটর হিসেবে রান করুন।\n২. পিসি রিস্টার্ট না করেই সাথে সাথে সমস্ত ক্যাশড স্ট্যান্ডবাই র‍্যাম ফ্রি মেমরিতে ফিরিয়ে দেয়।",
        "commands_bn": [
            "পাওয়ারশেলের মাধ্যমে প্রসেস মেমরি পরিষ্কার করুন"
        ]
    },
    "throttlestop-quickcpu": {
        "readme_bn": "## ওভারভিউ\nপ্রসেসরের পারফরম্যান্স সর্বোচ্চ বাড়ানো, আন্ডারভোল্টিং এবং অতিরিক্ত উত্তাপজনিত থ্রটলিং দূর করার পেশাদার ইউটিলিটি।\n\n## এগুলো যা করে\n- **ThrottleStop**: ইন্টেল সিপিইউ কোর/ক্যাশ আন্ডারভোল্ট করা, PL1/PL2 পাওয়ার লিমিট ঠিক করা এবং থার্মাল থ্রটলিং পুরোপুরি বন্ধ করা।\n- **QuickCPU**: কোর পার্কিং, ফ্রিকোয়েন্সি স্কেলিং, টার্বো বুস্ট সূচক এবং রিয়েল-টাইম পাওয়ার ব্যালেন্স নিখুঁতভাবে সমন্বয় করা।"
    },
    "latency-fixer": {
        "readme_bn": "## ওভারভিউ\nইস্পোর্টস গেমিংয়ে মাইক্রো-স্টাটারিং দূর করা, কার্নেল টাইমার রেজোলিউশন স্থিতিশীল রাখা এবং জিপিইউ শিডিউলিং অগ্রাধিকার সর্বোচ্চ আনলক করার একটি নির্ভরযোগ্য ব্যাচ স্ক্রিপ্ট।\n\n## যে অপটিমাইজেশনগুলো প্রয়োগ করে\n- টাইমার ফ্রিকোয়েন্সি ওঠানামা রোধ করতে উইন্ডোজের ডায়নামিক টিক বন্ধ করে।\n- সিন্থেটিক HPET টাইমার ওভারহেড দূর করে ল্যাটেন্সি কমায়।\n- লো-পিং গেমিংয়ের জন্য নেটওয়ার্ক থ্রটলিং ইনডেক্স দূর করে।\n- উইন্ডোজের আলটিমেট পারফরম্যান্স (Ultimate Performance) পাওয়ার স্কিম সক্রিয় করে।",
        "commands_bn": [
            "ডায়নামিক টিক নিষ্ক্রিয় করুন (ফ্রেম টাইম জিটার দূরীকরণ)",
            "সিন্থেটিক ক্লক ওভারহেড বন্ধ করুন",
            "ধারাবাহিক সিন্থেটিক প্ল্যাটফর্ম টিক সক্ষম করুন",
            "আলটিমেট পারফরম্যান্স পাওয়ার স্কিম সক্রিয় করুন"
        ]
    },
    "autoruns": {
        "readme_bn": "## ওভারভিউ\nপিসি বুট হওয়ার সময় স্বয়ংক্রিয়ভাবে চালু হওয়া সমস্ত প্রোগ্রাম, সার্ভিস, ড্রাইভার এবং শিডিউলড টাস্ক বিস্তারিত দেখার পূর্ণাঙ্গ মনিটর ইউটিলিটি।\n\n## নির্দেশিকা\n১. আরএআর (RAR) আর্কাইভটি এক্সট্র্যাক্ট করুন।\n২. `autoruns64.exe` ফাইলটি অ্যাডমিনিস্ট্রেটর হিসেবে রান করুন।"
    },
    "cpuz-gpuz": {
        "readme_bn": "## ওভারভিউ\nপিসির হার্ডওয়্যার তথ্য ও ডায়াগনস্টিক পরীক্ষার জন্য বিশ্বখ্যাত দুটি অপরিহার্য সফটওয়্যারের জোড়া।\n\n## অন্তর্ভুক্ত টুলস\n- **CPU-Z (CPUID)**: রিয়েল-টাইম ক্লক ফ্রিকোয়েন্সি, মেমরি টাইমিংস, মাদারবোর্ড চিপসেট এবং সিঙ্গেল/মাল্টি-থ্রেড বেঞ্চমার্ক প্রদর্শন করে।\n- **GPU-Z (TechPowerUp)**: গ্রাফিক্স কার্ডের পূর্ণাঙ্গ তথ্য, ভি-র‍্যাম মেমরি ক্লক, বায়োস সংস্করণ, পিসিআইই বাস লোড এবং তাপমাত্রা সেন্সর মনিটর করে।"
    },
    "hitmanpro": {
        "readme_bn": "## ওভারভিউ\nক্লাউড-ভিত্তিক সেকেন্ডারি ম্যালওয়্যার ও থ্রেট স্ক্যানার যা আপনার প্রধান অ্যান্টিভাইরাসের পাশাপাশি যেকোনো লুকানো ভাইরাস বা ম্যালওয়্যার নিমেষেই শনাক্ত করতে পারে।"
    },
    "hwinfo": {
        "readme_bn": "## ওভারভিউ\nএইচডব্লিউইনফো (HWiNFO) হলো রিয়েল-টাইম সেন্সর মনিটরিং (তাপমাত্রা, ভোল্টেজ, ফ্যান স্পিড এবং পাওয়ার খরচ) সম্বলিত একটি পেশাদার হার্ডওয়্যার ডায়াগনস্টিক টুল।"
    },
    "process-explorer": {
        "readme_bn": "## ওভারভিউ\nসিসইন্টারনালস প্রসেস এক্সপ্লোরার: উইন্ডোজের উন্নত টাস্ক ম্যানেজার যা সক্রিয় ডিএলএল (DLL), ফাইল হ্যান্ডেল এবং হার্ডওয়্যার পরিসংখ্যান নিখুঁতভাবে তুলে ধরে।"
    },
    "process-monitor": {
        "readme_bn": "## ওভারভিউ\nউইন্ডোজের জন্য একটি অ্যাডভান্সড মনিটরিং টুল যা রিয়েল-টাইমে ফাইল সিস্টেম, রেজিস্ট্রি এবং প্রসেস/থ্রেড অ্যাক্টিভিটি প্রদর্শন করে।"
    },
    "adobe-suite": {
        "readme_bn": "## ওভারভিউ\nগ্রাফিক ডিজাইন, ভেক্টর আর্ট, প্রফেশনাল ভিডিও এডিটিং এবং মোশন গ্রাফিক্সের জন্য বিশ্বখ্যাত অ্যাডোবি ক্রিয়েটিভ স্যুটের পূর্ণাঙ্গ সংকলন।\n\n## অন্তর্ভুক্ত সফটওয়্যারসমূহ\n- **Adobe Photoshop 2020 (v21.2.1.265)**: প্রফেশনাল ফটো এডিটিং, ডিজিটাল পেইন্টিং, রিটাচিং ও গ্রাফিক কম্পোজিশন।\n- **Adobe Illustrator 2020 (v24.3.0.569)**: নিখুঁত ভেক্টর ইলাস্ট্রেশন, টাইপোগ্রাফি, ব্র্যান্ড লোগো ও ভেক্টর আর্টওয়ার্ক।\n- **Adobe Premiere Pro 2021 (v14.5.0.51)**: হাই-পারফরম্যান্স টাইমলাইন ভিডিও এডিটিং, মাল্টি-ট্র্যাক অডিও ও কালার গ্রেডিং।\n- **Adobe After Effects 2020 (v17.5.0.40)**: সিনেমাটিক ভিজ্যুয়াল ইফেক্টস (VFX), ২D/৩D মোশন গ্রাফিক্স ও ইন্ট্রো অ্যানিমেশন।\n\n## ইনস্টলেশন ও বিশেষ সুবিধাসমূহ\n- **ইনস্টল ও প্লে (Pre-Activated)**: সম্পূর্ণ প্রি-প্যাচড ইনস্টলার। কোনো ফাইল ক্র্যাক করা, ডিএলএল (DLL) পেস্ট করা বা জটিল পাথ কনফিগারেশন ছাড়াই সরাসরি সেটআপ দিয়ে ব্যবহার করা যায়।\n- **১০০% পরিচ্ছন্ন ও নিরাপদ**: সম্পূর্ণ ভাইরাসমুক্ত, পরিচ্ছন্ন এবং স্থায়ীভাবে স্থিতিশীল রিলিজ।\n- **অফলাইন সেটআপ**: কোনো অ্যাডোবি ক্লাউড অ্যাকাউন্ট বা সাইন-ইন ছাড়াই সম্পূর্ণ অফলাইনে এক ক্লিকেই ইনস্টল করা যায়।"
    },
    "fontlab": {
        "readme_bn": "## ওভারভিউ\nটাইপোগ্রাফি ডিজাইনারদের জন্য কাস্টম ওপেনটাইপ এবং ওয়েব ফন্ট তৈরি ও এক্সপোর্ট করার পেশাদার ফন্ট এডিটর।"
    },
    "foxit-pdf": {
        "readme_bn": "## ওভারভিউ\nডকুমেন্ট তৈরি, অ্যানোটেশন, ডিজিটাল স্বাক্ষর এবং দ্রুত পিডিএফ এডিট করার জনপ্রিয় সফটওয়্যার।"
    }
};

const fileData = [
    // =========================================================================
    // [1] PRODUCTIVITY & UTILITIES (Alphabetical A-Z)
    // =========================================================================
    {
        id: "avro",
        name: "Avro Keyboard",
        category: "utilities",
        badge: "Phonetic Bangla Keyboard",
        name_bn: "অভ্র কীবোর্ড",
        badge_bn: "ফোনেটিক বাংলা কীবোর্ড",
        icon: "fa-solid fa-keyboard",
        path: "https://pub-99ac10b0e7f146fb9cde114019bb15b1.r2.dev/setup_avrokeyboard_5.6.0.exe",
        keywords: "bangla bengali phonetic keyboard typing unicode omicronlab",
        readme: "## Overview\nStandard Bengali phonetic keyboard software supporting full Unicode and ANSI typing."
    },
    {
        id: "directx",
        name: "DirectX 11 Setup",
        category: "utilities",
        badge: "DirectX Gaming Runtime",
        name_bn: "ডাইরেক্টএক্স ১১ সেটআপ",
        badge_bn: "ডাইরেক্টএক্স গেমিং রানটাইম",
        icon: "fa-solid fa-gamepad",
        path: "https://pub-99ac10b0e7f146fb9cde114019bb15b1.r2.dev/DirectX%2011%20Setup.rar",
        download: true,
        keywords: "directx 11 dx11 runtime gaming 3d libraries graphics",
        readme: "## Overview\nEssential DirectX 11 Runtime components required to run modern games and high-performance graphics applications."
    },
    {
        id: "everything",
        name: "Everything (Voidtools)",
        category: "utilities",
        badge: "Instant Desktop Search",
        name_bn: "এভরিথিং (Voidtools)",
        badge_bn: "ইনস্ট্যান্ট ডেস্কটপ সার্চ",
        icon: "fa-solid fa-magnifying-glass",
        path: "https://www.voidtools.com/downloads/",
        keywords: "everything voidtools instant desktop search file search indexer fast regex windows query locate files",
        readme: "## Overview\nEverything is an ultra-fast search engine that instantly locates files and folders by name on Windows NTFS volumes.\n\n## Key Features\n- Instant real-time results as you type.\n- Minimal resource usage (small memory footprint).\n- Powerful search syntax, wildcards, regex, and file size/date filters."
    },
    {
        id: "goodbyedpi",
        name: "Good Bye DPI",
        category: "utilities",
        badge: "DPI Bypass Utility",
        name_bn: "গুড বাই DPI",
        badge_bn: "DPI বাইপাস ইউটিলিটি",
        icon: "fa-solid fa-unlock",
        path: "https://pub-99ac10b0e7f146fb9cde114019bb15b1.r2.dev/goodbyedpi-0.2.2.rar",
        keywords: "dpi censorship bypass packet inspection network throttling vpn free",
        readme: "## Overview\nBypass Deep Packet Inspection censorship and ISP throttling without requiring a slow proxy or VPN."
    },
    {
        id: "productivity-macro",
        name: "Humayoun's Master Macro",
        category: "utilities",
        badge: "AutoHotkey Macro Pack",
        name_bn: "হুমায়ূন'স মাস্টার ম্যাক্রো",
        badge_bn: "অটোহটকি ম্যাক্রো প্যাক",
        icon: "fa-solid fa-keyboard",
        path: "https://pub-99ac10b0e7f146fb9cde114019bb15b1.r2.dev/master-productivity-macro.ahk",
        keywords: "humayoun master productivity macro autohotkey ahk shortcuts window always on top quick launch plain text paste transparency",
        readme: "## Overview\nA high-efficiency AutoHotkey macro script designed by Humayoun Kobir to speed up everyday Windows workflow, window management, and text manipulation.\n\n## Included Shortcuts\n- `Win + A`: Pin active window Always-on-Top.\n- `Ctrl + Shift + V`: Paste pure plain text without any formatting.\n- `Ctrl + Alt + Shift + E`: Instant Windows Explorer restart.\n- `Win + Mouse Scroll`: Adjust active window transparency on the fly.\n- `;d` / `;dt`: Expand into formatted dynamic dates & timestamps."
    },
    {
        id: "qbittorrent",
        name: "qBittorrent",
        category: "utilities",
        badge: "Ad-Free Torrent Client",
        name_bn: "কিউবিটটরেন্ট (qBittorrent)",
        badge_bn: "বিজ্ঞাপনমুক্ত টরেন্ট ক্লায়েন্ট",
        icon: "fa-solid fa-cloud-arrow-down",
        path: "https://www.qbittorrent.org/download",
        links: [
            { label: "Official Download", label_bn: "অফিসিয়াল ডাউনলোড", url: "https://www.qbittorrent.org/download", icon: "fa-solid fa-download", primary: true },
            { label: "GitHub Source (FOSS)", label_bn: "গিটহাব সোর্স (FOSS)", url: "https://github.com/qbittorrent/qBittorrent", icon: "fa-brands fa-github" }
        ],
        keywords: "qbittorrent foss torrent client clean no ads open source bittorrent p2p libtorrent fast client",
        readme: "## Overview\nqBittorrent is an ad-free, open-source BitTorrent client aimed at providing a clean alternative to µTorrent and proprietary software.\n\n## Key Advantages\n- Clean, polished µTorrent-like user interface without ads or bundled junk.\n- Integrated search engine and RSS feed reader.\n- Sequential downloading (watch while downloading).\n- Advanced IP filtering and bandwidth scheduling."
    },
    {
        id: "vcredist",
        name: "Visual C++ Runtimes All-in-One",
        category: "utilities",
        badge: "All-in-One VC++ Runtimes",
        name_bn: "ভিজ্যুয়াল C++ রানটাইমস অল-ইন-ওয়ান",
        badge_bn: "অল-ইন-ওয়ান VC++ রানটাইমস",
        icon: "fa-brands fa-microsoft",
        path: "https://pub-99ac10b0e7f146fb9cde114019bb15b1.r2.dev/Visual%20C%2B%2B%20Runtimes%20All-in-One-Jun-2026.zip",
        download: true,
        keywords: "vcredist visual c++ redistributable runtimes 2005 2022 x86 x64 dll fix",
        readme: "## Overview\nAll-in-One package containing every Visual C++ Redistributable runtime (2005–2022), both x86 and x64.\n\n## Instructions\n1. Extract the ZIP file.\n2. Run the included batch installer to install all runtimes at once.\n\n## Why You Need This\nFixes common 'VCRUNTIME140.dll missing' or 'MSVCP.dll not found' errors."
    },
    {
        id: "win-office-act",
        name: "Windows & Office Activator",
        category: "utilities",
        badge: "MAS PowerShell Script",
        name_bn: "উইন্ডোজ ও অফিস অ্যাক্টিভেটর",
        badge_bn: "MAS পাওয়ারশেল স্ক্রিপ্ট",
        icon: "fa-solid fa-key",
        path: "https://pub-99ac10b0e7f146fb9cde114019bb15b1.r2.dev/Windows%20Office%20Activation%20Script.txt",
        keywords: "activation mas massgrave windows office powershell script",
        readme: "## Instructions\nRun PowerShell as Administrator to use this script.",
        content: "irm https://get.activated.win | iex"
    },
    {
        id: "winrar",
        name: "WinRAR Pro",
        category: "utilities",
        badge: "Archive & Compression",
        name_bn: "উইনরার প্রো (WinRAR Pro)",
        badge_bn: "আর্কাইভ ও কম্প্রেশন",
        icon: "fa-solid fa-file-zipper",
        path: "https://pub-99ac10b0e7f146fb9cde114019bb15b1.r2.dev/rarreg.rar",
        officialUrl: "https://www.win-rar.com/fileadmin/winrar-versions/winrar-x64-701.exe",
        sevenZipUrl: "https://www.7-zip.org/",
        keywords: "winrar 7zip compression zip rar archive rarreg key extract",
        readme: "## Instructions\n1. Install ${currentLang === 'bn' ? 'অফিসিয়াল WinRAR' : 'Official WinRAR'}.\n2. Extract 'rarreg.key' from the downloaded RAR.\n3. Move 'rarreg.key' into the WinRAR installation folder (`C:\\Program Files\\WinRAR`).\n\n## 7-Zip Recommendation\nIf you prefer free open-source software, 7-Zip is the best lightweight alternative to WinRAR."
    },

    // =========================================================================
    // [2] SYSTEM & MAINTENANCE (Alphabetical A-Z)
    // =========================================================================
    {
        id: "bios-button",
        name: "BIOS Enter Button",
        category: "system",
        badge: "One-Click UEFI Reboot",
        name_bn: "BIOS এন্টার বাটন",
        badge_bn: "ওয়ান-ক্লিক UEFI রিবুট",
        icon: "fa-solid fa-microchip",
        path: "https://pub-99ac10b0e7f146fb9cde114019bb15b1.r2.dev/One%20click%20to%20Bios.rar",
        keywords: "uefi bios fastboot restart bootloader firmware motherboard",
        readme: "## What it does\nAn instant, one-click solution to reboot your PC directly into the UEFI/BIOS settings without manual key spamming."
    },
    {
        id: "bcuninstaller",
        name: "Bulk Crap Uninstaller (BCU)",
        category: "system",
        badge: "FOSS Batch Uninstaller",
        name_bn: "বাল্ক ক্র্যাপ আনইনস্টলার (BCU)",
        badge_bn: "FOSS ব্যাচ আনইনস্টলার",
        icon: "fa-solid fa-trash-can",
        path: "https://www.bcuninstaller.com/",
        links: [
            { label: "Official Website", label_bn: "অফিসিয়াল ওয়েবসাইট", url: "https://www.bcuninstaller.com/", icon: "fa-solid fa-download", primary: true },
            { label: "GitHub Releases (FOSS)", label_bn: "গিটহাব রিলিজ (FOSS)", url: "https://github.com/Klocman/Bulk-Crap-Uninstaller/releases", icon: "fa-brands fa-github" }
        ],
        keywords: "bulk crap uninstaller bcuninstaller bcu open source foss deep uninstaller batch remove leftovers registry windows store steam games",
        readme: "## Overview\nBulk Crap Uninstaller is a free and open-source (FOSS) mass uninstaller for Windows. It excels at removing large amounts of applications, remnants, orphan files, and hidden registry keys in batch mode with zero user intervention.\n\n## Key Features\n- Batch uninstall hundreds of programs simultaneously.\n- Automatically cleans leftover files and registry entries.\n- Uninstalls Windows Store apps, Oculus, Steam games, and portable apps.\n- Automated quiet uninstallation routines."
    },
    {
        id: "registry-path",
        name: "Context Menu Registry",
        category: "system",
        badge: "Registry Directory Reference",
        name_bn: "কনটেক্সট মেনু রেজিস্ট্রি",
        badge_bn: "রেজিস্ট্রি ডিরেক্টরি রেফারেন্স",
        icon: "fa-solid fa-code",
        path: "https://pub-99ac10b0e7f146fb9cde114019bb15b1.r2.dev/Registry%20path%20of%20context%20menu.txt",
        keywords: "registry path context menu background shell windows tweak",
        content: "Computer\\HKEY_CLASSES_ROOT\\Directory\\Background\\shell"
    },
    {
        id: "clean-purger",
        name: "Deep Clean & Cache Purger",
        category: "system",
        badge: "Cache & Temp Purger",
        name_bn: "ডিপ ক্লিন ও ক্যাশ পার্জার",
        badge_bn: "ক্যাশ ও টেম্প ফাইল ক্লিনার",
        icon: "fa-solid fa-broom",
        path: "https://pub-99ac10b0e7f146fb9cde114019bb15b1.r2.dev/clean-cache-purger.bat",
        keywords: "deep clean cache purger temp files prefetch thumbnail directx delivery optimization windows update dns bat script",
        readme: "## Overview\nOne-click deep maintenance batch utility to purge all redundant Windows junk, temp files, shader caches, and broken update artifacts without touching your personal documents.\n\n## Cleaned Areas\n- User & System `%temp%` folders.\n- Windows Prefetch cache.\n- DirectX, NVIDIA, and AMD Shader Cache (`DXCache`).\n- Windows Delivery Optimization & SoftwareDistribution download cache.\n- Explorer Thumbnail database & DNS resolver cache.",
        commands: [
            { desc: "Flush DNS Resolver Cache", code: "ipconfig /flushdns" },
            { desc: "Purge Component Store (DISM Cleanup)", code: "dism.exe /online /Cleanup-Image /StartComponentCleanup /ResetBase" }
        ]
    },
    {
        id: "glary",
        name: "Glary Utility Pro",
        category: "system",
        badge: "System Cleaner & Speedup",
        name_bn: "গ্ল্যারি ইউটিলিটি প্রো",
        badge_bn: "সিস্টেম ক্লিনার ও স্পিডআপ",
        icon: "fa-solid fa-broom",
        path: "https://pub-99ac10b0e7f146fb9cde114019bb15b1.r2.dev/Glary_Utilities_v5.211.0.240.exe",
        copyLabel: "Serial Key",
        copyText: "3788-61679-58286-4470",
        keywords: "cleaner optimizer registry disk maintenance speedup serial key",
        readme: "## Activation\nUse the Serial Key provided below to unlock the Professional version features for system cleaning and optimization."
    },
    {
        id: "godmode-creator",
        name: "GodMode Admin Panel Creator",
        category: "system",
        badge: "Master Control Panel",
        name_bn: "গডমোড অ্যাডমিন প্যানেল ক্রিয়েটর",
        badge_bn: "মাস্টার কন্ট্রোল প্যানেল",
        icon: "fa-solid fa-sliders",
        path: "https://pub-99ac10b0e7f146fb9cde114019bb15b1.r2.dev/godmode-creator.bat",
        keywords: "godmode all tasks master admin panel control panel guid windows 10 11 batch bat shortcut",
        readme: "## Overview\nCreates a permanent desktop shortcut to the hidden Windows 'All Tasks' Master Control Panel containing over 200 centralized system administration settings.\n\n## Manual Creation Method\nCreate a new folder anywhere and name it exactly:\n`GodMode.{ED7BA470-8E54-465E-825C-99712043E01C}`",
        commands: [
            { desc: "Open GodMode via Run Dialog (Win + R)", code: "explorer.exe shell:::{ED7BA470-8E54-465E-825C-99712043E01C}" }
        ]
    },
    {
        id: "ooshutup10",
        name: "O&O ShutUp10++",
        category: "system",
        badge: "Privacy & Anti-Telemetry",
        name_bn: "O&O শাটআপ ১০++",
        badge_bn: "প্রাইভেসি ও অ্যান্টি-টেলিমেট্রি",
        icon: "fa-solid fa-user-shield",
        path: "https://www.oo-software.com/en/shutup10",
        keywords: "o&o shutup10 shutup10++ privacy antitelemetry telemetry windows 10 windows 11 disable tracking spy cortana edge bloatware",
        readme: "## Overview\nO&O ShutUp10++ means you have full control over which comfort functions under Windows 10 and Windows 11 you wish to use, and when the sharing of your data goes too far.\n\n## Key Features\n- 100% Free and Portable (no installation needed).\n- Disable telemetry, diagnostic data collection, and tracking.\n- Manage Cortana, Edge background activity, and lock screen web search.\n- Recommended 1-Click safety presets with easy rollback."
    },
    {
        id: "power-context-menu",
        name: "Power User Context Menu Pack",
        category: "system",
        badge: "Power User Registry Pack",
        name_bn: "পাওয়ার ইউজার কনটেক্সট মেনু প্যাক",
        badge_bn: "পাওয়ার ইউজার রেজিস্ট্রি প্যাক",
        icon: "fa-solid fa-wand-magic-sparkles",
        path: "https://pub-99ac10b0e7f146fb9cde114019bb15b1.r2.dev/power-context-menu.reg",
        keywords: "context menu power user right click take ownership restart explorer command prompt godmode registry reg tweak",
        readme: "## Overview\nA clean, lightweight registry file that adds essential power-user shortcuts to the right-click desktop and folder context menus.\n\n## Added Shortcuts\n- **Take Ownership**: Gain instant administrative access to locked system files and folders.\n- **Restart Explorer**: Instantly restart the Windows shell if icons or the taskbar freeze.\n- **Open PowerShell as Admin**: One-click elevated terminal in the current directory.\n- **GodMode Panel**: Direct access to all 200+ Windows master settings."
    },
    {
        id: "revo",
        name: "Revo Uninstaller Pro",
        category: "system",
        badge: "Deep Software Uninstaller",
        name_bn: "রেভো আনইনস্টলার প্রো",
        badge_bn: "ডিপ সফটওয়্যার আনইনস্টলার",
        icon: "fa-solid fa-eraser",
        path: "https://pub-99ac10b0e7f146fb9cde114019bb15b1.r2.dev/Revo%20Uninsataller.rar",
        copyLabel: "License Path",
        copyText: "C:\\ProgramData\\VS Revo Group\\Revo Uninstaller Pro\\",
        keywords: "revo uninstaller deep clean remove registry remnant apps",
        readme: "## Instructions\nCopy the license file to the target path after installation."
    },
    {
        id: "right-click-repair",
        name: "Right Click Repair Code",
        category: "system",
        badge: "Explorer Context Menu Fix",
        name_bn: "রাইট ক্লিক রিপেয়ার কোড",
        badge_bn: "এক্সপ্লোরার কনটেক্সট মেনু ফিক্স",
        icon: "fa-solid fa-wrench",
        path: "https://pub-99ac10b0e7f146fb9cde114019bb15b1.r2.dev/Right%20click%20repair%20code.txt",
        keywords: "right click context menu explorer fix guid clsid repair",
        content: "shell:::{80F3F1D5-FECA-45F3-BC32-752C152E456E}"
    },
    {
        id: "win10-menu",
        name: "Win10 Right Click Menu",
        category: "system",
        badge: "Classic Context Menu",
        name_bn: "উইন ১০ রাইট ক্লিক মেনু",
        badge_bn: "ক্লাসিক কনটেক্সট মেনু",
        icon: "fa-solid fa-window-restore",
        path: "https://pub-99ac10b0e7f146fb9cde114019bb15b1.r2.dev/Old-Right-Click-Menu-WIndows-11.zip",
        keywords: "windows 10 classic context menu windows 11 restore old right click",
        readme: "## Overview\nRestores the classic Windows 10 right-click context menu in Windows 11."
    },
    {
        id: "cursor",
        name: "Win11 Rounded Cursor",
        category: "system",
        badge: "HD Rounded Cursor Set",
        name_bn: "উইন ১১ রাউন্ডেড কার্সার",
        badge_bn: "HD রাউন্ডেড কার্সার সেট",
        icon: "fa-solid fa-arrow-pointer",
        path: "https://pub-99ac10b0e7f146fb9cde114019bb15b1.r2.dev/windows_11%20cursors.zip",
        previewImage: "assets/site-images/cursor-preview.webp",
        keywords: "cursor mouse rounded theme pointers win11 customization",
        readme: "## Overview\nClean rounded high-DPI cursor set for Windows desktop customization."
    },
    {
        id: "win11-debloat-search",
        name: "Win11 Search & Web Bloat Remover",
        category: "system",
        badge: "Start Menu Search Fix",
        name_bn: "উইন ১১ সার্চ ও ওয়েব ব্লোট রিমুভার",
        badge_bn: "স্টার্ট মেনু সার্চ ফিক্স",
        icon: "fa-solid fa-shield-halved",
        path: "https://pub-99ac10b0e7f146fb9cde114019bb15b1.r2.dev/disable-web-search.reg",
        keywords: "windows 11 disable bing search web search cortana bloat privacy start menu reg registry tweak speedup",
        readme: "## Overview\nDisables Bing web search results, Cortana consent, search highlights, and sponsored suggested apps in the Windows 11 Start Menu, making searches instant and completely offline.\n\n## Instructions\n1. Download the `.reg` file.\n2. Double-click to import into Windows Registry.\n3. Restart `explorer.exe` or reboot your PC."
    },

    // =========================================================================
    // [3] STORAGE & RECOVERY (Alphabetical A-Z)
    // =========================================================================
    {
        id: "cdi",
        name: "CrystalDiskInfo",
        category: "storage",
        badge: "S.M.A.R.T. Health Monitor",
        name_bn: "ক্রিস্টালডিস্কইনফো (CrystalDiskInfo)",
        badge_bn: "S.M.A.R.T. ড্রাইভ হেলথ মনিটর",
        icon: "fa-solid fa-hard-drive",
        path: "https://pub-99ac10b0e7f146fb9cde114019bb15b1.r2.dev/CDI.rar",
        keywords: "smart hdd ssd nvme disk health temperature telemetry crystal",
        readme: "## Overview\nA professional HDD/SSD health monitoring tool that displays detailed hardware information and S.M.A.R.T. status to prevent data loss."
    },
    {
        id: "cdm",
        name: "CrystalDiskMark",
        category: "storage",
        badge: "Disk Speed Benchmark",
        name_bn: "ক্রিস্টালডিস্কমার্ক (CrystalDiskMark)",
        badge_bn: "ডিস্ক স্পিড বেঞ্চমার্ক",
        icon: "fa-solid fa-gauge-high",
        path: "https://pub-99ac10b0e7f146fb9cde114019bb15b1.r2.dev/CDM.rar",
        keywords: "benchmark speed read write test storage ssd hdd nvme",
        readme: "## Overview\nThe industry-standard disk benchmark utility to measure sequential and random read/write speeds of storage drives."
    },
    {
        id: "easeus-recovery",
        name: "EaseUS Data Recovery",
        category: "storage",
        badge: "Deep File Recovery",
        name_bn: "ইজআস ডাটা রিকভারি",
        badge_bn: "ডিপ ফাইল রিকভারি",
        icon: "fa-solid fa-database",
        path: "https://pub-99ac10b0e7f146fb9cde114019bb15b1.r2.dev/EaseUS_Data_Recovery_Wizard_Technician_12.8.0_Multilingual.rar",
        keywords: "data recovery restore lost deleted formatted raw partition files",
        readme: "## Overview\nAdvanced data recovery software for technicians to retrieve lost, deleted, or formatted files from any storage device."
    },
    {
        id: "easeus-partition",
        name: "EaseUS Partition Master",
        category: "storage",
        badge: "Disk & Partition Master",
        name_bn: "ইজআস পার্টিশন মাস্টার",
        badge_bn: "ডিস্ক ও পার্টিশন ম্যানেজার",
        icon: "fa-solid fa-layer-group",
        path: "https://pub-99ac10b0e7f146fb9cde114019bb15b1.r2.dev/EPM%20Technical%20Edition.rar",
        keywords: "partition master disk manager format resize clone mbr gpt 4k alignment",
        readme: "## Overview\nA comprehensive disk management tool for partitioning, merging, and optimizing hard drives and SSDs."
    },
    {
        id: "google-photos-restorer",
        name: "GooglePhotos TakeoutRestorer",
        category: "storage",
        badge: "EXIF & Metadata Fixer",
        name_bn: "গুগল ফটোস টেকআউট রিস্টোরার",
        badge_bn: "EXIF ও মেটাডাটা ফিক্সার",
        icon: "fa-solid fa-images",
        path: "https://github.com/GurutejaReddy-04/GooglePhotos-TakeoutRestorer",
        links: [
            { label: "GitHub Repository", label_bn: "গিটহাব রিপোজিটরি", url: "https://github.com/GurutejaReddy-04/GooglePhotos-TakeoutRestorer", icon: "fa-brands fa-github", primary: true },
            { label: "Releases & Download", label_bn: "রিলিজ ও ডাউনলোড", url: "https://github.com/GurutejaReddy-04/GooglePhotos-TakeoutRestorer/releases", icon: "fa-solid fa-download" }
        ],
        keywords: "google photos takeout restorer exif metadata json timestamp fixer gallery backup media photos videos gurutejareddy",
        readme: "## Overview\nWhen you download your media archive via Google Takeout, the original capture timestamps, GPS coordinates, and metadata are detached into separate `.json` files. This tool automatically merges all JSON metadata back into your photos and videos EXIF tags.\n\n## Instructions\n1. Extract your Google Takeout archive folders.\n2. Run `GooglePhotos-TakeoutRestorer.exe`.\n3. Select your input Google Takeout folder.\n4. Click Start to re-embed all metadata into the photos and videos seamlessly."
    },
    {
        id: "pic-recovery",
        name: "Picture Recovery Software",
        category: "storage",
        badge: "PhotoRec / TestDisk Carving",
        name_bn: "পিকচার রিকভারি সফটওয়্যার",
        badge_bn: "PhotoRec / TestDisk কার্ভিং",
        icon: "fa-solid fa-image",
        path: "https://pub-99ac10b0e7f146fb9cde114019bb15b1.r2.dev/testdisk-7.3-WIP.rar",
        keywords: "photorec testdisk data recovery image photo file carving open source",
        readme: "## Overview\nOpen-source data and image recovery tool to carve and recover lost files from corrupt storage."
    },
    {
        id: "wiztree",
        name: "WizTree / TreeSize Free",
        category: "storage",
        badge: "NTFS Disk Visualizer",
        name_bn: "উইজট্রি / ট্রিসাইজ ফ্রি",
        badge_bn: "NTFS ডিস্ক স্পেস ভিজ্যুয়ালাইজার",
        icon: "fa-solid fa-chart-pie",
        path: "https://diskanalyzer.com/download",
        links: [
            { label: "Download WizTree", label_bn: "WizTree ডাউনলোড", url: "https://diskanalyzer.com/download", icon: "fa-solid fa-bolt", primary: true },
            { label: "Download TreeSize Free", label_bn: "TreeSize Free ডাউনলোড", url: "https://www.jam-software.com/treesize_free", icon: "fa-solid fa-hard-drive" }
        ],
        keywords: "wiztree treesize disk space visualizer mft master file table fast storage cleaner space sniffer directory size tree map",
        readme: "## Overview\nWizTree is the world's fastest disk space analyzer. By reading the Master File Table (MFT) directly from NTFS drives, it scans massive multi-terabyte hard drives in less than 2 seconds.\n\n## Tools Comparison\n- **WizTree**: Direct NTFS MFT scanning for lightning-fast visual treemap of large files.\n- **TreeSize Free**: Classic folder-based disk size breakdown with context menu integration."
    },

    // =========================================================================
    // [4] OPTIMIZATION & GAMING (Alphabetical A-Z)
    // =========================================================================
    {
        id: "cru-esports-pack",
        name: "Custom CRU Esports Resolution Pack",
        category: "optimization",
        badge: "Esports Resolution Pack",
        name_bn: "কাস্টম CRU ইস্পোর্টস রেজোলিউশন প্যাক",
        badge_bn: "ইস্পোর্টস রেজোলিউশন প্যাক",
        icon: "fa-solid fa-tv",
        path: "https://pub-99ac10b0e7f146fb9cde114019bb15b1.r2.dev/cru-esports-resolutions.txt",
        keywords: "cru custom resolution utility esports stretched res pubg steam 1728x1080 1440x1080 2304x1440 1920x1440 16:10 4:3 144hz 240hz 165hz 75hz 60hz 120hz 360hz fov competitive gaming",
        readme: "## Overview\nComplete competitive esports stretched resolution matrix and guide for Custom Resolution Utility (CRU). Includes pro-tested aspect ratios, native monitor equivalents, and timing profiles.\n\n## 1080p Monitor Profiles (16:9 Native)\n- **1728 x 1080 (16:10 Stretched)**: The PUBG Steam Pro Meta. Widens character hitboxes by ~10% with almost zero vertical FOV reduction and crystal clear crosshair dot.\n- **1440 x 1080 (4:3 Stretched)**: CS2 / Valorant classic stretched resolution for maximum target width.\n- **1600 x 1080 (4:3 Wide)**: Balanced hybrid profile.\n- **1280 x 960 (4:3 Classic)**: Maximum FPS boost for low-spec setups.\n\n## 1440p (2K) Monitor Profiles (16:9 Native)\n- **2304 x 1440 (16:10 Stretched)**: Direct 1:1 mathematical equivalent of 1728x1080 on 1440p panels.\n- **1920 x 1440 (4:3 Stretched)**: True 4:3 stretched resolution for QHD 2K monitors.\n\n## Supported Refresh Rates\nEvery resolution profile supports **60Hz, 75Hz, 120Hz, 144Hz, 165Hz, 240Hz, 280Hz, and 360Hz**.\n\n## GPU Scaling Setup (To Remove Black Bars)\n1. Open NVIDIA Control Panel -> **Adjust desktop size and position**.\n2. Set Scaling Mode to **Full-screen**.\n3. Set Perform scaling on: **GPU** (or Display).\n4. Check **Override the scaling mode set by games and programs**.\n*(AMD users: Enable 'GPU Scaling' and set Scaling Mode to 'Full panel')*"
    },
    {
        id: "cru",
        name: "Custom Resolution Utility",
        category: "optimization",
        badge: "Display & Refresh Rate",
        name_bn: "কাস্টম রেজোলিউশন ইউটিলিটি (CRU)",
        badge_bn: "ডিসপ্লে ও রিফ্রেশ রেট টিউনিং",
        icon: "fa-solid fa-tv",
        path: "https://pub-99ac10b0e7f146fb9cde114019bb15b1.r2.dev/CRU.rar",
        keywords: "cru toastyx custom resolution refresh rate monitor overclock edid freesync",
        readme: "## Overview\nConfigure custom monitor resolutions, overclock display refresh rates, and tweak EDID display timings."
    },
    {
        id: "pc-opt",
        name: "PC Optimisation Guide",
        category: "optimization",
        badge: "PowerShell Performance Guide",
        name_bn: "পিসি অপ্টিমাইজেশন গাইড",
        badge_bn: "পাওয়ারশেল পারফরম্যান্স গাইড",
        icon: "fa-solid fa-bolt-lightning",
        path: "https://pub-99ac10b0e7f146fb9cde114019bb15b1.r2.dev/Pc%20optimisation.txt",
        keywords: "powershell tweaks debloat sfc dism dynamic tick power plan optimization scripts",
        readme: "## Instructions\nRun PowerShell as Administrator and execute the commands below.",
        commands: [
            { desc: "Chris Titus Tech Windows Utility", code: 'irm "https://christitus.com/win" | iex' },
            { desc: "Windows & Office Activation (MAS)", code: "irm https://get.activated.win | iex" },
            { desc: "Disable Dynamic Tick (Fix Stutter)", code: "bcdedit /set disabledynamictick yes" },
            { desc: "Ultimate Performance Power Plan", code: "powercfg -duplicatescheme e9a42b02-d5df-448d-aa00-03f14749eb61" },
            { desc: "System File Checker (SFC Scan)", code: "sfc /scannow" },
            { desc: "DISM Image Restore Health", code: "DISM.exe /Online /Cleanup-image /Restorehealth" },
            { desc: "Disk Drive Health Check", code: "wmic Diskdrive get status" }
        ]
    },
    {
        id: "ram-flusher",
        name: "RAM Standby Memory Flusher",
        category: "optimization",
        badge: "Standby RAM Flusher",
        name_bn: "র‍্যাম স্ট্যান্ডবাই মেমরি ফ্লাশার",
        badge_bn: "স্ট্যান্ডবাই র‍্যাম ক্লিনার",
        icon: "fa-solid fa-memory",
        path: "https://pub-99ac10b0e7f146fb9cde114019bb15b1.r2.dev/ram-cache-flusher.bat",
        keywords: "ram standby memory empty standby list auto flusher working set memory leak stutter fix vbs bat script",
        readme: "## Overview\nFixes stuttering in modern games caused by Windows caching files in Standby RAM without releasing them in time when memory is needed.\n\n## Instructions\n1. Run the `.bat` script as Administrator before starting memory-heavy games or video editing sessions.\n2. Instantly releases all cached Standby RAM back into Free RAM without restarting your system.",
        commands: [
            { desc: "Clean Process Working Sets via PowerShell", code: 'powershell -NoProfile -Command "[System.GC]::Collect(); [System.GC]::WaitForPendingFinalizers()"' }
        ]
    },
    {
        id: "throttlestop-quickcpu",
        name: "ThrottleStop / QuickCPU",
        category: "optimization",
        badge: "CPU Power & Undervolting",
        name_bn: "থ্রটলস্টপ / কুইকসিপিইউ",
        badge_bn: "CPU পাওয়ার ও আন্ডারভোল্টিং",
        icon: "fa-solid fa-gauge-high",
        path: "https://www.techpowerup.com/download/techpowerup-throttlestop/",
        links: [
            { label: "ThrottleStop (TechPowerUp)", label_bn: "থ্রটলস্টপ (ThrottleStop)", url: "https://www.techpowerup.com/download/techpowerup-throttlestop/", icon: "fa-solid fa-bolt", primary: true },
            { label: "QuickCPU (CoderBag)", label_bn: "কুইকসিপিইউ (QuickCPU)", url: "https://coderbag.com/product/quickcpu", icon: "fa-solid fa-gauge" }
        ],
        keywords: "throttlestop quickcpu undervolt thermal throttling pl1 pl2 cpu power limit core parking turbo boost intel temperature",
        readme: "## Overview\nAdvanced processor performance, undervolting, and thermal throttling management tools designed to bypass aggressive OEM power limiters.\n\n## What They Do\n- **ThrottleStop**: Undervolt Intel CPU cores/cache, adjust PL1/PL2 power limits, disable BD PROCHOT, and eliminate thermal throttling.\n- **QuickCPU**: Fine-tune Core Parking, Frequency Scaling, Turbo Boost index, and energy performance preferences in real time."
    },
    {
        id: "latency-fixer",
        name: "Ultimate Windows Latency Fixer",
        category: "optimization",
        badge: "Latency & Stutter Fixer",
        name_bn: "আলটিমেট উইন্ডোজ ল্যাটেন্সি ফিক্সার",
        badge_bn: "ল্যাটেন্সি ও স্টাটার ফিক্সার",
        icon: "fa-solid fa-bolt-lightning",
        path: "https://pub-99ac10b0e7f146fb9cde114019bb15b1.r2.dev/latency-optimizer.bat",
        keywords: "latency microstutter fix bcdedit msi mode timer resolution disabledynamictick dpc latency gaming fps bat batch script",
        readme: "## Overview\nA curated high-performance batch script that eliminates micro-stutters, stabilizes kernel timer resolution, and unlocks maximum GPU scheduling priority for competitive esports.\n\n## Optimizations Applied\n- Disables Windows Dynamic Tick to prevent timer frequency jitter.\n- Disables synthetic HPET timer overhead.\n- Eliminates Network Throttling Index for low-ping gaming.\n- Duplicates and enables the Windows Ultimate Performance power scheme.",
        commands: [
            { desc: "Disable Dynamic Tick (Fix Frame Time Jitter)", code: "bcdedit /set disabledynamictick yes" },
            { desc: "Disable Synthetic Clock Overhead", code: "bcdedit /set useplatformclock no" },
            { desc: "Enable Consistent Synthetic Platform Tick", code: "bcdedit /set useplatformtick yes" },
            { desc: "Activate Ultimate Performance Power Scheme", code: "powercfg -duplicatescheme e9a42b02-d5df-448d-aa00-03f14749eb61" }
        ]
    },

    // =========================================================================
    // [5] HARDWARE & DIAGNOSTICS (Alphabetical A-Z)
    // =========================================================================
    {
        id: "autoruns",
        name: "Autoruns",
        category: "diagnostics",
        badge: "Startup & Boot Monitor",
        name_bn: "অটোরানস (Autoruns)",
        badge_bn: "স্টার্টআপ ও বুট মনিটর",
        icon: "fa-solid fa-bolt",
        path: "https://pub-99ac10b0e7f146fb9cde114019bb15b1.r2.dev/Autoruns.rar",
        keywords: "startup boot autostart sysinternals windows microsoft services drivers tasks",
        readme: "## Overview\nStartup monitor utility showing all programs, services, drivers, and scheduled tasks configured to run during system bootup.\n\n## Instructions\n1. Extract the RAR archive.\n2. Run `autoruns64.exe` as Administrator."
    },
    {
        id: "cpuz-gpuz",
        name: "CPU-Z & GPU-Z",
        category: "diagnostics",
        badge: "Hardware Profiler & Clocks",
        name_bn: "CPU-Z এবং GPU-Z",
        badge_bn: "হার্ডওয়্যার প্রোফাইলার ও ক্লক মনিটর",
        icon: "fa-solid fa-microchip",
        path: "https://www.cpuid.com/softwares/cpu-z.html",
        links: [
            { label: "Download CPU-Z", label_bn: "CPU-Z ডাউনলোড", url: "https://www.cpuid.com/softwares/cpu-z.html", icon: "fa-solid fa-microchip", primary: true },
            { label: "Download GPU-Z", label_bn: "GPU-Z ডাউনলোড", url: "https://www.techpowerup.com/download/techpowerup-gpu-z/", icon: "fa-solid fa-desktop", primary: true }
        ],
        keywords: "cpuz gpuz cpu-z gpu-z techpowerup processor graphics card vram bios clocks telemetry hardware sensors diagnostics",
        readme: "## Overview\nThe definitive pair for PC hardware profiling and diagnostics.\n\n## Tools Included\n- **CPU-Z (CPUID)**: Provides real-time clock frequencies, memory timings, motherboard chipset details, and single/multi-thread benchmarks.\n- **GPU-Z (TechPowerUp)**: Delivers exhaustive GPU telemetry, VRAM memory clock, BIOS version, PCIe bus interface load, thermal sensors, and ASIC quality."
    },
    {
        id: "hitmanpro",
        name: "HitmanPro Scanner",
        category: "diagnostics",
        badge: "Second-Opinion Scanner",
        name_bn: "হিটম্যানপ্রো স্ক্যানার",
        badge_bn: "সেকেন্ড-অপিনিয়ন ক্লাউড স্ক্যানার",
        icon: "fa-solid fa-bug-slash",
        path: "https://pub-99ac10b0e7f146fb9cde114019bb15b1.r2.dev/HitmanPro%203.8.rar",
        keywords: "antivirus malware scanner cloud second opinion security virus trojan",
        readme: "## Overview\nCloud-based secondary malware and threat scanner that operates alongside your primary antivirus."
    },
    {
        id: "hwinfo",
        name: "HWiNFO",
        category: "diagnostics",
        badge: "Sensor Telemetry & Diagnostics",
        name_bn: "হার্ডওয়্যার ইনফো (HWiNFO)",
        badge_bn: "সেন্সর টেলিমেট্রি ও ডায়াগনস্টিক",
        icon: "fa-solid fa-microchip",
        path: "https://www.hwinfo.com/download/",
        installerUrl: "https://www.hwinfo.com/download/",
        portableUrl: "https://www.hwinfo.com/download/",
        keywords: "hwinfo hardware info temperature sensor voltage cpu gpu diagnostic",
        readme: "## Overview\nHWiNFO is a professional hardware diagnostic tool with real-time sensor monitoring (thermal, voltage, fan, and power telemetry)."
    },
    {
        id: "process-explorer",
        name: "Process Explorer",
        category: "diagnostics",
        badge: "Sysinternals Task Manager",
        name_bn: "প্রসেস এক্সপ্লোরার",
        badge_bn: "Sysinternals টাস্ক ম্যানেজার",
        icon: "fa-solid fa-list-check",
        path: "https://pub-99ac10b0e7f146fb9cde114019bb15b1.r2.dev/PE.rar",
        keywords: "process explorer task manager sysinternals handles dll cpu gpu",
        readme: "## Overview\nSysinternals Process Explorer: advanced task manager showing active DLLs, file handles, and hardware statistics."
    },
    {
        id: "process-monitor",
        name: "Process Monitor",
        category: "diagnostics",
        badge: "Real-Time Registry & I/O",
        name_bn: "প্রসেস মনিটর",
        badge_bn: "রিয়েল-টাইম রেজিস্ট্রি ও ফাইল I/O",
        icon: "fa-solid fa-desktop",
        path: "https://pub-99ac10b0e7f146fb9cde114019bb15b1.r2.dev/ProcessMonitor.zip",
        keywords: "procmon process monitor sysinternals registry file thread real-time",
        readme: "## Overview\nProcess Monitor is an advanced monitoring tool for Windows that shows real-time file system, Registry, and process/thread activity."
    },

    // =========================================================================
    // [6] CREATIVE & DESIGN (Alphabetical A-Z)
    // =========================================================================
    {
        id: "adobe-suite",
        name: "Adobe Creative Suite",
        category: "creative",
        badge: "Ps • Ai • Pr • Ae (Pre-Activated)",
        name_bn: "অ্যাডোবি ক্রিয়েটিভ সুইট",
        badge_bn: "Ps • Ai • Pr • Ae (প্রি-অ্যাক্টিভেটেড)",
        icon: "fa-solid fa-palette",
        path: "https://pub-99ac10b0e7f146fb9cde114019bb15b1.r2.dev/Adobe_Photoshop_2020_21.2.1.265.zip",
        links: [
            { 
                label: "Download Photoshop 2020", 
                label_bn: "ফটোশপ ২০২০ ডাউনলোড", 
                url: "https://pub-99ac10b0e7f146fb9cde114019bb15b1.r2.dev/Adobe_Photoshop_2020_21.2.1.265.zip", 
                icon: "fa-solid fa-paintbrush", 
                primary: true, 
                class: "adobe-ps", 
                download: true 
            },
            { 
                label: "Download Illustrator 2020", 
                label_bn: "ইলাস্ট্রেটর ২০২০ ডাউনলোড", 
                url: "https://pub-99ac10b0e7f146fb9cde114019bb15b1.r2.dev/Adobe_Illustrator_CC_2020_v24.3.0.569.zip", 
                icon: "fa-solid fa-pen-nib", 
                primary: true, 
                class: "adobe-ai", 
                download: true 
            },
            { 
                label: "Download Premiere Pro 2021", 
                label_bn: "প্রিমিয়ার প্রো ২০২১ ডাউনলোড", 
                url: "https://pub-99ac10b0e7f146fb9cde114019bb15b1.r2.dev/Adobe.Premiere.Pro.CC.2021.v14.5.0.51.zip", 
                icon: "fa-solid fa-film", 
                primary: true, 
                class: "adobe-pr", 
                download: true 
            },
            { 
                label: "Download After Effects 2020", 
                label_bn: "আফটার ইফেক্টস ২০২০ ডাউনলোড", 
                url: "https://pub-99ac10b0e7f146fb9cde114019bb15b1.r2.dev/Adobe_After_Effects_2020_v17.5.0.40.zip", 
                icon: "fa-solid fa-wand-magic-sparkles", 
                primary: true, 
                class: "adobe-ae", 
                download: true 
            }
        ],
        keywords: "adobe creative suite photoshop illustrator premiere pro after effects 2020 2021 video editing vector raster graphics vfx",
        readme: "## Overview\nThe industry-standard Adobe Creative Suite collection for digital raster art, vector design, timeline video production, and motion VFX compositing.\n\n## Included Software\n- **Adobe Photoshop 2020 (v21.2.1.265)**: Professional photo editing, digital matte painting, retouching, and graphic composition.\n- **Adobe Illustrator 2020 (v24.3.0.569)**: Precision vector illustration, typography, brand logos, and vector artwork.\n- **Adobe Premiere Pro 2021 (v14.5.0.51)**: High-performance timeline video editing, multi-track audio, and color grading.\n- **Adobe After Effects 2020 (v17.5.0.40)**: Cinematic visual effects (VFX), 2D/3D motion graphics, and intro animation.\n\n## Installation & Features\n- **Install & Play (Pre-Activated)**: Pre-patched offline installers. Zero file patching, zero crack replacements, and zero registry hacking required.\n- **100% Clean & Verified**: Tested clean, virus-free, and stable releases without telemetry or background bloatware.\n- **Offline Setup**: Installs directly offline without needing an Adobe Creative Cloud account or internet connection."
    },
    {
        id: "fontlab",
        name: "FontLab",
        category: "creative",
        badge: "OpenType Font Designer",
        name_bn: "ফন্টল্যাব (FontLab)",
        badge_bn: "ওপেনটাইপ ফন্ট ডিজাইনার",
        icon: "fa-solid fa-font",
        path: "https://pub-99ac10b0e7f146fb9cde114019bb15b1.r2.dev/FontLab.rar",
        download: true,
        keywords: "fontlab typography font creator opentype truetype woff editor design",
        readme: "## Overview\nProfessional font editor used by type designers to craft and export custom OpenType and web fonts."
    },
    {
        id: "foxit-pdf",
        name: "Foxit PDF Editor",
        category: "creative",
        badge: "PDF Editor & Signer",
        name_bn: "ফক্সইট PDF এডিটর",
        badge_bn: "PDF এডিটর ও সিগনেচার",
        icon: "fa-solid fa-file-pdf",
        path: "https://pub-99ac10b0e7f146fb9cde114019bb15b1.r2.dev/Foxit%20pdf%20editor.rar",
        download: true,
        keywords: "foxit pdf editor convert merge annotate sign documents",
        readme: "## Overview\nFast PDF editor and converter to create, annotate, sign, and organize documents."
    }
];

// Enable manual scroll restoration to remember explorer scroll position precisely
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// DOM Elements
const mainLayout = document.getElementById('mainLayout');
const explorerView = document.getElementById('explorerView');
const detailView = document.getElementById('detailView');
const fileGrid = document.getElementById('fileGrid');
const detailContent = document.getElementById('detailContent');
const fileSearch = document.getElementById('fileSearch');
const searchKbd = document.getElementById('searchKbd');
const copyToast = document.getElementById('copyToast');
const pillAll = document.getElementById('pillAll');
const catDropdownBtn = document.getElementById('catDropdownBtn');
const catDropdownMenu = document.getElementById('catDropdownMenu');
const catDropdownIcon = document.getElementById('catDropdownIcon');
const catDropdownLabel = document.getElementById('catDropdownLabel');

function updateSearchBoxState() {
    const searchBox = fileSearch ? fileSearch.closest('.search-box') : null;
    if (searchBox && fileSearch) {
        searchBox.classList.toggle('has-text', Boolean(fileSearch.value.trim()));
    }
}

let currentCategory = 'all';
let explorerScrollPos = 0;

function selectCategory(catId) {
    currentCategory = catId;
    const curLang = document.documentElement.getAttribute('data-lang') || 'en';

    if (catId === 'all') {
        if (pillAll) pillAll.classList.add('active');
        if (catDropdownBtn) catDropdownBtn.classList.remove('active');
        if (catDropdownIcon) catDropdownIcon.className = 'fa-solid fa-sliders';
        if (catDropdownLabel) catDropdownLabel.textContent = curLang === 'bn' ? 'ক্যাটাগরি' : 'Categories';
    } else {
        if (pillAll) pillAll.classList.remove('active');
        if (catDropdownBtn) catDropdownBtn.classList.add('active');
        const cat = categoryList.find(c => c.id === catId);
        if (cat) {
            if (catDropdownIcon) catDropdownIcon.className = cat.icon;
            if (catDropdownLabel) {
                catDropdownLabel.textContent = (categoryNames[catId] && categoryNames[catId][curLang]) || cat.name;
            }
        }
    }

    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.classList.toggle('active', item.getAttribute('data-category') === catId);
    });

    closeDropdown();
    renderExplorer();
}

function toggleDropdown() {
    if (!catDropdownMenu) return;
    const isShown = catDropdownMenu.classList.contains('show');
    if (isShown) {
        closeDropdown();
    } else {
        openDropdown();
    }
}

function openDropdown() {
    if (!catDropdownMenu || !catDropdownBtn) return;
    catDropdownMenu.classList.add('show');
    catDropdownBtn.setAttribute('aria-expanded', 'true');
}

function closeDropdown() {
    if (!catDropdownMenu || !catDropdownBtn) return;
    catDropdownMenu.classList.remove('show');
    catDropdownBtn.setAttribute('aria-expanded', 'false');
}

// Render Explorer Grid with Enhanced Grouped Sections
function createCard(item) {
    const card = document.createElement('div');
    card.className = 'file-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');

    const curLang = document.documentElement.getAttribute('data-lang') || 'en';
    const itemName = (curLang === 'bn' && item.name_bn) ? item.name_bn : item.name;
    const categoryObj = categoryList.find(c => c.id === item.category);
    const categoryLabel = (categoryNames[item.category] && categoryNames[item.category][curLang]) || (categoryObj ? categoryObj.name : 'Utility');
    const badgeText = (curLang === 'bn' && item.badge_bn) ? item.badge_bn : item.badge;
    const subLabel = badgeText || categoryLabel;

    card.setAttribute('aria-label', `View details for ${itemName}`);

    card.onclick = () => showDetail(item.id);
    card.onkeydown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            showDetail(item.id);
        }
    };

    card.innerHTML = `
        <div class="file-info">
            <div class="file-icon"><i class="${item.icon}"></i></div>
            <div class="file-meta">
                <h3>${escapeHtml(itemName)}</h3>
                <span>${escapeHtml(subLabel)}</span>
            </div>
        </div>
    `;
    return card;
}

let hasRenderedExplorerOnce = false;

function renderExplorer() {
    updateSearchBoxState();
    const query = (fileSearch && fileSearch.value ? fileSearch.value : '').toLowerCase().trim();
    if (explorerView) explorerView.innerHTML = '';

    const filtered = fileData.filter(item => {
        const matchesCategory = (currentCategory === 'all' || item.category === currentCategory);
        if (!matchesCategory) return false;

        if (!query) return true;

        const categoryObj = categoryList.find(c => c.id === item.category);
        const searchableText = [
            item.name,
            item.name_bn || '',
            item.category,
            categoryObj ? categoryObj.name : '',
            categoryObj && categoryNames[item.category] ? (categoryNames[item.category].bn || '') : '',
            item.badge || '',
            item.badge_bn || '',
            item.keywords || '',
            item.readme || '',
            item.content || '',
            ...(item.commands || []).map(c => c.desc + ' ' + c.code)
        ].join(' ').toLowerCase();

        return searchableText.includes(query);
    });

    if (filtered.length === 0) {
        explorerView.innerHTML = `
            <div class="file-grid">
                <div class="empty-state">
                    <i class="fa-solid fa-magnifying-glass empty-icon"></i>
                    <h3>No tools or scripts found</h3>
                    <p>No results match "${escapeHtml(query)}". Try searching for a different keyword or category.</p>
                    <button class="empty-clear-btn" onclick="clearSearch()">Clear Search</button>
                </div>
            </div>
        `;
        return;
    }

    const categoriesToDisplay = currentCategory === 'all' 
        ? categoryList 
        : categoryList.filter(c => c.id === currentCategory);

    categoriesToDisplay.forEach(cat => {
        const itemsInCat = filtered
            .filter(item => item.category === cat.id)
            .sort((a, b) => a.name.localeCompare(b.name));

        if (itemsInCat.length > 0) {
            const curLang = document.documentElement.getAttribute('data-lang') || 'en';
            const catTitle = (categoryNames[cat.id] && categoryNames[cat.id][curLang]) || cat.name;
            const countLabel = curLang === 'bn' ? `${itemsInCat.length} টি টুল` : (itemsInCat.length === 1 ? '1 item' : `${itemsInCat.length} items`);

            const section = document.createElement('div');
            section.className = 'section-group';
            section.innerHTML = `
                <div class="group-header">
                    <h2 class="group-title"><i class="${cat.icon}"></i> ${escapeHtml(catTitle)}</h2>
                    <span class="group-count">${countLabel}</span>
                </div>
            `;
            const grid = document.createElement('div');
            grid.className = 'file-grid';
            itemsInCat.forEach(item => grid.appendChild(createCard(item)));
            section.appendChild(grid);
            explorerView.appendChild(section);
        }
    });
    hasRenderedExplorerOnce = true;
}

function clearSearch() {
    if (fileSearch) {
        fileSearch.value = '';
        updateSearchBoxState();
        fileSearch.focus();
    }
    renderExplorer();
}

function showDetail(id, isFromPopstate = false) {
    const item = fileData.find(f => f.id === id);
    if (!item) {
        hideDetail();
        return;
    }

    if (explorerView.classList.contains('active')) {
        explorerScrollPos = window.scrollY || window.pageYOffset;
    }

    mainLayout.classList.add('detail-mode');
    explorerView.classList.remove('active');
    detailView.classList.add('active');

    const categoryObj = categoryList.find(c => c.id === item.category);
    const currentLang = document.documentElement.getAttribute('data-lang') || 'en';
    const itemName = (currentLang === 'bn' && item.name_bn) ? item.name_bn : item.name;
    const categoryLabel = (categoryNames[item.category] && categoryNames[item.category][currentLang]) || (categoryObj ? categoryObj.name : 'Software Utility');
    const badgeText = (currentLang === 'bn' && item.badge_bn) ? item.badge_bn : item.badge;
    const versionBadge = badgeText ? `${categoryLabel} • ${badgeText}` : categoryLabel;

    let heroHtml = `
        <div class="detail-hero-info">
            <div class="detail-icon"><i class="${item.icon}"></i></div>
            <h1>${escapeHtml(itemName)}</h1>
            <span class="version-badge">${escapeHtml(versionBadge)}</span>
        </div>
    `;

function safeAssetUrl(url) {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('#') || url.startsWith('mailto:')) {
        return url;
    }
    return encodeURI(url).replace(/\+/g, '%2B');
}

    if (item.links && item.links.length > 0) {
        item.links.forEach(link => {
            const finalUrl = safeAssetUrl(link.url);
            const extraClass = link.class ? ` ${link.class}` : '';
            heroHtml += `
                <a href="${finalUrl}" ${link.download ? 'download' : 'target="_blank" rel="noopener noreferrer"'} class="${link.primary ? 'download-hero' : 'btn-secondary-soft'}${extraClass}">
                    <i class="${link.icon || 'fa-solid fa-download'}"></i> ${escapeHtml((currentLang === 'bn' && link.label_bn) ? link.label_bn : link.label)}
                </a>
            `;
        });
    } else if (item.id === "winrar") {
        heroHtml += `
            <a href="${safeAssetUrl(item.path)}" class="download-hero" download>
                <i class="fa-solid fa-key"></i> ${currentLang === 'bn' ? 'অ্যাক্টিভেশন ফিক্স' : 'Activation Fix'}
            </a>
            <a href="${safeAssetUrl(item.officialUrl)}" target="_blank" rel="noopener noreferrer" class="btn-secondary-soft">
                <i class="fa-solid fa-download"></i> Official WinRAR
            </a>
            <a href="${safeAssetUrl(item.sevenZipUrl)}" target="_blank" rel="noopener noreferrer" class="btn-secondary-soft">
                <i class="fa-solid fa-box-open"></i> ${currentLang === 'bn' ? '৭-জিপ (FOSS)' : 'Get 7-Zip (FOSS)'}
            </a>
        `;
    } else if (item.id === "hwinfo") {
        heroHtml += `
            <a href="${safeAssetUrl(item.installerUrl)}" target="_blank" rel="noopener noreferrer" class="download-hero">
                <i class="fa-solid fa-download"></i> ${currentLang === 'bn' ? 'অফিসিয়াল ইনস্টলার' : 'Official Installer'}
            </a>
            <a href="${safeAssetUrl(item.portableUrl)}" target="_blank" rel="noopener noreferrer" class="btn-secondary-soft">
                <i class="fa-solid fa-box-archive"></i> ${currentLang === 'bn' ? 'পোর্টেবল সংস্করণ' : 'Portable Version'}
            </a>
        `;
    } else if (item.path && item.path.startsWith('http')) {
        const isDirectArchive = item.download || /\.(zip|rar|7z|tar|gz|exe|apk|iso|bat|reg|ahk|txt)$/i.test(item.path.split('?')[0]);
        const btnLabel = isDirectArchive 
            ? (translations[currentLang] && translations[currentLang].btn_download_file ? translations[currentLang].btn_download_file : 'Download File')
            : (translations[currentLang] && translations[currentLang].btn_open_resource ? translations[currentLang].btn_open_resource : 'Open Resource');
        const btnIcon = isDirectArchive ? 'fa-solid fa-download' : 'fa-solid fa-up-right-from-square';
        heroHtml += `
            <a href="${item.path}" ${isDirectArchive ? 'download' : 'target="_blank" rel="noopener noreferrer"'} class="download-hero">
                <i class="${btnIcon}"></i> ${btnLabel}
            </a>
        `;
    } else if (item.path) {
        heroHtml += `
            <a href="${safeAssetUrl(item.path)}" class="download-hero" download>
                <i class="fa-solid fa-download"></i> ${translations[currentLang] && translations[currentLang].btn_download_file ? translations[currentLang].btn_download_file : 'Download File'}
            </a>
        `;
    }

        const isBn = currentLang === 'bn';
    const docTrans = (typeof documentationTranslations !== 'undefined' && documentationTranslations[item.id]) ? documentationTranslations[item.id] : {};
    const activeReadme = isBn ? (docTrans.readme_bn || item.readme_bn || item.readme) : item.readme;

    let bodyHtml = `<div class="readme-section">`;

    if (activeReadme) {
        bodyHtml += `
            <div class="readme-title"><i class="fa-solid fa-circle-info"></i> ${isBn ? 'ডকুমেন্টেশন' : 'Documentation'}</div>
            <div class="readme-content">${formatMarkdown(activeReadme)}</div>
        `;
    }

    if (item.previewImage) {
        bodyHtml += `
            <div class="doc-preview-wrapper">
                <img src="${safeAssetUrl(item.previewImage)}" alt="${escapeHtml(item.name)} Preview" class="doc-preview-img" loading="lazy" decoding="async">
            </div>
        `;
    }

    if (item.copyText) {
        const copyLabelText = (isBn && (docTrans.copyLabel_bn || item.copyLabel_bn)) ? (docTrans.copyLabel_bn || item.copyLabel_bn) : (item.copyLabel || (isBn ? 'লাইসেন্স / সিরিয়াল কি' : 'License / Serial Key'));
        const copyBtnText = isBn ? 'কপি করুন' : ('Copy ' + escapeHtml(item.copyLabel || 'Key'));
        bodyHtml += `
            <div class="doc-key-card">
                <div class="doc-key-info">
                    <span class="doc-key-label"><i class="fa-solid fa-key"></i> ${escapeHtml(copyLabelText)}</span>
                    <code class="doc-key-code">${escapeHtml(item.copyText)}</code>
                </div>
                <button class="doc-key-copy-btn" data-copy="${escapeHtml(item.copyText)}" onclick="doCopy(this.getAttribute('data-copy'))">
                    <i class="fa-solid fa-copy"></i> ${copyBtnText}
                </button>
            </div>
        `;
    }

    if (item.commands && item.commands.length > 0) {
        bodyHtml += `<div class="readme-title"><i class="fa-solid fa-terminal"></i> ${isBn ? 'পাওয়ারশেল কমান্ড' : 'PowerShell Commands'}</div>`;
        item.commands.forEach((cmd, idx) => {
            const cmdDescBn = (docTrans.commands_bn && docTrans.commands_bn[idx]) || cmd.desc_bn;
            const cmdDesc = (isBn && cmdDescBn) ? cmdDescBn : cmd.desc;
            bodyHtml += `
                <div class="command-block">
                    <span class="command-label">${isBn ? 'কমান্ড' : 'Command'}</span>
                    <p class="command-desc">${escapeHtml(cmdDesc)}</p>
                    <div class="code-box">
                        <code>${escapeHtml(cmd.code)}</code>
                    </div>
                    <button class="code-copy-btn" data-copy="${escapeHtml(cmd.code)}" onclick="doCopy(this.getAttribute('data-copy'))">
                        <i class="fa-solid fa-copy"></i> ${isBn ? 'কমান্ড কপি' : 'Copy Command'}
                    </button>
                </div>
            `;
        });
    }

    if (item.content) {
        bodyHtml += `
            <div class="readme-title"><i class="fa-solid fa-file-code"></i> ${isBn ? 'কোড / রেফারেন্স' : 'Code / Reference'}</div>
            <div class="code-card">
                <div class="code-box">
                    <code>${escapeHtml(item.content)}</code>
                </div>
                <button class="code-copy-btn" onclick="doCopy('${escapeJsString(item.content)}')">
                    <i class="fa-solid fa-copy"></i> ${isBn ? 'কোড কপি' : 'Copy Code'}
                </button>
            </div>
        `;
    }

    bodyHtml += `</div>`;

    detailContent.innerHTML = `
        <button class="back-btn" onclick="hideDetail()" aria-label="Back to Explorer Grid">
            <i class="fa-solid fa-arrow-left"></i> ${shqTranslations[currentLang] && shqTranslations[currentLang].btn_back_explorer ? shqTranslations[currentLang].btn_back_explorer : (currentLang === 'bn' ? 'ভান্ডারে ফিরে যান' : 'Back to Explorer')}
        </button>
        <div class="detail-grid">
            <aside class="detail-hero-column">${heroHtml}</aside>
            ${bodyHtml}
        </div>
    `;

    window.scrollTo({ top: 0, behavior: 'instant' });
    if (!isFromPopstate) {
        history.pushState({ view: 'detail', id: id }, '', `#${id}`);
    }
}

function hideDetail(isFromPopstate = false) {
    mainLayout.classList.remove('detail-mode');
    detailView.classList.remove('active');
    explorerView.classList.add('active');

    let targetPos = explorerScrollPos;
    try {
        const saved = sessionStorage.getItem('explorerScrollPos');
        if (saved !== null) {
            targetPos = parseInt(saved, 10) || targetPos;
        }
    } catch (e) {}

    window.scrollTo({ top: targetPos, behavior: 'instant' });
    requestAnimationFrame(() => {
        window.scrollTo({ top: targetPos, behavior: 'instant' });
    });
    setTimeout(() => {
        window.scrollTo({ top: targetPos, behavior: 'instant' });
    }, 40);

    if (!isFromPopstate) {
        history.pushState({ view: 'explorer' }, '', window.location.pathname);
    }
}

let toastTimer;
function doCopy(text) {
    function showToast() {
        clearTimeout(toastTimer);
        const currentLang = document.documentElement.getAttribute('data-lang') || 'en';
        const isBn = currentLang === 'bn';
        copyToast.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${isBn ? 'ক্লিপবোর্ডে কপি হয়েছে!' : 'Copied to clipboard!'}`;
        copyToast.classList.add('show');
        toastTimer = setTimeout(() => copyToast.classList.remove('show'), 2000);
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(showToast).catch(() => {
            copyFallback(text);
            showToast();
        });
    } else {
        copyFallback(text);
        showToast();
    }
}

function copyFallback(text) {
    const el = document.createElement('textarea');
    el.value = text;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function escapeJsString(str) {
    if (!str) return '';
    return String(str).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '\\"');
}

function formatMarkdown(text) {
    if (!text) return '';
    let formatted = escapeHtml(text);
    formatted = formatted.replace(/^##\s*(.*?)\r?\n+/gim, '<div class="readme-meta">$1</div>');
    formatted = formatted.replace(/^##\s*(.*?)$/gim, '<div class="readme-meta">$1</div>');
    formatted = formatted.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
    formatted = formatted.replace(/`([^`]+)`/gim, '<code>$1</code>');
    return formatted.trim();
}

// Global Keyboard Handler (Escape to close detail view or dropdown)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (catDropdownMenu && catDropdownMenu.classList.contains('show')) {
            closeDropdown();
        } else if (detailView.classList.contains('active')) {
            hideDetail();
        }
    }
});

function updateSearchPlaceholder() {
    if (fileSearch) {
        const currentLang = document.documentElement.getAttribute('data-lang') || 'en';
        if (currentLang === 'bn') {
            fileSearch.placeholder = window.innerWidth <= 600 ? "খুঁজুন..." : "প্রয়োজনীয় টুলস, স্ক্রিপ্ট, কমান্ড খুঁজুন...";
        } else {
            fileSearch.placeholder = window.innerWidth <= 600 ? "Search..." : "Search essential tools, scripts, commands...";
        }
    }
}

// Initialize Explorer
document.addEventListener('DOMContentLoaded', () => {
    // Language & Theme initialization for Software HQ
    const root = document.documentElement;
    const langToggle = document.getElementById('langToggle');
    const langToggleMobile = document.getElementById('langToggleMobile');
    const themeToggle = document.getElementById('themeToggle');
    const themeToggleMobile = document.getElementById('themeToggleMobile');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const drawerBackdrop = document.getElementById('drawerBackdrop');

    // Top Nav Selection Pill (Glider) Positioning
    const glider = document.getElementById('navGlider');
    let gliderInitialized = false;

    const syncGlider = (immediate = false) => {
        if (window.__portfolioScriptLoaded) return;
        if (!glider || window.innerWidth < 1024) return;
        const activeTab = document.querySelector('.nav a.active') || document.getElementById('navSoftwareHq');
        if (activeTab) {
            const left = Math.round(activeTab.offsetLeft);
            const width = Math.round(activeTab.offsetWidth);
            if (width <= 0) return;
            glider.style.removeProperty('opacity');
            glider.classList.add('visible');
            if (immediate || !gliderInitialized) {
                glider.style.transition = 'none';
                glider.style.transform = `translate3d(${left}px, 0, 0)`;
                glider.style.width = `${width}px`;
                gliderInitialized = true;
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        if (glider) glider.style.transition = '';
                    });
                });
                return;
            }
            glider.style.transform = `translate3d(${left}px, 0, 0)`;
            glider.style.width = `${width}px`;
        }
    };

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

    const applyLanguage = (lang) => {
        root.setAttribute('data-lang', lang);
        root.setAttribute('lang', lang);
        localStorage.setItem('portfolio-lang', lang);

        const dict = (typeof shqTranslations !== 'undefined' ? shqTranslations[lang] : null) || shqTranslations.en;
        document.querySelectorAll('#softwareHqView [data-i18n], .files-layout [data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                if (dict[key].includes('<')) {
                    el.innerHTML = dict[key];
                } else {
                    el.textContent = dict[key];
                }
            }
        });

        // Update dropdown menu items
        document.querySelectorAll('.dropdown-item').forEach(item => {
            const catId = item.getAttribute('data-category');
            if (categoryNames[catId]) {
                const icon = item.querySelector('i');
                const iconHtml = icon ? icon.outerHTML : '';
                item.innerHTML = `${iconHtml} ${categoryNames[catId][lang] || categoryNames[catId].en}`;
            }
        });

        // Update dropdown button label to match active language
        if (catDropdownLabel) {
            if (currentCategory === 'all') {
                catDropdownLabel.textContent = lang === 'bn' ? 'ক্যাটাগরি' : 'Categories';
            } else if (categoryNames[currentCategory]) {
                catDropdownLabel.textContent = categoryNames[currentCategory][lang] || categoryNames[currentCategory].en;
            }
        }

        updateLangToggleUi(lang);
        updateSearchPlaceholder();
        renderExplorer();

        // Immediately update top navigation glider with new tab widths
        if (!window.__portfolioScriptLoaded) {
            syncGlider();
            requestAnimationFrame(() => {
                syncGlider();
                requestAnimationFrame(syncGlider);
            });
            setTimeout(syncGlider, 60);
        }

        if (detailView && detailView.classList.contains('active') && window.location.hash) {
            showDetail(window.location.hash.substring(1), true);
        }
    };

    const toggleLanguage = async () => {
        const cur = root.getAttribute('data-lang') || 'en';
        const newLang = cur === 'bn' ? 'en' : 'bn';
        // If switching to Bangla, ensure Hind Siliguri is completely ready before rendering
        if (newLang === 'bn' && document.fonts && !document.fonts.check('1em "Hind Siliguri"')) {
            try {
                await Promise.all([
                    document.fonts.load('400 1em "Hind Siliguri"'),
                    document.fonts.load('600 1em "Hind Siliguri"'),
                    document.fonts.load('700 1em "Hind Siliguri"')
                ]);
            } catch (e) {}
        }
        applyLanguage(newLang);
    };

    if (!window.__portfolioScriptLoaded) {
        [langToggle, langToggleMobile].forEach(btn => {
            if (btn) {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    toggleLanguage();
                });
            }
        });

        const updateThemeToggleUi = (theme) => {
            const isDark = theme === 'dark';
            [themeToggle, themeToggleMobile].forEach(t => {
                if (!t) return;
                t.setAttribute('data-state', isDark ? 'right' : 'left');
                t.setAttribute('aria-checked', isDark ? 'true' : 'false');
                t.setAttribute('aria-label', isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');
                t.setAttribute('title', isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');
            });
        };

        const applyTheme = (theme) => {
            root.setAttribute('data-theme', theme);
            localStorage.setItem('portfolio-theme', theme);
            updateThemeToggleUi(theme);
        };

        [themeToggle, themeToggleMobile].forEach(btn => {
            if (btn) {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const newTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
                    applyTheme(newTheme);
                });
            }
        });

        // Mobile Expanding Navbar Logic (Actual Navbar Container Extends Down)
        const navWrap = document.getElementById('navWrap');
        const mobileNavContent = document.getElementById('mobileNavContent');

        let isMenuOpen = false;

        const openMenu = () => {
            if (isMenuOpen || !navWrap) return;
            isMenuOpen = true;
            navWrap.classList.add('menu-open');

            if (mobileMenuBtn) {
                mobileMenuBtn.classList.add('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'true');
                mobileMenuBtn.setAttribute('aria-label', 'Close Navigation Menu');
            }

            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            if (scrollbarWidth > 0) {
                document.body.style.paddingRight = `${scrollbarWidth}px`;
            }
            document.body.style.overflow = 'hidden';
        };

        const closeMenu = () => {
            if (!isMenuOpen || !navWrap) return;
            isMenuOpen = false;
            navWrap.classList.remove('menu-open');

            if (mobileMenuBtn) {
                mobileMenuBtn.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                mobileMenuBtn.setAttribute('aria-label', 'Open Navigation Menu');
            }

            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        };

        const toggleMenu = () => {
            if (isMenuOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        };

        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleMenu();
            });
        }

        // Close when tapping outside the expanding navbar
        document.addEventListener('click', (e) => {
            if (isMenuOpen && navWrap && !navWrap.contains(e.target)) {
                closeMenu();
            }
        });

        if (mobileNavContent) {
            mobileNavContent.querySelectorAll('.nav-expand-link').forEach(link => {
                link.addEventListener('click', () => {
                    closeMenu();
                });
            });
        }

        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isMenuOpen) {
                closeMenu();
                if (mobileMenuBtn) mobileMenuBtn.focus();
            }
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 1024 && isMenuOpen) {
                closeMenu();
            }
        }, { passive: true });

        const savedLang = localStorage.getItem('portfolio-lang') || 'en';
        applyLanguage(savedLang);
        const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
        applyTheme(savedTheme);
    }


    updateSearchPlaceholder();
    window.addEventListener('resize', updateSearchPlaceholder);

    renderExplorer();

    // Detect macOS to display ⌘ K instead of Ctrl K
    const isMac = (typeof navigator !== 'undefined') && (
        (navigator.userAgentData && navigator.userAgentData.platform === 'macOS') ||
        (/Mac|iPod|iPhone|iPad/.test(navigator.platform || ''))
    );
    if (searchKbd && isMac) {
        const kbdMod = searchKbd.querySelector('.kbd-mod');
        if (kbdMod) kbdMod.textContent = '⌘';
    }

    // Search Power Shortcuts (Ctrl + K, Cmd + K, / and Escape)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (catDropdownMenu && catDropdownMenu.classList.contains('show')) {
                closeDropdown();
                return;
            }
            if (fileSearch && (document.activeElement === fileSearch || fileSearch.value)) {
                fileSearch.value = '';
                updateSearchBoxState();
                renderExplorer();
                fileSearch.blur();
                return;
            }
            return;
        }

        const activeEl = document.activeElement;
        const isInputActive = activeEl && (
            activeEl.tagName === 'INPUT' ||
            activeEl.tagName === 'TEXTAREA' ||
            activeEl.isContentEditable
        );

        const isCmdK = (e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K');
        const isSlash = e.key === '/' && !isInputActive && !e.ctrlKey && !e.metaKey && !e.altKey;

        if (isCmdK || isSlash) {
            e.preventDefault();

            if (detailView && detailView.classList.contains('active')) {
                hideDetail();
            }

            if (fileSearch) {
                fileSearch.scrollIntoView({ behavior: 'smooth', block: 'center' });
                fileSearch.focus();
                fileSearch.select();
            }
        }
    });

    let searchRaf = null;
    const debouncedRenderExplorer = () => {
        if (searchRaf) cancelAnimationFrame(searchRaf);
        searchRaf = requestAnimationFrame(renderExplorer);
    };

    if (fileSearch) {
        fileSearch.addEventListener('input', debouncedRenderExplorer);
    }

    if (pillAll) {
        pillAll.onclick = () => selectCategory('all');
    }

    if (catDropdownBtn) {
        catDropdownBtn.onclick = (e) => {
            e.stopPropagation();
            toggleDropdown();
        };
    }

    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.onclick = (e) => {
            e.stopPropagation();
            selectCategory(item.getAttribute('data-category'));
        };
    });

    // Close dropdown on outside click
    document.addEventListener('click', (e) => {
        if (catDropdownMenu && catDropdownMenu.classList.contains('show')) {
            if (!catDropdownMenu.contains(e.target) && !catDropdownBtn.contains(e.target)) {
                closeDropdown();
            }
        }
    });

    window.addEventListener('popstate', (e) => {
        if (e.state && e.state.view === 'detail') {
            showDetail(e.state.id, true);
        } else if (detailView && detailView.classList.contains('active')) {
            hideDetail(true);
        }
    });

    if (window.location.hash && !['#about', '#skills', '#projects', '#contact', '#top'].includes(window.location.hash)) {
        const id = window.location.hash.substring(1);
        const itemExists = typeof filesData !== 'undefined' && filesData.some(f => f.id === id);
        if (itemExists) {
            showDetail(id, true);
        }
    }

    // Page Slide In Transition for Main Content
    const pageMain = document.querySelector('.page-main');
    const transitionDir = sessionStorage.getItem('page-transition-dir');
    if (pageMain && (transitionDir === 'to-files' || !transitionDir)) {
        pageMain.classList.add('page-slide-in-right');
        sessionStorage.removeItem('page-transition-dir');
        setTimeout(() => {
            pageMain.classList.remove('page-slide-in-right');
        }, 360);
    }

    if (!window.__portfolioScriptLoaded) {
        // Top Nav Selection Pill (Glider) Initial Positioning
        syncGlider(true);
        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(() => syncGlider(true));
        }
        window.addEventListener('load', () => syncGlider(true));
        window.addEventListener('resize', () => syncGlider(false), { passive: true });
    }

    // Smooth Page Exit Slide When Clicking Back to Main Tabs (Standalone Fallback Only)
    if (!window.__portfolioScriptLoaded) {
        document.querySelectorAll('.nav a[href^="index.html"]').forEach(link => {
            link.addEventListener('click', (e) => {
                const targetHref = link.getAttribute('href');
                document.querySelectorAll('.nav a').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                if (glider && window.innerWidth >= 1024) {
                    glider.style.transform = `translate3d(${Math.round(link.offsetLeft)}px, 0, 0)`;
                    glider.style.width = `${Math.round(link.offsetWidth)}px`;
                }
                sessionStorage.setItem('page-transition-dir', 'to-index');
                if ('startViewTransition' in document) {
                    return;
                }
                e.preventDefault();
                if (pageMain) {
                    pageMain.classList.add('page-exit-right');
                }
                setTimeout(() => {
                    window.location.href = targetHref;
                }, 180);
            });
        });

        const brandLink = document.querySelector('.header .brand[href="index.html"]');
        if (brandLink) {
            brandLink.addEventListener('click', (e) => {
                sessionStorage.setItem('page-transition-dir', 'to-index');
                if ('startViewTransition' in document) {
                    return;
                }
                e.preventDefault();
                if (pageMain) {
                    pageMain.classList.add('page-exit-right');
                }
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 180);
            });
        }
    }

    // Register PWA Service Worker (Offline Support for Software HQ)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js').catch(() => {});
        });
    }
});

    // =========================================================================
    // Antigravity Hardware Capability & Performance Governor
    // =========================================================================
    (function initPerfGovernor() {
        const root = document.documentElement;

        let isSoftwareGpu = false;
        let rendererString = 'Hardware GPU';
        try {
            const canvas = document.createElement('canvas');
            const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
            if (gl) {
                const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
                if (debugInfo) {
                    rendererString = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || 'Hardware GPU';
                    const lower = rendererString.toLowerCase();
                    isSoftwareGpu = /swiftshader|llvmpipe|softpipe|software|basic render|microsoft basic render|mesa/i.test(lower);
                }
            } else {
                isSoftwareGpu = true;
                rendererString = 'Software (No WebGL)';
            }
        } catch (e) {
            isSoftwareGpu = true;
        }

        const cores = navigator.hardwareConcurrency || 4;
        const memory = navigator.deviceMemory || 4;
        const isSaveData = !!(navigator.connection && (navigator.connection.saveData || /2g/.test(navigator.connection.effectiveType || '')));
        const isReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        let tier = 'full';
        const savedTier = sessionStorage.getItem('perf-governor-tier');
        if (savedTier && ['full', 'balanced', 'lean'].includes(savedTier)) {
            tier = savedTier;
        } else if (isReducedMotion || isSoftwareGpu || isSaveData || cores <= 2 || memory <= 2) {
            tier = 'lean';
        } else if (cores <= 4 || memory <= 4) {
            tier = 'balanced';
        } else {
            tier = 'full';
        }

        root.setAttribute('data-perf-tier', tier);

        let slowFrames = 0;
        let lastFrameTime = performance.now();
        let frameCount = 0;
        let currentFps = 60;

        const sampleFrame = (now) => {
            const delta = now - lastFrameTime;
            lastFrameTime = now;
            frameCount++;

            if (delta > 36) {
                slowFrames++;
                if (slowFrames > 6 && tier === 'full' && !sessionStorage.getItem('perf-governor-tier')) {
                    tier = 'balanced';
                    root.setAttribute('data-perf-tier', tier);
                } else if (slowFrames > 12 && tier === 'balanced' && !sessionStorage.getItem('perf-governor-tier')) {
                    tier = 'lean';
                    root.setAttribute('data-perf-tier', tier);
                }
            } else if (delta < 20) {
                slowFrames = Math.max(0, slowFrames - 1);
            }

            if (now - fpsHistoryStartTime >= 500) {
                currentFps = Math.round((frameCount * 1000) / (now - fpsHistoryStartTime));
                frameCount = 0;
                fpsHistoryStartTime = now;
                updateHud();
            }

            if (isHudActive || document.visibilityState === 'visible') {
                requestAnimationFrame(sampleFrame);
            }
        };

        let fpsHistoryStartTime = performance.now();
        let isHudActive = window.location.search.includes('perf=1') || window.location.hash.includes('perf=1') || sessionStorage.getItem('perf-debug-hud') === '1';

        let hudEl = null;
        function updateHud() {
            if (!hudEl) return;
            const fpsEl = hudEl.querySelector('[data-hud-fps]');
            if (fpsEl) {
                fpsEl.textContent = `${currentFps} FPS`;
                fpsEl.className = 'hud-val ' + (currentFps >= 55 ? 'fps-good' : (currentFps >= 35 ? 'fps-mid' : 'fps-bad'));
            }
        }

        function renderHud() {
            if (document.getElementById('perfGovernorHud')) return;
            hudEl = document.createElement('div');
            hudEl.id = 'perfGovernorHud';
            hudEl.setAttribute('role', 'status');
            hudEl.innerHTML = `
                <div class="hud-header">
                    <span>⚡ Antigravity Governor</span>
                    <span style="font-size:0.75rem; opacity:0.8; cursor:pointer;" onclick="this.closest('#perfGovernorHud').remove(); sessionStorage.removeItem('perf-debug-hud');">✕</span>
                </div>
                <div class="hud-row">
                    <span class="hud-label">FPS Target:</span>
                    <span class="hud-val fps-good" data-hud-fps>60 FPS</span>
                </div>
                <div class="hud-row">
                    <span class="hud-label">Active Tier:</span>
                    <span class="hud-val" id="hudActiveTier" style="text-transform:uppercase; color:#38bdf8;">${tier}</span>
                </div>
                <div class="hud-row">
                    <span class="hud-label">GPU Render:</span>
                    <span class="hud-val" style="font-size:0.65rem; max-width:140px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${rendererString}">${rendererString}</span>
                </div>
                <div class="hud-row">
                    <span class="hud-label">Cores / RAM:</span>
                    <span class="hud-val">${cores} cores / ${memory}GB</span>
                </div>
                <div class="hud-row">
                    <span class="hud-label">View Transitions:</span>
                    <span class="hud-val" style="color:#34d399;">${'startViewTransition' in document ? 'Native 120fps' : 'CSS Fallback'}</span>
                </div>
                <div class="hud-tier-buttons">
                    <button type="button" class="hud-tier-btn ${tier === 'full' ? 'active' : ''}" data-tier="full">Full</button>
                    <button type="button" class="hud-tier-btn ${tier === 'balanced' ? 'active' : ''}" data-tier="balanced">Balanced</button>
                    <button type="button" class="hud-tier-btn ${tier === 'lean' ? 'active' : ''}" data-tier="lean">Lean</button>
                </div>
            `;
            document.body.appendChild(hudEl);

            hudEl.querySelectorAll('.hud-tier-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const newTier = btn.getAttribute('data-tier');
                    tier = newTier;
                    sessionStorage.setItem('perf-governor-tier', newTier);
                    root.setAttribute('data-perf-tier', newTier);
                    hudEl.querySelectorAll('.hud-tier-btn').forEach(b => b.classList.toggle('active', b === btn));
                    const tierEl = hudEl.querySelector('#hudActiveTier');
                    if (tierEl) tierEl.textContent = newTier.toUpperCase();
                });
            });
        }

        if (isHudActive) {
            sessionStorage.setItem('perf-debug-hud', '1');
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', renderHud);
            } else {
                renderHud();
            }
            requestAnimationFrame(sampleFrame);
        } else {
            requestAnimationFrame(sampleFrame);
        }

        window.addEventListener('pageshow', (event) => {
            if (event.persisted) {
                const pm = document.querySelector('.page-main');
                if (pm) {
                    pm.classList.remove('page-exit-left', 'page-exit-right', 'page-slide-in-left', 'page-slide-in-right');
                }
                if (typeof syncGlider === 'function') syncGlider(false);
            }
        });
    })();

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
            copyFallback(text);
            updateBtnUi();
        });
    } else {
        copyFallback(text);
        updateBtnUi();
    }
};

window.showDetail = showDetail;
window.hideDetail = hideDetail;
window.clearSearch = clearSearch;
window.doCopy = doCopy;
window.renderSoftwareHqExplorer = (force = false) => {
    if (!hasRenderedExplorerOnce || force) {
        renderExplorer();
    }
};
window.applySoftwareHqLanguage = (lang) => {
    if (typeof applyLanguage === 'function') applyLanguage(lang);
};
window.shqTranslations = shqTranslations;
window.selectCategory = selectCategory;
