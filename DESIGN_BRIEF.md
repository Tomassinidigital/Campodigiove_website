# Campo di Giove Portal - Design Brief
## Professional Luxury Real Estate Website

---

## 🎨 Color Palette

### Primary Colors
```css
--primary-color: #1a1a1a;       /* Elegant carbon black - main text, headers */
--secondary-color: #c9b18a;     /* Warm beige/taupe - accents, hover states */
--accent-color: #b8956a;        /* Champagne/light gold - highlights, CTAs */
--text-light: #6b6b6b;          /* Light gray - secondary text */
--background: #fafafa;          /* Off-white - page background */
--white: #ffffff;               /* Pure white - cards, overlays */
```

### Usage Guidelines
- **Primary**: Headers, navigation, body text, footer background
- **Secondary**: Hover states, badges, icons, borders
- **Accent**: Call-to-action buttons, links, active states
- **Text Light**: Descriptions, metadata, secondary information
- **Background**: Page background, section backgrounds
- **White**: Cards, overlays, form inputs

---

## 📝 Typography

### Font Families
```css
--font-primary: 'Montserrat', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
--font-secondary: 'Playfair Display', 'Georgia', serif;
```

### Font Sizes & Weights
- **Hero Title**: 4rem (64px) / 600 weight / 1.1 line-height
- **Section Title**: 2.5rem (40px) / 600 weight / 1.2 line-height
- **Subsection Title**: 1.8rem (28.8px) / 600 weight / 1.3 line-height
- **Body Large**: 1.125rem (18px) / 400 weight / 1.8 line-height
- **Body**: 1rem (16px) / 400 weight / 1.6 line-height
- **Small**: 0.875rem (14px) / 400 weight / 1.5 line-height

### Letter Spacing
- **Headers**: 0.5px - 2px (larger for hero titles)
- **Body**: Normal
- **Section Labels**: 3px uppercase tracking

---

## 📐 Layout & Spacing

### Container Widths
- **Max Width**: 1400px (for most sections)
- **Narrow Width**: 1200px (for text-heavy sections)
- **Full Width**: 100vw (for galleries, split-screens)

### Spacing System
```css
--spacing-xs: 0.5rem;    /* 8px */
--spacing-sm: 1rem;      /* 16px */
--spacing-md: 1.5rem;    /* 24px */
--spacing-lg: 2rem;      /* 32px */
--spacing-xl: 3rem;      /* 48px */
--spacing-2xl: 4rem;     /* 64px */
--spacing-3xl: 6rem;     /* 96px */
```

### Section Padding
- **Desktop**: 6rem (96px) vertical, 2rem (32px) horizontal
- **Tablet**: 4rem (64px) vertical, 1.5rem (24px) horizontal
- **Mobile**: 3rem (48px) vertical, 1rem (16px) horizontal

---

## 🏗️ Section Structure

### 1. Header Navigation
```
- Fixed position, white background, minimal shadow
- Logo left, navigation center/right
- Mobile: Hamburger menu with slide-in panel
- Height: 80px
- Elements: Logo | Home | Appartamenti | Servizi | Territorio | Contatti
```

### 2. Hero Section
```
- Fullscreen (100vh min-height)
- Background: Dark overlay (rgba(0,0,0,0.4)) over image
- Content: Centered vertically and horizontally
- Components:
  * Location badge (top)
  * Main title (center, large)
  * Subtitle (below title)
  * Two CTA buttons (primary + secondary)
  * Scroll indicator (bottom, animated)
```

### 3. Intro Section
```
- Two-column split layout (60/40)
- Left: Section label + title + description text
- Right: Feature numbers in grid (2x2)
  * Each feature: Large number + small text label
- Background: White
```

### 4. Property Gallery
```
- Fullwidth layout (no container)
- Main image: Large, full-width with availability badge overlay
- Grid: 4 smaller images (2x2) with hover overlays showing room names
- Overlay animation: Fade in from bottom on hover
```

### 5. Property Details
```
- Two-column grid layout
- Left column:
  * Property specs (superficie, camere, bagni, capacità)
  * Main description text
- Right column:
  * Composition list
  * Amenities/services icons + text
- Background: Light gray (#fafafa)
```

### 6. Services Section
```
- Grid layout: 3 columns on desktop, 2 on tablet, 1 on mobile
- Each card:
  * Progressive number (01, 02, 03...)
  * Icon
  * Title
  * Description
- Hover effect: Slight lift + shadow increase
```

### 7. Experiences Section
```
- Grid layout: 3 cards (Winter, Summer, Transition)
- Each card:
  * Image with overlay gradient
  * Colored top border (blue, green, orange)
  * Title + list of activities
- Hover: Image scale, border color intensifies
```

