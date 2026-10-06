/**
 * Software HQ | Humayoun Kobir Repository
 * Fast, client-side utility directory with search, dynamic category grouping, and hash routing.
 */

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
        icon: "fa-solid fa-file-pdf",
        path: "assets/Foxit pdf editor.rar",
        keywords: "foxit pdf editor convert merge annotate sign documents",
        readme: "## Overview\nFast PDF editor and converter to create, annotate, sign, and organize documents."
    }
];

// DOM Elements
const mainLayout = document.getElementById('mainLayout');
const explorerView = document.getElementById('explorerView');
const detailView = document.getElementById('detailView');
const fileGrid = document.getElementById('fileGrid');
const detailContent = document.getElementById('detailContent');
const fileSearch = document.getElementById('fileSearch');
const copyToast = document.getElementById('copyToast');
const pillAll = document.getElementById('pillAll');
const catDropdownBtn = document.getElementById('catDropdownBtn');
const catDropdownMenu = document.getElementById('catDropdownMenu');
const catDropdownIcon = document.getElementById('catDropdownIcon');
const catDropdownLabel = document.getElementById('catDropdownLabel');

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
        item.classList.toggle('active', item.dataset.category === catId);
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
    card.setAttribute('aria-label', `View details for ${item.name}`);

    card.onclick = () => showDetail(item.id);
    card.onkeydown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            showDetail(item.id);
        }
    };

    const categoryObj = categoryList.find(c => c.id === item.category);
    const subLabel = item.badge || (categoryObj ? categoryObj.name : 'Utility');

    card.innerHTML = `
        <div class="file-info">
            <div class="file-icon"><i class="${item.icon}"></i></div>
            <div class="file-meta">
                <h3>${escapeHtml(item.name)}</h3>
                <span>${escapeHtml(subLabel)}</span>
            </div>
        </div>
    `;
    return card;
}

function renderExplorer() {
    const query = fileSearch ? fileSearch.value.toLowerCase().trim() : '';
    explorerView.innerHTML = '';

    const filtered = fileData.filter(item => {
        const matchesCategory = (currentCategory === 'all' || item.category === currentCategory);
        if (!matchesCategory) return false;

        if (!query) return true;

        const categoryObj = categoryList.find(c => c.id === item.category);
        const searchableText = [
            item.name,
            item.category,
            categoryObj ? categoryObj.name : '',
            item.badge || '',
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
            const section = document.createElement('div');
            section.className = 'section-group';
            section.innerHTML = `
                <div class="group-header">
                    <h2 class="group-title"><i class="${cat.icon}"></i> ${escapeHtml(cat.name)}</h2>
                    <span class="group-count">${itemsInCat.length} items</span>
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
    const categoryLabel = categoryObj ? categoryObj.name : 'Software Utility';
    const versionBadge = item.badge ? `${categoryLabel} • ${item.badge}` : categoryLabel;

    let heroHtml = `
        <div class="detail-hero-info">
            <div class="detail-icon"><i class="${item.icon}"></i></div>
            <h1>${escapeHtml(item.name)}</h1>
            <span class="version-badge">${escapeHtml(versionBadge)}</span>
        </div>
    `;

    if (item.links && item.links.length > 0) {
        item.links.forEach(link => {
            heroHtml += `
                <a href="${link.url}" ${link.download ? 'download' : 'target="_blank" rel="noopener noreferrer"'} class="${link.primary ? 'download-hero' : 'btn-secondary-soft'}">
                    <i class="${link.icon || 'fa-solid fa-download'}"></i> ${escapeHtml(link.label)}
                </a>
            `;
        });
    } else if (item.id === "adobe-suite") {
        heroHtml += `
            <a href="${item.photoshopUrl}" target="_blank" rel="noopener noreferrer" class="download-hero adobe-ps">
                <i class="fa-solid fa-download"></i> Photoshop 2020
            </a>
            <a href="${item.illustratorUrl}" target="_blank" rel="noopener noreferrer" class="download-hero adobe-ai">
                <i class="fa-solid fa-download"></i> Illustrator 2020
            </a>
        `;
    } else if (item.id === "winrar") {
        heroHtml += `
            <a href="${item.path}" class="download-hero" download>
                <i class="fa-solid fa-key"></i> Activation Fix
            </a>
            <a href="${item.officialUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary-soft">
                <i class="fa-solid fa-download"></i> Official WinRAR
            </a>
            <a href="${item.sevenZipUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary-soft">
                <i class="fa-solid fa-box-open"></i> Get 7-Zip (FOSS)
            </a>
        `;
    } else if (item.id === "hwinfo") {
        heroHtml += `
            <a href="${item.installerUrl}" target="_blank" rel="noopener noreferrer" class="download-hero">
                <i class="fa-solid fa-download"></i> Official Installer
            </a>
            <a href="${item.portableUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary-soft">
                <i class="fa-solid fa-box-archive"></i> Portable Version
            </a>
        `;
    } else if (item.path.startsWith('http')) {
        heroHtml += `
            <a href="${item.path}" target="_blank" rel="noopener noreferrer" class="download-hero">
                <i class="fa-solid fa-up-right-from-square"></i> Open Resource
            </a>
        `;
    } else {
        heroHtml += `
            <a href="${item.path}" class="download-hero" download>
                <i class="fa-solid fa-download"></i> Download File
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
                <button class="doc-key-copy-btn" onclick="doCopy('${escapeJsString(item.copyText)}')">
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
                    <pre><button class="pre-copy-btn" onclick="doCopy('${escapeJsString(cmd.code)}')"><i class="fa-solid fa-copy"></i> Copy</button><code>${escapeHtml(cmd.code)}</code></pre>
                </div>
            `;
        });
    }

    if (item.content) {
        bodyHtml += `
            <div class="readme-title"><i class="fa-solid fa-file-code"></i> Code / Reference</div>
            <pre><button class="pre-copy-btn" onclick="doCopy('${escapeJsString(item.content)}')"><i class="fa-solid fa-copy"></i> Copy</button><code>${escapeHtml(item.content)}</code></pre>
        `;
    }

    bodyHtml += `</div>`;

    detailContent.innerHTML = `
        <button class="back-btn" onclick="hideDetail()" aria-label="Back to Explorer Grid">
            <i class="fa-solid fa-arrow-left"></i> Back to Explorer
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

    window.scrollTo({ top: explorerScrollPos, behavior: 'instant' });

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
        fileSearch.placeholder = window.innerWidth <= 600 ? "Search..." : "Search essential tools, scripts, commands...";
    }
}

// Initialize Explorer
document.addEventListener('DOMContentLoaded', () => {
    updateSearchPlaceholder();
    window.addEventListener('resize', updateSearchPlaceholder);

    renderExplorer();

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
            selectCategory(item.dataset.category);
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
});
