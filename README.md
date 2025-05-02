# Startux X

Startux X is a modern business consulting and UX design platform that empowers businesses with innovative solutions. This project is built using Next.js, Tailwind CSS, and other modern tools to deliver a seamless and professional user experience.

## Features

- **Responsive Design**: Fully responsive and optimized for all devices.
- **Carousel Integration**: Smooth and customizable carousel for showcasing testimonials and partners.
- **SEO Optimized**: Metadata and Open Graph tags for better search engine visibility.
- **Dynamic Components**: Modular and reusable components for scalability.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.

## Project Structure

```
startux/
├── app/
│   ├── components/
│   │   ├── Blog.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Partners.tsx
│   │   ├── PostCard.tsx
│   │   ├── TestimonialCard.tsx
│   │   ├── Testimonies.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
├── components/
│   ├── ui/
│   │   ├── accordion.tsx
│   │   ├── button.tsx
│   │   ├── carousel.tsx
├── lib/
│   ├── utils.ts
├── public/
│   ├── images/
│   ├── icons/
├── utils/
│   ├── data.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/syntacticdev/startux.git
   ```

2. Navigate to the project directory:
   ```bash
   cd startux
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run start`: Start the production server.
- `npm run lint`: Run linting checks.

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **TypeScript**: Strongly typed programming language for better code quality.
- **Framer Motion**: Animation library for React.
- **Embla Carousel**: Lightweight carousel library for smooth transitions.

## Components

### Hero
The Hero component serves as the landing section, showcasing the brand's tagline and call-to-action.

### Partners
Displays a carousel of partner logos with smooth transitions.

### Testimonies
Showcases client testimonials in a visually appealing carousel.

### Blog
Lists recent blog posts with a clean and modern design.

## SEO Metadata
The project includes optimized metadata for better search engine ranking and social media sharing.

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

