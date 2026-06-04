# Momkiddy Indonesia — Website Plan

## Overview

Website edukasi mirip Ruang Guru untuk **Lembaga Pendidikan Momkiddy Indonesia**.

**Keputusan utama:**
- Enrollment = WhatsApp redirect (bukan sistem database)
- Admin panel = tidak untuk sekarang
- Extra pages: Blog/Artikel, FAQ, Galeri/Dokumentasi

**Brand:**
- Tagline: "Ibu Pintar Mengajar, Anak Cerdas Berkarya"
- Primary: `#1877F2` (biru)
- Accent: `#FF8A00` (oranye)
- WA Admin: (isi nomor)
- IG: @momkiddy.education

---

## Halaman (Pages)

### Public Pages

| Route | URL | Keterangan |
|---|---|---|
| `routes/index.tsx` | `/` | Landing page lengkap |
| `routes/about.tsx` | `/about` | Tentang Kami, visi/misi, founder |
| `routes/programs/route.tsx` | layout | Breadcrumb wrapper untuk /programs/* |
| `routes/programs/index.tsx` | `/programs` | Semua program (5 program) |
| `routes/programs/microteaching.tsx` | `/programs/microteaching` | Detail Kelas Pengajar (Best Seller) |
| `routes/programs/calistung.tsx` | `/programs/calistung` | Detail Calistung Fun 3–7 thn |
| `routes/programs/bimbel-sd.tsx` | `/programs/bimbel-sd` | Detail Bimbel SD Kelas 1–6 |
| `routes/programs/english-fun.tsx` | `/programs/english-fun` | Detail English Fun Class 5–12 thn |
| `routes/programs/menulis-kreatif.tsx` | `/programs/menulis-kreatif` | Detail Menulis Kreatif & Literasi |
| `routes/alumni.tsx` | `/alumni` | Showcase alumni + cerita sukses |
| `routes/blog/index.tsx` | `/blog` | Daftar artikel parenting & tips belajar |
| `routes/blog/$slug.tsx` | `/blog/:slug` | Detail artikel |
| `routes/galeri.tsx` | `/galeri` | Foto kegiatan kelas & workshop |
| `routes/faq.tsx` | `/faq` | FAQ accordion |
| `routes/kontak.tsx` | `/kontak` | Kontak: WA, IG, alamat |

### Protected Pages (setelah login)

| Route | URL | Keterangan |
|---|---|---|
| `routes/_auth/dashboard.tsx` | `/dashboard` | Dashboard murid |
| `routes/_auth/profile.tsx` | `/profile` | Edit profil |

---

## Landing Page Sections (`/`)

1. **Hero** — Tagline besar + sub-copy + 2 CTA: "Lihat Program" & "Hubungi Kami (WA)"
2. **Stats bar** — "500+ Ibu Terlatih | 5 Program Unggulan | 20+ Batch Selesai"
3. **Tentang Momkiddy** — Teaser singkat + link ke `/about`
4. **Program Cards** — 5 program dengan badge "Best Seller" untuk Microteaching
5. **5 Keunggulan** — Play-Based Learning, Hybrid, Kelas Kecil, dll
6. **Testimonial** — 3 featured testimonials dari murid
7. **Alumni Showcase** — 3 featured alumni + foto + cerita singkat
8. **CTA Banner** — "Daftar Sekarang → WhatsApp Admin"

---

## Database Schema

### `testimonials`
```
id, authorName, authorRole, authorImage (URL),
programSlug (nullable), content, rating (1–5),
isPublished, isFeatured, createdAt, updatedAt
```

### `alumni`
```
id, name, photo (URL), batchLabel ("Batch 5, Maret 2025"),
programSlug, certificateUrl (URL nullable), shortStory,
isPublished, isFeatured, graduatedAt, createdAt, updatedAt
```

### `blog_posts`
```
id, slug (unique), title, excerpt, content (markdown),
authorName, authorImage (URL nullable), coverImage (URL),
tags (JSON array), isPublished, publishedAt, createdAt, updatedAt
```

### `gallery_items`
```
id, imageUrl, caption, event ("Workshop Batch 3"),
takenAt, isPublished, createdAt, updatedAt
```

**Program data** → Static TypeScript object di `apps/web/src/lib/programs-content.ts` (tidak perlu DB)

---

## API Procedures

| Router | Procedure | Auth | Keterangan |
|---|---|---|---|
| testimonials | `listFeatured` | public | Untuk homepage |
| testimonials | `listByProgram` | public | Untuk program detail |
| alumni | `listFeatured` | public | Untuk homepage + alumni page |
| alumni | `list` | public | Semua alumni, paginated |
| blog | `list` | public | Semua artikel, paginated |
| blog | `getBySlug` | public | Detail artikel |
| gallery | `list` | public | Semua foto |

---

## Design System

### Brand Colors di `globals.css`
```css
/* Override --primary dan --accent dengan brand colors */
--primary: oklch(0.514 0.222 253.4);        /* #1877F2 */
--primary-foreground: oklch(0.985 0 0);
--accent: oklch(0.712 0.185 54.7);          /* #FF8A00 */
--accent-foreground: oklch(0.145 0 0);
```

### Komponen UI Baru (packages/ui/src/components/)
`badge`, `separator`, `avatar`, `sheet`, `accordion`, `breadcrumb`

### Komponen App Baru (apps/web/src/components/)
- `site-header.tsx` — Nav marketing (logo, links, mobile hamburger)
- `site-footer.tsx` — Footer dengan quick links + kontak
- `sections/hero-section.tsx`
- `sections/program-card.tsx`
- `sections/testimonial-card.tsx`
- `sections/alumni-card.tsx`
- `sections/keunggulan-section.tsx`
- `sections/whatsapp-cta.tsx`

---

## WhatsApp CTA Pattern

```tsx
const WA_NUMBER = "6208xxxxxxxxxx" // ganti dengan no. asli
const waUrl = (program: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    `Halo Momkiddy, saya ingin daftar program ${program}`
  )}`
```

