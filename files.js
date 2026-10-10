/**
 * Software HQ | Humayoun Kobir Repository
 * Fast, client-side utility directory with search, dynamic category grouping, and hash routing.
 */


// =========================================================================
// Bilingual Translation Dictionary for Software HQ
// =========================================================================
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
        shq_title: "Software HQ",
        cat_all: "All Tools",
        cat_select: "Select Category",
        btn_back_explorer: "Back to Explorer",
        btn_download_file: "Download File",
        btn_open_resource: "Open Resource",
        btn_copy_cmd: "Copy Command",
        btn_copy_code: "Copy Code",
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
        cat_all: "সকল টুলস",
        cat_select: "ক্যাটাগরি বাছাই করুন",
        btn_back_explorer: "ভান্ডারে ফিরে যান",
        btn_download_file: "ফাইল ডাউনলোড",
        btn_open_resource: "রিসোর্স খুলুন",
        btn_copy_cmd: "কমান্ড কপি",
        btn_copy_code: "কোড কপি",
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
        path: "assets/Avro/setup_avrokeyboard_5.6.0.exe",
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
        path: "assets/DirectX 11 Setup.rar",
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
        path: "assets/Good Bye DPI/goodbyedpi-0.2.2.rar",
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
        path: "assets/scripts/master-productivity-macro.ahk",
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
            { label: "Official Download", url: "https://www.qbittorrent.org/download", icon: "fa-solid fa-download", primary: true },
            { label: "GitHub Source (FOSS)", url: "https://github.com/qbittorrent/qBittorrent", icon: "fa-brands fa-github" }
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
        path: "assets/Visual C++ Runtimes All-in-One-Jun-2026.zip",
        keywords: "vcredist visual c++ redistributable runtimes 2005 2022 x86 x64 dll fix",
        readme: "## Overview\nAll-in-One package containing every Visual C++ Redistributable runtime (2005–2022), both x86 and x64.\n\n## Instructions\n1. Extract the ZIP file.\n2. Run the included batch installer to install all runtimes at once.\n\n## Why You Need This\nFixes common 'VCRUNTIME140.dll missing' or 'MSVCP.dll not found' errors."
    },
    {
        id: "win-office-act",
        name: "Windows & Office Activator",
        category: "utilities",
        badge: "MAS PowerShell Script",
        name_bn: "উইন্ডোজ ও অফিস অ্যাক্টিভেটর",
        badge_bn: "MAS পাওয়ারশেল স্ক্রিপ্ট",
        icon: "fa-solid fa-key",
        path: "assets/Windows Office Activation Script.txt",
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
        path: "assets/Winrar/rarreg.rar",
        officialUrl: "https://www.win-rar.com/fileadmin/winrar-versions/winrar-x64-701.exe",
        sevenZipUrl: "https://www.7-zip.org/",
        keywords: "winrar 7zip compression zip rar archive rarreg key extract",
        readme: "## Instructions\n1. Install Official WinRAR.\n2. Extract 'rarreg.key' from the downloaded RAR.\n3. Move 'rarreg.key' into the WinRAR installation folder (`C:\\Program Files\\WinRAR`).\n\n## 7-Zip Recommendation\nIf you prefer free open-source software, 7-Zip is the best lightweight alternative to WinRAR."
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
        path: "assets/BIOS enter button/One click to Bios.rar",
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
            { label: "Official Website", url: "https://www.bcuninstaller.com/", icon: "fa-solid fa-download", primary: true },
            { label: "GitHub Releases (FOSS)", url: "https://github.com/Klocman/Bulk-Crap-Uninstaller/releases", icon: "fa-brands fa-github" }
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
        path: "assets/Registry path of context menu.txt",
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
        path: "assets/scripts/clean-cache-purger.bat",
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
        path: "assets/Glary Utility/Glary_Utilities_v5.211.0.240.exe",
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
        path: "assets/scripts/godmode-creator.bat",
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
        path: "assets/scripts/power-context-menu.reg",
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
        path: "assets/Revo Uninstaller Pro 5.4.3 FINAL/Revo Uninsataller.rar",
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
        path: "assets/Right click repair code.txt",
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
        path: "assets/Windows 10 Right click menu/Old-Right-Click-Menu-WIndows-11.zip",
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
        path: "assets/Windows 11 rounded Cursor/windows_11 cursors.zip",
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
        path: "assets/scripts/disable-web-search.reg",
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
        path: "assets/CrystalDiskInfo/CDI.rar",
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
        path: "assets/CrystalDiskMark/CDM.rar",
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
        path: "assets/EaseUS_Data_Recovery_Wizard_Technician_12.8.0_Multilingual/EaseUS_Data_Recovery_Wizard_Technician_12.8.0_Multilingual.rar",
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
        path: "assets/EaseUS_Partition_Master_13.0_Technician_Edition/EPM Technical Edition.rar",
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
            { label: "GitHub Repository", url: "https://github.com/GurutejaReddy-04/GooglePhotos-TakeoutRestorer", icon: "fa-brands fa-github", primary: true },
            { label: "Releases & Download", url: "https://github.com/GurutejaReddy-04/GooglePhotos-TakeoutRestorer/releases", icon: "fa-solid fa-download" }
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
        path: "assets/Picture Recovery Software/testdisk-7.3-WIP.rar",
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
            { label: "Download WizTree", url: "https://diskanalyzer.com/download", icon: "fa-solid fa-bolt", primary: true },
            { label: "Download TreeSize Free", url: "https://www.jam-software.com/treesize_free", icon: "fa-solid fa-hard-drive" }
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
        path: "assets/scripts/cru-esports-resolutions.txt",
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
        path: "assets/cru-1.5.3/CRU.rar",
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
        path: "assets/Pc optimisation.txt",
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
        path: "assets/scripts/ram-cache-flusher.bat",
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
            { label: "ThrottleStop (TechPowerUp)", url: "https://www.techpowerup.com/download/techpowerup-throttlestop/", icon: "fa-solid fa-bolt", primary: true },
            { label: "QuickCPU (CoderBag)", url: "https://coderbag.com/product/quickcpu", icon: "fa-solid fa-gauge" }
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
        path: "assets/scripts/latency-optimizer.bat",
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
        path: "assets/Autoruns/Autoruns.rar",
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
            { label: "Download CPU-Z", url: "https://www.cpuid.com/softwares/cpu-z.html", icon: "fa-solid fa-microchip", primary: true },
            { label: "Download GPU-Z", url: "https://www.techpowerup.com/download/techpowerup-gpu-z/", icon: "fa-solid fa-desktop" }
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
        path: "assets/HitmanPro_3.8.28_Build_324/HitmanPro 3.8.rar",
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
        path: "assets/ProcessExplorer/PE.rar",
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
        path: "assets/ProcessMonitor.zip",
        keywords: "procmon process monitor sysinternals registry file thread real-time",
        readme: "## Overview\nProcess Monitor is an advanced monitoring tool for Windows that shows real-time file system, Registry, and process/thread activity."
    },

    // =========================================================================
    // [6] CREATIVE & DESIGN (Alphabetical A-Z)
    // =========================================================================
    {
        id: "adobe-suite",
        name: "Adobe Software Suite",
        category: "creative",
        badge: "Photoshop & Illustrator 2020",
        name_bn: "অ্যাডোবি সফটওয়্যার সুইট",
        badge_bn: "ফটোশপ ও ইলাস্ট্রেটর ২০২০",
        icon: "fa-solid fa-palette",
        path: "Adobe Software",
        photoshopUrl: "https://getitintopc.com/adobe-photoshop-cc-2020-free-download/",
        illustratorUrl: "https://getitintopc.com/adobe-illustrator-cc-2020-free-download/",
        keywords: "photoshop illustrator adobe graphic design 2020 creative suite vector raster",
        readme: "## Included Software\n- Adobe Photoshop CC 2020: Photo editing and digital imaging.\n- Adobe Illustrator CC 2020: Vector graphics, typography, and logo design."
    },
    {
        id: "fontlab",
        name: "FontLab",
        category: "creative",
        badge: "OpenType Font Designer",
        name_bn: "ফন্টল্যাব (FontLab)",
        badge_bn: "ওপেনটাইপ ফন্ট ডিজাইনার",
        icon: "fa-solid fa-font",
        path: "assets/FontLab.rar",
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
        path: "assets/Foxit pdf editor.rar",
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

    if (catId === 'all') {
        if (pillAll) pillAll.classList.add('active');
        if (catDropdownBtn) catDropdownBtn.classList.remove('active');
        if (catDropdownIcon) catDropdownIcon.className = 'fa-solid fa-sliders';
        if (catDropdownLabel) catDropdownLabel.textContent = 'Categories';
    } else {
        if (pillAll) pillAll.classList.remove('active');
        if (catDropdownBtn) catDropdownBtn.classList.add('active');
        const cat = categoryList.find(c => c.id === catId);
        if (cat) {
            if (catDropdownIcon) catDropdownIcon.className = cat.icon;
            if (catDropdownLabel) catDropdownLabel.textContent = cat.name;
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
            heroHtml += `
                <a href="${finalUrl}" ${link.download ? 'download' : 'target="_blank" rel="noopener noreferrer"'} class="${link.primary ? 'download-hero' : 'btn-secondary-soft'}">
                    <i class="${link.icon || 'fa-solid fa-download'}"></i> ${escapeHtml(link.label)}
                </a>
            `;
        });
    } else if (item.id === "adobe-suite") {
        heroHtml += `
            <a href="${safeAssetUrl(item.photoshopUrl)}" target="_blank" rel="noopener noreferrer" class="download-hero adobe-ps">
                <i class="fa-solid fa-download"></i> Photoshop 2020
            </a>
            <a href="${safeAssetUrl(item.illustratorUrl)}" target="_blank" rel="noopener noreferrer" class="download-hero adobe-ai">
                <i class="fa-solid fa-download"></i> Illustrator 2020
            </a>
        `;
    } else if (item.id === "winrar") {
        heroHtml += `
            <a href="${safeAssetUrl(item.path)}" class="download-hero" download>
                <i class="fa-solid fa-key"></i> Activation Fix
            </a>
            <a href="${safeAssetUrl(item.officialUrl)}" target="_blank" rel="noopener noreferrer" class="btn-secondary-soft">
                <i class="fa-solid fa-download"></i> Official WinRAR
            </a>
            <a href="${safeAssetUrl(item.sevenZipUrl)}" target="_blank" rel="noopener noreferrer" class="btn-secondary-soft">
                <i class="fa-solid fa-box-open"></i> Get 7-Zip (FOSS)
            </a>
        `;
    } else if (item.id === "hwinfo") {
        heroHtml += `
            <a href="${safeAssetUrl(item.installerUrl)}" target="_blank" rel="noopener noreferrer" class="download-hero">
                <i class="fa-solid fa-download"></i> Official Installer
            </a>
            <a href="${safeAssetUrl(item.portableUrl)}" target="_blank" rel="noopener noreferrer" class="btn-secondary-soft">
                <i class="fa-solid fa-box-archive"></i> Portable Version
            </a>
        `;
    } else if (item.path && item.path.startsWith('http')) {
        heroHtml += `
            <a href="${item.path}" target="_blank" rel="noopener noreferrer" class="download-hero">
                <i class="fa-solid fa-up-right-from-square"></i> ${translations[currentLang] && translations[currentLang].btn_open_resource ? translations[currentLang].btn_open_resource : 'Open Resource'}
            </a>
        `;
    } else if (item.path) {
        heroHtml += `
            <a href="${safeAssetUrl(item.path)}" class="download-hero" download>
                <i class="fa-solid fa-download"></i> ${translations[currentLang] && translations[currentLang].btn_download_file ? translations[currentLang].btn_download_file : 'Download File'}
            </a>
        `;
    }

    let bodyHtml = `<div class="readme-section">`;

    if (item.readme) {
        bodyHtml += `
            <div class="readme-title"><i class="fa-solid fa-circle-info"></i> Documentation</div>
            <div class="readme-content">${formatMarkdown(item.readme)}</div>
        `;
    }

    if (item.copyText) {
        bodyHtml += `
            <div class="doc-key-card">
                <div class="doc-key-info">
                    <span class="doc-key-label"><i class="fa-solid fa-key"></i> ${escapeHtml(item.copyLabel || 'License / Serial Key')}</span>
                    <code class="doc-key-code">${escapeHtml(item.copyText)}</code>
                </div>
                <button class="doc-key-copy-btn" data-copy="${escapeHtml(item.copyText)}" onclick="doCopy(this.getAttribute('data-copy'))">
                    <i class="fa-solid fa-copy"></i> Copy ${escapeHtml(item.copyLabel || 'Key')}
                </button>
            </div>
        `;
    }

    if (item.commands && item.commands.length > 0) {
        bodyHtml += `<div class="readme-title"><i class="fa-solid fa-terminal"></i> PowerShell Commands</div>`;
        item.commands.forEach(cmd => {
            bodyHtml += `
                <div class="command-block">
                    <span class="command-label">Command</span>
                    <p class="command-desc">${escapeHtml(cmd.desc)}</p>
                    <div class="code-box">
                        <code>${escapeHtml(cmd.code)}</code>
                    </div>
                    <button class="code-copy-btn" data-copy="${escapeHtml(cmd.code)}" onclick="doCopy(this.getAttribute('data-copy'))">
                        <i class="fa-solid fa-copy"></i> Copy Command
                    </button>
                </div>
            `;
        });
    }

    if (item.content) {
        bodyHtml += `
            <div class="readme-title"><i class="fa-solid fa-file-code"></i> Code / Reference</div>
            <div class="code-card">
                <div class="code-box">
                    <code>${escapeHtml(item.content)}</code>
                </div>
                <button class="code-copy-btn" onclick="doCopy('${escapeJsString(item.content)}')">
                    <i class="fa-solid fa-copy"></i> Copy Code
                </button>
            </div>
        `;
    }

    bodyHtml += `</div>`;

    detailContent.innerHTML = `
        <button class="back-btn" onclick="hideDetail()" aria-label="Back to Explorer Grid">
            <i class="fa-solid fa-arrow-left"></i> ${translations[currentLang] && translations[currentLang].btn_back_explorer ? translations[currentLang].btn_back_explorer : 'Back to Explorer'}
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
    const syncGlider = () => {
        if (!glider || window.innerWidth < 1024) return;
        const activeTab = document.querySelector('.nav a.active') || document.getElementById('navSoftwareHq');
        if (activeTab) {
            glider.style.transform = `translate3d(${Math.round(activeTab.offsetLeft)}px, 0, 0)`;
            glider.style.width = `${Math.round(activeTab.offsetWidth)}px`;
            glider.classList.add('visible');
        }
    };

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

    const applyLanguage = (lang) => {
        root.setAttribute('data-lang', lang);
        root.setAttribute('lang', lang);
        localStorage.setItem('portfolio-lang', lang);

        const dict = translations[lang] || translations.en;
        document.querySelectorAll('[data-i18n]').forEach(el => {
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

        updateLangToggleUi(lang);
        updateSearchPlaceholder();
        renderExplorer();

        // Immediately update top navigation glider with new tab widths
        syncGlider();
        requestAnimationFrame(() => {
            syncGlider();
            requestAnimationFrame(syncGlider);
        });
        setTimeout(syncGlider, 60);

        if (detailView && detailView.classList.contains('active') && window.location.hash) {
            showDetail(window.location.hash.substring(1), true);
        }
    };

    const toggleLanguage = () => {
        const cur = root.getAttribute('data-lang') || 'en';
        const newLang = cur === 'bn' ? 'en' : 'bn';
        applyLanguage(newLang);
    };

    [langToggle, langToggleMobile].forEach(btn => {
        if (btn) btn.addEventListener('click', toggleLanguage);
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
            btn.addEventListener('click', () => {
                const newTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
                applyTheme(newTheme);
            });
        }
    });

    // Drawer open/close
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

    document.querySelectorAll('.drawer-nav a').forEach(link => {
        link.addEventListener('click', closeDrawer);
    });

    const savedLang = localStorage.getItem('portfolio-lang') || 'en';
    applyLanguage(savedLang);
    const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
    applyTheme(savedTheme);

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

    if (fileSearch) {
        fileSearch.addEventListener('input', renderExplorer);
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
        } else {
            hideDetail(true);
        }
    });

    if (window.location.hash) {
        const id = window.location.hash.substring(1);
        showDetail(id, true);
    } else {
        history.replaceState({ view: 'explorer' }, '', window.location.pathname);
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

    // Top Nav Selection Pill (Glider) Initial Positioning
    syncGlider();
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(syncGlider);
    }
    window.addEventListener('load', syncGlider);
    window.addEventListener('resize', syncGlider, { passive: true });

    // Smooth Page Exit Slide When Clicking Back to Main Tabs
    document.querySelectorAll('.nav a[href^="index.html"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetHref = link.getAttribute('href');
            document.querySelectorAll('.nav a').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            if (glider && window.innerWidth >= 1024) {
                glider.style.transform = `translate3d(${Math.round(link.offsetLeft)}px, 0, 0)`;
                glider.style.width = `${Math.round(link.offsetWidth)}px`;
            }
            sessionStorage.setItem('page-transition-dir', 'to-index');
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
            e.preventDefault();
            sessionStorage.setItem('page-transition-dir', 'to-index');
            if (pageMain) {
                pageMain.classList.add('page-exit-right');
            }
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 180);
        });
    }

    // Register PWA Service Worker (Offline Support for Software HQ)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js').catch(() => {});
        });
    }
});

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
