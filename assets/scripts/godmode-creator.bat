@echo off
title GodMode & Master Admin Panel Creator
color 0b
echo =================================================================
echo   GODMODE & MASTER ADMIN PANEL CREATOR
echo   Creates the all-in-one 200+ setting Windows Master Panel
echo =================================================================
echo.

set "DESKTOP_PATH=%USERPROFILE%\Desktop"
set "GODMODE_FOLDER=%DESKTOP_PATH%\GodMode.{ED7BA470-8E54-465E-825C-99712043E01C}"

if not exist "%GODMODE_FOLDER%" (
    mkdir "%GODMODE_FOLDER%"
    echo [SUCCESS] GodMode shortcut created directly on your Desktop!
) else (
    echo [INFO] GodMode folder already exists on your Desktop.
)

echo.
echo Launching GodMode now...
start "" "%GODMODE_FOLDER%"
pause