---

## Urutan Implementasi

### Phase 1 — Visual Foundation
- [ ] Update brand colors di `globals.css`
- [ ] Tambah shadcn components: badge, separator, avatar, sheet, accordion, breadcrumb
- [ ] Buat `site-header.tsx` (marketing nav + mobile)
- [ ] Buat `site-footer.tsx`
- [ ] Update `__root.tsx`: lang="id", hapus dark class, flex col layout

### Phase 2 — Landing Page
- [ ] Rewrite `routes/index.tsx` dengan semua sections

### Phase 3 — Static Content Pages (tanpa DB)
- [ ] Buat `apps/web/src/lib/programs-content.ts`
- [ ] `routes/programs/index.tsx` + route.tsx
- [ ] 5 program detail pages
- [ ] `routes/about.tsx`
- [ ] `routes/faq.tsx`
- [ ] `routes/kontak.tsx`

### Phase 4 — DB + Seed
- [ ] Tulis 4 schema files
- [ ] Update `schema/index.ts`
- [ ] `bun db:generate` & migrate
- [ ] Buat `packages/db/src/seed.ts`

### Phase 5 — Dynamic Data
- [ ] Tulis 4 router files
- [ ] Update `packages/api/src/routers/index.ts`
- [ ] Connect landing page ke DB
- [ ] `routes/alumni.tsx`
- [ ] `routes/blog/index.tsx` + `$slug.tsx`
- [ ] `routes/galeri.tsx`

---

## Files Lengkap

### Modified
- `packages/ui/src/styles/globals.css`
- `apps/web/src/routes/__root.tsx`
- `apps/web/src/routes/index.tsx`
- `apps/web/src/routes/_auth/dashboard.tsx`
- `apps/web/src/components/header.tsx`
- `packages/db/src/schema/index.ts`
- `packages/api/src/routers/index.ts`

### Created
**UI:** `badge.tsx`, `separator.tsx`, `avatar.tsx`, `sheet.tsx`, `accordion.tsx`, `breadcrumb.tsx`

**Components:** `site-header.tsx`, `site-footer.tsx`, `sections/hero-section.tsx`, `sections/program-card.tsx`, `sections/testimonial-card.tsx`, `sections/alumni-card.tsx`, `sections/keunggulan-section.tsx`, `sections/whatsapp-cta.tsx`

**Content:** `apps/web/src/lib/programs-content.ts`

**Routes:** `about.tsx`, `alumni.tsx`, `faq.tsx`, `kontak.tsx`, `galeri.tsx`, `programs/route.tsx`, `programs/index.tsx`, `programs/microteaching.tsx`, `programs/calistung.tsx`, `programs/bimbel-sd.tsx`, `programs/english-fun.tsx`, `programs/menulis-kreatif.tsx`, `blog/index.tsx`, `blog/$slug.tsx`, `_auth/profile.tsx`

**DB Schema:** `testimonials.ts`, `alumni.ts`, `blog_posts.ts`, `gallery_items.ts`

**API Routers:** `testimonials.ts`, `alumni.ts`, `blog.ts`, `gallery.ts`

**DB:** `packages/db/src/seed.ts`
