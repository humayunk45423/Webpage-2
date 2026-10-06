@echo off
:: ============================================================================
:: Deep Clean & Cache Purger Script
:: Handcrafted for Software HQ by Humayoun Kobir
:: ============================================================================
title Software HQ - Deep Clean & Cache Purger
color 0B

:: Check for Administrator Privileges
net session >nul 2>&1
if %errorLevel% neq 0 (
    echo [ERROR] This script requires Administrator privileges.
    echo Right-click this file and select "Run as administrator".
    pause
    exit /b 1
)

echo ============================================================================
echo   SOFTWARE HQ // DEEP SYSTEM CLEAN ^& SHADER CACHE PURGER
echo   Curated by Humayoun Kobir (Humayun Kabir)
echo ============================================================================
echo.

echo [*] 1/7 Cleaning User ^& System Temporary Files...
del /s /f /q "%temp%\*.*" >nul 2>&1
for /d %%p in ("%temp%\*") do rmdir "%%p" /s /q >nul 2>&1
del /s /f /q "C:\Windows\Temp\*.*" >nul 2>&1
for /d %%p in ("C:\Windows\Temp\*") do rmdir "%%p" /s /q >nul 2>&1
echo     [+] Temporary folders purged.

echo [*] 2/7 Cleaning Windows Prefetch ^& Memory Cache...
del /s /f /q "C:\Windows\Prefetch\*.*" >nul 2>&1
echo     [+] Prefetch directory cleared.

echo [*] 3/7 Cleaning Application Crash Dumps ^& Error Reports...
del /s /f /q "%LOCALAPPDATA%\CrashDumps\*.*" >nul 2>&1
del /s /f /q "C:\ProgramData\Microsoft\Windows\WER\ReportArchive\*.*" >nul 2>&1
del /s /f /q "C:\ProgramData\Microsoft\Windows\WER\ReportQueue\*.*" >nul 2>&1
echo     [+] WER logs and crash dumps removed.

echo [*] 4/7 Purging Corrupted DirectX Shader Cache...
del /s /f /q "%LOCALAPPDATA%\D3DSCache\*.*" >nul 2>&1
for /d %%p in ("%LOCALAPPDATA%\D3DSCache\*") do rmdir "%%p" /s /q >nul 2>&1
echo     [+] DirectX shader cache reset.

echo [*] 5/7 Purging NVIDIA ^& AMD GPU Shader Caches...
del /s /f /q "%LOCALAPPDATA%\NVIDIA\DXCache\*.*" >nul 2>&1
del /s /f /q "%LOCALAPPDATA%\NVIDIA\GLCache\*.*" >nul 2>&1
del /s /f /q "%LOCALAPPDATA%\AMD\DxCache\*.*" >nul 2>&1
del /s /f /q "%LOCALAPPDATA%\AMD\GLCache\*.*" >nul 2>&1
echo     [+] GPU driver shader caches cleared.

echo [*] 6/7 Clearing Windows Update Download Residue...
net stop wuauserv >nul 2>&1
del /s /f /q "C:\Windows\SoftwareDistribution\Download\*.*" >nul 2>&1
for /d %%p in ("C:\Windows\SoftwareDistribution\Download\*") do rmdir "%%p" /s /q >nul 2>&1
net start wuauserv >nul 2>&1
echo     [+] Windows update download cache cleared.

echo [*] 7/7 Emptying Windows Recycle Bin...
powershell.exe -NoProfile -Command "Clear-RecycleBin -Force -ErrorAction SilentlyContinue" >nul 2>&1
echo     [+] Recycle Bin emptied.

echo.
echo ============================================================================
echo   [SUCCESS] Deep system cleanup finished! Gigabytes of junk freed up.
echo ============================================================================
echo.
pause
