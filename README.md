# EcoEats 🍃

EcoEats is a modern, eco-friendly web application designed for university communities to combat food waste. Students can track their waste, provide feedback on meals, redeem rewards, and transfer meal credits.

## 🚀 Quick Start

### 1. Prerequisites
- Node.js 18+
- PostgreSQL database (or change provider in `schema.prisma`)

### 2. Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd ecoeats

# Install dependencies
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory and add the following:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/ecoeats"
JWT_SECRET="your-secret-key"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### 4. Database Setup
```bash
# Generate Prisma Client
npx prisma generate

# Run migrations
npx prisma migrate dev --name init

# Seed the database with demo students
npx prisma db seed
```

### 5. Run the App
```bash
npm run dev
```

## 🛠️ Features
- **Modern Landing Page**: Built with Framer Motion and a sleek green theme.
- **Student Auth**: JWT-based login/signup with university email validation.
- **Dashboard**: Quick access to QR scanning, stats, and core features.
- **Waste Report**: Visualize food waste trends with Recharts.
- **Reward Store**: Convert points into vouchers and products.
- **Credit Transfer**: Secure student-to-student meal credit transfers.
- **Achievements**: Leaderboards and interactive badges.
- **Admin Panel**: Verify students and export waste analytics.

## 🛡️ Security
- Password hashing with Bcrypt.
- JWT Session management.
- Route protection with Next.js Middleware.
- Input validation with Zod.

## 🎨 Design
- **Primary Color**: `#22C55E` (Eco Green)
- **Typography**: Outfit (Headings), Inter (Body)
- **Components**: Rounded-2xl cards, glassmorphism, smooth animations.

## 📦 Deployment (Vercel)
1. Push your code to GitHub.
2. Connect your repo to Vercel.
3. Add environment variables.
4. Set the build command to `prisma generate && next build`.
5. Deploy!

Built with ❤️ for a Greener Future.
