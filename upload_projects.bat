@echo off
cd /d C:\ENTERSOFT\Web_Studio\CSWebApps

REM Initialize the repository if it's not already initialized
if not exist .git (
    git init
    git remote add origin https://github.com/bantifakos/bantifakos.git
)

REM Add all changes to git
git add .

REM Commit the changes
git commit -m "DRPharmacy project"

REM Push to the main branch
git branch -M main
git push -u origin main
