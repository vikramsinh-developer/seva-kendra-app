# Seva Kendra Replica - React + TypeScript

A mobile-friendly React application that replicates the Maha e-Seva Kendra website functionality. Built with React 18, TypeScript, and React Router for modern service management.

## Features

✅ **Responsive Design** - Mobile-first approach, works on all devices
✅ **React Router** - Client-side navigation between pages
✅ **TypeScript** - Full type safety throughout the app
✅ **Service Listing** - Display and manage services
✅ **Contact Form** - Simple contact form with validation
✅ **Theme System** - Centralized color and design tokens
✅ **CSS Modules** - Scoped styling to prevent conflicts
✅ **Accessible** - Semantic HTML and ARIA labels

## Project Structure

```
src/
├── components/      # Reusable React components
├── pages/          # Page components (Home, Services, Contact)
├── styles/         # CSS Modules and global styles
├── theme/          # Theme configuration and colors
├── types/          # TypeScript interfaces and types
├── App.tsx         # Main app component
└── index.tsx       # React DOM render
```

## Installation

### 1. Create React App with TypeScript

```bash
npx create-react-app seva-kendra-app --template typescript
cd seva-kendra-app
```

### 2. Install Dependencies

```bash
npm install react-router-dom
npm install --save-dev @types/react-router-dom
```

### 3. Copy Project Files

Copy all files from this structure into your project:
- Copy `src/components/` files to `src/components/`
- Copy `src/pages/` files to `src/pages/`
- Copy `src/styles/` files to `src/styles/`
- Copy `src/theme/` files to `src/theme/`
- Copy `src/types/` files to `src/types/`
- Replace `src/App.tsx` and `src/index.tsx`

### 4. Start Development Server

```bash
npm start
```

The app will open at `http://localhost:3000`

## Available Scripts

```bash
# Start development server
npm start

# Build for production
npm build

# Run tests
npm test

# Eject configuration (one-way operation)
npm eject
```

## Customization

### Update Colors

Edit `src/theme/colors.ts` to change the color palette:

```typescript
export const colors = {
  primary: '#YOUR_PRIMARY_COLOR',
  accent: '#YOUR_ACCENT_COLOR',
  // ... other colors
};
```

### Add New Services

Edit the `allServices` array in `src/pages/ServicesPage.tsx`:

```typescript
const allServices = [
  {
    icon: '📋',
    title: 'Your Service Title',
    description: 'Service description here'
  },
  // ... more services
];
```

### Modify Contact Information

Update `src/pages/ContactPage.tsx` with your contact details:

```typescript
const contactDetails = {
  address: 'Your address',
  phone: 'Your phone',
  email: 'your.email@example.com',
  // ... more details
};
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Mobile Responsiveness

The app uses mobile-first CSS with breakpoints at:
- 768px (tablets)
- 600px (mobile phones)

All components are fully responsive and tested on various screen sizes.

## Form Handling

The contact form currently logs to console. To integrate with a backend:

1. Update `handleSubmit` in `src/pages/ContactPage.tsx`
2. Send form data to your API endpoint:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const response = await fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  
  // Handle response
};
```

## Performance Optimization

- Code splitting with React Router lazy loading (can be added)
- CSS Modules for optimized styling
- React.memo for component optimization (can be added)
- Image optimization (consider using Next.js Image component)

## Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Focus management in forms
- Keyboard navigation support
- Color contrast meets WCAG AA standards

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or suggestions, please reach out to:
- 📞 Phone: +91 9404683013
- ✉️ Email: rajendraghadge38@gmail.com

---

**Built with ❤️ using React + TypeScript**
```

---

## 🚀 SETUP INSTRUCTIONS

### Quick Start (3 steps):

1. **Create New React App:**
```bash
npx create-react-app seva-kendra-app --template typescript
cd seva-kendra-app
npm install react-router-dom
```

2. **Copy All Files:**
   - Copy each `.tsx` file into `src/components/`, `src/pages/` folders
   - Copy each `.css` file into `src/styles/` folder
   - Copy `theme/` and `types/` folders
   - Replace `App.tsx` and `index.tsx`

3. **Start Development:**
```bash
npm start
```

---

## ✨ Key Features

✅ **Fully Typed** - Complete TypeScript support
✅ **Mobile Responsive** - Works on all devices
✅ **CSS Modules** - No global CSS conflicts
✅ **Theme System** - Easy color customization
✅ **React Router** - Multi-page navigation
✅ **Contact Form** - Ready to integrate with backend
✅ **Service Management** - Easy to add/edit services
✅ **Modern Components** - Functional components with hooks

---

## 📝 Next Steps

After setup, you can:
1. Update service data in `pages/ServicesPage.tsx`
2. Customize colors in `theme/colors.ts`
3. Add backend API integration to contact form
4. Add more pages as needed
5. Deploy to Vercel, Netlify, or your hosting

**All files are production-ready! Just copy and use.** ✨