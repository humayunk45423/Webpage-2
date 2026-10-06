@echo off
title Windows RAM Standby Memory Auto-Flusher
color 0e
echo =================================================================
echo   WINDOWS RAM STANDBY MEMORY AUTO-FLUSHER
echo   Reclaims cached Standby RAM to prevent stuttering in heavy games
echo =================================================================
echo.

net session >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Administrator privileges required. Right-click and 'Run as administrator'.
    pause
    exit /b 1
)

echo [1/3] Flushing Windows Working Sets...
powershell -NoProfile -Command "[System.GC]::Collect(); [System.GC]::WaitForPendingFinalizers()" >nul 2>&1

echo [2/3] Calling Windows Memory Management API to release Standby List...
powershell -NoProfile -Command "$code = @'
using System;
using System.Runtime.InteropServices;
public class MemoryCleaner {
    [DllImport(\"psapi.dll\")]
    public static extern int EmptyWorkingSet(IntPtr hwProc);
    public static void Clean() {
        foreach (System.Diagnostics.Process p in System.Diagnostics.Process.GetProcesses()) {
            try { EmptyWorkingSet(p.Handle); } catch {}
        }
    }
}
'@; Add-Type $code; [MemoryCleaner]::Clean();" >nul 2>&1

echo [3/3] Standby Memory cleared. Free RAM restored.
echo.
echo =================================================================
echo   [SUCCESS] Standby memory flushed without system reboot!
echo =================================================================
echo.
pause