### 8. Nearby Destinations
```
- Grid layout: 4 columns on desktop
- Each destination:
  * Image
  * Name + distance badge
  * Brief description
- Distance badge: Accent color, rounded
```

### 9. Territory Split-Screen
```
- Two-column layout (50/50)
- Left: Large image
- Right: Section label + title + description + CTA button
- Image: Object-fit cover, full height
```

### 10. Contact Form
```
- Centered form with max-width 600px
- Fields: Name, Email, Phone, Apartment select, Message
- Submit button: Full-width, primary color
- Form message: Success (green) / Error (red) states
```

### 11. Footer
```
- Two-row layout
- Top row: 4 columns (About, Links, Info, Social)
- Bottom row: Copyright text centered
- Background: Primary color (dark)
- Text: Light gray / white
```

---

## 🎭 Component Patterns

### Section Label
```css
display: inline-block;
font-size: 0.875rem;
font-weight: 600;
letter-spacing: 3px;
text-transform: uppercase;
color: var(--accent-color);
margin-bottom: 1rem;
```

### Button Primary
```css
background: var(--primary-color);
color: white;
padding: 1rem 2.5rem;
border-radius: 0;
font-weight: 600;
letter-spacing: 1px;
transition: all 0.3s ease;
hover: background: var(--accent-color);
```

### Button Secondary
```css
background: transparent;
color: var(--primary-color);
border: 2px solid var(--primary-color);
padding: 1rem 2.5rem;
border-radius: 0;
hover: background: var(--primary-color), color: white;
```

### Card Base
```css
background: white;
padding: 2rem;
box-shadow: 0 2px 20px rgba(0,0,0,0.08);
transition: all 0.3s ease;
border-radius: 0;
hover: transform: translateY(-8px), box-shadow: 0 4px 30px rgba(0,0,0,0.12);
```

### Gallery Overlay
```css
position: absolute;
bottom: 0;
background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
padding: 2rem;
color: white;
transform: translateY(100%);
transition: transform 0.3s ease;
hover: transform: translateY(0);
```

---

## 🎬 Animations

