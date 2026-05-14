# Case Studies System Documentation

## Overview

The case studies system is built as a **scalable, data-driven template** that works perfectly for both static content and future dynamic scaling.

## Current Architecture

### Files & Structure

```
src/
├── data/
│   └── caseStudies.ts          # All case study data (single source of truth)
├── app/
│   └── case-studies/
│       ├── page.tsx             # Case studies listing page (/case-studies)
│       └── [slug]/page.tsx      # Individual case study pages (/case-studies/[slug])
└── components/
    └── (Portfolio component links to case studies)
```

## How It Works

### 1. **Data Layer** (`src/data/caseStudies.ts`)

All case study data is stored in a single TypeScript file as an array of `Project` objects.

**Each project includes:**
- `id` - Unique identifier
- `slug` - URL-friendly identifier (e.g., `techstart-branding`)
- `title` - Project name
- `subtitle` - Tagline
- `category` - Service category (Logo Design, Pitch Deck Design, Digital Branding)
- `description` - Overview
- `challenge` - Problem statement
- `solution` - Approach taken
- `results` - Array of metric/value pairs showing impact
- `tools` - Array of tools/technologies used
- `duration` - Project timeline
- `team` - Array of team member roles
- `year` - Project year
- `client` - Client name (optional)
- `heroColor` - Tailwind gradient color (e.g., `from-blue-500 to-cyan-500`)

### 2. **Listing Page** (`/case-studies`)

- Displays all case studies in an alternating grid layout
- Shows title, category, duration, and preview
- Links to individual case study pages
- Fully responsive

### 3. **Detail Page** (`/case-studies/[slug]`)

Dynamic route that:
- Displays full case study details
- Shows all challenges, solutions, results
- Lists tools and team members
- Includes navigation to next/previous studies
- Has CTA buttons

## How to Add/Update Case Studies

### Adding a New Project

1. Open `src/data/caseStudies.ts`
2. Add a new object to the `caseStudies` array:

```typescript
{
  id: 5,
  slug: 'your-project-slug',
  title: 'Your Project Title',
  subtitle: 'Brief description',
  category: 'Digital Branding', // or 'Logo Design' or 'Pitch Deck Design'
  description: 'Detailed overview...',
  challenge: 'What was the problem?',
  solution: 'How did you solve it?',
  results: [
    { metric: 'Metric Name', value: '+50%' },
    { metric: 'Another Metric', value: '100+' },
    // Add more results...
  ],
  tools: ['Tool 1', 'Tool 2', 'Tool 3'],
  duration: '8 weeks',
  team: ['Role 1', 'Role 2', 'Role 3'],
  year: 2024,
  client: 'Client Name',
  heroColor: 'from-purple-500 to-pink-500', // Pick a Tailwind gradient
},
```

3. The page will automatically be created and accessible at `/case-studies/your-project-slug`

### Updating Existing Project

Simply edit the corresponding object in `caseStudies.ts`. All changes appear immediately.

### Removing a Project

Delete the object from the `caseStudies` array.

## Slug Guidelines

**Important:** The `slug` is the URL identifier, so it should:
- Use lowercase letters
- Use hyphens instead of spaces
- Be descriptive but concise
- Example: `techstart-branding`, `pitch-deck-series`, `luxury-logo-system`

## Color Gradient Options

Use any Tailwind CSS gradient. Popular options:

```typescript
// Blues & Cyans
'from-blue-500 to-cyan-500'

// Purples & Pinks
'from-purple-500 to-pink-500'

// Oranges & Reds
'from-orange-500 to-red-500'

// Greens & Emeralds
'from-green-500 to-emerald-500'

// Indigos & Blues
'from-indigo-500 to-blue-500'

// Rose & Pink
'from-rose-500 to-pink-500'
```

## Future Enhancement: Dynamic Content

When ready to scale beyond static content, you can:

1. **Move to a CMS** (Contentful, Sanity, Notion API)
   - Replace `caseStudies.ts` with API calls
   - Use `getStaticProps` or `getServerSideProps` for SSR/SSG

2. **Add Database Support** (PostgreSQL, MongoDB)
   - Create API routes to fetch case studies
   - Implement admin dashboard for content management

3. **Enable Image Uploads**
   - Replace color gradients with actual project images
   - Use Next.js Image component for optimization

## Current Phase (Phase 1)

✅ 4 Static Case Studies  
✅ Fully Functional Pages  
✅ Responsive Design  
✅ Animation & Interactions  
✅ Easy to Update Locally  

## Phase 2 (When Ready)

- [ ] CMS Integration
- [ ] Image/Media Upload
- [ ] Admin Dashboard
- [ ] Search & Filtering
- [ ] Related Projects
- [ ] Client Testimonials

## File Locations for Reference

- **Data:** `src/data/caseStudies.ts`
- **List Page:** `src/app/case-studies/page.tsx`
- **Detail Template:** `src/app/case-studies/[slug]/page.tsx`
- **Navigation Link:** `src/components/Navigation.tsx`
- **Portfolio Link:** `src/components/Portfolio.tsx`

## Testing New Case Studies Locally

1. Add your project to `caseStudies.ts`
2. Run `npm run dev`
3. Visit `http://localhost:3000/case-studies`
4. Click on your new project
5. Verify all content displays correctly

---

**Note:** The entire system is optimized for Vercel deployment. Static generation happens automatically at build time, ensuring blazing-fast performance.
