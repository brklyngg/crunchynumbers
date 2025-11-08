# BMW R90/6 Airhead Street Racer - Website Integration Plan

## Project Overview

Adding the BMW R90/6 Street Racer Conversion project to the Crunchy Numbers portfolio website. This is a comprehensive 5-phase build transforming a 1974 BMW R90/6 into a modern café racer while preserving its original wheels and airhead character.

**Key Project Details:**
- **Bike:** 1974 BMW R90/6 (airhead twin)
- **Style:** Street racer/café racer conversion
- **Total Investment:** $23,960
- **Timeline:** 5 phases over 13-17 weeks
- **Status:** In development

---

## Implementation Steps

### Step 1: Create Project SVG Logo

**File:** `/public/airhead-racer.svg`

**Design Concept:** Minimalist BMW boxer twin engine icon (the iconic airhead cylinders)

```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Simplified BMW boxer twin cylinder silhouette -->
  <path d="M4 9h4v6H4zM16 9h4v6h-4z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <!-- Crankcase/center section -->
  <rect x="10" y="10" width="4" height="4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <!-- Connecting lines -->
  <path d="M8 12h2M14 12h2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <!-- Valve covers (airhead detail) -->
  <circle cx="6" cy="12" r="1.5" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="18" cy="12" r="1.5" stroke="currentColor" stroke-width="1.5"/>
</svg>
```

**Alternative Design:** Classic café racer motorcycle silhouette with low handlebars and rear cowl

---

### Step 2: Create Project Detail Page

**File:** `/app/projects/bmw-r90-6-racer/page.tsx`

```typescript
import Link from "next/link";

export default function BMWRacerProject() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Back Navigation */}
      <Link
        href="/"
        className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to projects
      </Link>

      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              BMW R90/6 Street Racer
            </h1>
            <p className="text-xl text-gray-600">
              Classic airhead café racer conversion with modern performance
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-6 text-sm text-gray-500">
          <span>In development</span>
          <span>•</span>
          <span>Phase 1 of 5</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="prose prose-lg max-w-none mb-12">
        <h2>What</h2>
        <p>
          A comprehensive transformation of a 1974 BMW R90/6 into a modern street racer.
          This project combines the classic airhead twin character with contemporary
          performance upgrades—Brembo brakes, Ignition Motorcycles components,
          rearset footpegs, and a complete electrical modernization with the M-Unit system.
        </p>

        <h2>The Build</h2>
        <p>
          Five carefully planned phases transform the bike while maintaining rideability
          throughout the build:
        </p>

        <ul>
          <li><strong>Phase 1:</strong> Rear end modernization with Ignition subframe,
          custom seat, and rear disc brake conversion</li>
          <li><strong>Phase 2:</strong> Complete electrical upgrade with Ignition M-Unit,
          electronic ignition, and keyless start</li>
          <li><strong>Phase 3:</strong> Brembo front brake upgrade and café racer cockpit
          with clip-ons and MotoGadget instruments</li>
          <li><strong>Phase 4:</strong> Rearset footpegs for proper ergonomics and
          Ignition exhaust system</li>
          <li><strong>Phase 5:</strong> Final aesthetics, custom paint, and performance
          tuning</li>
        </ul>

        <h2>The Philosophy</h2>
        <p>
          This build preserves the bike's authentic character—keeping the original
          1.85 B 19 front and 2.15 B 18 rear wheels—while upgrading every system
          for modern reliability and performance. It's about respecting the airhead's
          heritage while making it a capable street racer for today's roads.
        </p>

        <h2>The Details</h2>
        <p>
          Total investment of approximately $24,000 over 13-17 weeks. Key components
          include Brembo brake systems, Ignition Motorcycles subframe and exhaust,
          MotoGadget electronics with NFC keyless ignition, YSS suspension, and
          custom fabricated rearsets. The result: a unique blend of 1970s BMW
          engineering and 2020s technology.
        </p>

        <h2>Current Status</h2>
        <p>
          Planning complete. Parts sourcing and Phase 1 preparation underway. Follow
          along as this classic airhead transforms into a modern street racer.
        </p>
      </div>

      {/* Photo Gallery Section - Placeholder for future */}
      <div className="border-t border-gray-200 pt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Build Gallery</h2>
        <div className="bg-gray-100 rounded-lg p-12 text-center text-gray-500">
          <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p>Build photos coming soon</p>
        </div>
      </div>
    </div>
  );
}
```

---

### Step 3: Add Project to Home Page

**File:** `/app/page.tsx`

**Action:** Add the following entry to the `projects` array (around line 4-61)

