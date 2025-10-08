# ⛏ FlexGrid Pro - Minecraft Grid Builder

A Minecraft-inspired CSS Grid and Flexbox layout builder with blocky pixel-art styling. Craft epic, responsive layouts and generate clean code instantly!

![Minecraft Theme](https://img.shields.io/badge/Theme-Minecraft-green?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- **🎮 Minecraft-Inspired Design**: Blocky pixel-art styling with authentic Minecraft aesthetics
- **📦 Predefined Templates**: Choose from pre-built layout templates for quick starts
- **🔨 Custom Grid Builder**: Build unique layouts with an interactive grid system
- **🌓 Dark/Light Mode**: Black & green (dark) or white & green (light) color palettes
- **📋 Code Generation**: Export layouts as Tailwind CSS or external CSS
- **⚡ Real-Time Preview**: See your layouts come to life instantly
- **🎨 Pixel-Perfect**: Press Start 2P and Bitcount Prop Single fonts for retro feel

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd flexgrid-pro

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 🎯 How to Use

### 1. Choose Your Mode

**Templates Mode**
- Select from pre-built layout templates
- Perfect for quick prototyping
- Includes common patterns like Holy Grail, Dashboard, etc.

**Custom Build Mode**
- Define custom grid dimensions (rows & columns)
- Set gap spacing
- Add and position items interactively
- Customize colors and content

### 2. Preview Your Layout

View your layout in real-time with the Minecraft-themed preview panel featuring:
- Blocky borders
- Pixel shadows
- Responsive sizing

### 3. Generate Code

Switch between two code output modes:
- **Tailwind CSS**: Inline utility classes (recommended)
- **External CSS**: Traditional CSS file approach

Copy the generated HTML and CSS directly into your project!

## 🎨 Theme Details

### Color Palettes

**Dark Mode**
- Background: Black (#000000)
- Accent: Neon Green (#00FF00)
- Borders: Pixel-style green outlines

**Light Mode**
- Background: White (#FFFFFF)
- Accent: Emerald Green (#10B981)
- Borders: Soft green outlines

### Typography

- **Headings**: Press Start 2P (pixel font)
- **Body Text**: Bitcount Prop Single (readable pixel font)

### Design Elements

- Pixelated borders (4-8px thickness)
- Block-style shadows
- Hover animations (block-breaking effect)
- Floating pixel blocks
- Glitch text effects

## 🛠 Tech Stack

- **Framework**: React 18.3.1
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router DOM

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── CodeOutput.tsx   # Code generation display
│   ├── CustomGridBuilder.tsx
│   ├── FlexboxPreview.tsx
│   ├── PredefinedLayouts.tsx
│   └── ThemeToggle.tsx
├── context/
│   └── ThemeContext.tsx
├── pages/
│   ├── Index.tsx        # Main app page
│   └── NotFound.tsx
├── index.css            # Global styles & theme
└── main.tsx
```

## 🎮 Design Philosophy

FlexGrid Pro embraces the iconic Minecraft aesthetic to make layout building fun and engaging:

- **Blocky Everything**: All UI elements use pixel-perfect borders and sharp edges
- **Green Energy**: Neon green accents create that authentic Minecraft vibe
- **Pixelated Fonts**: Retro typography for maximum nostalgia
- **Interactive Blocks**: Hover effects mimic block-breaking animations

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- Inspired by Minecraft's iconic blocky aesthetic 
- Fonts from Google Fonts (Press Start 2P, Bitcount Prop Single)


## 📞 Support

Need help? Have suggestions?
- Open an issue on GitHub
- Join the discussion in the community

---

**Made with ⛏ and 💚 by the FlexGrid Pro team**

*Craft. Build. Deploy. The Minecraft Way.*
