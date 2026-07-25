@echo off
echo ========================================================
echo Pushing Portfolio Files to GitHub Repository
echo Repo: https://github.com/BSaiThanmai/SaiThanmai-Portfolio.git
echo ========================================================

cd /d "c:\Users\User\OneDrive\Desktop\portfolio"

git init
git remote remove origin 2>nul
git remote add origin https://github.com/BSaiThanmai/SaiThanmai-Portfolio.git
git branch -M main
git add .
git commit -m "Add Next.js 14 Portfolio codebase"
git push -u origin main

echo ========================================================
echo Done! If prompted, log in with your GitHub account.
echo ========================================================
pause
