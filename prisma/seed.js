const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash('Demo1234!', 12);

  const demoUser = await prisma.user.upsert({
    where: { email: 'demo@cloudvault.local' },
    update: {},
    create: {
      email: 'demo@cloudvault.local',
      passwordHash,
      fullName: 'Demo User',
      isVerified: true,
      authProvider: 'email',
      plan: 'free',
      storageQuota: BigInt(5368709120),
    },
  });

  console.log('Seeded demo user:', demoUser.email);
}

main()
  .catch((e) => {
    console.error('Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
