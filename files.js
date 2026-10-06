/**
 * Software HQ | Humayoun Kobir Repository
 * Fast, client-side utility directory with search, filtering, and hash routing.
 * Features verified downloads, custom scripts, and official latest update endpoints.
 */

const fileData = [
    // =========================================================================
    // 1. BESPOKE CUSTOM SCRIPTS & POWER TWEAKS (HANDCRAFTED BY HUMAYOUN KOBIR)
    // =========================================================================
    {
        id: "latency-optimizer",
        name: "Windows Latency & Stutter Optimizer",
        category: "scripts",
        icon: "fa-solid fa-bolt",
        path: "assets/scripts/latency-optimizer.bat",
        keywords: "latency stutter input lag bcdedit timer resolution hpet tcp nodelay nagle diagtrack game dvr",
        readme: "## Overview\nA comprehensive, handcrafted batch script by Humayoun Kobir designed to minimize DPC latency, eliminate micro-stutters, and optimize Windows 10/11 for real-time responsiveness.\n\n## Optimizations Included\n1. **BCDedit Timer Resolution**: Disables dynamic tick and platform clock jitter (`disabledynamictick yes`, `useplatformclock false`).\n2. **TCP Latency**: Disables Nagle's algorithm and sets `TcpAckFrequency=1` for lowest network packet latency.\n3. **GameDVR Background Capture**: Disables intrusive Xbox background game recording.\n4. **Telemetry Suppression**: Stops Windows Diagnostic Tracking (`DiagTrack`).\n5. **Multimedia Scheduling**: Sets maximum GPU priority and multimedia responsiveness.\n\n## How to Use\n1. Download `latency-optimizer.bat`.\n2. Right-click and select **Run as administrator**.\n3. Restart your PC for kernel timer changes to take full effect."
    },
    {
        id: "deep-cleaner",
        name: "Deep Clean & Shader Cache Purger",
        category: "scripts",
        icon: "fa-solid fa-broom",
        path: "assets/scripts/deep-cleaner.bat",
        keywords: "clean temp cache prefetch crash dumps directx shader nvidia amd d3dscache junk cleaner",
        readme: "## Overview\nA deep maintenance cleanup tool that safely clears hidden Windows caches, corrupted shader binaries, and temporary files that standard disk cleanup tools miss.\n\n## Areas Cleaned\n- User & System Temp Folders (`%temp%` & `C:\\Windows\\Temp`)\n- Windows Prefetch Memory Cache\n- Application Crash Dumps & Windows Error Reporting Logs\n- DirectX Shader Cache (`D3DSCache`)\n- NVIDIA & AMD GPU Driver Shader Caches (`DXCache`, `GLCache`)\n- Windows Update Residue (`SoftwareDistribution\\Download`)\n- Windows Recycle Bin\n\n## How to Use\n1. Download `deep-cleaner.bat`.\n2. Right-click and select **Run as administrator** to reclaim gigabytes of disk space."
    },
    {
        id: "ram-cache-flusher",
        name: "Standby RAM & Working Set Flusher",
        category: "scripts",
        icon: "fa-solid fa-memory",
        path: "assets/scripts/ram-cache-flusher.bat",
        keywords: "ram standby memory cache flush clean working set garbage collection stutter memory leak",
        readme: "## Overview\nClears Windows Standby RAM cache and flushes inactive process working sets back to the available memory pool without third-party resident software.\n\n## Why it's useful\nWhen Windows keeps gigabytes of cached data in Standby memory, games and heavy applications (like Blender, AutoCAD, or Premiere) can experience stuttering when allocating new memory. This script instantly triggers system garbage collection.\n\n## How to Use\nDouble-click `ram-cache-flusher.bat` whenever memory usage feels bloated or before launching heavy workloads."
    },
    {
        id: "godmode-creator",
        name: "GodMode & Master Admin Panel",
        category: "scripts",
        icon: "fa-solid fa-crown",
        path: "assets/scripts/godmode-creator.bat",
        keywords: "godmode master control panel administration shortcuts settings tools hidden windows",
        readme: "## Overview\nCreates the legendary **GodMode** master control panel folder directly on your Desktop, giving you instant access to over 200+ Windows administrative tools, hardware settings, and diagnostic applets in a single searchable window.\n\n## How to Use\nRun `godmode-creator.bat` — a special GodMode icon will appear instantly on your Desktop."
    },
    {
        id: "power-context-menu",
        name: "Power User Context Menu Pack",
        category: "scripts",
        icon: "fa-solid fa-hand-pointer",
        path: "assets/scripts/power-context-menu.reg",
        keywords: "context menu right click take ownership restart explorer permissions registry tweak",
        readme: "## Overview\nHandcrafted Windows Registry pack that adds essential power-user shortcuts directly to the right-click context menu:\n\n## Added Shortcuts\n1. **Take Ownership**: Fixes permission-denied file/folder errors with 1-click administrative takeover.\n2. **Restart Windows Explorer**: Instantly restarts `explorer.exe` directly from the Desktop background menu to refresh shell changes.\n\n## Installation\n1. Download `power-context-menu.reg`.\n2. Double-click and click **Yes** to merge into Windows Registry."
    },
    {
        id: "disable-web-search",
        name: "Start Menu Web-Search & Bing Remover",
        category: "scripts",
        icon: "fa-solid fa-magnifying-glass-minus",
        path: "assets/scripts/disable-web-search.reg",
        keywords: "disable bing start menu search web search ads remove privacy telemetry fast search",
        readme: "## Overview\nRemoves Bing web search results, cloud suggestions, and online ads from the Windows 10 & 11 Start Menu search bar.\n\n## Benefits\n- Makes Start Menu search **5x faster** (local apps and files only).\n- Prevents your local keystrokes from being sent to Microsoft Bing servers.\n- Completely removes web search delay when searching for installed programs."
    },
    {
        id: "pc-optimisation",
        name: "PC Optimization Commands",
        category: "scripts",
        icon: "fa-solid fa-terminal",
        path: "assets/Pc optimisation.txt",
        keywords: "cmd powershell commands bcdedit sfc dism chkdsk cleanmgr optimization",
        commands: [
            { desc: "System File Checker & Component Store Repair", code: "DISM /Online /Cleanup-Image /RestoreHealth && sfc /scannow" },
            { desc: "Flush DNS and Reset Winsock Stack", code: "ipconfig /flushdns && netsh winsock reset" },
            { desc: "Clear Windows Update Cache Service", code: "net stop wuauserv && net stop bits" },
            { desc: "Run Advanced Disk Cleanup Utility", code: "cleanmgr /sageset:1 && cleanmgr /sagerun:1" }
        ],
        readme: "## Overview\nQuick-reference administrative terminal commands for Windows health checks, filesystem integrity scans, and networking stack resets."
    },
    {
        id: "context-menu-path",
        name: "Context Menu Registry Path",
        category: "scripts",
        icon: "fa-solid fa-code",
        path: "assets/Registry path of context menu.txt",
        keywords: "registry path context menu shell shellex clsid explorer",
        content: "Computer\\HKEY_CLASSES_ROOT\\Directory\\Background\\shell",
        readme: "## Overview\nThe primary Windows Registry key location used to create custom right-click context menu shortcuts."
    },
    {
        id: "right-click-repair",
        name: "Right Click Repair Code",
        category: "scripts",
        icon: "fa-solid fa-wrench",
        path: "assets/Right click repair code.txt",
        keywords: "right click context menu explorer fix guid clsid repair",
        content: "shell:::{80F3F1D5-FECA-45F3-BC32-752C152E456E}",
        readme: "## Overview\nDirect shell GUID to access the Windows Tablet PC and Touch Input Configuration Control Panel for troubleshooting context menu delay."
    },
    {
        id: "win-office-act",
        name: "Windows & Office Activation",
        category: "scripts",
        icon: "fa-solid fa-key",
        path: "assets/Windows Office Activation Script.txt",
        keywords: "activation script massgrave mas powershell digital license hwid",
        commands: [
            {
                desc: "Official Microsoft Activation Scripts (MAS) Universal Command",
                code: "irm https://get.activated.win | iex"
            }
        ],
        readme: "## Instructions\n1. Open PowerShell as Administrator.\n2. Paste the command above and press Enter.\n3. Choose option [1] for permanent HWID Windows Activation."
    },

    // =========================================================================
    // 2. HARDWARE MONITORING & DIAGNOSTICS (ALWAYS LATEST UNIVERSAL ENDPOINTS)
    // =========================================================================
    {
        id: "hwinfo",
        name: "HWiNFO Diagnostic Suite",
        category: "hardware",
        icon: "fa-solid fa-microchip",
        path: "https://www.hwinfo.com/download/",
        universalUrl: "https://www.hwinfo.com/download/",
        keywords: "hwinfo hardware info temperature sensor voltage cpu gpu diagnostic telemetry fan speed",
        readme: "## Overview\nHWiNFO is the industry standard for real-time hardware sensor monitoring, thermal profiling, voltage telemetry, and deep component inspection.\n\n## Auto-Latest Download\nClick the download button to visit the official direct download page which always serves the newest release."
    },
    {
        id: "cpu-z",
        name: "CPU-Z",
        category: "hardware",
        icon: "fa-solid fa-cube",
        path: "https://www.cpuid.com/softwares/cpu-z.html",
        universalUrl: "https://www.cpuid.com/softwares/cpu-z.html",
        keywords: "cpu-z cpuid processor motherboard ram timings spd cache benchmark frequency",
        readme: "## Overview\nEssential freeware tool that gathers information on the main devices of your system: processor name, codename, package, levels, mainboard chipset, and memory timings."
    },
    {
        id: "gpu-z",
        name: "GPU-Z",
        category: "hardware",
        icon: "fa-solid fa-display",
        path: "https://www.techpowerup.com/download/techpowerup-gpu-z/",
        universalUrl: "https://www.techpowerup.com/download/techpowerup-gpu-z/",
        keywords: "gpu-z techpowerup graphics card nvidia amd intel vram sensors clock temperature",
        readme: "## Overview\nLightweight utility designed to identify and monitor your graphics card and GPU processor. Shows GPU clocks, VRAM bandwidth, BIOS version, and real-time temperatures."
    },
    {
        id: "msi-afterburner",
        name: "MSI Afterburner + RTSS",
        category: "hardware",
        icon: "fa-solid fa-gauge-high",
        path: "https://www.guru3d.com/download/msi-afterburner-beta-download/",
        universalUrl: "https://www.guru3d.com/download/msi-afterburner-beta-download/",
        keywords: "msi afterburner rivatuner rtss gpu overclock undervolt fan curve fps overlay fps counter",
        readme: "## Overview\nThe world's most recognized GPU overclocking, undervolting, and hardware monitoring software. Includes RivaTuner Statistics Server (RTSS) for in-game FPS and frame-time graphs."
    },
    {
        id: "throttlestop",
        name: "ThrottleStop",
        category: "hardware",
        icon: "fa-solid fa-temperature-arrow-down",
        path: "https://www.techpowerup.com/download/techpowerup-throttlestop/",
        universalUrl: "https://www.techpowerup.com/download/techpowerup-throttlestop/",
        keywords: "throttlestop undervolt cpu temperature power limit pl1 pl2 intel throttle fix",
        readme: "## Overview\nPerformance monitor and adjustment tool for Intel Core CPUs to override thermal throttling, unlock power limits, and undervolt to reduce operating temperatures."
    },
    {
        id: "quickcpu",
        name: "Quick CPU",
        category: "hardware",
        icon: "fa-solid fa-sliders",
        path: "https://coderbag.com/product/quickcpu",
        universalUrl: "https://coderbag.com/product/quickcpu",
        keywords: "quickcpu core parking cpu frequency scaling power plan turbo boost intel amd",
        readme: "## Overview\nFine-tune CPU performance parameters including Core Parking, Frequency Scaling, Turbo Boost, and C-States in real time."
    },
    {
        id: "furmark",
        name: "FurMark GPU Stress Test",
        category: "hardware",
        icon: "fa-solid fa-fire-flame-curved",
        path: "https://geeks3d.com/furmark/downloads/",
        universalUrl: "https://geeks3d.com/furmark/downloads/",
        keywords: "furmark gpu stress test thermal stability benchmark geeks3d artifact tester",
        readme: "## Overview\nIntensive OpenGL GPU stress test and benchmark to verify graphics card stability, thermal dissipation, and power delivery."
    },
    {
        id: "cdi",
        name: "CrystalDiskInfo",
        category: "hardware",
        icon: "fa-solid fa-hard-drive",
        path: "assets/CrystalDiskInfo/CDI.rar",
        keywords: "smart hdd ssd nvme disk health temperature telemetry crystal",
        readme: "## Overview\nA professional HDD/SSD health monitoring tool that displays detailed hardware information and S.M.A.R.T. status to prevent data loss."
    },
    {
        id: "cdm",
        name: "CrystalDiskMark",
        category: "hardware",
        icon: "fa-solid fa-gauge-simple-high",
        path: "assets/CrystalDiskMark/CDM.rar",
        keywords: "benchmark speed read write test storage ssd hdd nvme",
        readme: "## Overview\nThe industry-standard disk benchmark utility to measure sequential and random read/write speeds of storage drives."
    },
    {
        id: "cru",
        name: "Custom Resolution Utility (CRU)",
        category: "hardware",
        icon: "fa-solid fa-tv",
        path: "assets/cru-1.5.3/CRU.rar",
        keywords: "cru toastyx custom resolution refresh rate monitor overclock edid freesync",
        readme: "## Overview\nConfigure custom monitor resolutions, overclock display refresh rates, and tweak EDID display timings directly in the graphics driver."
    },

    // =========================================================================
    // 3. SYSTEM & OPTIMIZATION UTILITIES
    // =========================================================================
    {
        id: "shutup10",
        name: "O&O ShutUp10++",
        category: "system",
        icon: "fa-solid fa-shield-halved",
        path: "https://dl5.oo-software.com/files/ooshutup10/OOSU10.exe",
        universalUrl: "https://dl5.oo-software.com/files/ooshutup10/OOSU10.exe",
        keywords: "o&o shutup10 privacy antispy telemetry windows 11 security disable tracking",
        readme: "## Overview\nFree portable anti-telemetry tool for Windows 10 & 11. Lets you take control over privacy settings, disable diagnostic tracking, and prevent background data transmission with 1 click."
    },
    {
        id: "bcuninstaller",
        name: "Bulk Crap Uninstaller (BCU)",
        category: "system",
        icon: "fa-solid fa-trash-can",
        path: "https://github.com/Klocman/Bulk-Crap-Uninstaller/releases/latest",
        universalUrl: "https://github.com/Klocman/Bulk-Crap-Uninstaller/releases/latest",
        keywords: "bcuninstaller bulk crap uninstaller open source clean uninstall remove leftovers batch",
        readme: "## Overview\nState-of-the-art open-source bulk uninstaller that excels at removing large amounts of applications with minimal user input. Automatically detects orphaned files and registry leftovers."
    },
    {
        id: "autoruns",
        name: "Autoruns (Sysinternals)",
        category: "system",
        icon: "fa-solid fa-bolt",
        path: "assets/Autoruns/Autoruns.rar",
        keywords: "startup boot autostart sysinternals windows microsoft services drivers tasks",
        readme: "## Overview\nStartup monitor utility showing all programs, services, drivers, and scheduled tasks configured to run during system bootup.\n\n## Instructions\n1. Extract the RAR archive.\n2. Run `autoruns64.exe` as Administrator."
    },
    {
        id: "process-explorer",
        name: "Process Explorer (Sysinternals)",
        category: "system",
        icon: "fa-solid fa-chart-line",
        path: "assets/ProcessExplorer/PE.rar",
        keywords: "task manager process explorer handles dlls sysinternals cpu usage",
        readme: "## Overview\nAdvanced Task Manager replacement showing information about which handles and DLLs processes have opened or loaded."
    },
    {
        id: "process-monitor",
        name: "Process Monitor (Sysinternals)",
        category: "system",
        icon: "fa-solid fa-magnifying-glass-chart",
        path: "assets/ProcessMonitor.zip",
        keywords: "process monitor procmon filesystem registry thread real-time debugging",
        readme: "## Overview\nReal-time monitoring tool for Windows that shows real-time file system, Registry, and process/thread activity."
    },
    {
        id: "revo-uninstaller",
        name: "Revo Uninstaller Pro",
        category: "system",
        icon: "fa-solid fa-trash-arrow-up",
        path: "assets/Revo Uninstaller Pro 5.4.3 FINAL/Revo Uninsataller.rar",
        keywords: "revo uninstaller pro clean remove leftover registry deep scan",
        readme: "## Overview\nThorough uninstaller that runs built-in uninstallers then scans for remnant files, registry keys, and cache entries."
    },
    {
        id: "glary",
        name: "Glary Utilities",
        category: "system",
        icon: "fa-solid fa-rocket",
        path: "assets/Glary Utility/Glary_Utilities_v5.211.0.240.exe",
        keywords: "glary utilities system cleanup optimization registry repair disk space",
        readme: "## Overview\nAll-in-one system utility suite offering one-click PC maintenance, registry cleanup, and disk defragmentation."
    },
    {
        id: "bios-button",
        name: "BIOS Enter Button",
        category: "system",
        icon: "fa-solid fa-power-off",
        path: "assets/BIOS enter button/One click to Bios.rar",
        keywords: "uefi bios fastboot restart bootloader firmware motherboard",
        readme: "## What it does\nAn instant, one-click solution to reboot your PC directly into the UEFI/BIOS settings without manual key spamming."
    },
    {
        id: "win10-right-click",
        name: "Windows 10 Classic Menu",
        category: "system",
        icon: "fa-solid fa-bars",
        path: "assets/Windows 10 Right click menu/Old-Right-Click-Menu-WIndows-11.zip",
        keywords: "windows 11 classic context menu restore old right click registry",
        readme: "## Overview\nRestore the fast, full-sized classic Windows 10 right-click context menu in Windows 11."
    },

    // =========================================================================
    // 4. STORAGE, SEARCH & RECOVERY UTILITIES
    // =========================================================================
    {
        id: "everything",
        name: "Everything Search Engine",
        category: "storage",
        icon: "fa-solid fa-magnifying-glass",
        path: "https://www.voidtools.com/downloads/",
        universalUrl: "https://www.voidtools.com/downloads/",
        keywords: "everything voidtools instant desktop search locate find files fast ntfs index",
        readme: "## Overview\nThe fastest search engine for Windows. Indexes millions of files in seconds by reading the NTFS Master File Table (MFT) directly, providing instantaneous search results as you type."
    },
    {
        id: "wiztree",
        name: "WizTree Disk Analyzer",
        category: "storage",
        icon: "fa-solid fa-chart-pie",
        path: "https://diskanalyzer.com/download",
        universalUrl: "https://diskanalyzer.com/download",
        keywords: "wiztree disk space analyzer visual tree map find large files free up storage",
        readme: "## Overview\nHigh-speed disk space analyzer that scans entire multi-terabyte drives in 2-3 seconds to show visual treemaps of files taking up the most space."
    },
    {
        id: "easeus-recovery",
        name: "EaseUS Data Recovery",
        category: "storage",
        icon: "fa-solid fa-database",
        path: "assets/EaseUS_Data_Recovery_Wizard_Technician_12.8.0_Multilingual/EaseUS_Data_Recovery_Wizard_Technician_12.8.0_Multilingual.rar",
        keywords: "data recovery restore lost deleted formatted raw partition files",
        readme: "## Overview\nAdvanced data recovery software for technicians to retrieve lost, deleted, or formatted files from any storage device."
    },
    {
        id: "easeus-partition",
        name: "EaseUS Partition Master",
        category: "storage",
        icon: "fa-solid fa-hard-drive",
        path: "assets/EaseUS_Partition_Master_13.0_Technician_Edition/EPM Technical Edition.rar",
        keywords: "partition master resize format clone mbr gpt convert disk manager",
        readme: "## Overview\nComprehensive partition manager to resize, split, merge, format, and clone disks without data loss."
    },
    {
        id: "picture-recovery",
        name: "PhotoRec & TestDisk",
        category: "storage",
        icon: "fa-solid fa-images",
        path: "assets/Picture Recovery Software/testdisk-7.3-WIP.rar",
        keywords: "photorec testdisk recover pictures photos sd card raw partition carving",
        readme: "## Overview\nPowerful signature-based data carving utility to recover lost pictures, videos, documents, and archives from damaged SD cards, USBs, and hard drives."
    },
    {
        id: "winrar",
        name: "WinRAR Pro Suite",
        category: "storage",
        icon: "fa-solid fa-file-zipper",
        path: "assets/Winrar/rarreg.rar",
        officialUrl: "https://www.win-rar.com/download.html",
        sevenZipUrl: "https://www.7-zip.org/download.html",
        keywords: "winrar rar unrar 7zip zip archive compression rarreg key license",
        readme: "## Overview\nIndustry-standard compression and archive management utility with licensing keyfile included."
    },

    // =========================================================================
    // 5. CREATIVE, UTILITIES & RUNTIMES
    // =========================================================================
    {
        id: "adobe-suite",
        name: "Adobe Creative Suite 2020",
        category: "creative",
        icon: "fa-solid fa-palette",
        path: "https://getitintopc.com/adobe-photoshop-cc-2020-free-download/",
        photoshopUrl: "https://getitintopc.com/adobe-photoshop-cc-2020-free-download/",
        illustratorUrl: "https://getitintopc.com/adobe-illustrator-cc-2020-free-download/",
        keywords: "photoshop illustrator adobe graphic design 2020 creative suite vector raster",
        readme: "## Included Software\n- **Adobe Photoshop CC 2020**: Photo editing, retouching, and digital graphics.\n- **Adobe Illustrator CC 2020**: Vector graphics, typography, branding, and logo design."
    },
    {
        id: "fontlab",
        name: "FontLab Studio",
        category: "creative",
        icon: "fa-solid fa-font",
        path: "assets/FontLab.rar",
        keywords: "fontlab typography font creator opentype truetype woff editor design",
        readme: "## Overview\nProfessional font editor used by type designers to craft and export custom OpenType and web fonts."
    },
    {
        id: "foxit-pdf",
        name: "Foxit PDF Editor",
        category: "creative",
        icon: "fa-solid fa-file-pdf",
        path: "assets/Foxit pdf editor.rar",
        keywords: "foxit pdf editor convert merge annotate sign documents",
        readme: "## Overview\nFast PDF editor and converter to create, annotate, sign, and organize documents without resource bloat."
    },
    {
        id: "vcredist",
        name: "Visual C++ All-in-One",
        category: "creative",
        icon: "fa-solid fa-layer-group",
        path: "assets/Visual C++ Runtimes All-in-One-Jun-2026.zip",
        keywords: "vcredist visual c++ runtime msvc 2005 2008 2010 2012 2013 2015 2022 dll fix",
        readme: "## Overview\nIncludes all Microsoft Visual C++ redistributable runtimes (2005 to 2022) with a single-click batch installer (`install_all.bat`)."
    },
    {
        id: "directx",
        name: "DirectX 11 End-User Runtimes",
        category: "creative",
        icon: "fa-solid fa-gamepad",
        path: "assets/DirectX 11 Setup.rar",
        keywords: "directx 11 dx11 runtime gaming 3d libraries graphics",
        readme: "## Overview\nEssential DirectX 11 Runtime components required to run modern games and high-performance graphics applications."
    },
    {
        id: "goodbyedpi",
        name: "GoodByeDPI Bypass",
        category: "creative",
        icon: "fa-solid fa-globe",
        path: "assets/Good Bye DPI/goodbyedpi-0.2.2.rar",
        keywords: "goodbyedpi dpi bypass censorship deep packet inspection network proxy vpn",
        readme: "## Overview\nOpen-source Deep Packet Inspection bypass utility designed to circumvent Internet filtering and speed throttling without a VPN."
    },
    {
        id: "avro",
        name: "Avro Bangla Keyboard",
        category: "creative",
        icon: "fa-solid fa-keyboard",
        path: "assets/Avro/setup_avrokeyboard_5.6.0.exe",
        keywords: "bangla bengali phonetic keyboard typing unicode omicronlab",
        readme: "## Overview\nStandard Bengali phonetic keyboard software supporting full Unicode and ANSI typing."
    },
    {
        id: "cursor-pack",
        name: "Windows 11 Rounded Cursor",
        category: "creative",
        icon: "fa-solid fa-arrow-pointer",
        path: "assets/Windows 11 rounded Cursor/windows_11 cursors.zip",
        keywords: "cursor mouse pointer theme windows 11 dark light rounded aesthetic",
        readme: "## Overview\nA sleek, modern rounded cursor pack for Windows 10 and 11 with custom animations."
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

let currentCategory = 'all';
let explorerScrollPos = 0;

// Category metadata for badges
const categoryLabels = {
    scripts: "Custom Script / Tweak",
    hardware: "Hardware & Diagnostic",
    system: "System & Optimization",
    storage: "Storage & Recovery",
    creative: "Creative & Utility"
};

// Render Explorer Grid with Enhanced Search
function renderExplorer() {
    const query = fileSearch ? fileSearch.value.toLowerCase().trim() : '';
    fileGrid.innerHTML = '';

    const filtered = fileData.filter(item => {
        const matchesCategory = (
            currentCategory === 'all' || 
            item.category === currentCategory || 
            (currentCategory === 'scripts' && item.category === 'scripts')
        );
        if (!matchesCategory) return false;

        if (!query) return true;

        const searchableText = [
            item.name,
            item.category,
            categoryLabels[item.category] || '',
            item.keywords || '',
            item.readme || '',
            item.content || '',
            ...(item.commands || []).map(c => c.desc + ' ' + c.code)
        ].join(' ').toLowerCase();

        return searchableText.includes(query);
    });

    if (filtered.length === 0) {
        fileGrid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
                <i class="fa-solid fa-magnifying-glass" style="font-size: 3rem; color: var(--muted); margin-bottom: 1rem; display: block;"></i>
                <h3 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 0.5rem;">No tools or scripts found</h3>
                <p style="color: var(--muted); max-width: 400px; margin: 0 auto 1.5rem;">We couldn't find anything matching "<strong>${escapeHtml(query)}</strong>". Try searching for <em>latency, hardware, clean,</em> or <em>recovery</em>.</p>
                <button class="pill active empty-clear-btn" onclick="clearSearch()" type="button">Clear Search Query</button>
            </div>
        `;
        return;
    }

    filtered.forEach(item => {
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

        const tagLabel = categoryLabels[item.category] || 'Utility';

        card.innerHTML = `
            <div class="file-info">
                <div class="file-icon"><i class="${item.icon}"></i></div>
                <div class="file-meta">
                    <h3>${escapeHtml(item.name)}</h3>
                    <span>${tagLabel}</span>
                </div>
            </div>
        `;
        fileGrid.appendChild(card);
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

    const badgeLabel = categoryLabels[item.category] || 'Utility';

    let heroHtml = `
        <div class="detail-hero-info">
            <div class="detail-icon"><i class="${item.icon}"></i></div>
            <h1>${escapeHtml(item.name)}</h1>
            <span class="version-badge">${badgeLabel}</span>
        </div>
    `;

    if (item.id === "adobe-suite") {
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
    } else if (item.universalUrl) {
        heroHtml += `
            <a href="${item.universalUrl}" target="_blank" rel="noopener noreferrer" class="download-hero">
                <i class="fa-solid fa-download"></i> Latest Version (Official)
            </a>
        `;
    } else if (item.path && item.path.startsWith('http')) {
        heroHtml += `
            <a href="${item.path}" target="_blank" rel="noopener noreferrer" class="download-hero">
                <i class="fa-solid fa-up-right-from-square"></i> Open Resource
            </a>
        `;
    } else if (item.path) {
        heroHtml += `
            <a href="${item.path}" class="download-hero" download>
                <i class="fa-solid fa-download"></i> Download File
            </a>
        `;
    }

    if (item.copyText) {
        heroHtml += `
            <div class="sidebar-divider">
                <div class="copy-card">
                    <span class="sidebar-label">${item.copyLabel || 'Copy Value'}</span>
                    <code>${escapeHtml(item.copyText)}</code>
                    <button class="copy-btn-small" onclick="doCopy('${escapeJsString(item.copyText)}')">
                        <i class="fa-solid fa-copy"></i> Copy
                    </button>
                </div>
            </div>
        `;
    }

    let bodyHtml = `<div class="readme-section">`;

    if (item.commands && item.commands.length > 0) {
        bodyHtml += `<div class="readme-title"><i class="fa-solid fa-terminal"></i> Terminal Commands</div>`;
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
            <div class="readme-title"><i class="fa-solid fa-file-code"></i> Code / Script Content</div>
            <pre><button class="pre-copy-btn" onclick="doCopy('${escapeJsString(item.content)}')"><i class="fa-solid fa-copy"></i> Copy</button><code>${escapeHtml(item.content)}</code></pre>
        `;
    }

    if (item.readme) {
        bodyHtml += `
            <div class="readme-title"><i class="fa-solid fa-circle-info"></i> Documentation & Instructions</div>
            <div class="readme-content">${formatMarkdown(item.readme)}</div>
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
    try {
        document.execCommand('copy');
    } catch (e) {
        console.error('Fallback copy failed', e);
    }
    document.body.removeChild(el);
}

// Escapes HTML tags to prevent XSS
function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// Escapes strings for inline JS onclick handlers
function escapeJsString(str) {
    if (!str) return '';
    return String(str)
        .replace(/\\/g, '\\\\')
        .replace(/'/g, "\\'")
        .replace(/"/g, '\\"')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r');
}

// Markdown Formatter
function formatMarkdown(text) {
    if (!text) return '';
    let html = escapeHtml(text);

    // Headings
    html = html.replace(/^### (.*$)/gim, '<h4 style="font-size: 1.15rem; font-weight: 800; margin: 1.5rem 0 0.5rem; color: var(--text);">$1</h4>');
    html = html.replace(/^## (.*$)/gim, '<h3 style="font-size: 1.35rem; font-weight: 800; margin: 1.75rem 0 0.75rem; color: var(--text);">$1</h3>');
    html = html.replace(/^# (.*$)/gim, '<h2 style="font-size: 1.6rem; font-weight: 900; margin: 2rem 0 1rem; color: var(--text);">$1</h2>');

    // Bold and Italic
    html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');

    // Inline Code
    html = html.replace(/`([^`]+)`/gim, '<code style="background: var(--bg2); padding: 0.2rem 0.4rem; border-radius: 4px; font-family: monospace; border: 1px solid var(--line); font-size: 0.9em;">$1</code>');

    // Numbered lists
    html = html.replace(/^\d+\.\s+(.*$)/gim, '<li style="margin-left: 1.5rem; list-style-type: decimal; margin-bottom: 0.4rem;">$1</li>');

    // Bullet lists
    html = html.replace(/^-\s+(.*$)/gim, '<li style="margin-left: 1.5rem; list-style-type: disc; margin-bottom: 0.4rem;">$1</li>');

    // Linebreaks
    html = html.replace(/\n\n/gim, '<br><br>');

    return html;
}

// Global Keyboard Navigation (Esc to close detail modal)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (detailView.classList.contains('active')) {
            hideDetail();
        }
    }
});

// Category Filter Setup
function initCategories() {
    const pills = document.querySelectorAll('.category-pills .pill');
    pills.forEach(pill => {
        pill.onclick = () => {
            pills.forEach(p => {
                p.classList.remove('active');
                p.setAttribute('aria-selected', 'false');
            });
            pill.classList.add('active');
            pill.setAttribute('aria-selected', 'true');
            currentCategory = pill.dataset.category;
            renderExplorer();
        };
    });
}

// Search Setup with real-time feedback
if (fileSearch) {
    fileSearch.addEventListener('input', () => {
        renderExplorer();
    });
}

// Hash Routing Setup (Supports Direct Bookmarks & Back/Forward Browser History)
function handleHashRoute() {
    const hash = window.location.hash.replace('#', '').trim();
    if (hash) {
        showDetail(hash, true);
    } else {
        hideDetail(true);
    }
}

window.addEventListener('popstate', handleHashRoute);

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    initCategories();
    renderExplorer();
    handleHashRoute();
});
