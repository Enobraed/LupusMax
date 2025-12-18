@echo off
chcp 65001 >nul
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

@echo 1. Завершение всех процессов LibreWolf
taskkill /f /im LibreWolf-WinUpdater.exe >nul 2>&1
taskkill /f /im LibreWolfPortable.exe >nul 2>&1
taskkill /f /im librewolf.exe >nul 2>&1

:: Переменные
set "base=%~dp0"
set "librewolf=%base%LibreWolf"
set "pf=%base%Profiles\Default"

@echo 2. Бесшумное обновление LibreWolf
start "" /min /wait "%base%LibreWolf-WinUpdater.exe" --silent

@echo 3. Завершение процесса обновления
taskkill /f /im LibreWolf-WinUpdater.exe >nul 2>&1

@echo 4. Удаление ненужных папок LibreWolf после обновления
for %%d in (
    browser\VisualElements
    defaults
    desktop-launcher
    fonts
    gmp-clearkey
    installation_dir_layout
    uninstall
) do rd /s /q "%librewolf%\%%d" >nul 2>&1

@echo 5. Удаление ненужных файлов LibreWolf после обновления
for %%f in (
    "AccessibleMarshal.dll"
    "application.ini"
    "CoreMessagingXP.dll"
    "dxcompiler.dll"
    "firefox.VisualElementsManifest.xml"
    "InstallationDirLayout.dll"
    "libEGL.dll"
    "libGLESv2.dll"
    "marshal.dll"
    "Microsoft.InputStateManager.dll"
    "Microsoft.Internal.FrameworkUdk.dll"
    "Microsoft.UI.Composition.OSSupport.dll"
    "Microsoft.UI.Input.dll"
    "Microsoft.UI.Windowing.Core.dll"
    "Microsoft.UI.Windowing.dll"
    "mozinference.dll"
    "msvcp140.dll"
    "nmhproxy.exe"
    "notificationserver.dll"
    "pingsender.exe"
    "platform.ini"
    "plugin-container.exe"
    "precomplete"
    "private_browsing.exe"
    "private_browsing.VisualElementsManifest.xml"
    "removed-files"
    "vcruntime140.dll"
    "vcruntime140_1.dll"
) do del /f /q "%librewolf%\%%f" >nul 2>&1

@echo 6. Удаление мусора от WinUpdater после обновления
del /f /q "%base%ScheduledTask-Create.ps1" "%base%ScheduledTask-Remove.ps1" >nul 2>&1

@echo 7. Обновление файла policies.json
if not exist "%librewolf%\distribution" mkdir "%librewolf%\distribution"
curl -L -o "%librewolf%\distribution\policies.json" "https://raw.githubusercontent.com/Enobraed/LupusMax/main/policies.json" >nul 2>&1

@echo 8. Обновление файла user.js
curl -L -o "%pf%\user.js" "https://raw.githubusercontent.com/Enobraed/LupusMax/main/user.js" >nul 2>&1

@echo 9. Обновление файла userChrome.css
if not exist "%pf%\chrome" mkdir "%pf%\chrome"
curl -L -o "%pf%\chrome\userChrome.css" "https://raw.githubusercontent.com/Enobraed/LupusMax/main/userChrome.css" >nul 2>&1

@echo 10. Очистка временных директорий профиля
for %%d in (
    "bookmarkbackups"
    "cache2"
    "crashes"
    "datareporting"
    "jumpListCache"
    "minidumps"
    "saved-telemetry-pings"
    "sessionstore-backups"
    "sessionstore-logs"
    "shader-cache"
    "shortcutCache"
    "startupCache"
    "thumbnails"
) do rd /s /q "%pf%\%%d" >nul 2>&1

@echo 11. Очистка временных файлов сайтов
for /d %%i in ("%pf%\storage\default\https*") do rd /s /q "%%i" >nul 2>&1

@echo 12. Удаление пустых папок
for /f "delims=" %%d in ('dir "%base%" /ad /b /s ^| sort /r') do rd "%%d" 2>nul

@echo 13. Удаление пустых файлов
for /r "%base%" %%f in (*) do if %%~zf==0 del /f /q "%%f" >nul 2>&1

@echo 14. Запуск LibreWolf
start "" "%base%LibreWolf-Portable.exe" -no-deelevate -purgecaches >nul 2>&1

timeout /t "3" /nobreak >nul

endlocal
exit /b