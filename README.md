# Premier Machine Tools (PMT) Coimbatore

> High-Precision CNC & Heavy Industrial Machinery Showcase & RFQ Web Application.

![Premier Machine Tools](/images/hero_cnc.jpg)

## 📌 About The Project
Premier Machine Tools (Coimbatore, Tamil Nadu) has been a trusted manufacturer and distributor of industrial CNC machinery, multi-axis machining centers, precision lathes, and cutting tools since 1994. 

This modern web application provides:
- **Interactive Machinery Catalog**: Slant-bed CNC turning centers, 5-axis vertical machining centers (VMC), all-geared precision lathes, and solid carbide tooling kits.
- **Dynamic Specification Inspector Modal**: Deep-dive technical tables covering spindle speeds, axis travels, CNC controllers (Fanuc, Siemens, Mitsubishi), and repeatability.
- **Factory ROI & Payback Calculator**: Interactive tool for factory owners to calculate cycle-time reductions, hours saved, monthly cost savings (₹), and investment payback periods.
- **RFQ Quote Cart & Instant Ticket Generator**: Multi-machine selection drawer and instant inquiry submission with unique reference tracking codes (`PMT-CBE-2026-XXXX`).
- **Coimbatore Demo & Benchmarking Center**: Live test-cutting reservation system for local clients in SIDCO Kurichi and Pan-India.

---

## 🛠️ Technology Stack
- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Modern Vanilla CSS Design System with dark industrial aesthetics, glassmorphism, and responsive layout
- **Typography**: Google Fonts (*Outfit* for bold industrial headers, *Inter* for crisp body copy)

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
The application will be live at `http://localhost:5173/`.

### 3. Build for Production
```bash
npm run build
```
Optimized static files will be generated in `dist/`.

---

## 📂 Project Structure
```text
pmt/
├── public/
│   └── images/
│       ├── hero_cnc.jpg            # Flagship CNC Machining Center hero image
│       ├── lathe_machine.jpg       # Slant-bed CNC turning lathe
│       ├── vmc_5axis.jpg           # 5-Axis aerospace machining center
│       └── tooling_accessories.jpg # Micrograin carbide tooling & cutters
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Navigation with hotline, RFQ drawer counter
│   │   ├── Hero.jsx                # High-impact hero banner & quick search
│   │   ├── MachineCatalog.jsx      # Filterable machinery grid & cards
│   │   ├── MachineModal.jsx        # Technical specifications inspector
│   │   ├── RoiCalculator.jsx       # Interactive CNC ROI & payback calculator
│   │   ├── IndustriesSection.jsx   # Sector applications & testimonials
│   │   ├── FacilitySection.jsx     # Coimbatore SIDCO demo center & clean room
│   │   ├── FaqSection.jsx          # Technical & warranty accordion FAQs
│   │   ├── Footer.jsx              # Directory links & company info
│   │   └── Toast.jsx               # Floating feedback notifications
│   ├── data/
│   │   └── machines.js             # Machinery dataset, specs, testimonials
│   ├── App.jsx                     # Root application state & composition
│   ├── index.css                   # Industrial design system & utilities
│   └── main.jsx                    # React 19 entry point
├── index.html                      # SEO metadata, Google Fonts & custom favicon
└── package.json                    # Dependencies & scripts
```

---

## 🏭 Coimbatore Facility & Contact
- **Address**: Plot No. 42-B, SIDCO Industrial Estate, Kurichi, Coimbatore, Tamil Nadu – 641021
- **Phone**: +91 98422 15890 / +91 422 249 8812
- **Email**: `sales@premiermachinetools.in`
- **Hours**: Mon – Sat: 9:00 AM – 7:30 PM (Demo Trials by Appointment)
