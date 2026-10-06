/**
 * Software HQ | Humayoun Kobir Repository
 * Fast, client-side utility directory with search, filtering, hash routing, and Windows Explorer grouping.
 * All original tools, license codes, paths, and handcrafted scripts preserved intact.
 */

const groupsConfig = [
    {
        id: "scripts",
        title: "Custom Handcrafted Scripts & Power Tweaks",
        icon: "fa-solid fa-terminal"
    },
    {
        id: "system",
        title: "System & Optimization Utilities",
        icon: "fa-solid fa-gauge-high"
    },
    {
        id: "hardware",
        title: "Hardware Telemetry & Diagnostics",
        icon: "fa-solid fa-microchip"
    },
    {
        id: "storage",
        title: "Storage, Search & Data Recovery",
        icon: "fa-solid fa-hard-drive"
    },
    {
        id: "creative",
        title: "Creative, Design & Desktop Customization",
        icon: "fa-solid fa-palette"
    }
];

const fileData = [
    // =========================================================================
    // 1. CUSTOM HANDCRAFTED SCRIPTS & POWER TWEAKS
    // =========================================================================
    {
        id: "latency-optimizer",
        name: "Windows Latency & Stutter Optimizer",
        category: "scripts",
        icon: "fa-solid fa-bolt",
        path: "assets/scripts/latency-optimizer.bat",
        keywords: "latency stutter input lag bcdedit timer resolution hpet tcp nodelay nagle diagtrack game dvr batch script",
        readme: "## Overview\nA comprehensive, handcrafted batch script by Humayoun Kobir designed to minimize DPC latency, eliminate micro-stutters, and optimize Windows 10/11 for real-time responsiveness.\n\n## Optimizations Included\n1. **BCDedit Timer Resolution**: Disables dynamic tick and platform clock jitter (`disabledynamictick yes`, `useplatformclock false`).\n2. **TCP Latency**: Disables Nagle's algorithm and sets `TcpAckFrequency=1` for lowest network packet latency.\n3. **GameDVR Background Capture**: Disables intrusive Xbox background game recording.\n4. **Telemetry Suppression**: Stops Windows Diagnostic Tracking (`DiagTrack`).\n5. **Multimedia Scheduling**: Sets maximum GPU priority and multimedia responsiveness.\n\n## How to Use\n1. Download `latency-optimizer.bat`.\n2. Right-click and select **Run as administrator**.\n3. Restart your PC for kernel timer changes to take full effect."
    },
    {
        id: "deep-cleaner",
        name: "Deep Clean & Shader Cache Purger",
        category: "scripts",
        icon: "fa-solid fa-broom",
        path: "assets/scripts/deep-cleaner.bat",
        keywords: "clean temp cache prefetch crash dumps directx shader nvidia amd d3dscache junk cleaner batch script",
        readme: "## Overview\nA deep maintenance cleanup tool that safely clears hidden Windows caches, corrupted shader binaries, and temporary files that standard disk cleanup tools miss.\n\n## Areas Cleaned\n- User & System Temp Folders (`%temp%` & `C:\\Windows\\Temp`)\n- Windows Prefetch Memory Cache\n- Application Crash Dumps & Windows Error Reporting Logs\n- DirectX Shader Cache (`D3DSCache`)\n- NVIDIA & AMD GPU Driver Shader Caches (`DXCache`, `GLCache`)\n- Windows Update Residue (`SoftwareDistribution\\Download`)\n- Windows Recycle Bin\n\n## How to Use\n1. Download `deep-cleaner.bat`.\n2. Right-click and select **Run as administrator** to reclaim gigabytes of disk space."
    },
    {
        id: "ram-cache-flusher",
        name: "Standby RAM & Working Set Flusher",
        category: "scripts",
        icon: "fa-solid fa-memory",
        path: "assets/scripts/ram-cache-flusher.bat",
        keywords: "ram standby memory cache flush clean working set garbage collection stutter memory leak batch script",
        readme: "## Overview\nClears Windows Standby RAM cache and flushes inactive process working sets back to the available memory pool without third-party resident software.\n\n## Why it's useful\nWhen Windows keeps gigabytes of cached data in Standby memory, games and heavy applications (like Blender, AutoCAD, or Premiere) can experience stuttering when allocating new memory. This script instantly triggers system garbage collection.\n\n## How to Use\nDouble-click `ram-cache-flusher.bat` whenever memory usage feels bloated or before launching heavy workloads."
    },
    {
        id: "godmode-creator",
        name: "GodMode & Master Admin Panel",
        category: "scripts",
        icon: "fa-solid fa-crown",
        path: "assets/scripts/godmode-creator.bat",
        keywords: "godmode master control panel administration shortcuts settings tools hidden windows batch script",
        readme: "## Overview\nCreates the legendary **GodMode** master control panel folder directly on your Desktop, giving you instant access to over 200+ Windows administrative tools, hardware settings, and diagnostic applets in a single searchable window.\n\n## How to Use\nRun `godmode-creator.bat` — a special GodMode icon will appear instantly on your Desktop."
    },
    {
        id: "power-context-menu",
        name: "Power User Context Menu Pack",
        category: "scripts",
        icon: "fa-solid fa-hand-pointer",
        path: "assets/scripts/power-context-menu.reg",
        keywords: "context menu right click take ownership restart explorer permissions registry tweak reg",
        readme: "## Overview\nHandcrafted Windows Registry pack that adds essential power-user shortcuts directly to the right-click context menu:\n\n## Added Shortcuts\n1. **Take Ownership**: Fixes permission-denied file/folder errors with 1-click administrative takeover.\n2. **Restart Windows Explorer**: Instantly restarts `explorer.exe` directly from the Desktop background menu to refresh shell changes.\n\n## Installation\n1. Download `power-context-menu.reg`.\n2. Double-click and click **Yes** to merge into Windows Registry."
    },
    {
        id: "disable-web-search",
        name: "Start Menu Web-Search & Bing Remover",
        category: "scripts",
        icon: "fa-solid fa-magnifying-glass-minus",
        path: "assets/scripts/disable-web-search.reg",
        keywords: "disable bing start menu search web search ads remove privacy telemetry fast search reg",
        readme: "## Overview\nRemoves Bing web search results, cloud suggestions, and online ads from the Windows 10 & 11 Start Menu search bar.\n\n## Benefits\n- Makes Start Menu search **5x faster** (local apps and files only).\n- Prevents your local keystrokes from being sent to Microsoft Bing servers.\n- Completely removes web search delay when searching for installed programs."
    },
    {
        id: "pc-opt",
        name: "PC Optimisation Guide",
        category: "scripts",
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
        id: "registry-path",
        name: "Context Menu Registry",
        category: "scripts",
        icon: "fa-solid fa-code",
        path: "assets/Registry path of context menu.txt",
        keywords: "registry path context menu background shell windows tweak",
        content: "Computer\\HKEY_CLASSES_ROOT\\Directory\\Background\\shell"
    },
    {
        id: "right-click-repair",
        name: "Right Click Repair Code",
        category: "scripts",
        icon: "fa-solid fa-wrench",
        path: "assets/Right click repair code.txt",
        keywords: "right click context menu explorer fix guid clsid repair",
        content: "shell:::{80F3F1D5-FECA-45F3-BC32-752C152E456E}"
    },
    {
        id: "win-office-act",
        name: "Windows & Office Activator",
        category: "scripts",
        icon: "fa-solid fa-key",
        path: "assets/Windows Office Activation Script.txt",
        keywords: "activation mas massgrave windows office powershell script",
        readme: "## Instructions\nRun PowerShell as Administrator to use this script.",
        content: "irm https://get.activated.win | iex"
    },
    {
        id: "win10-menu",
        name: "Win10 Right Click Menu",
        category: "scripts",
        icon: "fa-solid fa-window-restore",
        path: "assets/Windows 10 Right click menu/Old-Right-Click-Menu-WIndows-11.zip",
        keywords: "windows 10 classic context menu windows 11 restore old right click",
        readme: "## Overview\nRestores the classic Windows 10 right-click context menu in Windows 11."
    },
    {
        id: "cursor",
        name: "Win11 Rounded Cursor",
        category: "scripts",
        icon: "fa-solid fa-arrow-pointer",
        path: "assets/Windows 11 rounded Cursor/windows_11 cursors.zip",
        keywords: "cursor mouse rounded theme pointers win11 customization",
        readme: "## Overview\nClean rounded high-DPI cursor set for Windows desktop customization."
    },

    // =========================================================================
    // 2. SYSTEM & OPTIMIZATION UTILITIES
    // =========================================================================
    {
        id: "autoruns",
        name: "Autoruns",
        category: "system",
        icon: "fa-solid fa-bolt",
        path: "assets/Autoruns/Autoruns.rar",
        keywords: "startup boot autostart sysinternals windows microsoft services drivers tasks",
        readme: "## Overview\nStartup monitor utility showing all programs, services, drivers, and scheduled tasks configured to run during system bootup.\n\n## Instructions\n1. Extract the RAR archive.\n2. Run `autoruns64.exe` as Administrator."
    },
    {
        id: "glary",
        name: "Glary Utility Pro",
        category: "system",
        icon: "fa-solid fa-broom",
        path: "assets/Glary Utility/Glary_Utilities_v5.211.0.240.exe",
        copyLabel: "Serial Key",
        copyText: "3788-61679-58286-4470",
        keywords: "cleaner optimizer registry disk maintenance speedup serial key",
        readme: "## Activation\nUse the Serial Key provided below to unlock the Professional version features for system cleaning and optimization."
    },
    {
        id: "revo",
        name: "Revo Uninstaller Pro",
        category: "system",
        icon: "fa-solid fa-eraser",
        path: "assets/Revo Uninstaller Pro 5.4.3 FINAL/Revo Uninsataller.rar",
        copyLabel: "License Path",
        copyText: "C:\\ProgramData\\VS Revo Group\\Revo Uninstaller Pro\\",
        keywords: "revo uninstaller deep clean remove registry remnant apps",
        readme: "## Instructions\nCopy the license file to the target path after installation."
    },
    {
        id: "goodbyedpi",
        name: "Good Bye DPI",
        category: "system",
        icon: "fa-solid fa-unlock",
        path: "assets/Good Bye DPI/goodbyedpi-0.2.2.rar",
        keywords: "dpi censorship bypass packet inspection network throttling vpn free",
        readme: "## Overview\nBypass Deep Packet Inspection censorship and ISP throttling without requiring a slow proxy or VPN."
    },
    {
        id: "hitmanpro",
        name: "HitmanPro Scanner",
        category: "system",
        icon: "fa-solid fa-bug-slash",
        path: "assets/HitmanPro_3.8.28_Build_324/HitmanPro 3.8.rar",
        keywords: "antivirus malware scanner cloud second opinion security virus trojan",
        readme: "## Overview\nCloud-based secondary malware and threat scanner that operates alongside your primary antivirus."
    },
    {
        id: "vcredist",
        name: "Visual C++ Runtimes All-in-One",
        category: "system",
        icon: "fa-brands fa-microsoft",
        path: "assets/Visual C++ Runtimes All-in-One-Jun-2026.zip",
        keywords: "vcredist visual c++ redistributable runtimes 2005 2022 x86 x64 dll fix",
        readme: "## Overview\nAll-in-One package containing every Visual C++ Redistributable runtime (2005–2022), both x86 and x64.\n\n## Instructions\n1. Extract the ZIP file.\n2. Run the included batch installer to install all runtimes at once.\n\n## Why You Need This\nFixes common 'VCRUNTIME140.dll missing' or 'MSVCP.dll not found' errors."
    },
    {
        id: "bios-button",
        name: "BIOS Enter Button",
        category: "system",
        icon: "fa-solid fa-microchip",
        path: "assets/BIOS enter button/One click to Bios.rar",
        keywords: "uefi bios fastboot restart bootloader firmware motherboard",
        readme: "## What it does\nAn instant, one-click solution to reboot your PC directly into the UEFI/BIOS settings without manual key spamming."
    },
    {
        id: "directx",
        name: "DirectX 11 Setup",
        category: "system",
        icon: "fa-solid fa-gamepad",
        path: "assets/DirectX 11 Setup.rar",
        keywords: "directx 11 dx11 runtime gaming 3d libraries graphics",
        readme: "## Overview\nEssential DirectX 11 Runtime components required to run modern games and high-performance graphics applications."
    },
    {
        id: "shutup10",
        name: "O&O ShutUp10++",
        category: "system",
        icon: "fa-solid fa-shield-halved",
        path: "https://dl5.oo-software.com/files/ooshutup10/OOSU10.exe",
        keywords: "shutup10 o&o privacy telemetry windows 10 11 antispy security tracking bloatware",
        readme: "## Overview\nO&O ShutUp10++ is the premier free anti-spy and privacy protection tool for Windows 10 and 11.\n\n## Features\n- Universal standalone executable with zero installation required.\n- Disable invasive telemetry, diagnostic tracking, Cortana voice logging, and lock screen ads with recommended preset profiles.\n- Easily toggle privacy settings with instant rollback support."
    },
    {
        id: "bcuninstaller",
        name: "Bulk Crap Uninstaller",
        category: "system",
        icon: "fa-solid fa-trash-can",
        path: "https://github.com/Klocman/Bulk-Crap-Uninstaller/releases/latest",
        keywords: "bcuninstaller bulk crap uninstaller batch remove leftover junk uninstall open source foss",
        readme: "## Overview\nBulk Crap Uninstaller (BCUninstaller) is a powerful, free, and open-source program uninstaller capable of removing large amounts of applications automatically with minimal user input.\n\n## Key Features\n- Bulk unattended uninstallation of dozens of programs at once.\n- Deep leftover scanning for leftover registry keys, appdata remnants, and service residues.\n- Detects Windows Store apps, portable apps, Steam games, and hidden installers."
    },

    // =========================================================================
    // 3. HARDWARE TELEMETRY & DIAGNOSTICS
    // =========================================================================
    {
        id: "hwinfo",
        name: "HWiNFO",
        category: "hardware",
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
        category: "hardware",
        icon: "fa-solid fa-list-check",
        path: "assets/ProcessExplorer/PE.rar",
        keywords: "process explorer task manager sysinternals handles dll cpu gpu",
        readme: "## Overview\nSysinternals Process Explorer: advanced task manager showing active DLLs, file handles, and hardware statistics."
    },
    {
        id: "process-monitor",
        name: "Process Monitor",
        category: "hardware",
        icon: "fa-solid fa-desktop",
        path: "assets/ProcessMonitor.zip",
        keywords: "procmon process monitor sysinternals registry file thread real-time",
        readme: "## Overview\nProcess Monitor is an advanced monitoring tool for Windows that shows real-time file system, Registry, and process/thread activity."
    },
    {
        id: "cru",
        name: "Custom Resolution Utility",
        category: "hardware",
        icon: "fa-solid fa-tv",
        path: "assets/cru-1.5.3/CRU.rar",
        keywords: "cru toastyx custom resolution refresh rate monitor overclock edid freesync",
        readme: "## Overview\nConfigure custom monitor resolutions, overclock display refresh rates, and tweak EDID display timings."
    },
    {
        id: "cpuz",
        name: "CPU-Z Telemetry & Benchmark",
        category: "hardware",
        icon: "fa-solid fa-microchip",
        path: "https://www.cpuid.com/softwares/cpu-z.html",
        keywords: "cpuz cpu-z cpuid processor ram timings motherboard cache single multi thread benchmark",
        readme: "## Overview\nCPU-Z is the premier freeware hardware detection and CPU telemetry tool for Windows PCs.\n\n## Monitored Telemetry\n- **Processor**: Exact microcode, core stepping, clock multipliers, voltage (VCore), and instruction set extensions.\n- **Memory**: Timings (CL, tRCD, tRP, tRAS, CR), memory frequency, and dual/quad channel configuration.\n- **Motherboard**: Chipset model, BIOS revision, and PCIe bus speed."
    },
    {
        id: "gpuz",
        name: "TechPowerUp GPU-Z",
        category: "hardware",
        icon: "fa-solid fa-gamepad",
        path: "https://www.techpowerup.com/download/techpowerup-gpu-z/",
        keywords: "gpuz gpu-z techpowerup graphics card nvidia amd intel vram sensors clock memory bios",
        readme: "## Overview\nGPU-Z is the standard diagnostic utility designed to provide all information about your video card and graphics processing unit.\n\n## Monitored Specs\n- GPU architecture, core clocks, memory type (GDDR6/GDDR6X), bus width, and bandwidth.\n- Real-time thermal sensor telemetry (GPU Temp, Hotspot, VRAM Temperature, Fan RPM, and Total Board Power draw)."
    },
    {
        id: "afterburner",
        name: "MSI Afterburner & RivaTuner (RTSS)",
        category: "hardware",
        icon: "fa-solid fa-tachograph-digital",
        path: "https://www.guru3d.com/download/msi-afterburner-beta-download/",
        keywords: "msi afterburner rivatuner rtss osd fps overlay undervolt overclock fan curve frame time",
        readme: "## Overview\nMSI Afterburner with RivaTuner Statistics Server (RTSS) is the world's most widely used graphics card overclocking, undervolting, and real-time in-game telemetry overlay software.\n\n## Key Capabilities\n- Custom GPU voltage/frequency curve editor for undervolting.\n- In-game on-screen display (OSD) showing FPS, 1% low frametimes, GPU/CPU temps, and VRAM usage.\n- Custom fan speed curves to balance acoustics and thermals."
    },
    {
        id: "throttlestop",
        name: "ThrottleStop CPU Power & Thermal Tuner",
        category: "hardware",
        icon: "fa-solid fa-sliders",
        path: "https://www.techpowerup.com/download/techpowerup-throttlestop/",
        keywords: "throttlestop intel undervolt thermal throttle power limit pl1 pl2 bd prochot unclewebb",
        readme: "## Overview\nThrottleStop is an advanced Intel CPU performance monitoring and power-limit adjustment tool created by UncleWebb.\n\n## Features\n- Overcome laptop thermal throttling and power-limit throttling (PL1 / PL2).\n- CPU Core & Cache voltage offset undervolting to drastically reduce temperatures under load.\n- Disable `BD PROCHOT` false thermal flags on malfunctioning hardware."
    },
    {
        id: "quickcpu",
        name: "Quick CPU Performance Tuner",
        category: "hardware",
        icon: "fa-solid fa-gauge",
        path: "https://coderbag.com/product/quick-cpu",
        keywords: "quick cpu core parking frequency scaling turbo boost power plan c-states real-time",
        readme: "## Overview\nQuick CPU (formerly Core Parking Manager) allows real-time adjustment of CPU Core Parking, Frequency Scaling, and Turbo Boost parameters.\n\n## Benefits\n- Unpark all CPU cores for smoother framerates in CPU-bound games.\n- Live per-core temperature, clock frequency, and TDP wattage monitoring."
    },
    {
        id: "furmark",
        name: "FurMark GPU Stress Test",
        category: "hardware",
        icon: "fa-solid fa-fire",
        path: "https://geeks3d.com/furmark/",
        keywords: "furmark gpu stress test donut stability benchmark burn-in vram thermals geeks3d",
        readme: "## Overview\nFurMark is an intensive OpenGL/Vulkan GPU stress test and benchmark utility designed to test graphics card thermal stability and power limit capacity.\n\n## Instructions\n1. Run FurMark to perform a burn-in stability test on new or overclocked graphics cards.\n2. Monitor thermal hot-spots in real-time to ensure no overheating or GPU crashing occurs."
    },

    // =========================================================================
    // 4. STORAGE, SEARCH & DATA RECOVERY
    // =========================================================================
    {
        id: "cdi",
        name: "CrystalDiskInfo",
        category: "storage",
        icon: "fa-solid fa-hard-drive",
        path: "assets/CrystalDiskInfo/CDI.rar",
        keywords: "smart hdd ssd nvme disk health temperature telemetry crystal",
        readme: "## Overview\nA professional HDD/SSD health monitoring tool that displays detailed hardware information and S.M.A.R.T. status to prevent data loss."
    },
    {
        id: "cdm",
        name: "CrystalDiskMark",
        category: "storage",
        icon: "fa-solid fa-gauge-high",
        path: "assets/CrystalDiskMark/CDM.rar",
        keywords: "benchmark speed read write test storage ssd hdd nvme",
        readme: "## Overview\nThe industry-standard disk benchmark utility to measure sequential and random read/write speeds of storage drives."
    },
    {
        id: "wiztree",
        name: "WizTree Disk Space Analyzer",
        category: "storage",
        icon: "fa-solid fa-chart-pie",
        path: "https://antibody-software.com/files/wiztree_setup.exe",
        keywords: "wiztree disk space visualizer mft fast scanner storage hard drive cleanup treesize",
        readme: "## Overview\nWizTree is the world's fastest disk space analyzer. It reads the NTFS Master File Table (MFT) directly from the disk, scanning millions of files in mere seconds.\n\n## Why WizTree?\n- **46x Faster** than standard disk space scanners.\n- Visual treemap display to immediately identify huge files and hidden junk hogging storage."
    },
    {
        id: "everything",
        name: "Everything Search Engine",
        category: "storage",
        icon: "fa-solid fa-magnifying-glass-location",
        path: "https://www.voidtools.com/downloads/",
        keywords: "everything voidtools instant desktop search locate index fast files regex",
        readme: "## Overview\nEverything by Voidtools is an ultra-fast desktop search utility that locates files and folders by name instantly as you type.\n\n## Features\n- Indexes 1,000,000 files in under 1 second.\n- Negligible resource usage (takes ~75MB RAM for 1 million files).\n- Advanced regex, wildcard, and boolean search query support."
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
        icon: "fa-solid fa-layer-group",
        path: "assets/EaseUS_Partition_Master_13.0_Technician_Edition/EPM Technical Edition.rar",
        keywords: "partition master disk manager format resize clone mbr gpt 4k alignment",
        readme: "## Overview\nA comprehensive disk management tool for partitioning, merging, and optimizing hard drives and SSDs."
    },
    {
        id: "pic-recovery",
        name: "Picture Recovery Software",
        category: "storage",
        icon: "fa-solid fa-image",
        path: "assets/Picture Recovery Software/testdisk-7.3-WIP.rar",
        keywords: "photorec testdisk data recovery image photo file carving open source",
        readme: "## Overview\nOpen-source data and image recovery tool to carve and recover lost files from corrupt storage."
    },

    // =========================================================================
    // 5. CREATIVE, DESIGN & DESKTOP CUSTOMIZATION
    // =========================================================================
    {
        id: "adobe-suite",
        name: "Adobe Software Suite",
        category: "creative",
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
        readme: "## Overview\nFast PDF editor and converter to create, annotate, sign, and organize documents."
    },
    {
        id: "avro",
        name: "Avro Keyboard",
        category: "creative",
        icon: "fa-solid fa-keyboard",
        path: "assets/Avro/setup_avrokeyboard_5.6.0.exe",
        keywords: "bangla bengali phonetic keyboard typing unicode omicronlab",
        readme: "## Overview\nStandard Bengali phonetic keyboard software supporting full Unicode and ANSI typing."
    },
    {
        id: "winrar",
        name: "WinRAR Pro",
        category: "creative",
        icon: "fa-solid fa-file-zipper",
        path: "assets/Winrar/rarreg.rar",
        officialUrl: "https://www.win-rar.com/fileadmin/winrar-versions/winrar-x64-701.exe",
        sevenZipUrl: "https://www.7-zip.org/",
        keywords: "winrar 7zip compression zip rar archive rarreg key extract",
        readme: "## Instructions\n1. Install Official WinRAR.\n2. Extract 'rarreg.key' from the downloaded RAR.\n3. Move 'rarreg.key' into the WinRAR installation folder (`C:\\Program Files\\WinRAR`).\n\n## 7-Zip Recommendation\nIf you prefer free open-source software, 7-Zip is the best lightweight alternative to WinRAR."
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
const collapsedGroups = new Set();

function toggleGroupCollapse(groupId) {
    const groupEl = document.getElementById(`group-${groupId}`);
    if (!groupEl) return;
    if (collapsedGroups.has(groupId)) {
        collapsedGroups.delete(groupId);
        groupEl.classList.remove('collapsed');
    } else {
        collapsedGroups.add(groupId);
        groupEl.classList.add('collapsed');
    }
}

// Clear Search input helper
function clearSearch() {
    if (fileSearch) {
        fileSearch.value = '';
        renderExplorer();
        fileSearch.focus();
    }
}

// Render Explorer Grid with Windows Explorer "Group by" layout
function renderExplorer() {
    const query = fileSearch ? fileSearch.value.toLowerCase().trim() : '';
    fileGrid.innerHTML = '';

    const visibleGroups = (currentCategory === 'all')
        ? groupsConfig
        : groupsConfig.filter(g => g.id === currentCategory);

    let totalMatches = 0;
    const container = document.createElement('div');
    container.className = 'explorer-groups-container';

    visibleGroups.forEach(group => {
        const groupItems = fileData.filter(item => {
            if (item.category !== group.id) return false;
            if (!query) return true;

            const searchableText = [
                item.name,
                item.category,
                item.keywords || '',
                item.readme || '',
                item.content || '',
                item.copyText || '',
                ...(item.commands || []).map(c => c.desc + ' ' + c.code)
            ].join(' ').toLowerCase();

            return searchableText.includes(query);
        });

        if (groupItems.length === 0) return;
        totalMatches += groupItems.length;

        const isCollapsed = collapsedGroups.has(group.id);
        const groupEl = document.createElement('div');
        groupEl.className = `explorer-group ${isCollapsed ? 'collapsed' : ''}`;
        groupEl.id = `group-${group.id}`;

        const headerEl = document.createElement('div');
        headerEl.className = 'group-header';
        headerEl.setAttribute('role', 'button');
        headerEl.setAttribute('tabindex', '0');
        headerEl.setAttribute('aria-expanded', !isCollapsed);
        headerEl.setAttribute('aria-controls', `grid-${group.id}`);
        headerEl.title = `Click to ${isCollapsed ? 'expand' : 'collapse'} ${group.title}`;

        headerEl.onclick = () => toggleGroupCollapse(group.id);
        headerEl.onkeydown = (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleGroupCollapse(group.id);
            }
        };

        headerEl.innerHTML = `
            <span class="group-chevron" aria-hidden="true"><i class="fa-solid fa-chevron-down"></i></span>
            <div class="group-title-wrap">
                <span class="group-title">${escapeHtml(group.title)}</span>
                <span class="group-count">(${groupItems.length})</span>
            </div>
            <div class="group-divider"></div>
        `;

        const gridEl = document.createElement('div');
        gridEl.className = 'group-grid';
        gridEl.id = `grid-${group.id}`;

        groupItems.forEach(item => {
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

            let subLabel = 'Executable / Utility';
            if (item.category === 'scripts') {
                subLabel = 'Script / Tweak';
            } else if (item.copyLabel) {
                subLabel = item.copyLabel;
            }

            card.innerHTML = `
                <div class="file-info">
                    <div class="file-icon"><i class="${item.icon}"></i></div>
                    <div class="file-meta">
                        <h3>${escapeHtml(item.name)}</h3>
                        <span>${escapeHtml(subLabel)}</span>
                    </div>
                </div>
            `;
            gridEl.appendChild(card);
        });

        groupEl.appendChild(headerEl);
        groupEl.appendChild(gridEl);
        container.appendChild(groupEl);
    });

    if (totalMatches === 0) {
        fileGrid.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-magnifying-glass empty-icon"></i>
                <h3>No tools or scripts found</h3>
                <p>No results match "${escapeHtml(query)}". Try searching for a different keyword or category.</p>
                <button class="empty-clear-btn" onclick="clearSearch()">Clear Search</button>
            </div>
        `;
        return;
    }

    fileGrid.appendChild(container);
}

// Show Detail View
function showDetail(id, isFromPopstate = false) {
    const item = fileData.find(f => f.id === id);
    if (!item) return;

    if (!isFromPopstate) {
        explorerScrollPos = window.scrollY;
    }

    mainLayout.classList.add('detail-mode');
    explorerView.classList.remove('active');
    detailView.classList.add('active');

    let badgeText = 'Software Utility';
    if (item.category === 'scripts') badgeText = 'Handcrafted Script / Tweak';
    else if (item.category === 'hardware') badgeText = 'Hardware Telemetry';
    else if (item.category === 'storage') badgeText = 'Storage & Diagnostics';
    else if (item.category === 'creative') badgeText = 'Creative & Utility';

    let heroHtml = `
        <div class="detail-hero-info">
            <div class="detail-icon"><i class="${item.icon}"></i></div>
            <h1>${escapeHtml(item.name)}</h1>
            <span class="version-badge">${badgeText}</span>
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
    } else if (item.id === "hwinfo") {
        heroHtml += `
            <a href="${item.installerUrl}" target="_blank" rel="noopener noreferrer" class="download-hero">
                <i class="fa-solid fa-download"></i> Official Installer
            </a>
            <a href="${item.portableUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary-soft">
                <i class="fa-solid fa-box-archive"></i> Portable Version
            </a>
        `;
    } else if (item.path && item.path.startsWith('http')) {
        heroHtml += `
            <a href="${item.path}" target="_blank" rel="noopener noreferrer" class="download-hero">
                <i class="fa-solid fa-up-right-from-square"></i> Download / Access Resource
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

    if (item.readme) {
        bodyHtml += `
            <div class="readme-title"><i class="fa-solid fa-circle-info"></i> Documentation</div>
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
    formatted = formatted.replace(/^## (.*$)/gim, '<div class="readme-meta">$1</div>');
    formatted = formatted.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
    formatted = formatted.replace(/`([^`]+)`/gim, '<code>$1</code>');
    return formatted;
}

// Global Keyboard Handler (Escape to close detail view)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && detailView.classList.contains('active')) {
        hideDetail();
    }
});

// Initialize Explorer
document.addEventListener('DOMContentLoaded', () => {
    renderExplorer();

    if (fileSearch) {
        fileSearch.addEventListener('input', renderExplorer);
    }

    document.querySelectorAll('.pill').forEach(item => {
        const selectPill = () => {
            document.querySelectorAll('.pill').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            currentCategory = item.dataset.category;
            renderExplorer();
        };

        item.onclick = selectPill;
        item.onkeydown = (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                selectPill();
            }
        };
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