```typescript
{
  name: "BMW R90/6 Street Racer",
  description: "Classic airhead café racer conversion with modern performance upgrades",
  url: "/projects/bmw-r90-6-racer",
  externalUrl: "#",  // Update later if you create a blog or Instagram for the build
  isLive: false,  // Set to true when you want it clickable
  logo: "/airhead-racer.svg"
}
```

**Suggested Placement:** Add it after "Scenic Route" (the other motorcycle project) for thematic grouping, or add it last if you want chronological order.

---

## Future Photo Integration Plan

### Photo Storage Structure

```
/public/
  projects/
    bmw-r90-6-racer/
      hero.jpg                    # Main header image
      phases/
        phase-1/
          01-original-bike.jpg
          02-subframe-install.jpg
          03-rear-disc.jpg
        phase-2/
          01-m-unit.jpg
          02-wiring.jpg
        phase-3/
          [phase 3 photos]
        phase-4/
          [phase 4 photos]
        phase-5/
          [phase 5 photos]
      details/
        [close-up detail shots]
```

### Photo Display Code Template

Replace the placeholder gallery section with:

```typescript
{/* Photo Gallery Section */}
<div className="border-t border-gray-200 pt-12">
  <h2 className="text-2xl font-bold text-gray-900 mb-6">Build Gallery</h2>

  {/* Phase 1 Photos */}
  <div className="mb-8">
    <h3 className="text-xl font-semibold text-gray-800 mb-4">Phase 1: Rear End Modernization</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Image
        src="/projects/bmw-r90-6-racer/phases/phase-1/01-original-bike.jpg"
        alt="Original 1974 BMW R90/6"
        width={400}
        height={300}
        className="rounded-lg"
      />
      {/* Add more images */}
    </div>
  </div>

  {/* Add sections for other phases as you complete them */}
</div>
```

**Note:** You'll need to import Next.js Image component:
```typescript
import Image from "next/image";
```

---

## Technical Specifications Section (Optional)

For a detailed specs section, add this before the photo gallery:

```typescript
{/* Specifications Grid */}
<div className="bg-gray-50 rounded-lg p-8 mb-12">
  <h2 className="text-2xl font-bold text-gray-900 mb-6">Build Specifications</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <h3 className="font-semibold text-gray-900 mb-3">Donor Bike</h3>
      <ul className="space-y-2 text-gray-700">
        <li><span className="font-medium">Year:</span> 1974</li>
        <li><span className="font-medium">Model:</span> BMW R90/6</li>
        <li><span className="font-medium">Engine:</span> 898cc boxer twin</li>
        <li><span className="font-medium">Power:</span> 60hp @ 6,500 rpm</li>
        <li><span className="font-medium">Weight:</span> 210kg (462 lbs)</li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold text-gray-900 mb-3">Key Upgrades</h3>
      <ul className="space-y-2 text-gray-700">
        <li>Brembo front & rear brake systems</li>
        <li>Ignition Motorcycles subframe & exhaust</li>
        <li>M-Unit electrical system with NFC keyless</li>
        <li>Custom fabricated rearset footpegs</li>
        <li>MotoGadget digital instruments</li>
        <li>YSS rear suspension</li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold text-gray-900 mb-3">Timeline</h3>
      <ul className="space-y-2 text-gray-700">
        <li><span className="font-medium">Total Duration:</span> 13-17 weeks</li>
        <li><span className="font-medium">Labor Hours:</span> 103 hours</li>
        <li><span className="font-medium">Phases:</span> 5 progressive stages</li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold text-gray-900 mb-3">Investment</h3>
      <ul className="space-y-2 text-gray-700">
        <li><span className="font-medium">Parts:</span> $9,910</li>
        <li><span className="font-medium">Labor:</span> $5,150 (professional)</li>
        <li><span className="font-medium">Donor Bike:</span> $8,900</li>
        <li><span className="font-medium">Total:</span> $23,960</li>
      </ul>
    </div>
  </div>
</div>
```

---

## Phase-by-Phase Progress Tracker (Optional Feature)

For tracking build progress over time:

```typescript
{/* Build Progress */}
<div className="mb-12">
  <h2 className="text-2xl font-bold text-gray-900 mb-6">Build Progress</h2>

  <div className="space-y-4">
    {[
      { phase: 1, title: "Rear End & Subframe", status: "in-progress", progress: 60 },
      { phase: 2, title: "Electrical System M-Unit", status: "pending", progress: 0 },
      { phase: 3, title: "Front Brakes & Cockpit", status: "pending", progress: 0 },
      { phase: 4, title: "Rearsets & Exhaust", status: "pending", progress: 0 },
      { phase: 5, title: "Final Aesthetics", status: "pending", progress: 0 },
    ].map((item) => (
      <div key={item.phase} className="border border-gray-200 rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-bold text-gray-400">
              {item.phase}
            </span>
            <span className="font-semibold text-gray-900">
              {item.title}
            </span>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm ${
            item.status === 'completed' ? 'bg-green-100 text-green-800' :
            item.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
            'bg-gray-100 text-gray-600'
          }`}>
            {item.status === 'completed' ? 'Completed' :
             item.status === 'in-progress' ? 'In Progress' :
             'Pending'}
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${item.progress}%` }}
          />
        </div>
      </div>
    ))}
  </div>
</div>
```

