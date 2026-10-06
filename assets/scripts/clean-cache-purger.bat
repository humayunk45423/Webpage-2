@echo off
title Windows Deep Clean & Cache Purger
color 0a
echo =================================================================
echo   WINDOWS DEEP CLEAN & SYSTEM CACHE PURGER
echo   Cleans: Temp, Prefetch, Windows Update, DirectX Shader & DNS
echo =================================================================
echo.

net session >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Administrator privileges required. Right-click and 'Run as administrator'.
    pause
    exit /b 1
)

echo [1/8] Purging User & System Temp directories...
del /s /f /q "%temp%\*.*" >nul 2>&1
for /d %%p in ("%temp%\*.*") do rmdir "%%p" /s /q >nul 2>&1
del /s /f /q "%SystemRoot%\Temp\*.*" >nul 2>&1
for /d %%p in ("%SystemRoot%\Temp\*.*") do rmdir "%%p" /s /q >nul 2>&1

echo [2/8] Purging Windows Prefetch cache...
del /s /f /q "%SystemRoot%\Prefetch\*.*" >nul 2>&1

echo [3/8] Flushing DNS Resolver Cache...
ipconfig /flushdns >nul 2>&1

echo [4/8] Purging DirectX Shader Cache...
del /s /f /q "%LocalAppData%\D3DSCache\*.*" >nul 2>&1
del /s /f /q "%LocalAppData%\NVIDIA\DXCache\*.*" >nul 2>&1
del /s /f /q "%LocalAppData%\AMD\DxCache\*.*" >nul 2>&1

echo [5/8] Clearing Windows Delivery Optimization files...
net stop dosvc >nul 2>&1
del /s /f /q "%SystemRoot%\SoftwareDistribution\DeliveryOptimization\*.*" >nul 2>&1
net start dosvc >nul 2>&1

echo [6/8] Purging Windows Update Download cache...
net stop wuauserv >nul 2>&1
del /s /f /q "%SystemRoot%\SoftwareDistribution\Download\*.*" >nul 2>&1
net start wuauserv >nul 2>&1

echo [7/8] Purging Explorer Thumbnail Cache...
taskkill /f /im explorer.exe >nul 2>&1
del /f /s /q /a "%LocalAppData%\Microsoft\Windows\Explorer\thumbcache_*.db" >nul 2>&1
start explorer.exe

echo [8/8] Running Component Store Cleanup...
dism.exe /online /Cleanup-Image /StartComponentCleanup /ResetBase >nul 2>&1

echo.
echo =================================================================
echo   [SUCCESS] System cache, shader cache & temp files purged cleanly!
echo =================================================================
echo.
pause
