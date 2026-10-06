; ====================================================================
; HUMAYOUN'S MASTER PRODUCTIVITY MACRO
; AutoHotkey Script for Power Users & Developers
; ====================================================================

#NoEnv
#SingleInstance Force
SendMode Input
SetWorkingDir %A_ScriptDir%

; --- [1] Pin Active Window Always-On-Top (Win + A) ---
#a::
    WinSet, AlwaysOnTop, Toggle, A
    SoundBeep, 750, 100
    ToolTip, Toggled Always-On-Top!
    SetTimer, RemoveToolTip, -1000
return

; --- [2] Paste Plain Text Without Formatting (Ctrl + Shift + V) ---
^+v::
    ClipSaved := ClipboardAll
    Clipboard := Clipboard
    SendInput, ^v
    Sleep, 100
    Clipboard := ClipSaved
    ClipSaved := ""
return

; --- [3] Quick Restart Windows Explorer (Ctrl + Alt + Shift + E) ---
^!+e::
    Run, taskkill /f /im explorer.exe,, Hide
    Sleep, 500
    Run, explorer.exe
    ToolTip, Windows Explorer Restarted!
    SetTimer, RemoveToolTip, -1200
return

; --- [4] Fast Window Transparency Adjuster (Win + Scroll Wheel) ---
#WheelUp::
    DetectHiddenWindows, On
    WinGet, curTrans, Transparent, A
    if !curTrans
        curTrans := 255
    newTrans := curTrans + 15
    if (newTrans > 255)
        newTrans := 255
    WinSet, Transparent, %newTrans%, A
return

#WheelDown::
    DetectHiddenWindows, On
    WinGet, curTrans, Transparent, A
    if !curTrans
        curTrans := 255
    newTrans := curTrans - 15
    if (newTrans < 50)
        newTrans := 50
    WinSet, Transparent, %newTrans%, A
return

; --- [5] Dynamic Date & Time Hotstrings ---
::;d::
    FormatTime, CurrentDateTime,, yyyy-MM-dd
    SendInput %CurrentDateTime%
return

::;dt::
    FormatTime, CurrentDateTime,, yyyy-MM-dd HH:mm:ss
    SendInput %CurrentDateTime%
return

RemoveToolTip:
    ToolTip
return
