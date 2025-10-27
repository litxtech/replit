# ReplitProject

A modern web application built with React, TypeScript, and Supabase.

## Features

- 🚀 **Modern Tech Stack**: React 18, TypeScript, Vite
- 🎨 **Beautiful UI**: Tailwind CSS with custom components
- 🔐 **Authentication**: Supabase Auth integration
- 📱 **Responsive Design**: Mobile-first approach
- 🛠️ **AI Builder**: AI-powered application builder
- 📊 **Admin Dashboard**: Complete admin interface
- 💼 **Investment Platform**: Investment and package management

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account (for backend services)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd replit-project
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp env.example .env.local
```

4. Configure your Supabase credentials in `.env.local`:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

5. Start the development server:
```bash
npm run dev
```

6. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── lib/           # Utility functions and configurations
├── hooks/         # Custom React hooks
├── contexts/      # React contexts
└── types/         # TypeScript type definitions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Technologies Used

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Backend**: Supabase
- **State Management**: React Query
- **Routing**: React Router DOM
- **Icons**: Lucide React

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
