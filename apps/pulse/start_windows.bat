@echo off
cd /d "%~dp0"
where py >nul 2>nul
if errorlevel 1 (set PY=python) else (set PY=py -3)
%PY% -m pip install psutil
if errorlevel 1 goto fail
%PY% pulse.py
pause
exit /b
:fail
echo Install Python 3 from python.org and try again.
pause
