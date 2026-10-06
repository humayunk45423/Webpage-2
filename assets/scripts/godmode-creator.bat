@echo off
:: ============================================================================
:: GodMode & Master Admin Control Panel Creator
:: Handcrafted for Software HQ by Humayoun Kobir
:: ============================================================================
title Software HQ - GodMode Creator
color 0D

echo ============================================================================
echo   SOFTWARE HQ // GODMODE ^& MASTER CONTROL PANEL CREATOR
echo   Curated by Humayoun Kobir (Humayun Kabir)
echo ============================================================================
echo.

set "GODMODE_FOLDER=%USERPROFILE%\Desktop\GodMode.{ED7BA470-8E54-465E-825C-99712043E01C}"

if not exist "%GODMODE_FOLDER%" (
    md "%GODMODE_FOLDER%"
    echo [+] GodMode folder created on your Desktop!
    echo     Access over 200+ hidden Windows administrative tools in one view.
) else (
    echo [*] GodMode folder already exists on your Desktop.
)

echo.
echo ============================================================================
echo   [SUCCESS] Check your Desktop for the 'GodMode' master control icon!
echo ============================================================================
echo.
pause
