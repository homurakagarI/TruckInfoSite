# TruckPro Industries - Commercial Vehicle Platform

## Overview

TruckPro Industries is a modern full-stack web application for a commercial vehicle company that provides fleet management solutions, vehicle sales, and logistics services. The platform features a comprehensive marketing website with contact inquiry functionality, built using a modern React frontend and Express.js backend architecture.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The client-side application is built with React 18 and TypeScript, utilizing modern development practices:

- **UI Framework**: React with TypeScript for type safety and enhanced developer experience
- **Styling System**: Tailwind CSS with shadcn/ui component library for consistent, modern design
- **State Management**: TanStack Query (React Query) for server state management and API interactions
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation for robust form management
- **Animation**: Framer Motion for smooth page transitions and interactive elements
- **Build Tool**: Vite for fast development and optimized production builds

The frontend follows a component-based architecture with reusable UI components, organized in a clear directory structure with proper TypeScript path aliases for clean imports.

### Backend Architecture
The server-side application uses a Node.js/Express.js architecture with TypeScript:

- **Runtime**: Node.js with ES modules
- **Web Framework**: Express.js for RESTful API endpoints
- **Data Storage**: Currently uses in-memory storage with interface design for future database integration
- **Validation**: Zod schemas shared between frontend and backend for consistent data validation
- **Build System**: ESBuild for production bundling with TypeScript compilation

The backend implements a clean separation of concerns with dedicated modules for routing, storage abstraction, and server configuration.

### Database Design
The application uses Drizzle ORM with PostgreSQL schema definitions:

- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL with Neon serverless database integration
- **Schema Management**: Centralized schema definitions in shared directory
- **Migrations**: Drizzle Kit for database migrations and schema management

Key entities include users for authentication and contact inquiries for lead capture, with proper relationships and constraints defined.

### Development Environment
The application is configured for modern development workflows:

- **Development Server**: Vite dev server with hot module replacement
- **Type Checking**: TypeScript with strict configuration across the entire codebase  
- **Code Quality**: ESLint and Prettier for consistent code formatting
- **Testing**: Ready for testing framework integration with proper test environment setup

## External Dependencies

### Frontend Dependencies
- **UI Components**: Radix UI primitives for accessible, unstyled components
- **Animation**: Framer Motion for complex animations and transitions
- **Validation**: Zod for runtime type validation and form schemas
- **HTTP Client**: Native fetch API with TanStack Query for caching and synchronization
- **Styling**: Tailwind CSS with PostCSS for utility-first CSS framework

### Backend Dependencies
- **Database**: Neon Database serverless PostgreSQL for production database hosting
- **ORM**: Drizzle ORM for type-safe database operations and query building
- **Validation**: Zod schemas shared with frontend for consistent validation
- **Session Management**: Connect-pg-simple for PostgreSQL session storage (prepared for future authentication)

### Development Tools
- **Build Tools**: Vite for frontend building, ESBuild for backend bundling
- **Type System**: TypeScript with comprehensive type coverage across frontend and backend
- **Database Tools**: Drizzle Kit for schema migrations and database management
- **Development Experience**: Replit-specific tools for cloud development environment integration