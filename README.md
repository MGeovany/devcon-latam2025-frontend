# ABC Kids - English Learning Platform

A minimalist children's English learning platform with WorkOS authentication.

## Features

- 🎨 Minimalist black and white design
- 🔐 WorkOS authentication integration
- 📱 Responsive design
- 👶 Child-friendly interface
- 🎯 Clean and simple UI

## Setup

1. **Install dependencies:**

   ```bash
   pnpm install
   ```

2. **Set up environment variables:**
   Create a `.env.local` file with the following variables:

   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/database_name"

   # WorkOS Configuration
   WORKOS_API_KEY="sk_test_your_api_key_here"
   WORKOS_CLIENT_ID="client_your_client_id_here"
   WORKOS_COOKIE_PASSWORD="your-secure-password-here-please-change-this"
   NEXT_PUBLIC_WORKOS_CLIENT_ID="client_your_client_id_here"
   NEXT_PUBLIC_WORKOS_REDIRECT_URI="http://localhost:3000/callback"
   ```

3. **Set up the database:**

   ```bash
   pnpm db:push
   ```

4. **Run the development server:**
   ```bash
   pnpm dev
   ```

## WorkOS Configuration

1. Go to your [WorkOS Dashboard](https://dashboard.workos.com/)
2. Create a new SSO connection
3. Set the redirect URI to `http://localhost:3000/callback`
4. Copy your API key and Client ID to the environment variables

## Tech Stack

- [Next.js 15](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Prisma](https://www.prisma.io/) - Database ORM
- [WorkOS](https://workos.com/) - Authentication
- [Poppins Font](https://fonts.google.com/specimen/Poppins) - Typography

## Project Structure

```
src/
├── app/
│   ├── callback/          # WorkOS callback page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Login page
├── lib/
│   └── workos.ts          # WorkOS client
└── styles/
    └── globals.css        # Global styles
```
