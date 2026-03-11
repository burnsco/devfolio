# devfolio | coreyburns.ca

[![Astro](https://img.shields.io/badge/Astro-5.0-BC52EE?logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/Animations-GSAP-88CE02?logo=greensock&logoColor=white)](https://gsap.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A high-performance, cinematic developer portfolio featuring smooth scroll-driven animations, a brutalist-inspired dark aesthetic, and a perfect Lighthouse profile.

[**Live Demo →**](https://coreyburns.ca)

---

## ⚡ Performance First

This portfolio is engineered for speed. By migrating from a heavy client-side React architecture to **Astro-native components**, we achieved a perfect score across all Lighthouse metrics.

| Metric                | Score   |
| :-------------------- | :------ |
| 🚀 **Performance**    | **100** |
| ♿ **Accessibility**  | **100** |
| 🛡️ **Best Practices** | **100** |
| 🔍 **SEO**            | **100** |

---

## ✨ Features

- **Cinematic Experience:** Immersive GSAP ScrollTrigger animations that bring the interface to life.
- **Hybrid Architecture:** Optimized Astro components with minimal client-side JS for lightning-fast delivery.
- **Responsive Navigation:** Sophisticated dual-nav system (Top Nav + Side Nav) with active section tracking.
- **Self-Hosted Assets:** Optimized Fontsource integration and local assets for zero external dependencies.
- **Brutalist Design:** Bold typography, noise textures, and red-on-black accents for a distinct technical identity.

---

## 🛠️ Tech Stack

- **Framework:** [Astro 5](https://astro.build/) (Static Site Generation)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations:** [GSAP](https://gsap.com/) (ScrollTrigger & Observer)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Fonts:** [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) & [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20.x or higher
- **Bun** (recommended) or **npm**

### Installation

```bash
# Clone the repository
git clone https://github.com/corey-burns-dev/devfolio.git

# Install dependencies
bun install
```

### Development

```bash
bun dev
```

### Build & Preview

```bash
bun run build
bun run preview
```

---

## 📂 Project Structure

```text
src/
├── components/   # Astro-native UI components
├── data/         # Project & Skill definitions
├── layouts/      # Base HTML templates
├── pages/        # Route definitions (index.astro)
└── styles/       # Global CSS & Tailwind config
```

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

Built with ❤️ by [Corey Burns](https://coreyburns.ca)
