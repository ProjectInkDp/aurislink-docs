# 📚 AurisLink Documentation & Landing Page

<div align="center">
  <img src="https://img.shields.io/badge/status-active-brightgreen?style=flat-square" alt="Status">
  <img src="https://img.shields.io/badge/license-AGPL--3.0-blue?style=flat-square" alt="License">
  <img src="https://img.shields.io/badge/next.js-16.2-black?style=flat-square&logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/typescript-5.0-blue?style=flat-square&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/tailwind-3.0-38B2AC?style=flat-square&logo=tailwind-css" alt="Tailwind CSS">
  
  <h3>🎵 Professional Documentation & Landing Page for AurisLink</h3>
  <p><strong>A high-performance, Lavalink v4-compatible audio server</strong></p>
  
  [🌐 Live Site](https://aurislink-docs.vercel.app) • [📖 Main Repo](https://github.com/ProjectInkDp/aurislink) • [🤝 Contributing](#contributing)
</div>

---

## 🎯 About This Project

This repository contains the **official documentation and landing page** for [AurisLink](https://github.com/ProjectInkDp/aurislink), a lightweight yet powerful audio streaming server. The site is built with **Next.js**, **TypeScript**, and **Tailwind CSS**, providing a modern, responsive experience for users and developers.

### Key Features

- ⚡ **Fast & Modern** — Built with Next.js 16 and optimized for performance
- 📱 **Fully Responsive** — Works seamlessly on desktop, tablet, and mobile
- 🎨 **Beautiful Design** — Professional dark theme with smooth animations
- 📚 **Comprehensive Docs** — Getting started, configuration, API reference, and more
- 🔍 **SEO Optimized** — Proper metadata and structured data for search engines
- ♿ **Accessible** — WCAG 2.1 AA compliant for inclusive design
- 🚀 **Deployed on Vercel** — Automatic deployments on every push

---

## 📖 Documentation Sections

The site includes comprehensive documentation covering:

| Section | Description |
|---------|-------------|
| **Getting Started** | Installation, setup, and quick start guide |
| **Configuration** | Detailed configuration options for all audio sources |
| **API Reference** | REST API and WebSocket documentation with examples |
| **Audio Sources** | How to configure SoundCloud, Deezer, Spotify, JioSaavn |
| **Audio Filters** | Available audio effects and filter usage |

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 20.0.0 or higher
- **npm** 9.0.0 or higher
- **Git**

### Installation

```bash
# Clone the repository
git clone https://github.com/ProjectInkDp/aurislink-docs.git
cd aurislink-docs

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:3000`

### Building for Production

```bash
# Build the project
npm run build

# Start production server
npm start
```

---

## 🏗️ Project Structure

```
aurislink-docs/
├── app/
│   ├── page.tsx              # Landing page
│   ├── layout.tsx            # Root layout with metadata
│   ├── globals.css           # Global styles
│   └── docs/
│       ├── page.tsx          # Documentation index
│       ├── layout.tsx        # Docs layout with sidebar navigation
│       ├── getting-started/  # Getting started guide
│       ├── configuration/    # Configuration guide
│       ├── api/              # API reference
│       ├── sources/          # Audio sources guide
│       └── filters/          # Audio filters guide
├── public/                   # Static assets
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.mjs
└── vercel.json
```

---

## 🛠️ Technologies Used

- **Framework:** [Next.js 16](https://nextjs.org/) — React framework with App Router
- **Language:** [TypeScript 5](https://www.typescriptlang.org/) — Type-safe JavaScript
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/) — Utility-first CSS framework
- **Icons:** [Lucide React](https://lucide.dev/) — Beautiful icon library
- **Deployment:** [Vercel](https://vercel.com/) — Optimized for Next.js
- **Version Control:** [Git](https://git-scm.com/) — Distributed version control

---

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start dev server with hot reload

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

---

## 🌐 Deployment

### Vercel (Recommended)

This project is optimized for [Vercel](https://vercel.com/). Deployment is automatic when you push to the main branch.

#### Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## 🎨 Design System

### Color Palette

- **Primary:** Cyan (#06B6D4)
- **Secondary:** Blue (#3B82F6)
- **Background:** Slate (#0F172A)
- **Text:** White (#FFFFFF) / Slate (#CBD5E1)

### Typography

- **Headings:** Bold, 1.1-1.3 line height
- **Body:** Regular, 1.5-1.6 line height
- **Mono:** For code blocks and technical content

---

## 🤝 Contributing

**⚠️ This repository does NOT accept contributions.**

Contributions to the **AurisLink main project** are welcome! Please refer to the [AurisLink Contributing Guide](https://github.com/ProjectInkDp/aurislink) for details on how to contribute to the main project.

**Important:** Only the `dev` branch of the main AurisLink repository accepts pull requests. Any PRs submitted to other branches will be rejected.

---

## 📄 License

This project is licensed under the **GNU Affero General Public License v3.0** (AGPL-3.0).

This means:
- ✅ You can use, modify, and distribute this software
- ✅ You must disclose your source code if you modify it
- ✅ If you run a modified version as a service, users must have access to the source code
- ✅ You must include the license and copyright notice

See [LICENSE](./LICENSE) for the full license text.

---

## 🙏 Acknowledgments

- Built with ❤️ by [ProjectInkDp](https://github.com/ProjectInkDp)
- Inspired by [Lavalink](https://lavalink.dev/)
- Powered by [Next.js](https://nextjs.org/) and [Vercel](https://vercel.com/)

---

## 📞 Support

- **Documentation:** [aurislink-docs.vercel.app](https://aurislink-docs.vercel.app)
- **Main Repository:** [github.com/ProjectInkDp/aurislink](https://github.com/ProjectInkDp/aurislink)
- **Issues:** [GitHub Issues](https://github.com/ProjectInkDp/aurislink/issues)

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/ProjectInkDp">ProjectInkDp</a></p>
  <p><a href="https://github.com/ProjectInkDp/aurislink-docs">⭐ Star us on GitHub</a> • <a href="https://github.com/ProjectInkDp/aurislink-docs/fork">🍴 Fork this repository</a></p>
  <p><a href="https://aurislink-docs.vercel.app">🌐 Visit the Site</a> • <a href="https://github.com/ProjectInkDp/aurislink">📖 Main Repository</a></p>
</div>
