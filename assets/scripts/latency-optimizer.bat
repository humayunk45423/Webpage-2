@echo off
:: ============================================================================
:: Ultimate Windows Latency & Micro-Stutter Optimizer
:: Handcrafted for Software HQ by Humayoun Kobir
:: ============================================================================
title Software HQ - Windows Latency & Micro-Stutter Optimizer
color 0A

:: Check for Administrator Privileges
net session >nul 2>&1
if %errorLevel% neq 0 (
    echo [ERROR] This script requires Administrator privileges.
    echo Right-click this file and select "Run as administrator".
    pause
    exit /b 1
)

echo ============================================================================
echo   SOFTWARE HQ // WINDOWS LATENCY ^& PERFORMANCE OPTIMIZER
echo   Curated by Humayoun Kobir (Humayun Kabir)
echo ============================================================================
echo.

echo [*] 1/6 Optimizing BCDedit Timer Resolution ^& Clock Jitter...
bcdedit /set disabledynamictick yes >nul 2>&1
bcdedit /set useplatformclock false >nul 2>&1
bcdedit /set useplatformtick yes >nul 2>&1
echo     [+] BCDedit timer resolution calibrated.

echo [*] 2/6 Disabling Xbox GameDVR Background Recording Stutter...
reg add "HKCU\System\GameConfigStore" /v "GameDVR_Enabled" /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKCU\System\GameConfigStore" /v "GameDVR_FSEBehaviorMode" /t REG_DWORD /d 2 /f >nul 2>&1
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows\GameDVR" /v "AllowGameDVR" /t REG_DWORD /d 0 /f >nul 2>&1
echo     [+] GameDVR background capture disabled.

echo [*] 3/6 Tuning Network TCP Latency ^& Disabling Nagle Algorithm...
for /f "tokens=*" %%i in ('reg query "HKLM\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters\Interfaces"') do (
    reg add "%%i" /v "TcpAckFrequency" /t REG_DWORD /d 1 /f >nul 2>&1
    reg add "%%i" /v "TCPNoDelay" /t REG_DWORD /d 1 /f >nul 2>&1
)
echo     [+] TCP Ack Frequency and NoDelay applied across network interfaces.

echo [*] 4/6 Disabling Windows Diagnostic Telemetry (DiagTrack)...
sc stop "DiagTrack" >nul 2>&1
sc config "DiagTrack" start= disabled >nul 2>&1
sc stop "dmwappushservice" >nul 2>&1
sc config "dmwappushservice" start= disabled >nul 2>&1
echo     [+] Background telemetry tracking service stopped.

echo [*] 5/6 Setting Windows Multimedia System Responsiveness...
reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Multimedia\SystemProfile" /v "SystemResponsiveness" /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Multimedia\SystemProfile\Tasks\Games" /v "GPU Priority" /t REG_DWORD /d 8 /f >nul 2>&1
reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Multimedia\SystemProfile\Tasks\Games" /v "Priority" /t REG_DWORD /d 6 /f >nul 2>&1
reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Multimedia\SystemProfile\Tasks\Games" /v "Scheduling Category" /t REG_SZ /d "High" /f >nul 2>&1
echo     [+] Gaming multimedia priority set to maximum responsiveness.

echo [*] 6/6 Flushing DNS Cache...
ipconfig /flushdns >nul 2>&1
echo     [+] DNS resolver cache cleared.

echo.
echo ============================================================================
echo   [SUCCESS] All low-latency ^& anti-stutter optimizations applied!
echo   Restart your PC for all kernel timer changes to take full effect.
echo ============================================================================
echo.
pause
