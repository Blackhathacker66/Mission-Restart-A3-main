# HERO.IO — App Marketplace

> A fully responsive, modern App Marketplace built with React and Tailwind CSS.

---

## 🚀 Live Demo

Run locally with `npm run dev` — see setup below.

---

## 📖 Description

**HERO.IO** is a premium app marketplace web application where users can:

- Browse a curated catalogue of productivity & lifestyle apps
- Search and sort apps by download count
- View detailed app info including ratings charts
- Install / Uninstall apps (persisted via `localStorage`)
- Experience a polished UI with toast notifications and smooth transitions

---

## 🛠 Technologies

| Technology | Purpose |
|---|---|
| **React 18** (JavaScript only) | UI framework |
| **React Router DOM v6** | Client-side routing |
| **Tailwind CSS v3** | Utility-first styling |
| **Recharts** | Rating breakdown bar chart |
| **react-hot-toast** | Toast notifications |
| **localStorage** | Persist installed apps |
| **Vite** | Build tool & dev server |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Sticky header with active route highlighting
│   ├── Footer.jsx        # Dark footer with social links
│   ├── AppCard.jsx       # Reusable app card grid item
│   └── Loading.jsx       # Spinner component
├── data/
│   └── apps.js           # 16 realistic productivity app entries
├── pages/
│   ├── Home.jsx          # Hero + Stats + Trending apps
│   ├── Apps.jsx          # All apps with search & sort
│   ├── AppDetails.jsx    # Detail view + Recharts + install
│   ├── Installation.jsx  # Installed apps list + uninstall
│   └── NotFound.jsx      # Custom 404 page
├── App.jsx               # Router, layout, Toaster
├── main.jsx              # React entry point
└── index.css             # Tailwind + global styles
```

---

## 📄 Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/apps` | All Apps |
| `/apps/:id` | App Details |
| `/installation` | My Installations |
| `*` | 404 Not Found |

---

## ⚙️ Setup & Run

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## ✨ Features

- 🔍 **Live Search** — case-insensitive, real-time filtering
- 📊 **Sort by Downloads** — High→Low / Low→High
- 📈 **Rating Chart** — horizontal bar chart via Recharts
- 💾 **Install / Uninstall** — localStorage persistence
- 🔔 **Toast Notifications** — install & uninstall feedback
- 📱 **Fully Responsive** — mobile, tablet, desktop
- 🎨 **Premium Design** — purple accents, navy footer, rounded cards
- ⚡ **Loading States** — spinner on page transitions

---

## 📸 Screenshots

| Page | Description |
|---|---|
| Home | Hero section, stats banner, trending apps |
| All Apps | Search + sort + full grid |
| App Details | Chart, install button, description |
| Installation | Installed list with uninstall |
| 404 | Custom not-found page |

---

## 📝 License

MIT © 2025 HERO.IO
