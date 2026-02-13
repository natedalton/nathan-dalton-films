@echo off
echo ============================================
echo Updating Nathan Dalton Films Website
echo ============================================
echo.
echo This will:
echo 1. Save your changes first!
echo 2. Upload all changes to GitHub
echo 3. GitHub will auto-deploy in 1-2 minutes
echo.
echo Press Ctrl+C to cancel, or
pause
echo.
echo Committing changes...
cd /d "C:\Users\natha\.claude\projects\nathan-dalton-films"
git add .
if %errorlevel% neq 0 (
    echo No changes to commit or git error occurred
    pause
    exit /b
)
git commit -m "Update site - %date% %time%"
if %errorlevel% neq 0 (
    echo Nothing to commit or git error occurred
    pause
    exit /b
)
echo.
echo Pushing to GitHub...
git push
if %errorlevel% neq 0 (
    echo Error pushing to GitHub
    pause
    exit /b
)
echo.
echo ============================================
echo SUCCESS! Site is updating...
echo Check: https://natedalton.github.io/nathan_dalton_film/
echo ============================================
echo.
pause
