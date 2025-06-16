# News App

A modern news application built with React, TypeScript, and Redux Toolkit, featuring dark/light theme support and bilingual interface (English/Arabic).

## Features

- 📰 Latest news articles with images and descriptions
- 🌓 Dark/Light theme with system preference detection
- 🌐 Bilingual support (English/Arabic)
- 📱 Responsive design
- ⚡ Fast and smooth user experience
- 🔄 Real-time theme and language switching
- 💾 Persistent user preferences

## Tech Stack

- React 18
- TypeScript
- Redux Toolkit
- React Router
- Tailwind CSS
- Vite

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd news-app
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
news-app/
├── src/
│   ├── app/              # Redux store configuration
│   ├── components/       # Reusable components
│   ├── features/         # Feature-specific code
│   │   ├── language/    # Language switching
│   │   ├── news/        # News API integration
│   │   └── theme/       # Theme management
│   ├── pages/           # Page components
│   └── types/           # TypeScript type definitions
├── public/              # Static assets
└── package.json         # Project dependencies
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler

## Features in Detail

### Theme Support

- Automatic system theme detection
- Manual theme toggle
- Smooth transitions between themes
- Persistent theme preference

### Language Support

- English and Arabic interface
- RTL support for Arabic
- Persistent language preference
- Automatic text direction switching

### News Features

- Article cards with images
- Article details view
- Responsive grid layout
- Loading states and error handling

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
