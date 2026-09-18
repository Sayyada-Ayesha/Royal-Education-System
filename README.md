# The Royal Education System — Official Website

> **“A Global, Flexible and Unified Learning System.”**  
> *Learn. Understand. Grow. Connect.*

Official web platform for The Royal Education System (RES), bringing together academics, conceptual understanding, communication, character, faith-sensitive learning, technology & AI, and hands-on projects under one connected educational ecosystem.

---

## 🏛️ Brand & Concept Architecture

- **Core Vision:** *“Education should prepare a learner for life—not only for an examination.”*
- **Core Philosophy:** `UNDERSTAND → PRACTICE → EXPLAIN → APPLY → CREATE`
- **Official Founders:** Sayyada Ayesha & Malik Ayan Ahmed
- **Official Character Mentors:** Mr. Rook (Logic & Academics) & Mrs. Rook (Communication & Character)
- **Verified Partners:** SYNX AI Horizon (Technology) & Nova Gen Institute of Technology (Academic)
- **Official Logo:** Uses the permanent `/logo.jpg` asset located in `public/logo.jpg`

---

## 🧭 Navigation & Page Directory

Primary visible navigation aligns strictly with Master PRD Section 4:

1. **Home** (`/`) — Immersive video-ready hero, trust value strip, 9-element unified ecosystem equation diagram, 3-pathway cards, 5-step interactive pedagogy, multi-currency fee preview, student project showcase, and official partners.
2. **About** (`/about`) — Origin story with founders Sayyada Ayesha & Malik Ayan Ahmed, 6 core learner needs, educator profiles, and transparent independent positioning statement.
3. **Programs ▼** (`/programmes`)
   - **Royal Juniors** (`/royal-juniors`) — KG to Grade 4 foundation learning.
   - **Royal Gems** (`/royal-gems`) — Grades 5 to 8 development, advanced science, and applied coding.
   - **Royal Nova** (`/royal-nova`) — Grade 9+, young adults, and flexible customized skill pathways.
4. **Curriculum** (`/curriculum`) — Interactive tier selector (KG, Primary, Middle, Nova) detailing learning areas, capstone projects, and international board adaptation (CBSE, British, American, National).
5. **Academics** (`/academics`) — Subject-by-subject pedagogy comparison (Traditional Rote vs. RES Conceptual Method) across Mathematics, Science, English, and Communication.
6. **Fees / Pricing** (`/pricing` / `/fees`) — Centralized, transparent pricing across grade tiers with multi-currency selector (AED, USD, GBP, PKR quote), one-time admission fee, and optional add-on modules.
7. **Admissions** (`/admissions` / `/how-it-works`) — Step-by-step visual flows for both Standard Enrolment (KG–8) and Royal Nova custom quote requests.
8. **Contact** (`/query` / `/contact`) — Multi-channel contact hub with verified email, WhatsApp direct routing, and structured inquiry form.

### Supplementary Dedicated Pages
- **Why RES** (`/why-res`) — The fragmented education problem vs. The unified RES solution.
- **Learning Method** (`/learning-method`) — Complete walkthrough of the 5-step methodology and photosynthesis practical demonstration.
- **Technology & AI** (`/technology-ai`) — 6-stage developmental progression from digital fundamentals to applied AI capstones.
- **Faith, Values & Character** (`/faith-values`) — Dual respectful pathways: Values & Akhlaq for Muslim learners; Universal Ethics & Digital Citizenship for all learners.
- **Student Projects** (`/projects`) — Problem → Learning → Creation → Outcome showcase.
- **Personalized Learning** (`/personalized-learning`) — Adaptive pacing and diagnostic intake.
- **Our Partners** (`/partners`) — Dedicated profiles for SYNX AI Horizon & Nova Gen Institute of Technology.
- **Free Assessment** (`/free-assessment`) & **Free Demo** (`/free-demo`) — Standalone conversion forms.
- **Royal Agent** — Floating intelligent AI assistant answering queries strictly from verified website knowledge.

---

## 🛠️ Technology Stack & Hosting Portability

- **Framework:** React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion + Lucide React.
- **Deployment Compatibility (PRD Sections 36 & 37):**
  - **Hostinger / Apache Shared Hosting:** Pre-configured with `public/.htaccess` for clean SPA URL rewrites on direct link navigation or page refresh.
  - **InfinityFree:** Compatible static export (`dist/`) without requiring Node server or serverless functions.
  - **Vercel:** Pre-configured with `vercel.json` routing and security headers.
- **Centralized Data:**
  - `src/data/siteConfig.ts` — Brand metadata, contact information, and disclaimer statements.
  - `src/data/pricingData.ts` — Centralized, editable fee schedules.
  - `src/data/teacherData.ts` — Official character mentors and educator profiles.
  - `src/data/partnerData.ts` — Verified partnership records.
  - `src/data/mediaConfig.ts` — Configurable hero video and image gallery paths.

---

## 🚀 Building & Running

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run TypeScript validation
npx tsc --noEmit

# Compile production-ready static bundle
npm run build
```

The compiled output is placed in `dist/` and is immediately deployable to any standard static web host.
