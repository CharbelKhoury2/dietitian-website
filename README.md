# Dietitian Website

A modern, responsive website for a professional dietitian practice built with React, TypeScript, and Vite.

## Features

### 🎨 Design & User Experience
- Modern, clean design with sage green color palette
- Fully responsive layout for all devices
- Smooth animations and transitions
- Accessible design following WCAG guidelines
- SEO optimized with meta tags and structured data

### 📱 Pages & Functionality
- **Homepage**: Hero section, services overview, testimonials, and CTA
- **About**: Professional background and qualifications
- **Services**: Detailed service offerings with pricing
- **Blog**: Article listing and individual article pages
- **Testimonials**: Client success stories
- **Contact**: Contact form with validation and booking integration
- **Booking**: Appointment scheduling interface
- **Admin Dashboard**: Content management (protected route)

### 🔧 Technical Features
- **React 18** with TypeScript for type safety
- **React Router** for client-side routing
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for utility-first styling
- **Lucide React** for consistent iconography
- **Error Boundaries** for graceful error handling
- **Form Validation** with security utilities
- **Performance Optimizations** including code splitting

### 🛡️ Security & Validation
- Input sanitization and validation
- Rate limiting for form submissions
- XSS protection
- Content Security Policy helpers
- Secure form handling

### ♿ Accessibility
- ARIA labels and descriptions
- Keyboard navigation support
- Screen reader compatibility
- High contrast ratios
- Focus management

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dietitian-website
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Update environment variables in `.env` with your actual values

5. Start the development server:
```bash
npm run dev
```

6. Open [http://localhost:5173](http://localhost:5173) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer, Navigation
│   ├── pages/           # Page components
│   ├── sections/        # Reusable page sections
│   └── ui/              # UI components (Button, etc.)
├── utils/
│   ├── performance.ts   # Performance monitoring utilities
│   └── security.ts      # Security and validation utilities
├── styles/
│   ├── globals.css      # Global styles
│   └── accessibility.css # Accessibility enhancements
├── App.tsx              # Main app component
└── main.tsx            # App entry point
```

## Environment Variables

Copy `.env.example` to `.env` and configure:

```env
# Site Configuration
VITE_SITE_URL=https://yourdomain.com
VITE_SITE_NAME=Your Dietitian Name

# Contact Information
VITE_PHONE_NUMBER=+1234567890
VITE_EMAIL=contact@yourdomain.com
VITE_WHATSAPP_NUMBER=1234567890

# Social Media
VITE_FACEBOOK_URL=https://facebook.com/yourpage
VITE_INSTAGRAM_URL=https://instagram.com/yourhandle
VITE_LINKEDIN_URL=https://linkedin.com/in/yourprofile

# External Services
VITE_PEXELS_API_KEY=your_pexels_api_key
```

## Performance Optimizations

- **Code Splitting**: Automatic route-based code splitting
- **Bundle Optimization**: Vendor chunks separated for better caching
- **Image Optimization**: Responsive images with proper loading
- **CSS Optimization**: Purged unused styles in production
- **Compression**: Gzip compression enabled
- **Minification**: JavaScript and CSS minification

## SEO Features

- Meta tags for all pages
- Open Graph tags for social sharing
- Structured data (JSON-LD)
- XML sitemap
- Robots.txt configuration
- Canonical URLs

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support or questions, please contact [your-email@domain.com](mailto:your-email@domain.com).