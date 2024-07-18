@echo off
cd /d C:\ENTERSOFT\Web_Studio\CSWebApps

REM Remove the project directory
git rm -r rdprod02

REM Commit the changes
git commit -m "Removed rdprod02"

REM Push to the main branch
git push origin main
