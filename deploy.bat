@echo off
echo Deploying to GitHub Pages...
echo.

echo Copying files from dist to root...
xcopy /E /I /Y dist\* .
echo.

echo Creating gh-pages branch...
git checkout -b gh-pages
echo.

echo Adding all files...
git add .
echo.

echo Committing changes...
git commit -m "Deploy to GitHub Pages"
echo.

echo Pushing to GitHub...
git push origin gh-pages
echo.

echo ========================================
echo Deployment completed!
echo.
echo Please go to your GitHub repository settings:
echo 1. Go to Settings -> Pages
echo 2. Select branch 'gh-pages' as source
echo 3. Wait a few minutes for GitHub to process your site
echo.
echo Your site should be available at:
echo https://pomidorkaeg.github.io/tournament-tables-hub1/
echo ========================================
echo.
pause 