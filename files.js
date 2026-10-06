/**
 * Software HQ | Humayoun Kobir Repository
 * Fast, client-side utility directory with search, filtering, and hash routing.
 */

const fileData = [
    {
        id: "autoruns",
        name: "Autoruns",
        category: "software",
        icon: "fa-solid fa-bolt",
        path: "assets/Autoruns/Autoruns.rar",
        keywords: "startup boot autostart sysinternals windows microsoft services drivers tasks",
        readme: "## Overview\nStartup monitor utility showing all programs, services, drivers, and scheduled tasks configured to run during system bootup.\n\n## Instructions\n1. Extract the RAR archive.\n2. Run `autoruns64.exe` as Administrator."
    },
    {
        id: "avro",
        name: "Avro Keyboard",
        category: "software",
        icon: "fa-solid fa-keyboard",
        path: "assets/Avro/setup_avrokeyboard_5.6.0.exe",
        keywords: "bangla bengali phonetic keyboard typing unicode omicronlab",
        readme: "## Overview\nStandard Bengali phonetic keyboard software supporting full Unicode and ANSI typing."
    },
    {
        id: "bios-button",
        name: "BIOS Enter Button",
        category: "software",
        icon: "fa-solid fa-microchip",
        path: "assets/BIOS enter button/One click to Bios.rar",
        keywords: "uefi bios fastboot restart bootloader firmware motherboard",
        readme: "## What it does\nAn instant, one-click solution to reboot your PC directly into the UEFI/BIOS settings without manual key spamming."
    },
    {
        id: "cdi",
        name: "CrystalDiskInfo",
        category: "software",
        icon: "fa-solid fa-hard-drive",
        path: "assets/CrystalDiskInfo/CDI.rar",
        keywords: "smart hdd ssd nvme disk health temperature telemetry crystal",
        readme: "## Overview\nA professional HDD/SSD health monitoring tool that displays detailed hardware information and S.M.A.R.T. status to prevent data loss."
    },
    {
        id: "cdm",
        name: "CrystalDiskMark",
        category: "software",
        icon: "fa-solid fa-gauge-high",
        path: "assets/CrystalDiskMark/CDM.rar",
        keywords: "benchmark speed read write test storage ssd hdd nvme",
        readme: "## Overview\nThe industry-standard disk benchmark utility to measure sequential and random read/write speeds of storage drives."
    },
    {
        id: "directx",
        name: "DirectX 11 Setup",
        category: "text",
        icon: "fa-solid fa-gamepad",
        path: "assets/DirectX 11 Setup.rar",
        keywords: "directx 11 dx11 runtime gaming 3d libraries graphics",
        readme: "## Overview\nEssential DirectX 11 Runtime components required to run modern games and high-performance graphics applications."
    },
    {
        id: "easeus-recovery",
        name: "EaseUS Data Recovery",
        category: "software",
        icon: "fa-solid fa-database",
        path: "assets/EaseUS_Data_Recovery_Wizard_Technician_12.8.0_Multilingual/EaseUS_Data_Recovery_Wizard_Technician_12.8.0_Multilingual.rar",
        keywords: "data recovery restore lost deleted formatted raw partition files",
        readme: "## Overview\nAdvanced data recovery software for technicians to retrieve lost, deleted, or formatted files from any storage device."
    },
    {
        id: "easeus-partition",
        name: "EaseUS Partition Master",
        category: "software",
        icon: "fa-solid fa-layer-group",
        path: "assets/EaseUS_Partition_Master_13.0_Technician_Edition/EPM Technical Edition.rar",
        keywords: "partition master disk manager format resize clone mbr gpt 4k alignment",
        readme: "## Overview\nA comprehensive disk management tool for partitioning, merging, and optimizing hard drives and SSDs."
    },
    {
        id: "glary",
        name: "Glary Utility Pro",
        category: "software",
        icon: "fa-solid fa-broom",
        path: "assets/Glary Utility/Glary_Utilities_v5.211.0.240.exe",
        copyLabel: "Serial Key",
        copyText: "3788-61679-58286-4470",
        keywords: "cleaner optimizer registry disk maintenance speedup serial key",
        readme: "## Activation\nUse the Serial Key provided below to unlock the Professional version features for system cleaning and optimization."
    },
    {
        id: "goodbyedpi",
        name: "Good Bye DPI",
        category: "software",
        icon: "fa-solid fa-unlock",
        path: "assets/Good Bye DPI/goodbyedpi-0.2.2.rar",
        keywords: "dpi censorship bypass packet inspection network throttling vpn free",
        readme: "## Overview\nBypass Deep Packet Inspection censorship and ISP throttling without requiring a slow proxy or VPN."
    },
    {
        id: "hitmanpro",
        name: "HitmanPro Scanner",
        category: "software",
        icon: "fa-solid fa-bug-slash",
        path: "assets/HitmanPro_3.8.28_Build_324/HitmanPro 3.8.rar",
        keywords: "antivirus malware scanner cloud second opinion security virus trojan",
        readme: "## Overview\nCloud-based secondary malware and threat scanner that operates alongside your primary antivirus."
    },
    {
        id: "pc-opt",
        name: "PC Optimisation Guide",
        category: "text",
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
        category: "text",
        icon: "fa-solid fa-code",
        path: "assets/Registry path of context menu.txt",
        keywords: "registry path context menu background shell windows tweak",
        content: "Computer\\HKEY_CLASSES_ROOT\\Directory\\Background\\shell"
    },
    {
        id: "right-click-repair",
        name: "Right Click Repair Code",
        category: "text",
        icon: "fa-solid fa-wrench",
        path: "assets/Right click repair code.txt",
        keywords: "right click context menu explorer fix guid clsid repair",
        content: "shell:::{80F3F1D5-FECA-45F3-BC32-752C152E456E}"
    },
    {
        id: "win-office-act",
        name: "Windows & Office Activator",
        category: "text",
        icon: "fa-solid fa-key",
        path: "assets/Windows Office Activation Script.txt",
        keywords: "activation mas massgrave windows office powershell script",
        readme: "## Instructions\nRun PowerShell as Administrator to use this script.",
        content: "irm https://get.activated.win | iex"
    },
    {
        id: "pic-recovery",
        name: "Picture Recovery Software",
        category: "software",
        icon: "fa-solid fa-image",
        path: "assets/Picture Recovery Software/testdisk-7.3-WIP.rar",
        keywords: "photorec testdisk data recovery image photo file carving open source",
        readme: "## Overview\nOpen-source data and image recovery tool to carve and recover lost files from corrupt storage."
    },
    {
        id: "process-explorer",
        name: "Process Explorer",
        category: "software",
        icon: "fa-solid fa-list-check",
        path: "assets/ProcessExplorer/PE.rar",
        keywords: "process explorer task manager sysinternals handles dll cpu gpu",
        readme: "## Overview\nSysinternals Process Explorer: advanced task manager showing active DLLs, file handles, and hardware statistics."
    },
    {
        id: "process-monitor",
        name: "Process Monitor",
        category: "software",
        icon: "fa-solid fa-desktop",
        path: "assets/ProcessMonitor.zip",
        keywords: "procmon process monitor sysinternals registry file thread real-time",
        readme: "## Overview\nProcess Monitor is an advanced monitoring tool for Windows that shows real-time file system, Registry, and process/thread activity."
    },
    {
        id: "vcredist",
        name: "Visual C++ Runtimes All-in-One",
        category: "software",
        icon: "fa-brands fa-microsoft",
        path: "assets/Visual C++ Runtimes All-in-One-Jun-2026.zip",
        keywords: "vcredist visual c++ redistributable runtimes 2005 2022 x86 x64 dll fix",
        readme: "## Overview\nAll-in-One package containing every Visual C++ Redistributable runtime (2005–2022), both x86 and x64.\n\n## Instructions\n1. Extract the ZIP file.\n2. Run the included batch installer to install all runtimes at once.\n\n## Why You Need This\nFixes common 'VCRUNTIME140.dll missing' or 'MSVCP.dll not found' errors."
    },
    {
        id: "revo",
        name: "Revo Uninstaller Pro",
        category: "software",
        icon: "fa-solid fa-eraser",
        path: "assets/Revo Uninstaller Pro 5.4.3 FINAL/Revo Uninsataller.rar",
        copyLabel: "License Path",
        copyText: "C:\\ProgramData\\VS Revo Group\\Revo Uninstaller Pro\\",
        keywords: "revo uninstaller deep clean remove registry remnant apps",
        readme: "## Instructions\nCopy the license file to the target path after installation."
    },
    {
        id: "win10-menu",
        name: "Win10 Right Click Menu",
        category: "text",
        icon: "fa-solid fa-window-restore",
        path: "assets/Windows 10 Right click menu/Old-Right-Click-Menu-WIndows-11.zip",
        keywords: "windows 10 classic context menu windows 11 restore old right click",
        readme: "## Overview\nRestores the classic Windows 10 right-click context menu in Windows 11."
    },
    {
        id: "cursor",
        name: "Win11 Rounded Cursor",
        category: "text",
        icon: "fa-solid fa-arrow-pointer",
        path: "assets/Windows 11 rounded Cursor/windows_11 cursors.zip",
        keywords: "cursor mouse rounded theme pointers win11 customization",
        readme: "## Overview\nClean rounded high-DPI cursor set for Windows desktop customization."
    },
    {
        id: "winrar",
        name: "WinRAR Pro",
        category: "software",
        icon: "fa-solid fa-file-zipper",
        path: "assets/Winrar/rarreg.rar",
        officialUrl: "https://www.win-rar.com/fileadmin/winrar-versions/winrar-x64-701.exe",
        sevenZipUrl: "https://www.7-zip.org/",
        keywords: "winrar 7zip compression zip rar archive rarreg key extract",
        readme: "## Instructions\n1. Install Official WinRAR.\n2. Extract 'rarreg.key' from the downloaded RAR.\n3. Move 'rarreg.key' into the WinRAR installation folder (`C:\\Program Files\\WinRAR`).\n\n## 7-Zip Recommendation\nIf you prefer free open-source software, 7-Zip is the best lightweight alternative to WinRAR."
    },
    {
        id: "hwinfo",
        name: "HWiNFO",
        category: "software",
        icon: "fa-solid fa-microchip",
        path: "https://www.hwinfo.com/download/",
        installerUrl: "https://www.hwinfo.com/download/",
        portableUrl: "https://www.hwinfo.com/download/",
        keywords: "hwinfo hardware info temperature sensor voltage cpu gpu diagnostic",
        readme: "## Overview\nHWiNFO is a professional hardware diagnostic tool with real-time sensor monitoring (thermal, voltage, fan, and power telemetry)."
    },
    {
        id: "adobe-suite",
        name: "Adobe Software Suite",
        category: "software",
        icon: "fa-solid fa-palette",
        path: "Adobe Software",
        photoshopUrl: "https://getitintopc.com/adobe-photoshop-cc-2020-free-download/",
        illustratorUrl: "https://getitintopc.com/adobe-illustrator-cc-2020-free-download/",
        keywords: "photoshop illustrator adobe graphic design 2020 creative suite vector raster",
        readme: "## Included Software\n- Adobe Photoshop CC 2020: Photo editing and digital imaging.\n- Adobe Illustrator CC 2020: Vector graphics, typography, and logo design."
    },
    {
        id: "cru",
        name: "Custom Resolution Utility",
        category: "text",
        icon: "fa-solid fa-tv",
        path: "assets/cru-1.5.3/CRU.rar",
        keywords: "cru toastyx custom resolution refresh rate monitor overclock edid freesync",
        readme: "## Overview\nConfigure custom monitor resolutions, overclock display refresh rates, and tweak EDID display timings."
    },
    {
        id: "fontlab",
        name: "FontLab",
        category: "software",
        icon: "fa-solid fa-font",
        path: "assets/FontLab.rar",
        keywords: "fontlab typography font creator opentype truetype woff editor design",
        readme: "## Overview\nProfessional font editor used by type designers to craft and export custom OpenType and web fonts."
    },
    {
        id: "foxit-pdf",
        name: "Foxit PDF Editor",
        category: "software",
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

let currentCategory = 'all';
let explorerScrollPos = 0;

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

    card.innerHTML = `
        <div class="file-info">
            <div class="file-icon"><i class="${item.icon}"></i></div>
            <div class="file-meta">
                <h3>${escapeHtml(item.name)}</h3>
                <span>${item.category === 'software' ? 'Executable / Utility' : 'Script / Tweak'}</span>
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

        const searchableText = [
            item.name,
            item.category,
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

    const softwares = filtered.filter(item => item.category === 'software');
    const scripts = filtered.filter(item => item.category === 'text');

    if (currentCategory === 'all' || currentCategory === 'software') {
        if (softwares.length > 0) {
            const section = document.createElement('div');
            section.className = 'section-group';
            section.innerHTML = `
                <div class="group-header">
                    <h2 class="group-title"><i class="fa-solid fa-compact-disc"></i> Softwares</h2>
                    <span class="group-count">${softwares.length} items</span>
                </div>
            `;
            const grid = document.createElement('div');
            grid.className = 'file-grid';
            softwares.forEach(item => grid.appendChild(createCard(item)));
            section.appendChild(grid);
            explorerView.appendChild(section);
        }
    }

    if (currentCategory === 'all' || currentCategory === 'text') {
        if (scripts.length > 0) {
            const section = document.createElement('div');
            section.className = 'section-group';
            section.innerHTML = `
                <div class="group-header">
                    <h2 class="group-title"><i class="fa-solid fa-code"></i> Scripts &amp; Tools</h2>
                    <span class="group-count">${scripts.length} items</span>
                </div>
            `;
            const grid = document.createElement('div');
            grid.className = 'file-grid';
            scripts.forEach(item => grid.appendChild(createCard(item)));
            section.appendChild(grid);
            explorerView.appendChild(section);
        }
    }
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

    let heroHtml = `
        <div class="detail-hero-info">
            <div class="detail-icon"><i class="${item.icon}"></i></div>
            <h1>${escapeHtml(item.name)}</h1>
            <span class="version-badge">${item.category === 'software' ? 'Software Utility' : 'Script / Reference'}</span>
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
