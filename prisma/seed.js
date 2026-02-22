const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const prisma = new PrismaClient();

async function main() {
    console.log('Starting seed process...');

    const hashedPass1 = await bcrypt.hash('demo1', 10);
    const hashedPass2 = await bcrypt.hash('demo2', 10);
    const adminPass = await bcrypt.hash('admin', 10);

    // Create Admin User with ID 'admin'
    await prisma.student.upsert({
        where: { email: 'admin' },
        update: { password: adminPass },
        create: {
            name: 'University Admin',
            email: 'admin',
            password: adminPass,
            studentId: 'ADMIN',
            university: 'MIT-ADT University, Pune',
            class: 'Staff',
            credits: 0,
            points: 0,
            isVerified: true,
            role: 'admin',
        },
    });

    // Create Demo Student 1
    await prisma.student.upsert({
        where: { email: 'demo1@mitadt.edu.in' },
        update: { password: hashedPass1 },
        create: {
            name: 'Demo Student 1',
            email: 'demo1@mitadt.edu.in',
            password: hashedPass1,
            studentId: 'DEMO001',
            university: 'MIT-ADT University, Pune',
            class: 'CS-Demo',
            credits: 100,
            points: 500,
            isVerified: true,
            role: 'student',
        },
    });

    // Create Demo Student 2
    await prisma.student.upsert({
        where: { email: 'demo2@mitadt.edu.in' },
        update: { password: hashedPass2 },
        create: {
            name: 'Demo Student 2',
            email: 'demo2@mitadt.edu.in',
            password: hashedPass2,
            studentId: 'DEMO002',
            university: 'MIT-ADT University, Pune',
            class: 'CS-Demo',
            credits: 80,
            points: 300,
            isVerified: true,
            role: 'student',
        },
    });

    console.log('Seeded users including Admin (admin/admin).');

    // Seed Waste Data
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < 7; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);

        await prisma.wasteData.upsert({
            where: { date: date },
            update: {},
            create: {
                date: date,
                wasteKg: Math.random() * 50 + 10,
                mealsRescued: Math.floor(Math.random() * 100 + 50),
            },
        });
    }

    console.log('Seeding finished successfully.');
}

main()
    .catch((e) => {
        console.error('❌ Seeding failed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
