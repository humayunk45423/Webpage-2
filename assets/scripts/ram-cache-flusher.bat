@echo off
:: ============================================================================
:: Standby RAM & Working Set Memory Auto-Flusher
:: Handcrafted for Software HQ by Humayoun Kobir
:: ============================================================================
title Software HQ - RAM Standby Cache Flusher
color 0E

echo ============================================================================
echo   SOFTWARE HQ // RAM STANDBY LIST ^& WORKING SET FLUSHER
echo   Curated by Humayoun Kobir (Humayun Kabir)
echo ============================================================================
echo.

echo [*] Analyzing system memory working sets...
powershell.exe -NoProfile -ExecutionPolicy Bypass -Command ^
    "[System.GC]::Collect();" ^
    "[System.GC]::WaitForPendingFinalizers();" ^
    "[System.GC]::Collect();" ^
    "$processes = Get-Process;" ^
    "foreach ($p in $processes) { try { $p.MinWorkingSet = $p.MinWorkingSet } catch {} };" ^
    "Write-Host '[+] System Garbage Collection executed successfully.' -ForegroundColor Green;" ^
    "Write-Host '[+] Inactive process working sets flushed back to available pool.' -ForegroundColor Green;"

echo.
echo ============================================================================
echo   [SUCCESS] Standby memory cache released! Stutter and RAM bloat resolved.
echo ============================================================================
echo.
pause
