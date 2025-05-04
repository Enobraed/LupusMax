@echo off
setlocal enabledelayedexpansion

:: ============================================================
:: LupusMax — кастомизированная среда LibreWolf
:: ------------------------------------------------------------
:: Автор:        Enobraed
:: Назначение:   Оптимизированный, автоматизированный LibreWolf
:: Формат:       Портативная реализация без установки
::
:: Описание:     LupusMax — это тщательно настроенная среда на базе LibreWolf,
::               разработанная для высокой производительности,
::               минимального потребления ресурсов и полной автоматизации.
::
:: Особенности:  • Расширенные политики безопасности
::               • Отключение телеметрии и лишнего функционала
::               • Автоматическое обновление настроек
::               • Только необходимое — ничего лишнего
::
:: Репозиторий:  https://github.com/Enobraed/LupusMax
:: Лицензия:     MIT
:: ============================================================

:: Завершение всех процессов LibreWolf
taskkill /f /im LibreWolf-WinUpdater.exe >nul 2>&1
taskkill /f /im LibreWolfPortable.exe >nul 2>&1
taskkill /f /im librewolf.exe >nul 2>&1

:: Переменные
set "base=%~dp0"
set "librewolf=%base%LibreWolf"
set "pf=%base%Profiles\Default"

:: Бесшумное обновление LibreWolf
start "" /min /wait "%base%LibreWolf-WinUpdater.exe" --silent

:: Завершение процесса обновления
taskkill /f /im LibreWolf-WinUpdater.exe >nul 2>&1

:: Удаление ненужных папок LibreWolf после обновления
for %%d in (
    browser\VisualElements
    defaults
    fonts
    gmp-clearkey
    uninstall
) do rd /s /q "%librewolf%\%%d" >nul 2>&1

:: Удаление ненужных файлов LibreWolf после обновления
for %%f in (
    AccessibleMarshal.dll
    application.ini
    firefox.VisualElementsManifest.xml
    libEGL.dll
    libGLESv2.dll
    vcruntime140_1.dll
    vcruntime140.dll
    removed-files
    private_browsing.VisualElementsManifest.xml
    private_browsing.exe
    precomplete
    plugin-container.exe
    platform.ini
    pingsender.exe
    notificationserver.dll
    nmhproxy.exe
    msvcp140.dll
) do del /f /q "%librewolf%\%%f" >nul 2>&1

:: Удаление мусора от WinUpdater после обновления
del /f /q "%base%ScheduledTask-Create.ps1" "%base%ScheduledTask-Remove.ps1" >nul 2>&1

:: Обновление файла policies.json
if not exist "%librewolf%\distribution" mkdir "%librewolf%\distribution"
curl -L -o "%librewolf%\distribution\policies.json" "https://raw.githubusercontent.com/Enobraed/LupusMax/main/policies.json" >nul 2>&1

:: Обновление файла user.js
curl -L -o "%pf%\user.js" "https://raw.githubusercontent.com/Enobraed/LupusMax/main/user.js" >nul 2>&1

:: Очистка временных директорий профиля
for %%d in (
    bookmarkbackups
    cache2
    crashes
    datareporting
    jumpListCache
    minidumps
    saved-telemetry-pings
    sessionstore-backups
    sessionstore-logs
    shader-cache
    shortcutCache
    startupCache
    thumbnails
) do rd /s /q "%pf%\%%d" >nul 2>&1

:: Очистка временных файлов сайтов
for /d %%i in ("%pf%\storage\default\https*") do rd /s /q "%%i" >nul 2>&1

:: Удаление пустых папок
for /f "delims=" %%d in ('dir "%base%" /ad /b /s ^| sort /r') do rd "%%d" 2>nul

:: Удаление пустых файлов
for /r "%base%" %%f in (*) do if %%~zf==0 del /f /q "%%f" >nul 2>&1

:: Запуск LibreWolf
start "" "%base%LibreWolf-Portable.exe" -no-deelevate -purgecaches >nul 2>&1

endlocal
exit /b