### Fade In from Bottom
```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

### Scroll Indicator
```css
@keyframes scrollBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(10px); }
}
```

### Image Zoom on Hover
```css
.image-container img {
    transition: transform 0.6s ease;
}
.image-container:hover img {
    transform: scale(1.08);
}
```

### Intersection Observer
- Elements animate in when they enter viewport
- Threshold: 0.1 (10% visible)
- Root margin: -100px from bottom
- Applied to: cards, feature items, service cards

---

## 📱 Responsive Breakpoints

### Desktop (>1024px)
- Full multi-column layouts
- Large typography
- Complex grid systems
- All hover effects active

### Tablet (768px - 1024px)
- Reduced column counts (3→2, 4→2)
- Slightly smaller typography (10-20% reduction)
- Stack some two-column layouts
- Maintain hover effects

### Mobile (<768px)
- Single column layouts
- Mobile menu (hamburger)
- Stacked sections
- Touch-friendly button sizes (min 44px height)
- Reduced font sizes:
  * Hero: 4rem → 2.5rem
  * Section: 2.5rem → 2rem
  * Body: Maintain readability at 1rem
- Padding reduction: 6rem → 3rem vertical

---

## ✨ Visual Style Do's

✅ **Use sharp corners** (border-radius: 0) for modern, clean look
✅ **Maintain generous whitespace** between sections
✅ **Use subtle shadows** (0 2px 20px rgba(0,0,0,0.08))
✅ **Apply smooth transitions** (0.3s ease for most interactions)
✅ **Keep images high quality** with proper aspect ratios
✅ **Use overlay gradients** for text on images
✅ **Progressive numbering** for sequential items (01, 02, 03...)
✅ **Monochromatic base** with accent color sparingly

---

## 🚫 Visual Style Don'ts

❌ Don't use rounded corners excessively
❌ Don't overuse animations (keep subtle)
❌ Don't mix too many colors (stick to palette)
❌ Don't use small, cramped layouts
❌ Don't ignore mobile optimization
❌ Don't use low-quality images
❌ Don't overcomplicate navigation
❌ Don't use default form styling

---

## 📄 Content Tone

**Professional yet Warm**
- Sophisticated language without being pretentious
- Emphasis on experience and authenticity
- Focus on location benefits (mountains, nature, tranquility)
- Clear call-to-actions
- Informative without overwhelming

**Key Messages**
- Luxury mountain retreat experience
- Proximity to nature and ski facilities
- Comfortable, well-equipped apartments
- Authentic Abruzzo mountain living
- Easy booking and information access

---

## 🛠️ Technical Implementation

### Recommended Tech Stack
- **HTML5**: Semantic structure
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript**: Form handling, animations, intersection observers
- **No frameworks required**: Keep it lightweight and fast

### Performance Considerations
- Lazy load images below fold
- Optimize images (WebP format, appropriate sizes)
- Minimize JavaScript (current: ~8KB)
- Inline critical CSS for above-fold content
- Use modern CSS features (Grid, Custom Properties)

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11 support not required
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🖼️ Image Requirements

### Hero Image
- Dimensions: 1920x1080px minimum
- Subject: Panoramic mountain view or apartment exterior
- Quality: High resolution, professional photography
- Format: JPG or WebP

### Gallery Images
- Main: 1400x800px
- Grid items: 600x600px
- Subject: Interior shots, amenities, views
- Consistent editing style

### Card Images
- Experiences: 800x600px
- Destinations: 600x400px
- Landscape or portrait depending on card

### Optimization
- Compress to 70-80% quality
- Use WebP with JPG fallback
- Implement lazy loading
- Provide alt text for accessibility

---

## 📋 Implementation Priority

### Phase 1: Structure (Completed ✅)
- [x] HTML semantic structure
- [x] CSS color system and typography
- [x] Responsive layouts
- [x] Navigation and footer

### Phase 2: Components (Completed ✅)
- [x] Hero section with CTAs
- [x] Property gallery
- [x] Service cards
- [x] Contact form

### Phase 3: Interactions (Completed ✅)
- [x] Mobile menu
- [x] Smooth scrolling
- [x] Form validation
- [x] Intersection observers

### Phase 4: Enhancement (Future)
- [ ] Replace placeholder images with actual photos
- [ ] Implement backend for contact form
- [ ] Add image lightbox for gallery
- [ ] Implement property booking system
- [ ] Add availability calendar
- [ ] Integrate Google Maps for location
- [ ] Add testimonials section
- [ ] Implement language switcher (IT/EN)

---

## 🔗 External Inspirations

**Primary Reference**: Hendon by Qode Interactive
- https://hendon.qodeinteractive.com/

**Design Elements Adapted**:
- Fullscreen hero with centered content
- Split-screen layouts
- Minimalist color palette (black, beige, gold)
- Gallery with overlay interactions
- Progressive numbering system
- Sharp corners (no border-radius)
- Generous whitespace
- Sophisticated typography hierarchy

---

## 📦 Deliverables Checklist

### Files Structure
```
/Campodigiove_website/
├── index.html          (598 lines - Complete structure)
├── styles.css          (2013 lines - Full styling)
├── script.js           (322 lines - All interactions)
├── DESIGN_BRIEF.md     (This document)
└── images/            (Placeholder images to be replaced)
    ├── appartamento-1.jpg
    ├── appartamento-2.jpg
    └── ...
```

### Code Quality
- ✅ Valid HTML5 semantic markup
- ✅ Clean, organized CSS (grouped by section)
- ✅ Vanilla JavaScript (no dependencies)
- ✅ Mobile-first responsive design
- ✅ Accessibility considerations (alt text, semantic tags)
- ✅ SEO-friendly structure (proper heading hierarchy)

---

## 🎯 Success Metrics

**User Experience**
- Fast page load (<3 seconds)
- Smooth animations (60fps)
- Easy navigation on all devices
- Clear call-to-action paths
- Intuitive form submission

**Visual Quality**
- Professional, luxury appearance
- Consistent branding throughout
- High-quality imagery
- Proper contrast ratios (WCAG AA)

**Functionality**
- All links work correctly
- Form validation functions properly
- Mobile menu operates smoothly
- All sections are accessible

---

## 📞 Contact Information

**Property**: Appartamenti Campo di Giove
**Location**: Campo di Giove, Abruzzo, Italy
**Email**: info@appartamenticampodigiove.it
**Phone**: +39 [number]

---

## 📝 Notes for Lovable AI

This design brief contains all specifications needed to regenerate the Campo di Giove portal. Key points:

1. **Color system is monochromatic luxury** (black, beige, champagne gold)
2. **Layout is section-based** with clear visual hierarchy
3. **Components follow consistent patterns** (cards, overlays, buttons)
4. **Responsive design is mobile-first** with 3 breakpoints
5. **Animations are subtle** and performance-conscious
6. **No external dependencies** - pure HTML/CSS/JS

**Implementation approach**: Build section by section, starting with header/hero, then working down the page. Each section is self-contained and can be developed independently.

**Design philosophy**: Less is more. Prioritize whitespace, clear typography, and subtle interactions over complex effects.

---

*Last updated: November 26, 2025*
*Version: 1.0*
*Status: Ready for implementation*
