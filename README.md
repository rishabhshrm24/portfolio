# Design Portfolio Website

A modern, minimal portfolio website for a UX/UI design agency. Built with Next.js, Tailwind CSS, and Framer Motion for smooth animations.

## Features

- **Modern & Minimal Design**: Clean, contemporary aesthetics with focus on content
- **Smooth Animations**: Subtle, performant animations using Framer Motion
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Services Showcase**: Logo design, pitch deck design, and digital branding
- **Case Studies Section**: In-depth project showcases with challenges, solutions, and results
- **Portfolio Section**: Beautiful grid layout for showcasing design projects
- **Contact Form**: Functional contact form with email integration
- **SEO Optimized**: Next.js metadata and semantic HTML
- **Vercel Ready**: Optimized for deployment on Vercel

## Tech Stack

- **Frontend Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
```

3. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                # Root layout with navigation and footer
│   ├── page.tsx                  # Main home page
│   ├── globals.css               # Global styles
│   └── case-studies/
│       ├── page.tsx              # Case studies listing page
│       └── [slug]/page.tsx       # Individual case study detail page
├── components/
│   ├── Navigation.tsx            # Header navigation
│   ├── Hero.tsx                  # Hero section with CTA
│   ├── Services.tsx              # Services showcase (3 columns)
│   ├── Portfolio.tsx             # Project gallery (6 projects)
│   ├── Contact.tsx               # Contact form and info
│   └── Footer.tsx                # Footer with links
└── data/
    └── caseStudies.ts            # Case studies data (4 projects)
```

## Customization

### Update Brand Information

Edit the relevant components to change:
- Company name and colors in `Navigation.tsx`
- Services in `Services.tsx`
- Portfolio projects in `Portfolio.tsx`
- Contact details in `Contact.tsx`

### Colors

Customize colors in `tailwind.config.js`:

```js
colors: {
  bg: '#fafafa',      // Background
  text: '#1a1a1a',    // Text color
  accent: '#0066ff',  // Accent color
}
```

### Animation Speed

Modify animation durations in individual component files by adjusting `duration` values in motion props.

## Case Studies System

The website includes a **scalable case studies section** with 4 pre-populated projects:

### Features:
- ✅ **Listing Page** (`/case-studies`) - Display all projects
- ✅ **Detail Pages** (`/case-studies/[slug]`) - In-depth case study for each project
- ✅ **Data-Driven** - All content stored in `src/data/caseStudies.ts`
- ✅ **Easy to Update** - Add/edit projects in one file
- ✅ **Fully Scalable** - Ready to connect to CMS or database later

### Current Projects:
1. **TechStart Branding** - Complete brand identity for AI startup
2. **Pitch Deck Series** - Investment presentation for fintech
3. **Luxury Logo System** - Premium lifestyle brand identity
4. **Healthcare Platform Rebrand** - Digital transformation for patient care app

### Adding New Case Studies

See [CASE_STUDIES_GUIDE.md](./CASE_STUDIES_GUIDE.md) for detailed instructions on:
- Adding new projects
- Updating existing projects
- Customizing colors and information
- Future CMS integration

## Building for Production

```bash
npm run build
npm run start
```

## Deploying to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js configuration
5. Click Deploy

### Environment Variables (Optional)

Create a `.env.local` file for any environment-specific variables:

```
NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
```

## Performance Optimization

- Images are optimized with Next.js Image component (recommended for future updates)
- CSS is tree-shaken by Tailwind
- JavaScript is automatically code-split by Next.js
- Animations are GPU-accelerated

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please open an issue in the repository.

---

Built with ❤️ for design agencies
