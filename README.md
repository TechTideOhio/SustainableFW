# Sustainable Forests Website

A beautiful, high-performance, fully responsive website front-end focused on sustainable forests, built with Next.js, Lenis, R3F (React Three Fiber), Three.js, GSAP, and Framer Motion.

## Features

- Full-screen landing section with a 3D animated forest using R3F/Three.js
- Scroll-based parallax sections highlighting key facts about sustainability
- Beautiful nature photography with smooth transitions
- Immersive storytelling using scroll animations
- Working navigation bar with smooth scroll links
- Responsive buttons with hover and click animations
- Modular and clean component structure using Next.js best practices

## Installation

1. Clone the repository or extract the provided files
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

## Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
sustainable-forest-website/
├── public/
│   └── images/            # Forest and nature images
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── page.tsx       # Main page component
│   │   ├── layout.tsx     # Root layout
│   │   └── globals.css    # Global styles
│   ├── components/
│   │   ├── 3d/            # 3D components using R3F/Three.js
│   │   │   ├── Forest.tsx         # 3D forest scene
│   │   │   └── ForestCanvas.tsx   # Canvas wrapper for 3D scene
│   │   ├── layout/        # Layout components
│   │   │   └── NavbarWithSmoothScroll.tsx  # Navigation with smooth scroll
│   │   └── ui/            # UI components
│   │       ├── AnimatedButton.tsx  # Framer Motion animated buttons
│   │       ├── Button.tsx          # Base button component
│   │       ├── HeroSection.tsx     # Hero section with 3D forest
│   │       ├── ParallaxSection.tsx # Scroll-based parallax sections
│   │       └── SmoothScrollLink.tsx # Smooth scroll navigation links
│   ├── hooks/             # Custom React hooks
│   │   └── useLenis.ts    # Hook for Lenis smooth scrolling
│   └── lib/               # Library files and utilities
└── next.config.js         # Next.js configuration
```

## Technologies Used

- **Next.js**: React framework for production
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React Three Fiber (R3F)**: React renderer for Three.js
- **Three.js**: 3D library for creating immersive experiences
- **GSAP**: Animation library for scroll-based animations
- **Framer Motion**: Animation library for UI components
- **Lenis**: Smooth scrolling library

## Deployment

This project is optimized for Vercel deployment. To deploy:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Follow the deployment steps

Alternatively, you can build the project locally:

```bash
npm run build
```

## Customization

- Replace placeholder images in the `public/images` directory
- Modify content in `src/app/page.tsx`
- Adjust animations and effects in respective component files
- Customize colors and styles in `src/app/globals.css` and component files

## Browser Support

The website is optimized for modern browsers and is fully responsive across desktop, tablet, and mobile devices.

## Accessibility

The website includes accessibility features such as:
- Keyboard navigation support
- Proper focus management
- ARIA attributes
- Reduced motion preferences
- High contrast text

## License

This project is provided for your use as requested.

## Credits

- Forest images from Unsplash
- 3D forest implementation using React Three Fiber
- Smooth scrolling powered by Lenis
