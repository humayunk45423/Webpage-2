@echo off
title The Ultimate Windows Latency & Micro-Stutter Fixer
color 0b
echo =================================================================
echo   THE ULTIMATE WINDOWS LATENCY & MICRO-STUTTER OPTIMIZER
echo   Tweaks: Dynamic Tick, Platform Clock, Network Throttling & Power
echo =================================================================
echo.
net session >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Please right-click this script and select 'Run as administrator'.
    pause
    exit /b 1
)

echo [1/7] Disabling Dynamic Tick (reduces latency fluctuation)...
bcdedit /set disabledynamictick yes >nul 2>&1

echo [2/7] Disabling synthetic High Precision Event Timer (HPET) overhead...
bcdedit /set useplatformclock no >nul 2>&1

echo [3/7] Enabling synthetic platform tick for consistent frame pacing...
bcdedit /set useplatformtick yes >nul 2>&1

echo [4/7] Disabling Windows Network Throttling for competitive gaming...
reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Multimedia\SystemProfile" /v "NetworkThrottlingIndex" /t REG_DWORD /d 4294967295 /f >nul 2>&1
reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Multimedia\SystemProfile" /v "SystemResponsiveness" /t REG_DWORD /d 0 /f >nul 2>&1

echo [5/7] Tuning Games System Profile for max scheduling priority...
reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Multimedia\SystemProfile\Tasks\Games" /v "GPU Priority" /t REG_DWORD /d 8 /f >nul 2>&1
reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Multimedia\SystemProfile\Tasks\Games" /v "Priority" /t REG_DWORD /d 6 /f >nul 2>&1
reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Multimedia\SystemProfile\Tasks\Games" /v "Scheduling Category" /t REG_SZ /d "High" /f >nul 2>&1
reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Multimedia\SystemProfile\Tasks\Games" /v "SFIO Priority" /t REG_SZ /d "High" /f >nul 2>&1

echo [6/7] Enabling Ultimate Performance Power Plan...
powercfg -duplicatescheme e9a42b02-d5df-448d-aa00-03f14749eb61 >nul 2>&1

echo [7/7] Disabling GameDVR Background Capture stutter...
reg add "HKCU\System\GameConfigStore" /v "GameDVR_Enabled" /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows\GameDVR" /v "AllowGameDVR" /t REG_DWORD /d 0 /f >nul 2>&1

echo.
echo =================================================================
echo   [SUCCESS] Latency tweaks applied successfully!
echo   Please reboot your PC for all kernel timer changes to take effect.
echo =================================================================
echo.
pause
