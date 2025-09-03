# TruckInfoSite

A modern truck information website built with React, TypeScript, Express.js, and Tailwind CSS.

## Features

- 🚛 Modern truck showcase and fleet information
- 📱 Responsive design with beautiful UI components
- ⚡ Fast development with Vite and hot module replacement
- 🎨 Styled with Tailwind CSS and shadcn/ui components
- 🔧 Express.js backend with contact form handling
- 📧 Contact inquiries storage and management

## Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5000`

## Production Build

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Start production server:**
   ```bash
   npm start
   ```

## Deployment

### For Production Servers (Linux/Unix):
```bash
# Build the application
npm run build

# Start with production environment
NODE_ENV=production node dist/index.js
```

### For Windows Servers:
```bash
# Build the application
npm run build

# Start with production environment
npm run start
```

### Environment Variables

- `NODE_ENV`: Set to "production" for production deployment
- `PORT`: Server port (defaults to 5000)

### Deployment Platforms

This application can be deployed to:
- **Vercel**: Add `vercel.json` configuration
- **Railway**: Connect your GitHub repository
- **Heroku**: Add `Procfile` with `web: npm start`
- **DigitalOcean**: Use App Platform or Droplets
- **AWS**: Use Elastic Beanstalk or EC2

### Sample Procfile (for Heroku):
```
web: npm start
```

## Project Structure

```
├── client/              # React frontend
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── pages/       # Page components
│   │   └── lib/         # Utilities
├── server/              # Express.js backend
│   ├── index.ts         # Main server file
│   ├── routes.ts        # API routes
│   └── storage.ts       # Data storage
├── shared/              # Shared schemas and types
└── dist/                # Production build output
```

## Technologies Used

- **Frontend**: React, TypeScript, Vite, Tailwind CSS, Framer Motion
- **Backend**: Express.js, Node.js
- **UI Components**: shadcn/ui, Radix UI
- **Build Tools**: Vite, esbuild
- **Icons**: Lucide React

## Contact Form

The application includes a contact form that stores inquiries in memory. For production use, consider connecting to a database like PostgreSQL or MongoDB.

## License

MIT License
