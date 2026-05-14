# Case Studies System - Architecture Overview

## Data Flow Diagram

```
src/data/caseStudies.ts (Single Source of Truth)
    ↓
    ├─→ /case-studies (Listing Page)
    │   └─→ Displays all 4 projects
    │       └─→ Links to individual projects
    │
    └─→ /case-studies/[slug] (Detail Page)
        ├─→ Full project details
        ├─→ Challenge & Solution
        ├─→ Results & Metrics
        ├─→ Tools & Team
        └─→ Navigation to next/prev project
```

## Integration Points

### Navigation
- **File:** `src/components/Navigation.tsx`
- **Change:** "Portfolio" → "Work" links to `/case-studies`

### Hero Section
- **File:** `src/components/Hero.tsx`
- **Change:** "View Our Work" button links to `/case-studies`

### Portfolio Section
- **File:** `src/components/Portfolio.tsx`
- **Change:** "View Full Portfolio" button links to `/case-studies`

## Data Structure

Each case study object includes:

```typescript
{
  id: number              // Unique ID for tracking
  slug: string            // URL identifier (/case-studies/slug)
  title: string           // Project name
  subtitle: string        // Brief tagline
  category: string        // Service type
  description: string     // Overview
  challenge: string       // Problem statement
  solution: string        // Approach taken
  results: [
    { metric, value }     // Impact metrics
  ]
  tools: string[]         // Technologies used
  duration: string        // Project timeline
  team: string[]          // Team member roles
  year: number            // Project year
  client?: string         // Client name
  heroColor: string       // Tailwind gradient
}
```

## How Routes Work

### Listing Page
- **Route:** `/case-studies`
- **File:** `src/app/case-studies/page.tsx`
- **Content:** All projects in alternating grid
- **Actions:** Click any project → Goes to detail page

### Detail Page
- **Route:** `/case-studies/[slug]`
- **File:** `src/app/case-studies/[slug]/page.tsx`
- **Dynamic:** Next.js automatically creates routes for each project
- **Example:** `/case-studies/techstart-branding`
- **Actions:** 
  - View full case study details
  - Navigate to previous/next project
  - Return to listing page

## Development Workflow

### Adding a New Project
```
1. Edit src/data/caseStudies.ts
   ↓
2. Add new object to caseStudies array
   ↓
3. Next.js automatically generates:
   - /case-studies (updated listing)
   - /case-studies/your-slug (new detail page)
   ↓
4. Links update automatically on all pages
```

### Making Changes
```
1. Edit project object in caseStudies.ts
   ↓
2. Save file
   ↓
3. All connected pages update automatically
   - Listing page
   - Detail page
   - Search results (if added later)
   - Navigation
```

## Scalability Path

### Phase 1 (Current) ✅
- Static case studies in TypeScript
- Perfect for 4-50 projects
- No external dependencies

### Phase 2 (Future)
- Migrate data to JSON files
- Add image support
- Implement filtering/search

### Phase 3 (Enterprise)
- Connect to CMS (Contentful, Sanity, etc.)
- Admin dashboard for editors
- Dynamic content updates
- Image optimization with CDN

**Migration is easy:** Only change `src/data/caseStudies.ts`, everything else stays the same.

## File Reference

| Purpose | File |
|---------|------|
| Case study data | `src/data/caseStudies.ts` |
| Listing page | `src/app/case-studies/page.tsx` |
| Detail template | `src/app/case-studies/[slug]/page.tsx` |
| Documentation | `CASE_STUDIES_GUIDE.md` |

---

**Quick Links:**
- 📝 [Full Case Studies Guide](./CASE_STUDIES_GUIDE.md)
- 🚀 [Deployment to Vercel](./README.md#deploying-to-vercel)
- 🎨 [Color Gradients Cheat Sheet](./CASE_STUDIES_GUIDE.md#color-gradient-options)
