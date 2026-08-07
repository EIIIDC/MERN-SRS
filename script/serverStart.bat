:: Check for Administrator privileges and elevate if necessary
>nul 2>&1 "%SYSTEMROOT%\system32\cacls.exe" "%SYSTEMROOT%\system32\config\system"
if '%errorlevel%' NEQ '0' (
    goto UACPrompt
) else ( goto gotAdmin )

:UACPrompt
    echo Set UAC = CreateObject^("Shell.Application"^) > "%temp%\getadmin.vbs"
    echo UAC.ShellExecute "%~s0", "", "", "runas", 1 >> "%temp%\getadmin.vbs"
    "%temp%\getadmin.vbs"
    del "%temp%\getadmin.vbs"
    exit /B

:gotAdmin
    pushd "%cd%"
    CD /D "%~dp0"


:: Pwede palitan

@echo off
setlocal
echo ----------------------------------------
echo   Fetching Local Network IPv4 Address...
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /c:"IPv4 Address"') do (
    set LOCAL_IP=%%a
    goto :found
)

:found
:: Str trm
set LOCAL_IP=%LOCAL_IP:~1%

echo   Local IPv4: %LOCAL_IP%
echo ----------------------------------------
pause

echo Running with Administrator privileges...
@echo off
setlocal
echo ----------------------------------------
echo   Fetching Public IPv4 Address...
for /f "delims=" %%i in ('powershell -Command "(Invoke-RestMethod -Uri 'https://api.ipify.org')-as [string]"') do set PUBLIC_IP=%%i
echo   Public IPv4: %PUBLIC_IP%
echo ----------------------------------------
pause





