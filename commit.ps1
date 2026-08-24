git init
git add package.json package-lock.json tsconfig.app.json tsconfig.json tsconfig.node.json vite.config.ts .oxlintrc.json index.html README.md
git commit -m "Initialize project and config files"

git add src/App.css src/index.css src/main.tsx src/App.tsx
git commit -m "Add global CSS and entry points"

git add public/favicon.svg public/icons.svg src/assets/react.svg src/assets/vite.svg
git commit -m "Add public assets and icons"

git add src/lib/utils.ts src/types/index.ts
git commit -m "Add UI utilities and types"

git add src/data/
git commit -m "Add mock data"

git add src/assets/hero.png src/assets/hero1.png src/assets/hero2.png src/assets/1.png src/assets/2.png
git commit -m "Add image assets batch 1"

git add src/assets/boy.png src/assets/boy1.png src/assets/boy2.png src/assets/girl.png src/assets/girl2.png src/assets/login1.png
git commit -m "Add image assets batch 2"

git add "files docs/"
git commit -m "Add document files"

git add src/components/ui/
git commit -m "Add UI core components"

git add src/components/Navbar.tsx src/components/Footer.tsx src/components/CTASection.tsx src/components/TrustSection.tsx
git commit -m "Add Layout components"

git add src/components/Hero.tsx src/components/DiscoverSection.tsx src/components/HeroCarousel.tsx
git commit -m "Add Hero and Discover sections"

git add src/components/ValuePropPanel.tsx src/components/StatementSection.tsx src/components/InfoStrip.tsx src/components/HowItWorks.tsx
git commit -m "Add value proposition panels"

git add src/components/MasonryGallery.tsx src/components/FeaturedDesigners.tsx src/components/DesignerCard.tsx
git commit -m "Add gallery and designer components"

git add src/components/FeaturedProjects.tsx src/components/ProjectCard.tsx
git commit -m "Add project components"

git add src/pages/
git commit -m "Add pages and routing"

git branch -M main
git remote add origin https://github.com/maximanoob01/lazydesk.git
git push -u origin main