---

## Deployment Checklist

- [ ] Create SVG logo at `/public/airhead-racer.svg`
- [ ] Create project directory `/app/projects/bmw-r90-6-racer/`
- [ ] Create `page.tsx` in the new directory
- [ ] Add project entry to home page `app/page.tsx` projects array
- [ ] Set `isLive: false` initially (makes card non-clickable/grayed out)
- [ ] Test locally: `npm run dev`
- [ ] Verify project appears on home page
- [ ] Click through to verify detail page renders correctly
- [ ] When ready to launch: change `isLive: true`
- [ ] Create `/public/projects/bmw-r90-6-racer/` directory for future photos
- [ ] Commit changes: `git add . && git commit -m "Add BMW R90/6 Street Racer project"`
- [ ] Deploy to Netlify (push to main branch)

---

## Content Updates Strategy

### During the Build

As you progress through phases:

1. **Update Progress Tracker** - Change status and progress percentages
2. **Add Photos** - Upload to `/public/projects/bmw-r90-6-racer/phases/phase-X/`
3. **Update Status Badge** - Change from "In development" to specific phase
4. **Blog Updates** - Add new sections to the prose content describing completed work

### Example Progress Update

```typescript
// In app/page.tsx, update the description as you progress:
{
  name: "BMW R90/6 Street Racer",
  description: "Phase 2 complete - M-Unit electrical system installed", // Updated!
  url: "/projects/bmw-r90-6-racer",
  externalUrl: "#",
  isLive: true,  // Now live and clickable
  logo: "/airhead-racer.svg"
}
```

---

## Social Media Integration Ideas

### Instagram Feed Embed (Future)

If you document the build on Instagram:

```typescript
{/* Instagram Feed */}
<div className="border-t border-gray-200 pt-12">
  <h2 className="text-2xl font-bold text-gray-900 mb-6">
    Follow the Build
  </h2>
  <div className="text-center">
    <a
      href="https://instagram.com/yourusername"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-blue-600 hover:text-blue-800"
    >
      <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
      @yourusername
    </a>
  </div>
</div>
```

---

## Recommended Next Steps

1. **Immediate:**
   - Create the SVG logo (or use motorcycle.svg as temporary placeholder)
   - Set up the project page structure
   - Add to home page with `isLive: false`

2. **As Build Progresses:**
   - Take high-quality photos at each phase
   - Update progress tracker
   - Add completed phase photos
   - Write detailed descriptions of challenges and solutions

3. **Launch:**
   - When Phase 1 is complete with photos, set `isLive: true`
   - Share on social media
   - Consider starting an Instagram specifically for the build

---

## File Tree Summary

```
crunchy-numbers/
├── public/
│   ├── airhead-racer.svg                          # NEW - Project logo
│   └── projects/                                  # NEW - Create later
│       └── bmw-r90-6-racer/                      # NEW - For photos
│           ├── hero.jpg
│           └── phases/
│               ├── phase-1/
│               ├── phase-2/
│               └── ...
├── app/
│   ├── page.tsx                                   # EDIT - Add to projects array
│   └── projects/
│       └── bmw-r90-6-racer/                      # NEW - Project directory
│           └── page.tsx                           # NEW - Project detail page
└── airhead-project-MD.md                         # THIS FILE
```

---

## Notes & Considerations

### Design Philosophy
- Matches existing project page structure for consistency
- Uses gray color scheme to match site aesthetic
- Responsive design works on mobile/tablet/desktop
- Prose class provides readable typography for long-form content

### Content Strategy
- "In development" status sets expectations
- Technical details show depth without overwhelming
- Phase breakdown helps visitors understand scope
- Placeholder for photos keeps page structure ready

### Performance
- Next.js Image component automatically optimizes photos when added
- SVG logo is lightweight and scalable
- No external dependencies required

### Maintenance
- Easy to update progress inline
- Photo structure is organized and scalable
- Can add/remove sections without breaking layout

---

## External URL Options (Future)

Consider adding:
- Instagram page for build documentation
- YouTube channel for build videos
- Blog post series on Medium/Substack
- Build thread on airheads.org forum

Update `externalUrl` field when available.

---

*This plan provides everything needed to add the BMW R90/6 project to your portfolio site, with built-in flexibility for documentation as the build progresses.*
